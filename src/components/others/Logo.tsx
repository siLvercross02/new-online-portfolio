import { motion } from 'motion/react';

interface LogoProps {
    className?: string;
    animated?: boolean;
}

export function Logo({ className = '', animated = true }: LogoProps) {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2, ease: "easeInOut" },
                opacity: { duration: 0.5 }
            }
        }
    };

    const Wrapper = animated ? motion.svg : 'svg';
    const Path = animated ? motion.path : 'path';

    return (
        <Wrapper
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            initial={animated ? "hidden" : undefined}
            animate={animated ? "visible" : undefined}
        >
            {/* Outer hexagon */}
            <Path
                d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
                stroke="url(#gradient1)"
                strokeWidth="3"
                fill="none"
                variants={animated ? pathVariants : undefined}
            />

            {/* Inner design - Code brackets and forward slash */}
            <Path
                d="M70 80 L50 100 L70 120"
                stroke="url(#gradient2)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={animated ? pathVariants : undefined}
            />

            <Path
                d="M130 80 L150 100 L130 120"
                stroke="url(#gradient2)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={animated ? pathVariants : undefined}
            />

            <Path
                d="M110 70 L90 130"
                stroke="url(#gradient3)"
                strokeWidth="4"
                strokeLinecap="round"
                variants={animated ? pathVariants : undefined}
            />

            {/* Letter J, M, S stylized */}
            <text
                x="100"
                y="170"
                textAnchor="middle"
                fill="url(#gradient4)"
                fontSize="24"
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
            >
                JMS
            </text>

            {/* Gradients */}
            <defs>
                <linearGradient id="gradient1" x1="30" y1="20" x2="170" y2="180" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="gradient2" x1="50" y1="80" x2="150" y2="120" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="gradient3" x1="110" y1="70" x2="90" y2="130" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="gradient4" x1="70" y1="170" x2="130" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
            </defs>
        </Wrapper>
    );
}