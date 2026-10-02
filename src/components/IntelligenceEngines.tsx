import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Activity, Code2, TestTube, Gauge, MessageSquare } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const IntelligenceEngines: React.FC = () => {
    return (
        <SectionWrapper id="engines">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/3 rounded-full blur-[140px]" />
            </div>

            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                    THE TMC INTELLIGENCE ENGINE
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Engine 01 */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group"
                >
                    <div className="relative h-full rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-[#0f1419] to-[#0c1220] p-8 lg:p-10 hover:border-cyan-500/20 transition-all duration-500">
                        {/* Number */}
                        <div className="text-6xl font-black text-white/[0.03] absolute top-6 right-8 select-none">01</div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] text-cyan-400 tracking-widest font-semibold mb-6">
                            SELECTION & DIAGNOSTIC ENGINE
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            DISCOVER ENGINEERING<br />POTENTIAL.
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                            Evaluate candidates using algorithmic problem-solving tasks, architectural reasoning and professional articulation.
                        </p>

                        {/* Visual indicators */}
                        <div className="space-y-4">
                            {[
                                { label: 'Problem Solving', icon: Brain, color: 'from-cyan-400 to-cyan-500' },
                                { label: 'Architecture', icon: Code2, color: 'from-blue-400 to-blue-500' },
                                { label: 'Communication', icon: MessageSquare, color: 'from-indigo-400 to-indigo-500' },
                            ].map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                        className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-cyan-500/15 transition-colors"
                                    >
                                        <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                            <Icon size={14} className="text-white" />
                                        </div>
                                        <span className="text-sm text-slate-300 font-medium">{item.label}</span>
                                        <div className="ml-auto flex gap-0.5">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className={`w-1.5 h-4 rounded-sm ${j < 4 ? 'bg-cyan-500/30' : 'bg-white/5'}`} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Glow */}
                        <div className="absolute -bottom-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                    </div>
                </motion.div>

                {/* Engine 02 */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group"
                >
                    <div className="relative h-full rounded-2xl border border-violet-500/10 bg-gradient-to-br from-[#0f1419] to-[#120c20] p-8 lg:p-10 hover:border-violet-500/20 transition-all duration-500">
                        {/* Number */}
                        <div className="text-6xl font-black text-white/[0.03] absolute top-6 right-8 select-none">02</div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-[10px] text-violet-400 tracking-widest font-semibold mb-6">
                            PERFORMANCE & REVIEW ENGINE
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            MEASURE ENGINEERING<br />PERFORMANCE.
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                            Continuously capture engineering telemetry across development environments to measure code quality, test coverage and delivery velocity.
                        </p>

                        {/* Visual indicators */}
                        <div className="space-y-4">
                            {[
                                { label: 'Code Quality', icon: Code2, color: 'from-violet-400 to-violet-500', bars: 4 },
                                { label: 'Test Coverage', icon: TestTube, color: 'from-purple-400 to-purple-500', bars: 4 },
                                { label: 'Delivery Velocity', icon: Gauge, color: 'from-fuchsia-400 to-fuchsia-500', bars: 3 },
                            ].map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                        className="flex items-center gap-3 py-3 px-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-violet-500/15 transition-colors"
                                    >
                                        <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                            <Icon size={14} className="text-white" />
                                        </div>
                                        <span className="text-sm text-slate-300 font-medium">{item.label}</span>
                                        <div className="ml-auto flex gap-0.5">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className={`w-1.5 h-4 rounded-sm ${j < item.bars ? 'bg-violet-500/30' : 'bg-white/5'}`} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Glow */}
                        <div className="absolute -bottom-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}

export default IntelligenceEngines
