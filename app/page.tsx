import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { NewsletterSignup } from '@/components/newsletter-signup'

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto px-4 flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Master Your PMHNP Journey with Confidence
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Join Dr. John Rossi's comprehensive PMHNP preparation programs. 
            Tailored support for every stage of your psychiatric nursing career.
          </p>
          <div className="space-x-4">
            <Link href="/programs">
              <Button size="lg" className="px-8">
                View Programs
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline" size="lg" className="px-8">
                Free Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 flex-col columns-1 justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Programs
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose the program that best fits your learning style and schedule
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>J-I-T Program</CardTitle>
              <CardDescription>Just In Time Learning</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Flexible Schedule</span>
              </div>
              <Link href="/programs/jit">
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>6 Month Program</CardTitle>
              <CardDescription>Accelerated Learning Path</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="text-sm">Structured Curriculum</span>
              </div>
              <Link href="/programs/6-month">
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>12 Month Program</CardTitle>
              <CardDescription>Comprehensive Journey</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Complete Preparation</span>
              </div>
              <Link href="/programs/12-month">
                <Button className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 flex-col columns-1 justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <Card>
          <CardContent className="p-6">
            <NewsletterSignup />
          </CardContent>
        </Card>
      </section>
    </>
  )
}

