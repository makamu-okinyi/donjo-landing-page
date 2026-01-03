import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, User, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addToWaitlist } from './api/waitlist';

export default function SignupModal({ isOpen, onClose, defaultType = null }) {
    const [step, setStep] = useState(defaultType ? 2 : 1);
    const [userType, setUserType] = useState(defaultType);
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        try {
            await addToWaitlist(email, userType, companyName || null);
            
            setIsSubmitting(false);
            setIsSuccess(true);
            
            setTimeout(() => {
                onClose();
                setStep(1);
                setUserType(null);
                setEmail('');
                setCompanyName('');
                setIsSuccess(false);
                setError(null);
            }, 2000);
        } catch (err) {
            setIsSubmitting(false);
            // Provide user-friendly error messages
            if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
                setError('Unable to connect to server. Please check your internet connection and try again.');
            } else if (err.message.includes('already on the waitlist')) {
                setError('This email is already on the waitlist.');
            } else {
                setError(err.message || 'Failed to add to waitlist. Please try again.');
            }
        }
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        onClick={onClose}
                    />
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-md max-h-[90vh] my-auto pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full max-h-[90vh] flex flex-col">
                                <div className="relative p-5 sm:p-6 md:p-8 overflow-y-auto flex-1 min-h-0">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
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
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">You're on the list!</h3>
                                            <p className="text-sm sm:text-base text-slate-600">We'll be in touch soon with early access.</p>
                                        </motion.div>
                                    ) : step === 1 ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                        >
                                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">Join the waitlist</h3>
                                            <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">Tell us who you are to get started.</p>

                                            <div className="space-y-3">
                                                <button
                                                    onClick={() => selectType('employer')}
                                                    className="w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-orange-500 hover:bg-orange-50/50 transition-all group text-left flex items-center gap-3 sm:gap-4"
                                                >
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors flex-shrink-0">
                                                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-orange-600" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="font-semibold text-sm sm:text-base text-slate-900">I'm hiring</div>
                                                        <div className="text-xs sm:text-sm text-slate-500">Find pre-vetted talent through video</div>
                                                    </div>
                                                </button>

                                                <button
                                                    onClick={() => selectType('applicant')}
                                                    className="w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-orange-500 hover:bg-orange-50/50 transition-all group text-left flex items-center gap-3 sm:gap-4"
                                                >
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors flex-shrink-0">
                                                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-orange-600" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="font-semibold text-sm sm:text-base text-slate-900">I'm looking for work</div>
                                                        <div className="text-xs sm:text-sm text-slate-500">Showcase your skills with video</div>
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
                                            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
                                                {userType === 'employer' ? 'Get early access' : 'Join the talent pool'}
                                            </h3>
                                            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
                                                {userType === 'employer' 
                                                    ? 'Be first to discover video-verified candidates.'
                                                    : 'Be first to showcase your skills to top startups.'}
                                            </p>

                                            {error && (
                                                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2">
                                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                                    <p className="text-sm text-red-700">{error}</p>
                                                </div>
                                            )}
                                            
                                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                                <div>
                                                    <Label htmlFor="email" className="text-sm sm:text-base text-slate-700">Email address</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                            setError(null);
                                                        }}
                                                        placeholder="you@company.com"
                                                        className="mt-1.5 h-11 sm:h-12 rounded-lg sm:rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                                                    />
                                                </div>

                                                {userType === 'employer' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                    >
                                                        <Label htmlFor="company" className="text-sm sm:text-base text-slate-700">Company name</Label>
                                                        <Input
                                                            id="company"
                                                            type="text"
                                                            value={companyName}
                                                            onChange={(e) => setCompanyName(e.target.value)}
                                                            placeholder="Acme Inc."
                                                            className="mt-1.5 h-11 sm:h-12 rounded-lg sm:rounded-xl border-slate-200 focus:border-orange-500 focus:ring-orange-500 text-sm sm:text-base"
                                                        />
                                                    </motion.div>
                                                )}

                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full h-11 sm:h-12 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base mt-4 sm:mt-6"
                                                >
                                                    {isSubmitting ? (
                                                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
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
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}