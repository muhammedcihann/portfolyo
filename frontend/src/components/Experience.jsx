import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>

            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} className="relative mb-12">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

                {/* Content Card */}
                <Card className="md:w-[calc(50%-3rem)] md:ml-auto border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-t-lg">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{exp.position}</CardTitle>
                        <div className="flex items-center space-x-2 text-blue-100">
                          <Building2 className="h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 text-sm text-blue-100">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <Badge
                            key={tIndex}
                            variant="secondary"
                            className="bg-blue-100 text-blue-700 dark:bg-slate-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-slate-600 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
