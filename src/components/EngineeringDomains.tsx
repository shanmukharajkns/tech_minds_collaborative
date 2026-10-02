import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Database, Cpu, Shield, ArrowRight } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const domains = [
    {
        number: '01',
        title: 'ENTERPRISE CLOUD\n& MICROSERVICES',
        badge: 'ACTIVE FLAGSHIP',
        description: 'Full-stack engineering across distributed architectures, API design, container orchestration and continuous integration.',
        icon: Cloud,
        gradient: 'from-cyan-500/10 to-blue-500/5',
        borderColor: 'border-cyan-500/15 hover:border-cyan-500/30',
        accentColor: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
        visual: (
            <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity">
                {/* Cloud architecture diagram */}
                <rect x="70" y="8" width="60" height="24" rx="4" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
                <text x="100" y="23" textAnchor="middle" fill="rgba(6,182,212,0.5)" fontSize="6" fontFamily="Inter">API GATEWAY</text>

                <line x1="80" y1="32" x2="50" y2="50" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="100" y1="32" x2="100" y2="50" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                <line x1="120" y1="32" x2="150" y2="50" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />

                <rect x="30" y="50" width="40" height="20" rx="3" fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
                <text x="50" y="63" textAnchor="middle" fill="rgba(6,182,212,0.4)" fontSize="5" fontFamily="Inter">SERVICE A</text>

                <rect x="80" y="50" width="40" height="20" rx="3" fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
                <text x="100" y="63" textAnchor="middle" fill="rgba(6,182,212,0.4)" fontSize="5" fontFamily="Inter">SERVICE B</text>

                <rect x="130" y="50" width="40" height="20" rx="3" fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1" />
                <text x="150" y="63" textAnchor="middle" fill="rgba(6,182,212,0.4)" fontSize="5" fontFamily="Inter">SERVICE C</text>

                <line x1="50" y1="70" x2="50" y2="85" stroke="rgba(6,182,212,0.15)" strokeWidth="1" />
                <line x1="100" y1="70" x2="100" y2="85" stroke="rgba(6,182,212,0.15)" strokeWidth="1" />
                <line x1="150" y1="70" x2="150" y2="85" stroke="rgba(6,182,212,0.15)" strokeWidth="1" />

                <rect x="30" y="85" width="140" height="20" rx="3" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="4" />
                <text x="100" y="98" textAnchor="middle" fill="rgba(6,182,212,0.35)" fontSize="5" fontFamily="Inter">CONTAINER ORCHESTRATION</text>
            </svg>
        ),
    },
    {
        number: '02',
        title: 'DATA ENGINEERING\n& PLATFORM SYSTEMS',
        description: 'Scalable ETL pipelines, distributed data processing and enterprise data warehousing.',
        icon: Database,
        gradient: 'from-blue-500/10 to-indigo-500/5',
        borderColor: 'border-blue-500/15 hover:border-blue-500/30',
        accentColor: 'text-blue-400',
        visual: (
            <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity">
                {/* Data pipeline */}
                <rect x="10" y="45" width="35" height="25" rx="3" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                <text x="27" y="60" textAnchor="middle" fill="rgba(59,130,246,0.4)" fontSize="5" fontFamily="Inter">SOURCE</text>

                <line x1="45" y1="57" x2="60" y2="57" stroke="rgba(59,130,246,0.25)" strokeWidth="1" markerEnd="url(#arrowBlue)" />

                <rect x="60" y="45" width="35" height="25" rx="3" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                <text x="77" y="56" textAnchor="middle" fill="rgba(59,130,246,0.4)" fontSize="5" fontFamily="Inter">EXTRACT</text>
                <text x="77" y="64" textAnchor="middle" fill="rgba(59,130,246,0.3)" fontSize="4" fontFamily="Inter">TRANSFORM</text>

                <line x1="95" y1="57" x2="110" y2="57" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />

                <rect x="110" y="45" width="35" height="25" rx="3" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                <text x="127" y="60" textAnchor="middle" fill="rgba(59,130,246,0.4)" fontSize="5" fontFamily="Inter">PROCESS</text>

                <line x1="145" y1="57" x2="160" y2="57" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />

                <rect x="160" y="45" width="35" height="25" rx="3" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                <text x="177" y="56" textAnchor="middle" fill="rgba(59,130,246,0.4)" fontSize="5" fontFamily="Inter">DATA</text>
                <text x="177" y="64" textAnchor="middle" fill="rgba(59,130,246,0.3)" fontSize="4" fontFamily="Inter">WAREHOUSE</text>

                {/* Parallel streams */}
                <rect x="60" y="18" width="85" height="16" rx="2" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5" strokeDasharray="3" />
                <text x="102" y="28" textAnchor="middle" fill="rgba(59,130,246,0.25)" fontSize="4" fontFamily="Inter">STREAM PROCESSING</text>

                <rect x="60" y="82" width="85" height="16" rx="2" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5" strokeDasharray="3" />
                <text x="102" y="92" textAnchor="middle" fill="rgba(59,130,246,0.25)" fontSize="4" fontFamily="Inter">BATCH PROCESSING</text>
            </svg>
        ),
    },
    {
        number: '03',
        title: 'APPLIED AI\n& INTELLIGENT SYSTEMS',
        description: 'Production-grade machine learning models, retrieval-augmented generation pipelines and intelligent workflows.',
        icon: Cpu,
        gradient: 'from-violet-500/10 to-purple-500/5',
        borderColor: 'border-violet-500/15 hover:border-violet-500/30',
        accentColor: 'text-violet-400',
        visual: (
            <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity">
                {/* AI/RAG Architecture */}
                <rect x="70" y="8" width="60" height="20" rx="3" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
                <text x="100" y="21" textAnchor="middle" fill="rgba(139,92,246,0.5)" fontSize="5" fontFamily="Inter">LLM ENGINE</text>

                <line x1="85" y1="28" x2="45" y2="45" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
                <line x1="100" y1="28" x2="100" y2="45" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
                <line x1="115" y1="28" x2="155" y2="45" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />

                <rect x="20" y="45" width="50" height="18" rx="3" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
                <text x="45" y="57" textAnchor="middle" fill="rgba(139,92,246,0.4)" fontSize="5" fontFamily="Inter">EMBEDDINGS</text>

                <rect x="75" y="45" width="50" height="18" rx="3" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
                <text x="100" y="57" textAnchor="middle" fill="rgba(139,92,246,0.4)" fontSize="5" fontFamily="Inter">RETRIEVAL</text>

                <rect x="130" y="45" width="50" height="18" rx="3" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
                <text x="155" y="57" textAnchor="middle" fill="rgba(139,92,246,0.4)" fontSize="5" fontFamily="Inter">GENERATION</text>

                <rect x="50" y="80" width="100" height="20" rx="3" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="4" />
                <text x="100" y="93" textAnchor="middle" fill="rgba(139,92,246,0.35)" fontSize="5" fontFamily="Inter">VECTOR DATABASE</text>

                <line x1="45" y1="63" x2="80" y2="80" stroke="rgba(139,92,246,0.15)" strokeWidth="0.5" />
                <line x1="100" y1="63" x2="100" y2="80" stroke="rgba(139,92,246,0.15)" strokeWidth="0.5" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'SYSTEMS RELIABILITY\n& QUALITY ENGINEERING',
        description: 'Automation, resilient testing systems, CI/CD integrity and performance engineering.',
        icon: Shield,
        gradient: 'from-emerald-500/10 to-teal-500/5',
        borderColor: 'border-emerald-500/15 hover:border-emerald-500/30',
        accentColor: 'text-emerald-400',
        visual: (
            <svg viewBox="0 0 200 120" className="w-full h-auto opacity-40 group-hover:opacity-60 transition-opacity">
                {/* CI/CD Pipeline */}
                <rect x="10" y="35" width="40" height="20" rx="3" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <text x="30" y="48" textAnchor="middle" fill="rgba(16,185,129,0.4)" fontSize="5" fontFamily="Inter">COMMIT</text>

                <line x1="50" y1="45" x2="60" y2="45" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />

                <rect x="60" y="35" width="30" height="20" rx="3" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <text x="75" y="48" textAnchor="middle" fill="rgba(16,185,129,0.4)" fontSize="5" fontFamily="Inter">BUILD</text>

                <line x1="90" y1="45" x2="100" y2="45" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />

                <rect x="100" y="35" width="30" height="20" rx="3" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <text x="115" y="48" textAnchor="middle" fill="rgba(16,185,129,0.4)" fontSize="5" fontFamily="Inter">TEST</text>

                <line x1="130" y1="45" x2="140" y2="45" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />

                <rect x="140" y="35" width="50" height="20" rx="3" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <text x="165" y="48" textAnchor="middle" fill="rgba(16,185,129,0.4)" fontSize="5" fontFamily="Inter">DEPLOY</text>

                {/* Observability */}
                <rect x="40" y="72" width="120" height="22" rx="3" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="0.5" strokeDasharray="3" />
                <text x="100" y="86" textAnchor="middle" fill="rgba(16,185,129,0.3)" fontSize="5" fontFamily="Inter">OBSERVABILITY & MONITORING</text>

                {/* Connection lines */}
                <line x1="75" y1="55" x2="75" y2="72" stroke="rgba(16,185,129,0.12)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="115" y1="55" x2="115" y2="72" stroke="rgba(16,185,129,0.12)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="165" y1="55" x2="165" y2="72" stroke="rgba(16,185,129,0.12)" strokeWidth="0.5" strokeDasharray="2" />
            </svg>
        ),
    },
]

const EngineeringDomains: React.FC = () => {
    return (
        <SectionWrapper id="domains">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-cyan-500/3 rounded-full blur-[140px]" />
            </div>

            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                    ENGINEERING DOMAINS
                </h2>
                <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
                    Production-oriented engineering capability across modern enterprise technology domains.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {domains.map((domain, i) => {
                    const Icon = domain.icon
                    return (
                        <motion.div
                            key={domain.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className={`relative h-full rounded-2xl border ${domain.borderColor} bg-gradient-to-br ${domain.gradient} backdrop-blur p-8 transition-all duration-500 overflow-hidden`}>
                                {/* Background visual */}
                                <div className="absolute bottom-0 right-0 w-2/3 pointer-events-none">
                                    {domain.visual}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xs font-mono text-slate-600 tracking-wider">{domain.number}</div>
                                            <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center`}>
                                                <Icon size={18} className={domain.accentColor} />
                                            </div>
                                        </div>
                                        {domain.badge && (
                                            <span className={`px-3 py-1 rounded-full border text-[9px] font-semibold tracking-widest ${domain.badgeBg}`}>
                                                {domain.badge}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-white whitespace-pre-line leading-tight mb-4">
                                        {domain.title}
                                    </h3>

                                    <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-6">
                                        {domain.description}
                                    </p>

                                    <div className={`inline-flex items-center gap-1 text-xs font-medium ${domain.accentColor} group-hover:gap-2 transition-all`}>
                                        Learn more <ArrowRight size={12} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}

export default EngineeringDomains
