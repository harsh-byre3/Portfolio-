import { ArrowUpRight } from "lucide-react";

export const certifications = [
  {
    title: "Full Stack Java Development",
    description:
      "Completed a Full Stack Java Development certification covering Core Java, JDBC, Spring, Hibernate, and MySQL with hands-on project experience.",
    image: "/certificates/certificate1.jpg",
    tags: ["Java", "Spring", "Hibernate", "MySQL"],
    link: "#",
  },
  {
    title: "Frontend Development with React",
    description:
      "Learned modern frontend development using React.js, Tailwind CSS, and API integration by building responsive web applications.",
    image: "/projects/react.jpeg",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
  },
];

export const CertificateSection = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My Professional
            <span className="font-serif italic font-normal text-white"> Certifications.</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Certifications that demonstrate my technical expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certification Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground
                      group-hover:text-primary
                      group-hover:translate-x-1
                      group-hover:-translate-y-1 transition-all"
                    />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;