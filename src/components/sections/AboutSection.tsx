import { motion } from 'motion/react';
import { Code2, CheckCircle2, Users } from 'lucide-react';

const AboutSection = () => {
    return (
        <>
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
                        >
                            <span className="text-sm text-cyan-400">Get to know me</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            About Me
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-slate-400 text-lg leading-relaxed"
                        >
                            <p>
                                I'm a passionate <span className="text-cyan-400 font-medium">Full-Stack Developer</span> with strong experience in developing modern web applications using ReactJS, Next.js, Node.js, and related technologies.
                            </p>
                            <p>
                                Throughout my career, I have worked on enterprise platforms, customer-facing applications, internal systems, and freelance projects across various industries. I have experience collaborating with designers, product teams, QA engineers, and backend developers to deliver production-ready applications from concept to deployment.
                            </p>
                            <p>
                                I am passionate about writing <span className="text-cyan-400 font-medium">clean code</span>, optimizing application performance, and creating seamless user experiences. Whether developing frontend interfaces, integrating APIs, or building full-stack solutions, I focus on delivering reliable, scalable, and maintainable software.
                            </p>
                            <p>
                                When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers,
                                or exploring new technologies. I'm passionate about sharing knowledge and building meaningful products
                                that make a difference.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
                                <h3 className="text-xl mb-4 text-slate-100">Core Competencies</h3>
                                <div className="space-y-3">
                                    {[
                                        'Full-Stack Development (React, Node.js, TypeScript)',
                                        'State Management (Redux, Zustand)',
                                        'Database Design & Optimization (SQL & NoSQL)',
                                        'REST API Development & Integration',
                                        'Responsive Web Applications',
                                        'CMS Platforms (Builder.io, WordPress, AEM, Magento, Strapi)',
                                        'UI/UX Collaboration (Figma, Adobe XD)',
                                    ].map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="size-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20">
                                    <Code2 className="size-8 text-cyan-400 mb-3" />
                                    <div className="text-2xl font-bold text-slate-100 mb-1">15+</div>
                                    <div className="text-sm text-slate-400">Technologies</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                                    <Users className="size-8 text-blue-400 mb-3" />
                                    <div className="text-2xl font-bold text-slate-100 mb-1">8</div>
                                    <div className="text-sm text-slate-400">Companies Worked With</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default AboutSection