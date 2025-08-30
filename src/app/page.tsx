"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin, Calendar, Building, GraduationCap, Users, Award } from "lucide-react";

export default function Portfolio() {
  const experiences = [
    {
      company: "GetLinks",
      role: "IT Recruitment Consultant",
      period: "Oct 2023 - Present",
      duration: "1 yr 11 mos",
      location: "Bangkok City, Thailand · Hybrid",
      skills: ["Multitasking", "Canva", "Sourcing", "Hiring"],
      current: true
    },
    {
      company: "Thailand Convention & Exhibition Bureau (TCEB)",
      role: "Project Coordinator",
      period: "Jan 2022 - Oct 2023",
      duration: "1 yr 10 mos",
      location: "Bangkok City, Thailand",
      skills: ["Multitasking", "Canva", "Project Management", "Event Coordination"]
    },
    {
      company: "Shopee",
      role: "Screening Agent",
      period: "Jul 2021 - Dec 2021",
      duration: "6 mos",
      location: "Thailand",
      skills: ["Consulting", "Microsoft Office", "Screening", "Communication"]
    }
  ];

  const skills = [
    { name: "Sourcing", level: "Expert", experiences: 2 },
    { name: "Hiring", level: "Advanced", experiences: 1 },
    { name: "IT Recruitment", level: "Expert", experiences: 1 },
    { name: "Multitasking", level: "Expert", experiences: 3 },
    { name: "Canva", level: "Advanced", experiences: 2 },
    { name: "Project Management", level: "Advanced", experiences: 1 },
    { name: "Microsoft Office", level: "Advanced", experiences: 1 },
    { name: "Communication", level: "Expert", experiences: 3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 px-4 lg:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <Avatar className="w-32 h-32 lg:w-48 lg:h-48 border-4 border-white shadow-xl">
                <AvatarImage src="/profile.webp" alt="Nattayaporn Morprakop" className="object-cover" />
                <AvatarFallback className="text-2xl lg:text-4xl font-bold text-white" style={{background: 'linear-gradient(to right, #0ea5bf, #0891b2)'}}>
                  NM
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 text-center lg:text-left space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">Nattayaporn Morprakop</h1>
                <h2 className="text-xl lg:text-2xl font-semibold mb-6 leading-relaxed" style={{color: '#0ea5bf'}}>IT Recruitment Consultant</h2>
                <p className="text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed font-medium">
                  Experienced recruitment professional specializing in IT talent acquisition with a proven track record
                  in connecting top-tier candidates with innovative companies.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                <Badge variant="secondary" className="px-3 py-1">
                  <Building className="w-4 h-4 mr-1" />
                  GetLinks
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <Users className="w-4 h-4 mr-1" />
                  500+ Connections
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <Award className="w-4 h-4 mr-1" />
                  1,879 Followers
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start pt-4 w-full max-w-sm lg:max-w-none">
                <Button
                  size="lg"
                  className="hover:opacity-90 w-full sm:w-auto"
                  style={{backgroundColor: '#0ea5bf'}}
                  onClick={() => window.location.href = 'mailto:[removed-email]'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => window.open('https://linkedin.com/in/nattayaporn-morprakop-00744428a', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Stats */}
      <section className="py-8 lg:py-12 px-4 lg:px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold" style={{color: '#0ea5bf'}}>1.9K+</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold" style={{color: '#0ea5bf'}}>500+</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Connections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold" style={{color: '#0ea5bf'}}>2+</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold" style={{color: '#0ea5bf'}}>3</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 lg:py-12 px-4 lg:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow h-fit">
              <CardContent className="pt-6 pb-6">
                <Phone className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3" style={{color: '#0ea5bf'}} />
                <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">Phone</h3>
                <p className="text-gray-900 font-semibold text-base lg:text-lg">[removed-phone]</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow h-fit">
              <CardContent className="pt-6 pb-6">
                <Mail className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3" style={{color: '#0ea5bf'}} />
                <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">Email</h3>
                <p className="text-gray-900 font-semibold text-sm lg:text-base break-all">[removed-email]</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow h-fit">
              <CardContent className="pt-6 pb-6">
                <Linkedin className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3" style={{color: '#0ea5bf'}} />
                <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">LinkedIn</h3>
                <p className="text-gray-900 font-semibold text-sm lg:text-base">linkedin.com/in/nattayaporn</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow h-fit">
              <CardContent className="pt-6 pb-6">
                <MapPin className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3" style={{color: '#0ea5bf'}} />
                <h3 className="font-semibold text-gray-900 mb-2 text-base lg:text-lg">Location</h3>
                <p className="text-gray-900 font-semibold text-base lg:text-lg">Bangkok, Thailand</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6 lg:gap-8 xl:gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg lg:text-xl text-gray-900">
                          {exp.role}
                        </CardTitle>
                        {exp.current && <Badge className="bg-green-100 text-green-800 text-xs">Current</Badge>}
                      </div>
                      <CardDescription className="text-base lg:text-lg font-semibold" style={{color: '#0ea5bf'}}>
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-gray-600 lg:text-xs xl:text-sm flex-shrink-0">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        <Calendar className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="text-gray-500 mb-1">{exp.duration}</div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span className="text-xs lg:text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills Combined Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12">
            {/* Education */}
            <div className="xl:col-span-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Education</h2>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-10 h-10 flex-shrink-0 mt-1" style={{color: '#0ea5bf'}} />
                    <div className="flex-1">
                      <CardTitle className="text-base lg:text-lg text-gray-900 mb-2 leading-tight">
                        Bachelor&apos;s Degree in Political Science and Government
                      </CardTitle>
                      <CardDescription className="text-sm lg:text-base font-semibold mb-3" style={{color: '#0ea5bf'}}>
                        Srinakharinwirot University
                      </CardDescription>
                      <Badge variant="outline" className="px-2 py-1 text-xs">
                        GPA: 3.34
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Key Skills Summary */}
            <div className="xl:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Professional Skills</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 pb-6">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{skill.name}</h3>
                      <Badge
                        className={`mb-2 text-xs ${
                          skill.level === 'Expert'
                            ? 'bg-green-100 text-green-800'
                            : 'text-white'
                        }`}
                        style={skill.level !== 'Expert' ? {backgroundColor: '#0ea5bf'} : {}}
                      >
                        {skill.level}
                      </Badge>
                      <p className="text-xs text-gray-700">
                        {skill.experiences} company experience{skill.experiences > 1 ? 's' : ''}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 lg:py-20 px-4 lg:px-6 text-white" style={{background: 'linear-gradient(to right, #0ea5bf, #0891b2)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">Let&apos;s Connect</h2>
          <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Ready to find your next great hire or discuss recruitment opportunities?
            I&apos;m here to help connect talent with opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base lg:text-lg px-6 lg:px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              [removed-email]
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base lg:text-lg px-6 lg:px-8 py-3 text-white border-white hover:bg-white transition-colors font-semibold"
              onMouseEnter={(e) => e.currentTarget.style.color = '#0ea5bf'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              onClick={() => window.location.href = 'tel:[removed-phone]'}
            >
              <Phone className="w-5 h-5 mr-2" />
              [removed-phone]
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm lg:text-base opacity-80 leading-relaxed">
              Line ID: benznattaya | Available for immediate consultation
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 lg:py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4" style={{color: '#0ea5bf'}}>Nattayaporn Morprakop</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Professional IT Recruitment Consultant specializing in connecting top-tier tech talent with innovative companies in Bangkok and beyond.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award className="w-4 h-4" />
                <span>1,879+ LinkedIn Followers</span>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-4 text-white">Quick Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:[removed-phone]"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" style={{color: '#0ea5bf'}} />
                  <span className="font-medium text-base">[removed-phone]</span>
                </a>
                <a
                  href="mailto:[removed-email]"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" style={{color: '#0ea5bf'}} />
                  <span className="font-medium text-sm lg:text-base break-all">[removed-email]</span>
                </a>
                <a
                  href="https://linkedin.com/in/nattayaporn-morprakop-00744428a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" style={{color: '#0ea5bf'}} />
                  <span className="font-medium text-base">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Professional Services */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-4 text-white">Recruitment Services</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0ea5bf'}}></div>
                  <span className="text-sm lg:text-base">IT Talent Acquisition</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0ea5bf'}}></div>
                  <span className="text-sm lg:text-base">Full Stack Developer Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0ea5bf'}}></div>
                  <span className="text-sm lg:text-base">Technical Interview Coordination</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#0ea5bf'}}></div>
                  <span className="text-sm lg:text-base">Company-Candidate Matching</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Nattayaporn Morprakop. Professional IT Recruitment Consultant.
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Available for immediate consultation</span>
                <div className="h-4 w-px bg-gray-600"></div>
                <span>Line ID: benznattaya</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
