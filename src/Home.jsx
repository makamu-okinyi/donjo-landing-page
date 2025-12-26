import React, { useState } from 'react';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import BenefitsSection from './BenefitsSection';
import CTASection from './CTASection';
import Footer from './Footer';
import SignupModal from './SignupModal';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [defaultUserType, setDefaultUserType] = useState(null);

    const handleOpenSignup = (userType = null) => {
        setDefaultUserType(userType);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <HeroSection onOpenSignup={handleOpenSignup} />
            <ProblemSection />
            <SolutionSection />
            <BenefitsSection />
            <CTASection onOpenSignup={handleOpenSignup} />
            <Footer />
            
            <SignupModal 
                isOpen={isModalOpen} 
                onClose={() => {
                    setIsModalOpen(false);
                    setDefaultUserType(null);
                }}
                defaultType={defaultUserType}
            />
        </div>
    );
}