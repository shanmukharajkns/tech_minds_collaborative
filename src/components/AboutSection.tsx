import React from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const AboutSection: React.FC = () => {
    return (
        <SectionWrapper id="about">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/3 rounded-full blur-[140px]" />
            </div>

            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    BUILDING THE BRIDGE BETWEEN
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ENGINEERING POTENTIAL AND</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">ENTERPRISE PERFORMANCE.</span>
                </h2>
                <p className="mt-8 text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    Tech Minds Collaborative was founded to address the gap between academic computer science output and the demands of day-one enterprise software engineering.
                </p>
            </motion.div>

            {/* Founder Profile */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl mx-auto"
            >
                <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#0f1419] to-[#0c1220] p-8 md:p-10">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* Avatar */}
                        <div className="shrink-0">
                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
                                <User size={36} className="text-cyan-400/60" />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="text-center sm:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-slate-400 tracking-widest font-semibold mb-3">
                                FOUNDER
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-wide">RAGHU KANAGALA</h3>
                            <p className="text-sm text-cyan-400 font-medium mt-1">Founder & Chief Mentor</p>
                            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                                22 years of industry experience across large-scale software engineering architecture, distributed systems and enterprise delivery.
                            </p>
                        </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="flex flex-wrap gap-3">
                            {['Software Architecture', 'Distributed Systems', 'Enterprise Delivery'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    )
}

export default AboutSection
