import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

// This would typically come from a database
const courses = [
  {
    id: 1,
    title: "Foundations of Psychiatric Nursing",
    description: "An introduction to the core principles of psychiatric nursing",
    progress: 75,
    totalLessons: 12,
    completedLessons: 9,
  },
  {
    id: 2,
    title: "Psychopharmacology for PMHNPs",
    description: "In-depth study of medications used in psychiatric treatment",
    progress: 50,
    totalLessons: 15,
    completedLessons: 7,
  },
  {
    id: 3,
    title: "Advanced Psychotherapeutic Techniques",
    description: "Explore various psychotherapy modalities used in psychiatric practice",
    progress: 30,
    totalLessons: 10,
    completedLessons: 3,
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
                <p className="text-sm text-muted-foreground">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/dashboard/courses/${course.id}`}>
                <Button>Continue Course</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

