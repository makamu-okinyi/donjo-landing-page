import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, User, Loader2, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupModal({ isOpen, onClose, defaultType = null }) {
    const [step, setStep] = useState(defaultType ? 2 : 1);
    const [userType, setUserType] = useState(defaultType);
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call - replace with your actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // TODO: Replace with your actual API call
        // Example: await fetch('/api/signup', { method: 'POST', body: JSON.stringify({ email, userType, companyName }) });
        
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
            onClose();
            setStep(1);
            setUserType(null);
            setEmail('');
            setCompanyName('');
            setIsSuccess(false);
        }, 2000);
    };

    const selectType = (type) => {
        setUserType(type);
        setStep(2);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="relative p-8">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>

                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle className="w-8 h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-slate-900 mb-2">You're on the list!</h3>
                                            <p className="text-slate-600">We'll be in touch soon with early access.</p>
                                        </motion.div>
                                    ) : step === 1 ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                        >
                                            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Join the waitlist</h3>
                                            <p className="text-slate-600 mb-8">Tell us who you are to get started.</p>

                                            <div className="space-y-3">
                                                <button
                                                    onClick={() => selectType('employer')}
                                                    className="w-full p-5 rounded-2xl border-2 border-slate-200 hover:border-orange-500 hover:bg-orange-50/50 transition-all group text-left flex items-center gap-4"
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                                                        <Briefcase className="w-6 h-6 text-slate-600 group-hover:text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-slate-900">I'm hiring</div>
                                                        <div className="text-sm text-slate-500">Find pre-vetted talent through video</div>
                                                    </div>
                                                </button>

                                                <button
                                                    onClick={() => selectType('applicant')}
                                                    className="w-full p-5 rounded-2xl border-2 border-slate-200 hover:border-orange-500 hover:bg-orange-50/50 transition-all group text-left flex items-center gap-4"
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors">
                                                        <User className="w-6 h-6 text-slate-600 group-hover:text-orange-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-slate-900">I'm looking for work</div>
                                                        <div className="text-sm text-slate-500">Showcase your skills with video</div>
                                                    </div>
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <button
                                                onClick={() => { setStep(1); setUserType(null); }}
                                                className="text-sm text-slate-500 hover:text-slate-700 mb-4 flex items-center gap-1"
                                            >
                                                ← Back
                                            </button>
                                            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                                                {userType === 'employer' ? 'Get early access' : 'Join the talent pool'}
                                            </h3>
                                            <p className="text-slate-600 mb-6">
                                                {userType === 'employer' 
                                                    ? 'Be first to discover video-verified candidates.'
                                                    : 'Be first to showcase your skills to top startups.'}
                                            </p>

                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div>
                                                    <Label htmlFor="email" className="text-slate-700">Email address</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        placeholder="you@company.com"
                                                        className="mt-1.5 h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                                                    />
                                                </div>

                                                {userType === 'employer' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                    >
                                                        <Label htmlFor="company" className="text-slate-700">Company name</Label>
                                                        <Input
                                                            id="company"
                                                            type="text"
                                                            value={companyName}
                                                            onChange={(e) => setCompanyName(e.target.value)}
                                                            placeholder="Acme Inc."
                                                            className="mt-1.5 h-12 rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                                                        />
                                                    </motion.div>
                                                )}

                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-base"
                                                >
                                                    {isSubmitting ? (
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                    ) : (
                                                        'Get early access'
                                                    )}
                                                </Button>
                                            </form>

                                            <p className="text-xs text-slate-400 text-center mt-4">
                                                We'll never spam you. Unsubscribe anytime.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}