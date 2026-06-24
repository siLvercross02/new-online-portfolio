import { motion } from 'motion/react';
import { CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {

    const projects = [
        {
            title: 'Bon Laundry Station',
            description: 'Customer-facing website for a laundry service, with online booking for self-service, drop-off, and pick-up & delivery.',
            tech: ['NextJS', 'TypeScript', 'TailwindCSS', 'React-Query'],
            image: '../src/assets/bon-laundry-web.png',
            highlights: ['Online booking system', 'Self-service, drop-off & delivery', 'Companion admin dashboard'],
            link: 'https://bonlaundrystation.com/'
        },
        {
            title: 'Bon Laundry Admin Dashboard',
            description: 'Internal admin panel for the Bon Laundry Station team to manage day-to-day operations.',
            tech: ['NextJS', 'TailwindCSS', 'React-Query', 'NodeJS', 'MongoDB'],
            image: '../src/assets/bon-laundry-admin.png',
            highlights: ['Branch & service management', 'Real-time booking monitor', 'Blog content editor'],
            link: '#'
        },
        {
            title: 'Incon Industrial Corporation Website',
            description: 'Corporate site for a plastic packaging manufacturer serving the personal care and pharmaceutical industries.',
            tech: ['NextJS', 'Bootstrap', 'Redux', 'Strapi'],
            image: '../src/assets/incon-website.png',
            highlights: ['Product catalogue pages', 'Company history & standards', '40-year manufacturing brand'],
            link: 'https://www.inconindustrial.com/'
        },
        {
            title: 'Affinity Capital Corp',
            description: 'Website for a licensed mutual fund distribution company, letting users browse fund options and start investing.',
            tech: ['ReactJS', 'Ant Design', 'Redux'],
            image: '../src/assets/Affinity-portfolio.PNG',
            highlights: ['NAVPU/NAVPS fund data', 'Client Portal', 'SEC-regulated finance sites'],
            link: 'https://affinitycorp.net/'
        },
        {
            title: 'Meta Phil-Tech Corp',
            description: 'Corporate site for an ICT and technical services provider — structured cabling, surveillance, solar, and software development.',
            tech: ['NextJS', 'Reactstrap', 'Lottie-React'],
            image: '../src/assets/meta-website.png',
            highlights: ['Multi-service catalogue', 'Portfolio & inquiry flow', 'Conversion-focused layou'],
            link: 'https://meta-phil-corp.vercel.app/'
        },
        {
            title: 'Car Hub (Tutorial Build)',
            description: 'A car rental showcase built from a tutorial to practice Next.js and Tailwind CSS on the front end.',
            tech: ['NextJS', 'TailwindCSS', 'TypeScript'],
            image: '../src/assets/car-showcase.png',
            highlights: ['Filterable car catalogue', 'Per-vehicle detail view', 'Front-end UI practice'],
            link: 'https://nextjs-car-showcase-two.vercel.app/'
        },
        {
            title: 'GPT-3 Demo (Tutorial Build)',
            description: 'A demo site built from a tutorial to explore early integration with the GPT-3 AI API.',
            tech: ['ReactJS', 'CSS'],
            image: '../src/assets/gpt3-app.png',
            highlights: ['Learning project', 'Front-end UI practice'],
            link: 'https://gpt3-demo.netlify.app/'
        },
        {
            title: 'Klick.VPN',
            description: 'VPN service site built for Pil-Chi Telecoms, giving users secure, low-latency access to PH-restricted content from any device.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            image: '../src/assets/klickvpn.png',
            highlights: ['Tiered subscription pricing'],
            link: 'https://klickvpn.netlify.app/'
        },
        {
            title: 'Communifi (Not in Production)',
            description: 'Affordable Wi-Fi service site for Pil-Chi Telecoms, offering free monthly data with simple connect-and-go onboarding.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            image: '../src/assets/communifi.png',
            highlights: ['Step-by-step connect guide', 'Pre-registration form', 'Shelved on company closure'],
            link: 'https://communitalk.netlify.app/'
        },
        {
            title: 'Communitalk (Not in Production)',
            description: 'Affordable free-call service site for Pil-Chi Telecoms, with a pre-registration flow for early sign-ups.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            image: '../src/assets/communitalk.png',
            highlights: ['Simple landing page'],
            link: 'https://communitalk.netlify.app/'
        },
        {
            title: 'Klick StreamZones (Not in Production)',
            description: 'Free streaming hub for Pil-Chi Telecoms, aggregating live Philippine news and TV channels in one place.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            image: '../src/assets/klickstreamzone.png',
            highlights: ['Simple landing page', 'Featured channel carousel', 'Categorized video feed'],
            link: 'https://klickstreamzones.netlify.app/'
        },
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
                            <span className="text-sm text-cyan-400">Portfolio showcase</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            A selection of impactful projects demonstrating expertise across various domains
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                                    {/* Overlay badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30">
                                        <span className="text-xs text-cyan-400">Featured</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.link}
                                            className="size-9 rounded-lg bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600 hover:border-cyan-500 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <ExternalLink className="size-4" />
                                        </a>
                                    </div>

                                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.highlights.map((highlight, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-1.5 text-xs text-slate-400"
                                            >
                                                <CheckCircle2 className="size-3 text-cyan-400" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                                        {project.tech.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View all projects button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button className="group px-8 py-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all flex items-center gap-2 mx-auto">
                            View All Projects
                            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectsSection