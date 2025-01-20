import Link from 'next/link'
import { CheckCircle, ArrowRight, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function TwelveMonthProgramPage() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          </div>
        </div>

        <div className="mx-auto max-w-[85rem] text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            12-Month Comprehensive PMHNP Program
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[42rem] mx-auto mb-12">
            The most thorough PMHNP preparation available, designed for deep mastery and lasting success.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Left Column - Features */}
        <div className="space-y-8">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <CardHeader>
              <CardTitle className="text-2xl">Program Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Comprehensive 12-month curriculum",
                  "Weekly live lectures with Dr. John Rossi and guest experts",
                  "Monthly 1-on-1 mentoring sessions",
                  "Extensive study materials, case studies, and practice exams",
                  "Interactive workshops and skill-building sessions",
                  "Clinical simulation experiences",
                  "Personalized learning plan and progress tracking"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose This Program?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our 12-Month Comprehensive Program offers the most thorough PMHNP preparation available. 
                This in-depth program provides a balanced pace of learning with extensive support and 
                resources to ensure mastery of all PMHNP competencies.
              </p>
            </CardContent>
          </Card>

          {/* Curriculum Section moved inside left column */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Course Curriculum</h2>
            <div className="grid gap-6">
              {[
                "Foundations of Psychiatric Nursing and Advanced Neuroscience",
                "Comprehensive Psychopathology and Diagnostic Reasoning",
                "Advanced Psychopharmacology and Medication Management",
                "Evidence-Based Psychotherapeutic Modalities",
                "Lifespan Considerations in Psychiatric Care",
                "Special Populations and Cultural Competence",
                "Integrative and Holistic Approaches in Mental Health",
                "Crisis Intervention and Emergency Psychiatry",
                "Consultation and Interprofessional Collaboration",
                "Health Policy and Advocacy in Mental Health",
                "Research Methods and Quality Improvement in Psychiatric Care",
                "Professional Issues, Ethics, and Practice Management"
              ].map((module, index) => (
                <Card key={index} className="relative overflow-hidden transition-all hover:shadow-md">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
                  <CardHeader>
                    <CardTitle className="text-xl">Month {index + 1}</CardTitle>
                    <CardDescription>{module}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      In-depth exploration with lectures, case studies, assignments, and hands-on activities.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-[42rem] mx-auto">
                  Join our comprehensive program and take the first step towards becoming a certified PMHNP.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/checkout?program=12-month">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all"
                  >
                    Schedule Consultation
                    <CalendarDays className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Right Column - Sticky Enrollment */}
        <div className="relative md:h-[calc(100vh-2rem)]">
          <div className="md:sticky md:top-8 space-y-8">
            <Card className="relative overflow-hidden transition-all hover:shadow-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              <CardHeader>
                <CardTitle className="text-2xl">Enroll Now</CardTitle>
                <CardDescription>Comprehensive learning experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-4xl font-bold">$3,999</p>
                  <p className="text-muted-foreground">Full program access</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Full access for 12 months",
                    "Certificate of completion",
                    "30-day money-back guarantee",
                    "PMHNP Certification Exam Prep Course included"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/checkout?program=12-month" className="w-full">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              <CardContent className="p-6">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">98%</p>
                    <p className="text-sm text-muted-foreground">Pass Rate</p>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">1,000+</p>
                    <p className="text-sm text-muted-foreground">Graduates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

