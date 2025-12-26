import React from 'react';

export default function DonjoLogo({ className = "w-40 h-auto", showText = true }) {
    return (
        <svg 
            className={className}
            viewBox="0 0 240 90" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
            </defs>
            
            {/* Shield shape - wider at top, tapering to point */}
            <path
                d="M40 15 L200 15 L210 30 L210 60 L200 75 L40 75 L30 60 L30 30 Z"
                fill="url(#shieldGradient)"
                stroke="#2563EB"
                strokeWidth="2.5"
            />
            
            {/* Road/Path element - curves across the middle */}
            <path
                d="M35 42 Q70 32 105 42 T175 42"
                stroke="#2563EB"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
            />
            <path
                d="M35 48 Q70 38 105 48 T175 48"
                stroke="#2563EB"
                strokeWidth="3.5"
                fill="none"
                strokeLinecap="round"
            />
            {/* Dashed white line in the middle */}
            <path
                d="M35 45 Q70 35 105 45 T175 45"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
            />
            
            {/* Donjo text - stylized */}
            {showText && (
                <g>
                    {/* D - prominent solid blue */}
                    <text
                        x="50"
                        y="58"
                        fontSize="36"
                        fontWeight="800"
                        fill="url(#textGradient)"
                        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                        letterSpacing="-0.5"
                    >
                        D
                    </text>
                    
                    {/* o */}
                    <text
                        x="75"
                        y="58"
                        fontSize="32"
                        fontWeight="700"
                        fill="url(#textGradient)"
                        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                        letterSpacing="-0.3"
                    >
                        o
                    </text>
                    
                    {/* n - connected to o and j */}
                    <text
                        x="95"
                        y="58"
                        fontSize="32"
                        fontWeight="700"
                        fill="url(#textGradient)"
                        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                        letterSpacing="-0.3"
                    >
                        n
                    </text>
                    
                    {/* j with stylized dot (circle) and curved tail */}
                    <circle cx="125" cy="42" r="4" fill="url(#textGradient)" />
                    <text
                        x="118"
                        y="58"
                        fontSize="32"
                        fontWeight="700"
                        fill="url(#textGradient)"
                        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                        letterSpacing="-0.3"
                    >
                        j
                    </text>
                    {/* Curved tail extension */}
                    <path
                        d="M130 58 Q135 55 140 58"
                        stroke="url(#textGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                    />
                    
                    {/* o with extended curve on right side */}
                    <text
                        x="145"
                        y="58"
                        fontSize="32"
                        fontWeight="700"
                        fill="url(#textGradient)"
                        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
                        letterSpacing="-0.3"
                    >
                        o
                    </text>
                    {/* Extended curve on final o */}
                    <path
                        d="M170 58 Q175 55 180 58"
                        stroke="url(#textGradient)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                    />
                </g>
            )}
        </svg>
    );
}

