import React from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
    children: React.ReactNode
    id?: string
    className?: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
    return (
        <motion.section
            id={id}
            className={`relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {children}
            </div>
        </motion.section>
    )
}

export default SectionWrapper
