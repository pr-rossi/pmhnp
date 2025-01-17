import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const resources = [
  {
    title: "PMHNP Study Guide",
    description: "A comprehensive guide covering key topics for PMHNP certification",
    type: "PDF",
    link: "/resources/pmhnp-study-guide.pdf"
  },
  {
    title: "Psychopharmacology Basics",
    description: "An introduction to essential psychopharmacology concepts",
    type: "Video",
    link: "/resources/psychopharmacology-basics"
  },
  {
    title: "Mental Status Examination Cheat Sheet",
    description: "Quick reference guide for conducting mental status examinations",
    type: "PDF",
    link: "/resources/mse-cheat-sheet.pdf"
  },
  {
    title: "DSM-5 Diagnostic Criteria Overview",
    description: "Summary of key diagnostic criteria from DSM-5",
    type: "Interactive",
    link: "/resources/dsm-5-overview"
  },
  {
    title: "PMHNP Practice Questions",
    description: "Sample questions to test your knowledge",
    type: "Quiz",
    link: "/resources/practice-questions"
  },
  {
    title: "Therapeutic Communication Techniques",
    description: "Learn effective communication strategies for mental health practice",
    type: "Video",
    link: "/resources/therapeutic-communication"
  }
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Free PMHNP Resources</h1>
      
      <p className="text-lg mb-8">
        Explore our collection of free resources to support your PMHNP studies. These materials are designed to complement your learning and provide valuable insights into key topics.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold">Type: {resource.type}</p>
            </CardContent>
            <CardFooter>
              <Link href={resource.link}>
                <Button>Access Resource</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want More In-Depth Materials?</h2>
        <p className="text-lg mb-6">
          Check out our comprehensive PMHNP preparation programs for full access to all our resources and expert-led instruction.
        </p>
        <Link href="/programs">
          <Button size="lg">View Our Programs</Button>
        </Link>
      </div>
    </div>
  )
}

