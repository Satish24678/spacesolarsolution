"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, PresentationControls } from "@react-three/drei"

function SolarPanel(props: any) {
  // Using a placeholder model - in a real implementation, you would use a proper solar panel model
  // const { scene } = useGLTF("/assets/3d/duck.glb")

  // return <primitive object={scene} scale={2} {...props} />
}

export default function SolarModel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration issues with Three.js
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Solar Technology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our solar panel technology in 3D. Rotate and zoom to see the details of our high-efficiency panels.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="h-[400px] md:h-[500px]">
            {isMounted && (
              <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <PresentationControls
                  global
                  zoom={0.8}
                  rotation={[0, -Math.PI / 4, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                  {/* <SolarPanel position={[0, -1, 0]} /> */}
                </PresentationControls>
                <Environment preset="sunset" />
                <OrbitControls enableZoom={true} />
              </Canvas>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">Click and drag to rotate. Scroll to zoom in and out.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
