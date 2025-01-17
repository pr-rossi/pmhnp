import Link from 'next/link'
import { BookOpen, CheckCircle, Star, Users } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive PMHNP Curriculum",
      description: "Expert-crafted content covering all essential topics for PMHNP certification."
    },
    {
      icon: Users,
      title: "Learning Community",
      description: "Join a community of PMHNP students and learn from shared experiences."
    },
    {
      icon: Star,
      title: "Practice Exams",
      description: "Access realistic practice questions and detailed explanations."
    }
  ]

  const programs = [
    {
      name: "J-I-T (Just In Time)",
      description: "Perfect for students who need immediate support and focused preparation",
      features: [
        "Intensive review materials",
        "Practice question bank",
        "24/7 access to resources",
        "Quick-start study guides"
      ],
      price: "Contact for pricing",
      popular: false
    },
    {
      name: "6 Month Program",
      description: "Comprehensive preparation with structured learning paths",
      features: [
        "Structured study schedule",
        "Monthly live Q&A sessions",
        "Practice exams",
        "Personalized feedback",
        "Study group access"
      ],
      price: "Contact for pricing",
      popular: true
    },
    {
      name: "12 Month Program",
      description: "Complete, in-depth coverage of all PMHNP topics",
      features: [
        "Full curriculum access",
        "Weekly live sessions",
        "1-on-1 mentoring",
        "Unlimited practice tests",
        "Study materials for life"
      ],
      price: "Contact for pricing",
      popular: false
    }
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Excel in Your PMHNP Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join Dr. John Rossi&apos;s comprehensive PMHNP preparation programs. 
              Get the support and resources you need to succeed in your certification journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/programs" 
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Programs
              </Link>
              <Link 
                href="/resources" 
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Free Resources <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive programs are designed to give you the knowledge, 
              confidence, and practice you need to excel in your PMHNP journey.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Program
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Select the program that best fits your preparation needs and timeline.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {programs.map((program) => (
              <div key={program.name} className={`flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${program.popular ? 'ring-2 ring-indigo-600' : ''}`}>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {program.name}
                  </h3>
                  {program.popular && (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most Popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {program.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-lg font-semibold tracking-tight text-gray-900">
                    {program.price}
                  </span>
                </p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircle className="h-6 w-5 flex-none text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}