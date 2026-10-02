import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Flame, Activity, Building } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const pillars = [
    {
        number: '01',
        title: 'VERIFIABLE ENGINEERING DATA',
        icon: ShieldCheck,
        color: 'from-cyan-400 to-cyan-500',
        borderColor: 'hover:border-cyan-500/20',
    },
    {
        number: '02',
        title: 'PRODUCTION IMMERSION',
        icon: Flame,
        color: 'from-blue-400 to-blue-500',
        borderColor: 'hover:border-blue-500/20',
    },
    {
        number: '03',
        title: 'CONTINUOUS PERFORMANCE INTELLIGENCE',
        icon: Activity,
        color: 'from-violet-400 to-violet-500',
        borderColor: 'hover:border-violet-500/20',
    },
    {
        number: '04',
        title: 'ENTERPRISE-ALIGNED ENGINEERING STANDARDS',
        icon: Building,
        color: 'from-indigo-400 to-indigo-500',
        borderColor: 'hover:border-indigo-500/20',
    },
]

const WhyTMC: React.FC = () => {
    return (
        <SectionWrapper>
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="text-white">BEYOND TRAINING.</span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">BEYOND RESUMES.</span>
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pillars.map((pillar, i) => {
                    const Icon = pillar.icon
                    return (
                        <motion.div
                            key={pillar.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className={`h-full rounded-xl border border-white/5 ${pillar.borderColor} bg-[#0f1419]/60 p-6 transition-all duration-300 hover:-translate-y-1`}>
                                <div className="text-xs font-mono text-slate-700 tracking-widest mb-4">{pillar.number}</div>
                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5`}>
                                    <Icon size={18} className="text-white" />
                                </div>
                                <h3 className="text-sm font-bold text-white tracking-wider leading-relaxed">{pillar.title}</h3>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}

export default WhyTMC
