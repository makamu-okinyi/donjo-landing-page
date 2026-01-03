import React from 'react';
import DonjoLogo from './components/DonjoLogo';

export default function Footer() {
    return (
        <footer className="py-8 sm:py-10 md:py-12 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <DonjoLogo className="w-24 h-auto sm:w-28 md:w-32" />
                    </div>

                    <div className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
                        © {new Date().getFullYear()} Donjo. All rights reserved.
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
                        <a href="#" className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}