import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlight =[
   {
      icon: Code2,
      title:"Clean Code",
      description:
      "Writing maintainable, scable code that stands the test of time.",
   },
    {
      icon: Rocket,
      title:"Performance",
      description:
      "Optimizing for speed and delivering lightning-fast user experience.",
   },
    {
      icon: User,
      title:"Collaboration",
      description:
      "Working closely with teams to bring ideas to life",
   },
    {
      icon: Lightbulb,
      title:"Innovation",
      description:
      "Staying ahead with the latest technologies and best practices.",
   },
];



export const About = () => <section id="about" className="py-32 relative overflow-hidden">
   <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
         {/*Left Column */}
         <div className="space-y-8">
            <div className="animate-fade-in">
               <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl  font-bold leading-tight animation-delay-100 text-secondary-foreground">
               Building the future,
               <span className="font-serif italic font-normal text-white"> one component at a time.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
               <p>
                  I'm a passionate aspiring software developer at the beginning
                   of my journey in building digital products that 
                   create meaningful impact. My curiosity about 
                   how websites and applications work inspired me 
                   to explore modern web technologies and continuously
                    improve my skills.
               </p>
               <p>
                  I specialize in React and javaScript, developing responsive landing pages and 
                  dynamic web applications as part of my learning and projects.
                   I focus on writing clean, maintainable code while paying
                    attention to design and user experience.
               </p>
               <p>
                  When I'm not coding, you'll find me learning new technologies,
                   working on personal projects, contributing to beginner-friendly open-source tasks, 
                  or enhancing my skills to grow as
                   a developer in the tech community.

               </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
               <p className="text-lg font-medium italic text-foreground">
                  "My mission is to continuously learn and apply modern technologies to build impactful,
                   user-friendly digital solutions while growing into a 
                   skilled and responsible software developer."
               </p>
            </div>
         </div>
         {/*Right Column */}
         <div className="grid sm:grid-cols-2 gap-6">
            {highlight.map((item, index) => (
               <div key={index} className="glass p-6 rounded-2xl animate-fade-in" 
               style={{animationDelay:`${(index + 1) * 100}ms`}}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                     <item.icon className="w-6 h-6 text-primary"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
               </div>
            ))}
         </div>
      </div>
   </div>
</section>;