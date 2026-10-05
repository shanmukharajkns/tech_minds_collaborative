import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, GitCommit, CheckCircle2, Gauge, Code2, Rocket } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

/* ---------- Animated Chart ---------- */
const AnimatedLineChart: React.FC<{ color: string; data: number[] }> = ({ color, data }) => {
    const maxVal = Math.max(...data)
    const points = data.map((v, i) => {
        const x = (i / (data.length - 1)) * 100
        const y = 100 - (v / maxVal) * 80 - 10
        return `${x},${y}`
    }).join(' ')

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            {/* Grid lines */}
            {[20, 40, 60, 80].map(y => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            ))}
            {/* Area fill */}
            <polygon
                points={`0,100 ${points} 100,100`}
                fill={`url(#gradient-${color})`}
                opacity="0.15"
            />
            {/* Line */}
            <polyline
                points={points}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Dots */}
            {data.map((v, i) => {
                const x = (i / (data.length - 1)) * 100
                const y = 100 - (v / maxVal) * 80 - 10
                return <circle key={i} cx={x} cy={y} r="1.5" fill={color} opacity="0.8" />
            })}
            <defs>
                <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

/* ---------- Commit Activity ---------- */
const CommitActivity: React.FC = () => {
    const weeks = 12
    const days = 7
    const data = Array.from({ length: weeks * days }, () => Math.random())
    return (
        <div className="grid grid-cols-12 gap-[2px]">
            {Array.from({ length: weeks }).map((_, w) => (
                <div key={w} className="flex flex-col gap-[2px]">
                    {Array.from({ length: days }).map((_, d) => {
                        const val = data[w * days + d]
                        const opacity = val < 0.2 ? 0.05 : val < 0.5 ? 0.15 : val < 0.8 ? 0.3 : 0.5
                        return (
                            <div
                                key={d}
                                className="w-full aspect-square rounded-[2px]"
                                style={{ backgroundColor: `rgba(6, 182, 212, ${opacity})` }}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

/* ---------- Animated Counter ---------- */
const AnimCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '%' }) => {
    const [val, setVal] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0
                    const step = target / 60
                    const animate = () => {
                        start += step
                        if (start >= target) {
                            setVal(target)
                        } else {
                            setVal(Math.round(start))
                            requestAnimationFrame(animate)
                        }
                    }
                    animate()
                    observer.disconnect()
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return <span ref={ref}>{val}{suffix}</span>
}

const TelemetrySection: React.FC = () => {
    return (
        <SectionWrapper id="telemetry">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-cyan-500/3 rounded-full blur-[140px]" />
            </div>

            <motion.div
                className="text-center mb-16 mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="text-white">ENGINEERING,</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">MEASURED IN MOTION.</span>
                </h2>
                <div className="w-full text-center mt-6">
                    <p className="mt-12 text-slate-400 text-base mx-auto leading-relaxed">
                        Traditional resumes describe what engineers claim to know. Engineering telemetry helps reveal how they actually build.
                    </p>
                </div>
            </motion.div>

            {/* Dashboard */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="rounded-2xl border border-white/5 bg-[#0c1018]/90 backdrop-blur overflow-hidden">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                            </div>
                            <span className="text-xs text-slate-600 tracking-wider font-mono">TMC_ENGINEERING_TELEMETRY</span>
                        </div>
                        <div className="text-[10px] text-slate-600 tracking-wider">CONCEPTUAL DASHBOARD</div>
                    </div>

                    <div className="p-6 lg:p-8">
                        {/* Top metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {[
                                { label: 'Code Quality', value: 94, icon: Code2, color: '#06b6d4', trend: '+2.1%' },
                                { label: 'Test Coverage', value: 91, icon: CheckCircle2, color: '#3b82f6', trend: '+1.8%' },
                                { label: 'Delivery Velocity', value: 88, icon: Rocket, color: '#8b5cf6', trend: '+3.2%' },
                            ].map((metric) => {
                                const Icon = metric.icon
                                return (
                                    <div key={metric.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <Icon size={14} style={{ color: metric.color }} />
                                                <span className="text-xs text-slate-500 tracking-wider uppercase">{metric.label}</span>
                                            </div>
                                            <span className="text-[10px] text-emerald-500 font-mono">{metric.trend}</span>
                                        </div>
                                        <div className="text-3xl font-bold" style={{ color: metric.color }}>
                                            <AnimCounter target={metric.value} />
                                        </div>
                                        {/* Mini progress bar */}
                                        <div className="mt-3 h-1 rounded-full bg-white/5">
                                            <motion.div
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: metric.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${metric.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                            />
                                        </div>
                                        <p className="mt-1 text-[9px] text-slate-600 italic">Illustrative metric</p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Charts row */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                            <div className="lg:col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Activity size={14} className="text-cyan-400" />
                                        <span className="text-xs text-slate-500 tracking-wider uppercase">Performance Trend</span>
                                    </div>
                                    <div className="flex gap-3 text-[10px] text-slate-600">
                                        <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-cyan-400 rounded" /> Quality</span>
                                        <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-blue-400 rounded" /> Coverage</span>
                                        <span className="flex items-center gap-1"><span className="w-2 h-0.5 bg-violet-400 rounded" /> Velocity</span>
                                    </div>
                                </div>
                                <div className="h-40">
                                    <AnimatedLineChart
                                        color="#06b6d4"
                                        data={[65, 68, 72, 70, 78, 82, 80, 85, 88, 92, 90, 94]}
                                    />
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <GitCommit size={14} className="text-cyan-400" />
                                    <span className="text-xs text-slate-500 tracking-wider uppercase">Activity</span>
                                </div>
                                <CommitActivity />
                                <p className="mt-3 text-[9px] text-slate-600 italic text-center">Illustrative activity visualization</p>
                            </div>
                        </div>

                        {/* Build pipeline */}
                        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                            <div className="flex items-center gap-2 mb-4">
                                <Gauge size={14} className="text-emerald-400" />
                                <span className="text-xs text-slate-500 tracking-wider uppercase">Build Pipeline</span>
                                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">PASSING</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Lint', 'Unit Tests', 'Integration', 'Build', 'Security Scan', 'Deploy'].map((stage, i) => (
                                    <motion.div
                                        key={stage}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * i }}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-emerald-500/10"
                                    >
                                        <CheckCircle2 size={12} className="text-emerald-400" />
                                        <span className="text-xs text-slate-400">{stage}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    )
}

export default TelemetrySection
