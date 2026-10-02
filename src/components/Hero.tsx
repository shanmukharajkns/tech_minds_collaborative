import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

/* ---------- animated network visualization ---------- */
interface Node {
    x: number; y: number; label: string; value?: string; radius: number; color: string
}

const NetworkVisualization: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let frame: number
        let t = 0

        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            const rect = canvas.getBoundingClientRect()
            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            ctx.scale(dpr, dpr)
        }
        resize()
        window.addEventListener('resize', resize)

        const draw = () => {
            const w = canvas.getBoundingClientRect().width
            const h = canvas.getBoundingClientRect().height
            ctx.clearRect(0, 0, w, h)
            t += 0.005

            // Draw grid
            ctx.strokeStyle = 'rgba(14, 165, 233, 0.04)'
            ctx.lineWidth = 1
            for (let x = 0; x < w; x += 40) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
            }
            for (let y = 0; y < h; y += 40) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
            }

            // Nodes
            const nodes: Node[] = [
                { x: w * 0.5, y: h * 0.08, label: 'TALENT SIGNALS', radius: 5, color: '#06b6d4' },
                { x: w * 0.5, y: h * 0.25, label: 'ENGINEERING DIAGNOSTICS', radius: 5, color: '#0ea5e9' },
                { x: w * 0.5, y: h * 0.42, label: 'PRODUCTION IMMERSION', radius: 6, color: '#3b82f6' },
                { x: w * 0.5, y: h * 0.59, label: 'PERFORMANCE TELEMETRY', radius: 5, color: '#8b5cf6' },
                { x: w * 0.5, y: h * 0.76, label: 'ENTERPRISE READINESS', radius: 7, color: '#06b6d4' },
            ]

            // Draw connections
            for (let i = 0; i < nodes.length - 1; i++) {
                const from = nodes[i]
                const to = nodes[i + 1]
                ctx.beginPath()
                ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 + 0.1 * Math.sin(t * 2 + i)})`
                ctx.lineWidth = 1.5
                ctx.moveTo(from.x, from.y)
                ctx.lineTo(to.x, to.y)
                ctx.stroke()

                // Animated particle
                const progress = (Math.sin(t * 1.5 + i * 1.2) + 1) / 2
                const px = from.x + (to.x - from.x) * progress
                const py = from.y + (to.y - from.y) * progress
                ctx.beginPath()
                ctx.arc(px, py, 2, 0, Math.PI * 2)
                ctx.fillStyle = '#06b6d4'
                ctx.fill()
            }

            // Draw nodes
            nodes.forEach((node, i) => {
                const pulse = Math.sin(t * 2 + i) * 2
                // Glow
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius + 12 + pulse, 0, Math.PI * 2)
                const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius + 12 + pulse)
                grad.addColorStop(0, `${node.color}33`)
                grad.addColorStop(1, 'transparent')
                ctx.fillStyle = grad
                ctx.fill()

                // Core
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
                ctx.fillStyle = node.color
                ctx.fill()

                // Label
                ctx.font = '10px Inter, sans-serif'
                ctx.fillStyle = 'rgba(148, 163, 184, 0.8)'
                ctx.textAlign = 'left'
                ctx.fillText(node.label, node.x + 18, node.y + 4)
            })

            // Floating metrics (right side)
            const metrics = [
                { label: 'CODE QUALITY', value: '94%', y: h * 0.2 },
                { label: 'TEST COVERAGE', value: '91%', y: h * 0.45 },
                { label: 'DELIVERY VELOCITY', value: '88%', y: h * 0.65 },
                { label: 'ARCHITECTURE', value: '92%', y: h * 0.85 },
            ]

            metrics.forEach((m, i) => {
                const mx = w * 0.82
                const alpha = 0.5 + 0.3 * Math.sin(t * 1.5 + i * 0.8)
                ctx.font = '600 16px Inter, sans-serif'
                ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`
                ctx.textAlign = 'right'
                ctx.fillText(m.value, mx + 40, m.y)
                ctx.font = '9px Inter, sans-serif'
                ctx.fillStyle = `rgba(100, 116, 139, ${alpha})`
                ctx.fillText(m.label, mx + 40, m.y - 14)
            })

            frame = requestAnimationFrame(draw)
        }
        draw()

        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="w-full h-full" style={{ display: 'block' }} />
}

/* ---------- Hero Component ---------- */
const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
            {/* Background gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14] via-[#0c1220] to-[#0a0d14]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">
                                Advanced Engineering Accelerator
                            </span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]">
                            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                                ENGINEERING TALENT,
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                                BUILT FOR ENTERPRISE.
                            </span>
                        </h1>

                        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                            TMC identifies, accelerates and validates high-potential engineering talent through production-oriented engineering environments and measurable engineering intelligence.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#platform"
                                onClick={(e) => { e.preventDefault(); document.querySelector('#platform')?.scrollIntoView({ behavior: 'smooth' }) }}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
                            >
                                EXPLORE THE PLATFORM
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-300 border border-slate-700 rounded-xl hover:border-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                            >
                                PARTNER WITH TMC
                                <ChevronRight size={16} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full h-[520px] rounded-2xl border border-white/5 bg-[#0c1018]/80 backdrop-blur overflow-hidden">
                            <div className="absolute top-4 left-4 flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            </div>
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-md bg-white/5 text-[10px] text-slate-500 tracking-wider">
                                ENGINEERING INTELLIGENCE
                            </div>
                            <div className="mt-10 w-full h-[calc(100%-40px)]">
                                <NetworkVisualization />
                            </div>
                        </div>
                        {/* Note */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[9px] text-slate-600 tracking-wider">
                            ILLUSTRATIVE VISUALIZATION
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0d14] to-transparent" />
        </section>
    )
}

export default Hero
