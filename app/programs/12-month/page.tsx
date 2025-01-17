import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function TwelveMonthProgramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">12-Month Comprehensive PMHNP Program</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            Our 12-Month Comprehensive Program offers the most thorough PMHNP preparation available. This in-depth program provides a balanced pace of learning with extensive support and resources to ensure mastery of all PMHNP competencies.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Program Features:</h2>
          <ul className="space-y-2">
            {[
              "Comprehensive 12-month curriculum",
              "Weekly live lectures with Dr. John Rossi and guest experts",
              "Monthly 1-on-1 mentoring sessions",
              "Extensive study materials, case studies, and practice exams",
              "Interactive workshops and skill-building sessions",
              "Clinical simulation experiences",
              "Personalized learning plan and progress tracking"
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
            <CardTitle>12-Month Comprehensive Program</CardTitle>
            <CardDescription>In-depth, supportive learning experience</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-4">$3,999</p>
            <ul className="space-y-2 mb-4">
              <li>Full access for 12 months</li>
              <li>Certificate of completion</li>
              <li>30-day money-back guarantee</li>
              <li>Bonus: PMHNP Certification Exam Prep Course</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/checkout?program=12-month">
              <Button size="lg" className="w-full">Enroll Now</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-6">Course Curriculum</h2>
      <div className="space-y-4 mb-12">
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
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">Month {index + 1}: {module}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>In-depth exploration with lectures, case studies, assignments, and hands-on activities to ensure comprehensive understanding and skill development.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Embark on Your Comprehensive PMHNP Journey</h2>
        <p className="text-lg mb-6">Enroll in our 12-Month Comprehensive Program for the most thorough preparation for your PMHNP career.</p>
        <Link href="/checkout?program=12-month">
          <Button size="lg">Enroll in 12-Month Program</Button>
        </Link>
      </div>
    </div>
  )
}

