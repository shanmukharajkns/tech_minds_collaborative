import React from 'react'
import { motion } from 'framer-motion'
import { Search, Stethoscope, Rocket, BarChart3, ShieldCheck, Send } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const stages = [
    {
        icon: Search,
        label: 'DISCOVER',
        description: 'Identify high-potential engineering talent.',
        color: 'from-cyan-400 to-cyan-500',
        glow: 'cyan',
    },
    {
        icon: Stethoscope,
        label: 'DIAGNOSE',
        description: 'Evaluate problem solving, architectural reasoning and professional articulation.',
        color: 'from-blue-400 to-blue-500',
        glow: 'blue',
    },
    {
        icon: Rocket,
        label: 'ACCELERATE',
        description: 'Expose engineers to production-oriented engineering environments.',
        color: 'from-indigo-400 to-indigo-500',
        glow: 'indigo',
    },
    {
        icon: BarChart3,
        label: 'MEASURE',
        description: 'Track engineering performance through development activity.',
        color: 'from-violet-400 to-violet-500',
        glow: 'violet',
    },
    {
        icon: ShieldCheck,
        label: 'VALIDATE',
        description: 'Build a verified engineering profile.',
        color: 'from-purple-400 to-purple-500',
        glow: 'purple',
    },
    {
        icon: Send,
        label: 'DEPLOY',
        description: 'Connect enterprise organizations with pre-assessed engineering talent.',
        color: 'from-cyan-400 to-blue-400',
        glow: 'cyan',
    },
]

const PlatformSection: React.FC = () => {
    return (
        <SectionWrapper id="platform">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/3 rounded-full blur-[140px]" />
            </div>

            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
                    <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">Talent Intelligence Platform</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="text-white">ENGINEERING INTELLIGENCE,</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">NOT JUST RESUMES.</span>
                </h2>
                <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    TMC combines proprietary diagnostic assessment with continuous engineering performance telemetry to create a measurable view of engineering capability.
                </p>
            </motion.div>

            {/* Pipeline flow */}
            <div className="relative">
                {/* Connection line (desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-3">
                    {stages.map((stage, i) => {
                        const Icon = stage.icon
                        return (
                            <motion.div
                                key={stage.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative h-full rounded-xl border border-white/5 bg-[#0f1419]/80 backdrop-blur p-6 hover:border-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
                                    {/* Step number */}
                                    <div className="text-[10px] text-slate-600 font-mono tracking-widest mb-4">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stage.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                                        <Icon size={18} className="text-white" />
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-sm font-bold text-white tracking-wider mb-2">{stage.label}</h3>

                                    {/* Description */}
                                    <p className="text-xs text-slate-500 leading-relaxed">{stage.description}</p>

                                    {/* Arrow indicator for flow */}
                                    {i < stages.length - 1 && (
                                        <div className="hidden xl:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                            <div className="w-6 h-6 rounded-full bg-[#0f1419] border border-white/10 flex items-center justify-center">
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                                    <path d="M1 4H7M7 4L4 1M7 4L4 7" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default PlatformSection
