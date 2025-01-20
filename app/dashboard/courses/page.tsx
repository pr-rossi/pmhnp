import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ArrowRight, BookOpen, Clock, Trophy } from 'lucide-react'

// This would typically come from a database
const courses = [
  {
    id: 1,
    title: "Foundations of Psychiatric Nursing",
    description: "An introduction to the core principles of psychiatric nursing",
    progress: 75,
    totalLessons: 12,
    completedLessons: 9,
    estimatedTime: "6 hours remaining",
    lastAccessed: "2 days ago"
  },
  {
    id: 2,
    title: "Psychopharmacology for PMHNPs",
    description: "In-depth study of medications used in psychiatric treatment",
    progress: 50,
    totalLessons: 15,
    completedLessons: 7,
    estimatedTime: "8 hours remaining",
    lastAccessed: "1 day ago"
  },
  {
    id: 3,
    title: "Advanced Psychotherapeutic Techniques",
    description: "Explore various psychotherapy modalities used in psychiatric practice",
    progress: 30,
    totalLessons: 10,
    completedLessons: 3,
    estimatedTime: "7 hours remaining",
    lastAccessed: "5 days ago"
  },
]

export default function CoursesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-8">
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
          <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          </div>
        </div>

        <div className="relative space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            My Courses
          </h1>
          <p className="text-muted-foreground">
            Track your progress and continue your learning journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="relative overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-600" />
              
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium text-purple-600">{course.progress}%</span>
                  </div>
                  <Progress 
                    value={course.progress} 
                    className="bg-purple-100 dark:bg-purple-950/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Trophy className="h-4 w-4 text-purple-500" />
                    <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span>{course.estimatedTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <BookOpen className="h-4 w-4 text-purple-500" />
                  <span>Last accessed {course.lastAccessed}</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Link href={`/dashboard/courses/${course.id}`} className="w-full">
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Continue Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

