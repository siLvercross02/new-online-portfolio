import { LuGithub, LuLinkedin } from 'react-icons/lu'
import { Mail, Code2 } from 'lucide-react'
import LogoNew from "../../assets/Joe-new-logo-dark.png"

interface FooterProps {
    scrollToSection: (label: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
    return (
        <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-3">
                            <img src={LogoNew} alt="Joemari H. Supan" className="size-12" />
                            {/* <Logo className="size-12" animated={false} /> */}
                            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Joemari H. Supan
                            </div>
                        </div>
                        <p className="text-slate-400 mb-4 max-w-sm">
                            Full-Stack Developer specializing in building exceptional digital experiences
                            with modern web technologies.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <LuGithub className="size-4" />, href: 'https://github.com/siLvercross02' },
                                { icon: <LuLinkedin className="size-4" />, href: 'https://www.linkedin.com/in/joemari-supan/' },
                                { icon: <Mail className="size-4" />, href: 'mailto:joemari.supan18@gmail.com' },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="size-9 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-200 font-medium mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(item => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-slate-200 font-medium mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>API Development</li>
                            <li>Technical Consulting</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        © 2026 Joemari H. Supan. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                        Built with <Code2 className="size-4 text-cyan-400" /> React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer