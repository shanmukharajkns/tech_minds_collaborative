import React from 'react'
import { MapPin, Mail } from 'lucide-react'

const footerNavLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Engineering Domains', href: '#domains' },
    { label: 'Enterprise', href: '#enterprise' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const Footer: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        if (href.startsWith('#')) {
            const el = document.querySelector(href)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="relative border-t border-white/5 bg-[#080b10]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                                TMC
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-white tracking-wide leading-tight">TECH MINDS</div>
                                <div className="text-[10px] font-medium text-slate-500 tracking-[0.15em] leading-tight">COLLABORATIVE</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed mt-3 max-w-xs">
                            Advanced Engineering Accelerator & Talent Intelligence Platform
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-xs text-slate-600">
                            <MapPin size={12} />
                            <span>Hyderabad, Telangana, India</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-600">
                            <Mail size={12} />
                            <a href="mailto:contact@yourdomain.in" className="hover:text-slate-400 transition-colors">
                                contact@yourdomain.in
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {footerNavLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className="text-sm text-slate-500 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-600">
                        © {new Date().getFullYear()} Tech Minds Collaborative. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-700">
                        Engineering Talent, Built for Enterprise.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
