import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      credentialId: "AI-900",
      description: "Gained foundational knowledge of AI and cloud-based ML services",
      skills: ["Azure AI", "Machine Learning", "Cognitive Services", "AI Ethics"],
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/",
      logo: "🏅"
    },
    {
      name: "Mastering the Fundamentals – AI Track",
      issuer: "Educational Platform",
      date: "2024",
      credentialId: "AI-FUND",
      description: "Completed core AI, algorithms, and systems training",
      skills: ["AI Fundamentals", "Algorithms", "System Design", "Machine Learning"],
      verifyUrl: "#",
      logo: "🧠"
    },
    {
      name: "DBMS Course",
      issuer: "Online Platform",
      date: "2023",
      credentialId: "DBMS-101",
      description: "Studied relational databases, transactions, and query optimization",
      skills: ["SQL", "Database Design", "Query Optimization", "Transactions"],
      verifyUrl: "#",
      logo: "🗄️"
    },
    {
      name: "Freedom with AI – Applied AI Practices",
      issuer: "AI Training Institute",
      date: "2023",
      credentialId: "AI-APPLIED",
      description: "Built real-world AI models and explored ethical applications",
      skills: ["Applied AI", "Model Development", "Ethics in AI", "Real-world Applications"],
      verifyUrl: "#",
      logo: "🤖"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications demonstrating expertise in cloud computing, AI, 
              database management, and modern development practices.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className="group shadow-card hover:shadow-card-hover transition-smooth hover-lift h-full"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{cert.logo}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {cert.date}
                    </div>
                  </div>

                  {/* Certification Name & Issuer */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-smooth">
                      {cert.name}
                    </h3>
                    <p className="text-accent font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">ID: {cert.credentialId}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="text-xs border-accent/30 text-accent"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Verify Link */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-foreground hover:bg-accent px-3 py-2 rounded-md transition-smooth mt-auto"
                  >
                    <Award size={16} />
                    Verify Certificate
                    <ExternalLink size={14} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Skills Validated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Cert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;