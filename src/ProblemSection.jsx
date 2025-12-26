import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, UserX, ArrowDown } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        {
            icon: FileText,
            stat: "73%",
            title: "of CVs are misleading",
            description: "Candidates embellish skills and experience, leaving you guessing who's actually qualified."
        },
        {
            icon: Clock,
            stat: "23 hrs",
            title: "wasted per hire",
            description: "Screening resumes and conducting initial calls that go nowhere drains your team's time."
        },
        {
            icon: UserX,
            stat: "$15K+",
            title: "cost of a bad hire",
            description: "Wrong hires in startups are devastating—lost productivity, team morale, and hard cash."
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-400 font-medium text-sm uppercase tracking-wider">The Problem</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                        Hiring is broken
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Traditional hiring relies on paper credentials that tell you nothing about real ability.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-800/50 rounded-3xl transform group-hover:scale-[1.02] transition-transform" />
                            <div className="relative p-8 md:p-10">
                                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                                    <problem.icon className="w-7 h-7 text-red-400" />
                                </div>
                                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                                    {problem.stat}
                                </div>
                                <div className="text-xl font-semibold text-white mb-3">
                                    {problem.title}
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center mt-16"
                >
                    <div className="flex flex-col items-center text-slate-500">
                        <span className="text-sm mb-2">There's a better way</span>
                        <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}