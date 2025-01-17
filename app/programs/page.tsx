import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our PMHNP Preparation Programs</h1>
      
      <p className="text-lg mb-8">
        Choose the program that best fits your learning style and schedule. All programs are designed to provide comprehensive preparation for your PMHNP certification.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                {program.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <p className="text-lg font-semibold mb-2">Duration: {program.duration}</p>
              <p className="text-xl font-bold mb-4">Price: {program.price}</p>
              <Link href={program.link}>
                <Button>Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

