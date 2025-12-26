import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, User, CheckCircle, Clock, Target, Sparkles, TrendingUp, Shield, Zap, Heart } from 'lucide-react';

export default function BenefitsSection() {
    const [activeTab, setActiveTab] = useState('employers');

    const benefits = {
        employers: [
            {
                icon: Clock,
                title: "Cut screening time by 80%",
                description: "Watch 2-minute videos instead of reading 50 resumes. Make faster, better decisions."
            },
            {
                icon: Target,
                title: "Assess real skills upfront",
                description: "See candidates demonstrate their abilities before you invest time in interviews."
            },
            {
                icon: Shield,
                title: "Reduce bad hire risk",
                description: "Evaluate communication, personality, and culture fit from day one."
            },
            {
                icon: Zap,
                title: "Hire 2x faster",
                description: "Direct access to pre-vetted talent means shorter hiring cycles."
            }
        ],
        applicants: [
            {
                icon: Sparkles,
                title: "Stand out from the crowd",
                description: "Show your personality and skills in ways a resume never could."
            },
            {
                icon: TrendingUp,
                title: "Get discovered by startups",
                description: "Top companies browse your portfolio—no more endless applications."
            },
            {
                icon: Heart,
                title: "Find the right fit",
                description: "Connect with employers who value what makes you unique."
            },
            {
                icon: CheckCircle,
                title: "Prove your expertise",
                description: "Demonstrate skills directly instead of just listing them."
            }
        ]
    };

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/30 to-blue-100/30 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-orange-500 font-medium text-sm uppercase tracking-wider">Benefits</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
                        Built for both sides
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Whether you're hiring or job hunting, video portfolios change the game.
                    </p>
                </motion.div>

                {/* Tab switcher */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-12"
                >
                    <div className="inline-flex p-1.5 rounded-2xl bg-slate-100">
                        <button
                            onClick={() => setActiveTab('employers')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                                activeTab === 'employers'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <Building2 className="w-4 h-4" />
                            For Employers
                        </button>
                        <button
                            onClick={() => setActiveTab('applicants')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all ${
                                activeTab === 'applicants'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <User className="w-4 h-4" />
                            For Job Seekers
                        </button>
                    </div>
                </motion.div>

                {/* Benefits grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {benefits[activeTab].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center transition-colors shrink-0">
                                        <benefit.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}