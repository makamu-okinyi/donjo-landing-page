import React from 'react';
import DonjoLogo from './components/DonjoLogo';

export default function Footer() {
    return (
        <footer className="py-12 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <DonjoLogo className="w-32 h-auto" />
                    </div>

                    <div className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Donjo. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}