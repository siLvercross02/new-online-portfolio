import { motion } from 'motion/react';
import { Logo } from '../../components/others/Logo';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (label: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavbarProps) => {

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2"
                        >
                            <Logo className="size-10" animated={false} />
                        </motion.div>
                        <div className="hidden md:flex items-center gap-8">
                            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                                <motion.button
                                    key={item}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`text-sm transition-colors relative ${activeSection === item.toLowerCase()
                                        ? 'text-cyan-400'
                                        : 'text-slate-400 hover:text-slate-100'
                                        }`}
                                >
                                    {item}
                                    {activeSection === item.toLowerCase() && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}

export default Navigation