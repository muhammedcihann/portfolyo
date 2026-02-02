import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users, Calendar } from 'lucide-react';
import { portfolioData } from '@/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Leadership
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {portfolioData.education.map((edu) => (
            <Card
              key={edu.id}
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 mb-8"
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Icon & Dates */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.school}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {edu.location}
                      </p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3 pt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                        <Award className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                        Leadership & Achievements
                      </h4>
                      <div className="grid gap-3">
                        {edu.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-start p-3 rounded-lg bg-blue-50 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors"
                          >
                            <Users className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
