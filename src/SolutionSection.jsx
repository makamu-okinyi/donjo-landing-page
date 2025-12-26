import React from 'react';
import { motion } from 'framer-motion';
import { Video, Eye, MessageCircle } from 'lucide-react';

export default function SolutionSection() {
    const steps = [
        {
            number: "01",
            icon: Video,
            title: "Candidates create video portfolios",
            description: "Job seekers record short videos demonstrating their skills, explaining their experience, and showing their personality—all in under 5 minutes.",
            color: "orange"
        },
        {
            number: "02",
            icon: Eye,
            title: "You browse pre-vetted talent",
            description: "Filter by role, skills, and experience. Watch videos to instantly assess communication, expertise, and culture fit—no scheduling needed.",
            color: "blue"
        },
        {
            number: "03",
            icon: MessageCircle,
            title: "Connect with the right people",
            description: "Reach out directly to candidates you're excited about. Skip the resume pile and start meaningful conversations faster.",
            color: "green"
        }
    ];

    const colorClasses = {
        orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
        blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
        green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' }
    };

    return (
        <section className="py-24 md:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <span className="text-orange-500 font-medium text-sm uppercase tracking-wider">The Solution</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
                        See skills before you hire
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Video portfolios let you evaluate candidates authentically—before a single meeting.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden md:block absolute top-24 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-orange-200 via-blue-200 to-green-200" />

                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Step number circle */}
                                <div className="flex justify-center mb-8">
                                    <div className={`relative w-16 h-16 rounded-2xl ${colorClasses[step.color].bg} flex items-center justify-center z-10`}>
                                        <step.icon className={`w-8 h-8 ${colorClasses[step.color].text}`} />
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className={`text-xs font-bold ${colorClasses[step.color].text} mb-2`}>
                                        STEP {step.number}
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}