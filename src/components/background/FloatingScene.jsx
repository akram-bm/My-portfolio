import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Preload } from '@react-three/drei'
import { FloatingPLC } from './FloatingPLC'
import { useGLTF } from '@react-three/drei'
import './FloatingScene.css'

// Model path - using public folder for Vite
const MODEL_PATH = '/PLC/simatic_s7-1200_cpu2/scene.gltf'

// Model positions for the 4 instances (spread across the scene)
const MODEL_POSITIONS = [
  { x: -10, y: 5, z: -12 },   // Top Left
  { x: 10, y: 3, z: -14 },    // Top Right
  { x: -8, y: -5, z: -10 },   // Bottom Left
  { x: 8, y: -6, z: -13 },    // Bottom Right
]

// Responsive scale values - significantly increased (2-3x larger)
// Model is ~0.08 units, so scale 8-10 makes it ~0.64-0.8 units
const SCALE_VALUES = {
  desktop: 8.0,
  tablet: 6.0,
  mobile: 4.0, // Show 2 models on mobile with reduced scale
}

// Get responsive scale based on screen width
function getResponsiveScale() {
  if (typeof window === 'undefined') return SCALE_VALUES.desktop
  const width = window.innerWidth
  if (width < 768) return SCALE_VALUES.mobile
  if (width < 1024) return SCALE_VALUES.tablet
  return SCALE_VALUES.desktop
}

// Get number of models to render based on screen width
function getModelCount() {
  if (typeof window === 'undefined') return 4
  const width = window.innerWidth
  if (width < 768) return 2 // Only 2 models on mobile
  return 4
}

// Get scroll progress (0 to 1)
function getScrollProgress() {
  if (typeof window === 'undefined') return 0
  const scrollY = window.scrollY
  const maxScroll = document.body.scrollHeight - window.innerHeight
  return Math.min(Math.max(scrollY / maxScroll, 0), 1)
}

// Smooth value lerp helper
function lerp(start, end, factor) {
  return start + (end - start) * factor
}

function SceneContent() {
  const { scene } = useGLTF(MODEL_PATH)
  const [scale, setScale] = useState(getResponsiveScale())
  const [modelCount, setModelCount] = useState(getModelCount())
  const [scrollProgress, setScrollProgress] = useState(getScrollProgress())
  const scrollProgressRef = useRef(0)

  // Handle responsive and scroll changes
  useEffect(() => {
    const handleResize = () => {
      setScale(getResponsiveScale())
      setModelCount(getModelCount())
    }
    
    const handleScroll = () => {
      setScrollProgress(getScrollProgress())
    }
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Smooth scroll progress with lerp
  useFrame(() => {
    scrollProgressRef.current = lerp(scrollProgressRef.current, scrollProgress, 0.05)
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <hemisphereLight 
        position={[0, 50, 0]} 
        intensity={0.4} 
        color="#ffffff"
        groundColor="#6366f1"
      />

      {/* Environment for realistic reflections */}
      <Environment preset="studio" background={false} />

      {/* Render instances of the PLC model with scroll-based parallax */}
      {MODEL_POSITIONS.slice(0, modelCount).map((pos, index) => (
        <FloatingPLC
          key={index}
          index={index}
          originalScene={scene}
          position={[pos.x, pos.y, pos.z]}
          scale={scale}
          scrollProgress={scrollProgressRef.current}
        />
      ))}

      {/* Preload all assets */}
      <Preload all />
    </>
  )
}

export default function FloatingScene() {
  return (
    <div className="floating-scene">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 45 }}
        gl={{ 
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}