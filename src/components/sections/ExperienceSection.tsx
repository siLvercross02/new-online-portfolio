import { motion } from 'motion/react';
import { MapPin, Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

const ExperienceSection = () => {

    const experience = [
        {
            role: 'CRO Developer',
            company: 'Adm Indicia',
            period: 'January 2024 - Present',
            location: 'Remote',
            achievements: [
                'Implement and manage A/B tests and personalization campaigns using AB Tasty',
                'Evaluate technical feasibility of proposed personalization initiatives, advising on risks and solutions',
                'Develop personalization experiences within the existing personalization suite',
                'Ensure correct implementation of test objectives, development, and reporting across client campaigns'
            ]
        },
        {
            role: 'Web Developer (Freelance)',
            company: 'Bonnesmains Services Corp.',
            period: 'August 2024 - June 2026',
            location: 'Remote',
            achievements: [
                'Built and maintained websites using custom programming (no-code tools not used)',
                'Conducted pre-deployment testing and ongoing quality assurance at regular intervals',
                'Debugged and resolved website code issues; maintained integrations and database connections',
                'Collaborated with designers to execute UI/UX vision and ensure responsive design'
            ]
        },
        {
            role: 'ReactJS / JavaScript Developer',
            company: 'Collabera Philippines - Client: UnionBank',
            period: 'January 2023 - November 2023',
            location: 'Remote',
            achievements: [
                'Developed and maintained UI components and integration flows using ReactJS for a major banking client.',
                'Participated in requirement gathering, code reviews, bug fixing, testing, and documentation.',
                'Communicated complex technical issues clearly to project managers, team leads, and architects.',
                'Designed system specifications and standards; troubleshot and resolved production issues.'
            ]
        },
        {
            role: 'Full Stack Developer (Freelance)',
            company: 'Narrasoft - Client: The ROI Shop',
            period: 'December 2022 - June 2023',
            location: 'Remote',
            achievements: [
                'Built a web application using Next.js, JavaScript, Zustand, Mantine UI, and Node.js.',
                'Maintained and enhanced an ROI calculator web application.',
                'Resolved bugs assigned by the project manager; collaborated with backend developers and QA.',
            ]
        },
        {
            role: 'Front End Developer',
            company: 'Affinity Capital Corp Inc.',
            period: 'May 2020 - December 2022',
            location: 'Remote, Makati City',
            achievements: [
                'Designed, developed, and upgraded the company website using ReactJS, React Native, Node.js, HTML, CSS, and JavaScript.',
                'Maintained site stability and smooth functioning; conducted testing to ensure systems operated as expected.',
            ]
        },
        {
            role: 'Web Designer/Front End Developer',
            company: 'Pil-Chi Telecoms Inc.',
            period: 'October 2019 - April 2020',
            location: 'Cubao, Quezon City',
            achievements: [
                'Developed creative concepts and new layouts to improve product browsing experience.',
                'Updated existing websites with HTML, CSS, JavaScript, and Bootstrap.',
                'Coordinated with the marketing team to gather project requirements and specifications.'
            ]
        },
        {
            role: 'Web Designer/IT Support',
            company: 'Gfoxx International',
            period: 'February 2019 - September 2019',
            location: 'Ortigas, Pasig City',
            achievements: [
                'Maintained and improved company website; ensured high-quality graphic standards and brand consistency.',
                'Provided IT troubleshooting support and coordinated with the marketing team on project needs.',
            ]
        },
        {
            role: 'Web Designer Trainee',
            company: 'Vasavah Consultancy',
            period: 'November 2018 - January 2019',
            location: 'Quezon City',
            achievements: [
                'Created user-friendly web pages using HTML, CSS, JavaScript, Bootstrap; optimized applications for speed.',
                'Collaborated with back-end developers and designers to improve website usability.',
            ]
        }
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
                            <span className="text-sm text-cyan-400">Career journey</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Work Experience
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            A track record of delivering impactful solutions across various industries
                        </p>
                    </div>

                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <motion.div
                                key={job.company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Timeline line */}
                                {index !== experience.length - 1 && (
                                    <div className="hidden md:block absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent" />
                                )}

                                <div className="flex gap-6">
                                    {/* Timeline dot */}
                                    <div className="hidden md:block relative">
                                        <div className="size-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                            <Briefcase className="size-6" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl text-slate-100 mb-2">{job.role}</h3>
                                                <div className="flex items-center gap-4 text-slate-400">
                                                    <span className="text-cyan-400 font-medium">{job.company}</span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="size-4" />
                                                        {job.location}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                                <Calendar className="size-4 text-cyan-400" />
                                                <span className="text-sm text-cyan-400">{job.period}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            {job.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="size-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-slate-300">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ExperienceSection