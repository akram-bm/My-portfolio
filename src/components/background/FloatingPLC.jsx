import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

// Model path - using public folder for Vite
const MODEL_PATH = '/PLC/simatic_s7-1200_cpu2/scene.gltf'

// Animation parameters for each model (different speeds/phases)
// Premium smooth animation with unique characteristics per model
const ANIMATION_PARAMS = [
  { ySpeed: 0.25, xSpeed: 0.12, floatSpeed: 0.4, floatHeight: 0.5, phase: 0, parallaxIntensity: 0.35 },
  { ySpeed: 0.22, xSpeed: 0.1, floatSpeed: 0.35, floatHeight: 0.4, phase: 1.5, parallaxIntensity: 0.25 },
  { ySpeed: 0.28, xSpeed: 0.14, floatSpeed: 0.45, floatHeight: 0.45, phase: 2.8, parallaxIntensity: 0.45 },
  { ySpeed: 0.2, xSpeed: 0.11, floatSpeed: 0.38, floatHeight: 0.35, phase: 4.2, parallaxIntensity: 0.3 },
]

export function FloatingPLC({ index, originalScene, scrollProgress, ...props }) {
  const meshRef = useRef()
  
  // Get animation parameters for this instance
  const animParams = ANIMATION_PARAMS[index] || ANIMATION_PARAMS[0]
  
  // Clone the original scene for this instance (reuses geometry/materials)
  const clonedScene = useMemo(() => {
    if (!originalScene) return null
    const clone = originalScene.clone(true)
    // Ensure materials are cloned to avoid shared state issues
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
    return clone
  }, [originalScene])

  // Animation using useFrame
  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.getElapsedTime()
    
    // Continuous Y rotation (smooth and constant)
    meshRef.current.rotation.y += animParams.ySpeed * 0.008
    
    // Continuous X rotation (subtle)
    meshRef.current.rotation.x += animParams.xSpeed * 0.004
    
    // Smooth floating up and down
    const floatY = Math.sin(time * animParams.floatSpeed + animParams.phase) * animParams.floatHeight
    
    // Parallax movement based on scroll - smooth vertical drift
    const parallaxY = scrollProgress * animParams.parallaxIntensity * 4 - animParams.parallaxIntensity * 2
    
    // Apply positions
    meshRef.current.position.y = props.position[1] + floatY + parallaxY
    meshRef.current.position.x = props.position[0]
    meshRef.current.position.z = props.position[2]
  })

  if (!clonedScene) return null

  return (
    <group 
      ref={meshRef} 
      position={props.position} 
      scale={props.scale || 1}
    >
      <primitive object={clonedScene} />
    </group>
  )
}

// Preload the model
useGLTF.preload(MODEL_PATH)