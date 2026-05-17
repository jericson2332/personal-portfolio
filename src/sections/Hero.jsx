import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const skills = [
    "React",
    "Node.js",
    "SQL",
    "Tailwind CSS",
    "PHP",
    "HTML",
    "CSS",
    "IT Support / Tech",
    "Basic Troubleshooting of Desktop",
    "Basic configuration of modem",
    "GitHub Actions",
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* bg */}
            <div className="absolute inset-0">
                <img 
                src="/hero-bg.jpg" 
                alt="Hero background"
                className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* GREEN DOTS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#20B2A6",
                        left: `${Math.random()* 100}%`,
                        top: `${Math.random()* 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                        
                    }}
                    />
                ))}

            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Front-End Dev.
                            </span>
                        </div>

                        {/* headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br/>
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">precision</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi I'm Jericson Layugan - a front-end developer with knowledge of React, 
                                Html, Css, Database, and Php. I build scalable, performant web applications that 
                                users love.
                            </p>
                        </div>
                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/></Button>
                            <AnimatedBorderButton >
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton >
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-shadow-muted-foreground">
                                Follow me:
                            </span>
                            {[
                                { icon: FiGithub, href: "https://github.com/yourusername" },
                                { icon: FiLinkedin, href: "https://linkedin.com/in/yourusername" },
                                { icon: FiTwitter, href: "https://twitter.com/yourusername" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noreferrer" 
                                className="p-2 rounded-full glass  hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    <social.icon className="w-5 h-5"/>
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* right Column - Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        {/* Profile Image */}
                        <div className="absolute inset-0 rounded-3xl 
                        bg-linear-to-br from-primary/30 via-transparent
                        to-primary/10 blur-2xl animate-pulse"/>

                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/profile-generated-ai.png" 
                            alt="Jericson Layugan" 
                            className="w-full aspect-4/5 object-cover rounded-2xl" />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">3</div>
                                <div className="text-xs text-muted-foreground">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work With</p>
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10"/>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10"/>
                        <div className="flex animate-marquee">
                            {[ ...skills, ...skills ] .map((skill, idx) =>(
                                <div key={idx} className="shrink-0 px-6 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}