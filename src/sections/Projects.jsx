import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


const projects = [
    {
        title: "Telecom Website",
        description: 
        "A self-project of telecom website, that have a admin panel and use page, and this is a sample of the website that i created from scratch, this project is still in progress and i will update it soon.",
        image: "/projects/MY-WEB-SAMPLE.jpg",
        tags: ["React", "TailwindCss", "NodeJs"],
        link: "#",
        github: "https://github.com/jericson2332/CVMS",
    },
    {
        title: "E-Commerce Platform",
        description: 
        "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
        image: "/projects/project2.png",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "AI Writing Assistan",
        description: 
        "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
        image: "/projects/project3.png",
        tags: ["React", "OpenAI", "Python", "FastAPI"],
        link: "#",
        github: "#",
    },
    {
        title: "Project Management Tool",
        description: 
        "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
        image: "/projects/project4.png",
        tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
        link: "#",
        github: "#",
    },
]


export const Projects = () =>{
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* bG GLOWS */}
        <div className="absolute top-1/4 right-0 w-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            {/* SECTION HEADER */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projects that
                    <span className="font-serif italic font-normal text-white"> 
                        {" "}
                        make an impact.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my recent work, from complex web applications to 
                    innovative tools that solve real-world problems.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} 
                    className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{ animationDelay:`${(idx +1) *100}ms`}}
                    >

                        {/* iMAGE PROJECT */}
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                            src={project.image} 
                            alt ={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                            {/* OVERLAY LINKS */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <FiGithub className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 
                                text-muted group-hover:text-primary
                                 group-hover:translate-x-1 
                                 group-hover:-translate-y-1 transition-all" />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, taIdx) => (
                                    <span key={taIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View all  CTA*/}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View All Projects
                    <ArrowUpRight className=" w-5 h-5"/>
                </AnimatedBorderButton>
            </div>
        </div>
    </section>       
    );
};