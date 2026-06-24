import { motion } from 'motion/react';
import { Rocket, Zap, ArrowRight, MapPin, CheckCircle2, Mail, Award, Users, Code2, TrendingUp } from 'lucide-react';
import { LuGithub, LuLinkedin } from "react-icons/lu";
import Profile from '../../assets/2x2.jpg'

interface HeroProps {
    scrollToSection: (label: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroProps) => {

    const achievements = [
        { icon: <Award />, number: '20+', label: 'Projcts Completed' },
        { icon: <Users />, number: '7+', label: 'Companies Worked With' },
        { icon: <Code2 />, number: '50K+', label: 'Lines of Code' },
        { icon: <TrendingUp />, number: '8', label: 'Roles Since 2018' },
    ];


    return (
        <>
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
            <div className="absolute top-1/4 left-1/4 size-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 size-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-6xl relative z-10 my-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
                        >
                            <Zap className="size-4 text-cyan-400" />
                            <span className="text-sm text-cyan-400">Available for Full-time / Freelance work</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl mb-4 tracking-tight"
                        >
                            Joemari H. <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Supan</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl md:text-3xl text-slate-400 mb-4"
                        >
                            Full-Stack Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-slate-500 mb-6 leading-relaxed"
                        >
                            Building scalable, high-performance web applications with modern technologies.
                            Specialized in ReactJS, NextJS, Node.js, and Express.js with 5+ years of experience
                            delivering enterprise solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-6 mb-8"
                        >
                            <div className="flex items-center gap-2 text-slate-400">
                                <MapPin className="size-4" />
                                <span className="text-sm">Remote / Philippines</span>
                            </div>
                            <div className="flex items-center gap-2 text-cyan-400">
                                <CheckCircle2 className="size-4" />
                                <span className="text-sm">Open to opportunities</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
                            >
                                <Mail className="size-4" />
                                Get in Touch
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            {[
                                { icon: <LuGithub className="size-5" />, href: 'https://github.com/siLvercross02' },
                                { icon: <LuLinkedin className="size-5" />, href: 'https://www.linkedin.com/in/joemari-supan/' },
                                { icon: <Mail className="size-5" />, href: 'mailto:joemari.supan18@gmail.com' },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2 }}
                                    className="size-10 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right side - Profile image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl opacity-50" />

                            {/* Image container */}
                            <div className="relative rounded-3xl overflow-hidden border-4 border-slate-800">
                                {/* <ImageWithFallback
                      src="./assets/2x2.jpg"
                      alt="Joemari H. Supan"
                      className="w-full h-auto aspect-square object-cover"
                    /> */}
                                <img src={Profile} alt="Joemari H. Supan" className="w-full h-auto aspect-square object-cover" />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: 'spring' }}
                                className="absolute -bottom-6 -right-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-xl shadow-cyan-500/50 flex items-center gap-2"
                            >
                                <Rocket className="size-5" />
                                <div className="text-left">
                                    <div className="text-xs opacity-80">Experience</div>
                                    <div className="text-lg font-bold">5+ Years</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Achievement stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    {achievements.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 + index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-800 backdrop-blur-sm"
                        >
                            <div className="flex justify-center mb-3 text-cyan-400">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-slate-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default HeroSection