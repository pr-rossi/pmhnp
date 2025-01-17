// app/(marketing)/about/page.tsx

import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react'

const AboutPage: NextPage = () => {
  const stats = [
    { id: 1, name: 'Students Helped', value: '1,000+' },
    { id: 2, name: 'Pass Rate', value: '95%' },
    { id: 3, name: 'Years Experience', value: '15+' },
    { id: 4, name: 'Practice Questions', value: '2,000+' },
  ]

  const values = [
    {
      icon: GraduationCap,
      name: 'Excellence in Education',
      description: 'We maintain the highest standards in PMHNP education, constantly updating our materials to reflect the latest developments in psychiatric care.'
    },
    {
      icon: Users,
      name: 'Student Success Focus',
      description: 'Every aspect of our program is designed with your success in mind. We provide personalized support and guidance throughout your journey.'
    },
    {
      icon: Award,
      name: 'Expert Leadership',
      description: 'Led by Dr. John Rossi, our team brings decades of combined experience in psychiatric nursing and education.'
    },
    {
      icon: BookOpen,
      name: 'Comprehensive Resources',
      description: 'From study materials to practice exams, we provide all the tools you need to succeed in your PMHNP certification.'
    }
  ]

  return (
    <main className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <div className="absolute top-0 left-0 right-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clarity Education Systems was founded with a clear mission: to provide the highest quality 
              PMHNP test preparation and education. Under the leadership of Dr. John Rossi, we've helped 
              thousands of students achieve their dreams of becoming Psychiatric Mental Health Nurse Practitioners.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Content section */}
      <div className="mt-32 overflow-hidden sm:mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Mission</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Leader in PMHNP Education</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Clarity Education Systems, we believe in providing more than just test preparation. 
                  We offer a comprehensive educational experience that prepares you for both your certification 
                  exam and your future career as a Psychiatric Mental Health Nurse Practitioner.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {values.map((value) => (
                    <div key={value.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <value.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                        {value.name}
                      </dt>
                      <dd className="inline ml-1">{" "}{value.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/path-to-image.jpg"
                alt="Description"
                width={500}
                height={300}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gray-50" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join thousands of successful students who have trusted Clarity Education Systems 
            for their PMHNP certification preparation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/programs"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Our Programs
            </a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage