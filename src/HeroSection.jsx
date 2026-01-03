import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import DonjoLogo from './components/DonjoLogo';

export default function HeroSection({ onOpenSignup }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Logo at top */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20">
                <DonjoLogo className="w-20 h-auto sm:w-24 md:w-32" />
            </div>

            {/* Abstract background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
                    >
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">Launching soon — Join the waitlist</span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4 sm:mb-6 px-2"
                    >
                        Hire talent you can
                        <br className="hidden sm:block" />
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                actually see
                            </span>
                            <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-orange-200" viewBox="0 0 200 12" preserveAspectRatio="none">
                                <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
                    >
                        Stop wasting time on CVs. Connect with pre-vetted candidates through 
                        authentic video portfolios that showcase real skills and personality.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Button
                            onClick={() => onOpenSignup('employer')}
                            className="h-12 sm:h-14 px-6 sm:px-8 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/25 transition-all w-full sm:w-auto"
                        >
                            I'm hiring talent
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                        </Button>
                        <Button
                            onClick={() => onOpenSignup('applicant')}
                            variant="outline"
                            className="h-12 sm:h-14 px-6 sm:px-8 rounded-2xl border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-medium text-sm sm:text-base hover:bg-slate-50 transition-all w-full sm:w-auto"
                        >
                            I'm looking for work
                        </Button>
                    </motion.div>

                    {/* Social proof hint */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-8 sm:mt-12 text-xs sm:text-sm text-slate-500 px-4"
                    >
                        Join 500+ startups and candidates on the waitlist
                    </motion.div>
                </div>

                {/* Hero visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-12 sm:mt-16 md:mt-20 relative px-2 sm:px-0"
                >
                    <div className="relative mx-auto max-w-4xl">
                        {/* Browser window mockup */}
                        <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/50 overflow-hidden">
                            {/* Browser header */}
                            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-slate-100 bg-slate-50/50">
                                <div className="flex gap-1 sm:gap-1.5">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="px-3 sm:px-4 py-0.5 sm:py-1 rounded-lg bg-slate-100 text-[10px] sm:text-xs text-slate-500">
                                        donjo.com
                                    </div>
                                </div>
                            </div>
                            
                            {/* Content area - Video grid mockup */}
                            <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-b from-slate-50 to-white">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                    {[
                                        { name: 'Sarah Chen', role: 'Product Designer', color: 'from-pink-400 to-rose-500' },
                                        { name: 'Marcus Johnson', role: 'Full-Stack Dev', color: 'from-blue-400 to-indigo-500' },
                                        { name: 'Emily Rodriguez', role: 'Growth Lead', color: 'from-emerald-400 to-teal-500' },
                                        { name: 'Alex Kim', role: 'Data Scientist', color: 'from-violet-400 to-purple-500' },
                                        { name: 'Jordan Lee', role: 'UX Researcher', color: 'from-amber-400 to-orange-500' },
                                        { name: 'Taylor Smith', role: 'DevOps Eng', color: 'from-cyan-400 to-blue-500' },
                                    ].map((person, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                            className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${person.color}`} />
                                            <div className="absolute inset-0 bg-black/20" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center">
                                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 ml-0.5" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/60 to-transparent">
                                                <div className="text-white text-xs sm:text-sm font-medium truncate">{person.name}</div>
                                                <div className="text-white/70 text-[10px] sm:text-xs truncate">{person.role}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="absolute -left-4 md:-left-12 top-1/4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 border border-slate-100 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-slate-900">Skills verified</div>
                                    <div className="text-xs text-slate-500">3 min video proof</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="absolute -right-4 md:-right-12 bottom-1/4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 border border-slate-100 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-slate-900">Save 10+ hours</div>
                                    <div className="text-xs text-slate-500">Per hiring cycle</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}