import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, ArrowRight, Eye, BarChart3, Target, Zap, Code2, Activity, MessageSquare, Layers } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const EnterpriseSection: React.FC = () => {
    return (
        <SectionWrapper id="enterprise">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[400px] bg-blue-500/3 rounded-full blur-[140px]" />
            </div>

            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="text-white">BUILT FOR</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ENTERPRISE ENGINEERING.</span>
                </h2>
                <div className="w-full text-center">
                    <p className="mt-6 text-slate-400 text-base mx-auto leading-relaxed">
                        TMC delivers pre-assessed engineering talent to Global Capability Centers and technology organizations, backed by technical diagnostics and benchmarked communication skills.
                    </p>
                </div>
            </motion.div>

            {/* Enterprise architecture visualization */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-20"
            >
                <div className="flex flex-col items-center gap-3">
                    {[
                        { label: 'TMC', sub: 'Talent Intelligence Platform', color: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400' },
                        { label: 'Engineering Intelligence', sub: 'Diagnostics & Telemetry', color: 'border-blue-500/20 bg-blue-500/5 text-blue-400' },
                        { label: 'Verified Engineering Capability', sub: 'Performance Validated', color: 'border-violet-500/20 bg-violet-500/5 text-violet-400' },
                        { label: 'Enterprise Organizations', sub: 'GCCs & Technology Companies', color: 'border-indigo-500/20 bg-indigo-500/5 text-indigo-400' },
                        { label: 'Engineering Delivery', sub: 'Day-One Productivity', color: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400' },
                    ].map((node, i) => (
                        <React.Fragment key={node.label}>
                            <div className={`w-full max-w-md rounded-xl border ${node.color} backdrop-blur px-6 py-4 text-center`}>
                                <div className="text-sm font-bold tracking-wider">{node.label}</div>
                                <div className="text-xs text-slate-500 mt-1">{node.sub}</div>
                            </div>
                            {i < 4 && (
                                <div className="flex flex-col items-center gap-0.5">
                                    <div className="w-px h-4 bg-gradient-to-b from-cyan-500/20 to-transparent" />
                                    <svg width="12" height="8" viewBox="0 0 12 8"><path d="M6 8L0 0h12L6 8z" fill="rgba(6,182,212,0.3)" /></svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>

            {/* Two columns */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* For Enterprises */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-transparent p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                                <Building2 size={18} className="text-cyan-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white tracking-wide">FOR ENTERPRISES</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { icon: Eye, text: 'Pre-assessed engineering talent' },
                                { icon: BarChart3, text: 'Engineering capability visibility' },
                                { icon: Target, text: 'Domain-specific readiness' },
                                { icon: Zap, text: 'Reduced distance between talent identification and productivity' },
                            ].map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <div key={i} className="flex items-start gap-3 py-2">
                                        <div className="mt-0.5 w-6 h-6 rounded-md bg-cyan-500/10 flex items-center justify-center shrink-0">
                                            <Icon size={12} className="text-cyan-400" />
                                        </div>
                                        <span className="text-sm text-slate-300">{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* For Engineering Talent */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="rounded-2xl border border-violet-500/10 bg-gradient-to-br from-violet-500/5 to-transparent p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                                <Users size={18} className="text-violet-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white tracking-wide">FOR ENGINEERING TALENT</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { icon: Code2, text: 'Real-world engineering environments' },
                                { icon: Layers, text: 'Production-oriented development' },
                                { icon: Activity, text: 'Continuous performance feedback' },
                                { icon: MessageSquare, text: 'Exposure to modern enterprise engineering practices' },
                            ].map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <div key={i} className="flex items-start gap-3 py-2">
                                        <div className="mt-0.5 w-6 h-6 rounded-md bg-violet-500/10 flex items-center justify-center shrink-0">
                                            <Icon size={12} className="text-violet-400" />
                                        </div>
                                        <span className="text-sm text-slate-300">{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}

export default EnterpriseSection
