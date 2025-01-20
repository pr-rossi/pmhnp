import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ArrowRight, CalendarDays } from 'lucide-react'

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
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h1 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-6xl font-bold">
          Our PMHNP Preparation Programs
        </h1>
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
          <p className="text-xl text-muted-foreground max-w-[85%] mx-auto mt-4">
            Choose the program that best fits your learning style and schedule. All programs are designed to provide comprehensive preparation for your PMHNP certification.
          </p>
        </div>
      </div>

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

