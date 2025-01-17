import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Clarity Education Systems</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            Clarity Education Systems, led by Dr. John Rossi, is dedicated to providing top-tier education and preparation for Psychiatric-Mental Health Nurse Practitioner (PMHNP) students.
          </p>
          <p className="text-lg mb-4">
            Our mission is to empower the next generation of PMHNPs with the knowledge, skills, and confidence they need to excel in their careers and make a positive impact on mental health care.
          </p>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Dr. John Rossi"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-6">Why Choose Clarity Education Systems?</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Expert-Led Instruction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn from Dr. John Rossi, a renowned expert in psychiatric nursing with years of clinical and educational experience.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comprehensive Curriculum</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our programs cover all aspects of PMHNP practice, from diagnostics to pharmacology and psychotherapy techniques.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Flexible Learning Options</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Choose from our range of programs to find the perfect fit for your learning style and schedule.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-6">Meet Dr. John Rossi</h2>
      
      <div className="bg-muted p-6 rounded-lg mb-12">
        <p className="text-lg mb-4">
          Dr. John Rossi is a board-certified Psychiatric-Mental Health Nurse Practitioner with over 20 years of experience in mental health care and education. He has dedicated his career to advancing the field of psychiatric nursing and preparing the next generation of PMHNPs.
        </p>
        <p className="text-lg">
          With a passion for education and a deep understanding of the challenges faced by PMHNP students, Dr. Rossi founded Clarity Education Systems to provide comprehensive, accessible, and effective preparation programs.
        </p>
      </div>
    </div>
  )
}

