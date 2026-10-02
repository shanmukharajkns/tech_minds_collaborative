import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const FinalCTA: React.FC = () => {
    return (
        <SectionWrapper id="contact">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-violet-500/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
                    <span className="text-white">READY TO BUILD</span>
                    <br />
                    <span className="text-white">ENTERPRISE-READY</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">ENGINEERING CAPABILITY?</span>
                </h2>

                <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Connect with Tech Minds Collaborative to explore engineering talent, intelligence and enterprise capability.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="mailto:contact@yourdomain.in"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
                    >
                        PARTNER WITH TMC
                        <ArrowRight size={16} />
                    </a>
                    <a
                        href="#platform"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#platform')?.scrollIntoView({ behavior: 'smooth' }) }}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-slate-300 border border-slate-700 rounded-xl hover:border-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                        EXPLORE THE PLATFORM
                        <ChevronRight size={16} />
                    </a>
                </div>
            </motion.div>
        </SectionWrapper>
    )
}

export default FinalCTA
