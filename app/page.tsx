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
      <section className="container relative mx-auto px-4 flex justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 mx-auto max-w-4xl overflow-hidden blur-[100px]">
          <div className="relative h-[300px] w-[800px] -translate-y-1/2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 dark:from-purple-500/20 dark:to-blue-500/20" />
        </div>

        <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
          <div className="space-y-4">
            <h1 className="font-heading animate-fade-up text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Master Your PMHNP Journey{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                with Confidence
              </span>
            </h1>
            <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Join Dr. John Rossi's comprehensive PMHNP preparation programs. 
              Tailored support for every stage of your psychiatric nursing career.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:space-x-4">
            <Link href="/programs">
              <Button size="lg" className="w-full px-8 font-medium transition-all hover:scale-105">
                View Programs
              </Button>
            </Link>
            <Link href="/resources">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full px-8 font-medium transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10"
              >
                Free Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 flex-col columns-1 justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Choose Your Path
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Select the program that aligns with your goals and learning pace
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-6 grid-cols-1 w-full sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:scale-105">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <CardHeader>
              <CardTitle>J-I-T Program</CardTitle>
              <CardDescription>Just In Time Learning</CardDescription>
              <p className="text-3xl font-bold mt-2">$199<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Learn at your own pace</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">24/7 access to materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Monthly live Q&A sessions</span>
                </div>
              </div>
              <Link href="/programs/jit">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:scale-105">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <CardHeader>
              <CardTitle>6 Month Program</CardTitle>
              <CardDescription>Accelerated Learning Path</CardDescription>
              <p className="text-3xl font-bold mt-2">$299<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Structured weekly modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Weekly group coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Practice assessments</span>
                </div>
              </div>
              <Link href="/programs/6-month">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all hover:shadow-lg hover:scale-105">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            <CardHeader>
              <CardTitle>12 Month Program</CardTitle>
              <CardDescription>Comprehensive Journey</CardDescription>
              <p className="text-3xl font-bold mt-2">$249<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Complete curriculum access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">1-on-1 mentoring sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Career guidance support</span>
                </div>
              </div>
              <Link href="/programs/12-month">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 flex-col columns-1 justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <Card className="mx-auto max-w-[48rem] relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-950/30 dark:to-blue-950/30" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Stay Updated with PMHNP Insights</h2>
              <p className="text-muted-foreground max-w-[85%]">
                Join our community and receive expert tips, study guides, and the latest in psychiatric nursing.
              </p>
            </div>
            <NewsletterSignup />
          </CardContent>
        </Card>
      </section>
    </>
  )
}

