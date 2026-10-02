import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Clock, Gauge, Zap } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const traditionalSteps = [
    { label: 'Academic Knowledge', icon: '📚' },
    { label: 'Hiring', icon: '📋' },
    { label: 'Onboarding', icon: '🔄' },
    { label: 'Corporate Training', icon: '📖' },
    { label: 'Bench', icon: '⏳' },
    { label: 'Project Readiness', icon: '🎯' },
]

const tmcSteps = [
    { label: 'Engineering Potential', color: 'from-cyan-500 to-cyan-400' },
    { label: 'Diagnostic Intelligence', color: 'from-cyan-400 to-blue-500' },
    { label: 'Production Immersion', color: 'from-blue-500 to-blue-400' },
    { label: 'Performance Telemetry', color: 'from-blue-400 to-violet-500' },
    { label: 'Verified Engineering Profile', color: 'from-violet-500 to-violet-400' },
    { label: 'Enterprise Readiness', color: 'from-violet-400 to-cyan-400' },
]

const ProblemSection: React.FC = () => {
    return (
        <SectionWrapper id="problem">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/3 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-[120px]" />
            </div>

            {/* Heading */}
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="text-white">THE GAP ISN'T TALENT.</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">IT'S READINESS.</span>
                </h2>
                <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    Engineering graduates often leave academia with foundational knowledge, while enterprise software environments demand production engineering practices, architectural thinking, delivery discipline and the ability to contribute from day one.
                </p>
            </motion.div>

            {/* Comparison */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Traditional Path */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="rounded-2xl border border-white/5 bg-[#0f1419]/60 backdrop-blur p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                                <Clock size={18} className="text-slate-500" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Traditional Path</h3>
                                <p className="text-xs text-slate-600">Extended time to productivity</p>
                            </div>
                        </div>
                        <div className="space-y-1">
                            {traditionalSteps.map((step, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/[0.02] border border-white/5">
                                        <span className="text-lg">{step.icon}</span>
                                        <span className="text-sm text-slate-400">{step.label}</span>
                                    </div>
                                    {i < traditionalSteps.length - 1 && (
                                        <div className="flex justify-center py-1">
                                            <ArrowDown size={14} className="text-slate-700" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* TMC Approach */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                >
                    <div className="rounded-2xl border border-cyan-500/10 bg-gradient-to-b from-cyan-500/5 to-transparent backdrop-blur p-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                                <Zap size={18} className="text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">TMC Approach</h3>
                                <p className="text-xs text-slate-500">Accelerated engineering readiness</p>
                            </div>
                        </div>
                        <div className="space-y-1">
                            {tmcSteps.map((step, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/[0.03] border border-cyan-500/10 group hover:border-cyan-500/20 transition-colors">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{step.label}</span>
                                        <ArrowRight size={12} className="ml-auto text-cyan-500/40" />
                                    </div>
                                    {i < tmcSteps.length - 1 && (
                                        <div className="flex justify-center py-1">
                                            <ArrowDown size={14} className="text-cyan-500/30" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Glow */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl" />
                </motion.div>
            </div>
        </SectionWrapper>
    )
}

export default ProblemSection
