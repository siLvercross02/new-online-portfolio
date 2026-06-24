import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import LogoNew from "../../assets/Joe-new-logo-dark.png";

interface NavbarProps {
    activeSection: string;
    scrollToSection: (label: string) => void;
}

const Navigation = ({
    activeSection,
    scrollToSection,
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        "Home",
        "About",
        "Experience",
        "Skills",
        "Projects",
        "Contact",
    ];

    const handleNavigation = (section: string) => {
        scrollToSection(section);
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
        >
            <div className="container mx-auto px-6 py-4 max-w-6xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={LogoNew}
                            alt="Joemari H. Supan"
                            className="size-10 md:size-12"
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                onClick={() =>
                                    scrollToSection(item.toLowerCase())
                                }
                                className={`text-sm xl:text-base transition-colors relative ${activeSection === item.toLowerCase()
                                    ? "text-cyan-400"
                                    : "text-slate-400 hover:text-slate-100"
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

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="size-7" />
                        ) : (
                            <Menu className="size-7" />
                        )}
                    </button>
                </div>

                {/* Mobile / Tablet Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
                        >
                            <div className="flex flex-col p-6 gap-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => handleNavigation(item.toLowerCase())}
                                        className="text-left text-slate-300 hover:text-white"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navigation;