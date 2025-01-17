import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function JITProgramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">J-I-T (Just In Time) Program</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            Our Just In Time (J-I-T) Program is designed for busy professionals who need flexibility in their PMHNP preparation. This self-paced program allows you to learn on your own schedule while still benefiting from expert guidance and comprehensive materials.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Program Features:</h2>
          <ul className="space-y-2">
            {[
              "24/7 access to all course materials",
              "Weekly live Q&A sessions with Dr. John Rossi",
              "Self-paced learning modules",
              "Practice exams and quizzes",
              "Discussion forums for peer interaction",
              "Mobile-friendly platform for learning on-the-go"
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>J-I-T Program</CardTitle>
            <CardDescription>Flexible, self-paced learning</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-4">$999</p>
            <ul className="space-y-2 mb-4">
              <li>Unlimited access for 12 months</li>
              <li>Certificate of completion</li>
              <li>30-day money-back guarantee</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/checkout?program=jit">
              <Button size="lg" className="w-full">Enroll Now</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-6">Course Curriculum</h2>
      <div className="space-y-4 mb-12">
        {[
          "Foundations of Psychiatric Nursing",
          "Psychopathology and Diagnostic Reasoning",
          "Psychopharmacology for PMHNPs",
          "Therapeutic Modalities in Psychiatric Care",
          "Special Populations in Psychiatric Practice",
          "Legal and Ethical Considerations in PMHNP Practice"
        ].map((module, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">Module {index + 1}: {module}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Comprehensive coverage of key topics with video lectures, reading materials, and interactive quizzes.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your PMHNP Journey?</h2>
        <p className="text-lg mb-6">Enroll in our J-I-T Program today and take the first step towards your PMHNP certification.</p>
        <Link href="/checkout?program=jit">
          <Button size="lg">Enroll in J-I-T Program</Button>
        </Link>
      </div>
    </div>
  )
}

