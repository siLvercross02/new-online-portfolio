import { motion } from 'motion/react';
import { Code2, Layout, Server, Terminal, Database, Globe } from 'lucide-react';

const SkillsSection = () => {

    const skills = [
        { name: 'React', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'Next.js', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'React Native', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'JavaScript', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'TypeScript', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'HTML', category: 'Frontend', icon: <Layout className="size-5" /> },
        { name: 'CSS', category: 'Frontend', icon: <Layout className="size-5" /> },
        { name: 'Tailwind CSS', category: 'Frontend', icon: <Layout className="size-5" /> },
        { name: 'Bootstrap', category: 'Frontend', icon: <Layout className="size-5" /> },
        { name: 'Ant Design', category: 'Frontend', icon: <Layout className="size-5" /> },
        { name: 'React Query', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'Redux', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'Zustand', category: 'Frontend', icon: <Code2 className="size-5" /> },
        { name: 'Node.js', category: 'Backend', icon: <Server className="size-5" /> },
        { name: 'Express.js', category: 'Backend', icon: <Terminal className="size-5" /> },
        { name: 'MongoDB', category: 'Backend', icon: <Database className="size-5" /> },
        { name: 'Strapi', category: 'Backend', icon: <Database className="size-5" /> },
        { name: 'REST API', category: 'Backend', icon: <Globe className="size-5" /> },
        { name: 'WordPress', category: 'CMS', icon: <Globe className="size-5" /> },
        { name: 'Builder.io', category: 'CMS', icon: <Globe className="size-5" /> },
        { name: 'Adode Experience Manager (AEM)', category: 'CMS', icon: <Globe className="size-5" /> },
        { name: 'Magento', category: 'CMS', icon: <Globe className="size-5" /> },
        { name: 'Figma', category: 'Design Tools', icon: <Layout className="size-5" /> },
        { name: 'Adobe XD', category: 'Design Tools', icon: <Layout className="size-5" /> },
        { name: 'Photoshop', category: 'Design Tools', icon: <Layout className="size-5" /> },
    ];

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
                            <span className="text-sm text-cyan-400">Technical expertise</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Skills & Technologies
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Proficient in modern technologies and frameworks for building scalable applications
                        </p>
                    </div>

                    {/* Skills by category */}
                    {['Frontend', 'Backend', 'Database', 'CMS', 'Design Tools'].map((category, catIndex) => {
                        const categorySkills = skills.filter(s => s.category === category);
                        if (categorySkills.length === 0) return null;

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="mb-12 last:mb-0"
                            >
                                <h3 className="text-xl text-slate-300 mb-6 flex items-center gap-2">
                                    <div className="size-1.5 rounded-full bg-cyan-400" />
                                    {category}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {categorySkills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ y: -5, scale: 1.05 }}
                                            className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer"
                                        >
                                            <div className="flex flex-col items-center gap-3 text-center">
                                                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                                    {skill.icon}
                                                </div>
                                                <span className="font-medium text-slate-100 text-sm">{skill.name}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    )
}

export default SkillsSection