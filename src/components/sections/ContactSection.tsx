import { motion } from 'motion/react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { Mail, Download } from 'lucide-react';

const ContactSection = () => {

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume/Joemari-Supan-Resume.pdf";
        link.download = "Joemari-Supan-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <div className="container mx-auto max-w-4xl">
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
                            <span className="text-sm text-cyan-400">Let's connect</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Let's Work Together
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            Feel free to reach out through any of the channels below.
                        </p>
                    </div>

                    {/* Contact cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: <Mail className="size-6" />,
                                label: 'Email',
                                value: 'joemari.supan18@gmail.com',
                                href: 'mailto:joemari.supan18@gmail.com',
                                color: 'from-cyan-500 to-blue-600'
                            },
                            {
                                icon: <LuGithub className="size-6" />,
                                label: 'GitHub',
                                value: '@siLvercross02',
                                href: 'https://github.com/siLvercross02',
                                color: 'from-purple-500 to-pink-600'
                            },
                            {
                                icon: <LuLinkedin className="size-6" />,
                                label: 'LinkedIn',
                                value: 'Joemari Supan',
                                href: 'https://www.linkedin.com/in/joemari-supan/',
                                color: 'from-blue-500 to-indigo-600'
                            },
                        ].map((contact, index) => (
                            <motion.a
                                key={contact.label}
                                href={contact.href}
                                target='_blank'
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all text-center"
                            >
                                <div className={`inline-flex size-14 rounded-full bg-gradient-to-br ${contact.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {contact.icon}
                                </div>
                                <div className="text-sm text-slate-500 mb-1">{contact.label}</div>
                                <div className="text-slate-200 group-hover:text-cyan-400 transition-colors">
                                    {contact.value}
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.button
                            onClick={handleDownloadResume}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2 text-lg font-medium"
                        >
                            <Download className="size-5" />
                            Download Resume
                        </motion.button>
                        <motion.a
                            href="mailto:joemari@example.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all flex items-center gap-2 text-lg"
                        >
                            <Mail className="size-5" />
                            Send Email
                        </motion.a>
                    </motion.div>

                    {/* Additional info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/10 text-center"
                    >
                        <h3 className="text-xl text-slate-200 mb-3">Looking for a developer?</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            I'm currently available for freelance work and full-time opportunities.
                            Let's discuss how I can help bring your project to life with clean,
                            scalable, and maintainable code.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default ContactSection