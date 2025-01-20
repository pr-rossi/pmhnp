import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ArrowRight, CalendarDays, Clock, GraduationCap, Trophy } from 'lucide-react'

const programs = [
  {
    title: "J-I-T Program",
    description: "Just In Time Learning",
    features: [
      "Flexible, self-paced learning",
      "Access to all course materials",
      "Weekly live Q&A sessions",
      "Ideal for busy professionals"
    ],
    duration: "Flexible",
    price: "$999",
    link: "/programs/jit"
  },
  {
    title: "6 Month Program",
    description: "Accelerated Learning Path",
    features: [
      "Structured curriculum",
      "Bi-weekly live lectures",
      "1-on-1 mentoring sessions",
      "Practice exams and assessments"
    ],
    duration: "6 months",
    price: "$2,499",
    link: "/programs/6-month"
  },
  {
    title: "12 Month Program",
    description: "Comprehensive Journey",
    features: [
      "In-depth, paced learning",
      "Weekly live lectures",
      "Group study sessions",
      "Personalized feedback on assignments"
    ],
    duration: "12 months",
    price: "$3,999",
    link: "/programs/12-month"
  }
]

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="container relative flex flex-col items-center justify-center space-y-10 py-16 md:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          </div>
        </div>

        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our PMHNP Preparation Programs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[85%] mx-auto">
              Choose the program that best fits your learning style and schedule
            </p>
          </div>
          
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
            All programs are designed to provide comprehensive preparation for your PMHNP certification, 
            backed by expert instructors and proven methodologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[42rem] mt-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">Learn at your own pace</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">Expert Instruction</h3>
              <p className="text-sm text-muted-foreground">Learn from practitioners</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Trophy className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">98% Pass Rate</h3>
              <p className="text-sm text-muted-foreground">Proven success record</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <Card 
            key={index} 
            className="flex flex-col relative overflow-hidden transition-all hover:shadow-lg hover:scale-105"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <CardHeader>
              <CardTitle className="text-2xl">{program.title}</CardTitle>
              <CardDescription className="text-lg">{program.description}</CardDescription>
              <p className="text-3xl font-bold mt-4">{program.price}</p>
              <p className="text-muted-foreground">Duration: {program.duration}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={program.link} className="w-full">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mx-auto max-w-[48rem] mt-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
        <CardContent className="p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold">Need Help Choosing?</h2>
            <p className="text-muted-foreground">
              Schedule a free consultation with our academic advisors to find the perfect program for your goals.
            </p>
            <Button 
              variant="outline"
              className="mt-4 border-2 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all"
            >
              Book Consultation
              <CalendarDays className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

