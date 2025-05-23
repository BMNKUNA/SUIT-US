"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useTheme } from "next-themes"

export default function Home() {
  const [isHovering, setIsHovering] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()

  // Set window size on mount
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track mouse position for dynamic glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect()
        const titleCenterX = rect.left + rect.width / 2
        const titleCenterY = rect.top + rect.height / 2

        setMousePosition({
          x: e.clientX - titleCenterX,
          y: e.clientY - titleCenterY,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation for background particles with water ripple effect
  useEffect(() => {
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return;

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      interactive: boolean
      rippleEffect: number
    }[] = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3, // Slower movement
        speedY: (Math.random() - 0.5) * 0.3, // Slower movement
        opacity: Math.random() * 0.5 + 0.1,
        interactive: false,
        rippleEffect: 0,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get current theme
      const isDarkTheme = document.documentElement.classList.contains("dark")
      const particleColor = isDarkTheme ? "rgba(255, 255, 255," : "rgba(0, 0, 0,"

      particles.forEach((particle) => {
        // Draw particle with ripple effect
        ctx.fillStyle = `${particleColor} ${particle.interactive ? particle.opacity * 2 : particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size + particle.rippleEffect, 0, Math.PI * 2)
        ctx.fill()

        if (particle.rippleEffect > 0) {
          // Draw ripple
          ctx.strokeStyle = `${particleColor} ${Math.max(0, 0.5 - particle.rippleEffect / 10)})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size + particle.rippleEffect * 2, 0, Math.PI * 2)
          ctx.stroke()

          // Fade out ripple
          particle.rippleEffect -= 0.05
        }

        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle mouse/touch interaction with water ripple effect
    function handleInteraction(e: MouseEvent | TouchEvent) {
      let x, y

      if ("touches" in e) {
        // Touch event
        const touch = e.touches[0]
        x = touch.clientX
        y = touch.clientY
      } else {
        // Mouse event
        x = e.clientX
        y = e.clientY
      }

      // Find particles near the pointer
      particles.forEach((particle) => {
        const dx = particle.x - x
        const dy = particle.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // If pointer is close to particle, create ripple effect
        if (distance < 80) {
          particle.interactive = true
          particle.rippleEffect = 5 // Start ripple effect

          // Add some movement away from pointer (like water displacement)
          const angle = Math.atan2(dy, dx)
          const force = (80 - distance) / 80 // Stronger force when closer
          particle.speedX = Math.cos(angle) * force * 0.8
          particle.speedY = Math.sin(angle) * force * 0.8
        } else {
          particle.interactive = false
          // Gradually return to normal speed
          particle.speedX *= 0.98
          particle.speedY *= 0.98
        }
      })
    }

    // Add event listeners for both mouse and touch
    canvas.addEventListener("mousemove", handleInteraction)
    canvas.addEventListener("touchmove", handleInteraction)
    canvas.addEventListener("touchstart", handleInteraction)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Listen for theme changes to update particle colors
    window.addEventListener("theme-change", () => {
      // No need to do anything specific here as the animate function
      // checks the theme on each frame
    })

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleInteraction)
      canvas.removeEventListener("touchmove", handleInteraction)
      canvas.removeEventListener("touchstart", handleInteraction)
    }
  }, [])

  // Calculate dynamic glow position based on mouse movement
  const glowStyle = {
    "--glow-x": `${50 + mousePosition.x / (windowSize.width / 10)}%`,
    "--glow-y": `${50 + mousePosition.y / (windowSize.height / 10)}%`,
    "--glow-opacity": isHovering ? "1" : "0.3",
  } as React.CSSProperties

  return (
    <main className="min-h-screen theme-invert">
      {/* Hero Section with CSS Effects */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Animated background canvas */}
        <canvas id="hero-canvas" className="absolute inset-0 z-0"></canvas>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-current opacity-70"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div
            className="relative transition-all duration-700 ease-in-out"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl font-bold tracking-tighter mb-2 relative luxury-text-glow"
              style={glowStyle}
            >
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-700 ${isHovering ? "transform -translate-y-2" : ""}`}
                >
                  S
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-700 delay-75 ${isHovering ? "transform -translate-y-2" : ""}`}
                >
                  U
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-700 delay-100 ${isHovering ? "transform -translate-y-2" : ""}`}
                >
                  I
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-700 delay-150 ${isHovering ? "transform -translate-y-2" : ""}`}
                >
                  T
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-700 delay-200 ${isHovering ? "transform -translate-y-2" : ""}`}
                >
                  &nbsp;
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-700 delay-250 ${isHovering ? "transform -translate-y-2" : ""}`}
                >
                  U
                </span>
              </span>
              <span className="inline-block overflow-hidden">
                <span
                  className={`inline-block transition-transform duration-700 delay-300 ${isHovering ? "transform -translate-y-2" : ""}`}
                >
                  S
                </span>
              </span>

              {/* Animated underline - much slower */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-3000 ease-in-out ${isHovering ? "w-full" : "w-0"}`}
              ></span>
            </h1>

            {/* Since 2012 text */}
            <p className="text-xs text-center opacity-40 mb-8">Since 2012</p>
          </div>

          <p className="text-xl md:text-2xl mb-12 tracking-wide text-center">
            LUXE READY TO WEAR TO TAILORED PERFECTIONS
          </p>

          <div className="flex flex-col md:flex-row gap-8 w-full max-w-md md:max-w-2xl justify-center">
            <Link href="/mens" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="w-full text-lg py-8 border-2 hover:border-current hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                MEN'S COLLECTION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/womens" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="w-full text-lg py-8 border-2 hover:border-current hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                WOMEN'S COLLECTION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
