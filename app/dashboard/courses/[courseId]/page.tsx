import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// This would typically come from a database
const courses = [
  {
    id: 1,
    title: "Foundations of Psychiatric Nursing",
    description: "An introduction to the core principles of psychiatric nursing",
    progress: 75,
    totalLessons: 12,
    completedLessons: 9,
    modules: [
      {
        title: "Introduction to Psychiatric Nursing",
        lessons: [
          { id: 1, title: "History of Psychiatric Nursing", completed: true },
          { id: 2, title: "Roles and Responsibilities of PMHNPs", completed: true },
          { id: 3, title: "Ethical Considerations in Mental Health Care", completed: true },
        ],
      },
      {
        title: "Basic Concepts in Mental Health",
        lessons: [
          { id: 4, title: "Understanding Mental Health and Illness", completed: true },
          { id: 5, title: "Biopsychosocial Model of Mental Health", completed: true },
          { id: 6, title: "Stigma and Mental Health Advocacy", completed: false },
        ],
      },
      {
        title: "Assessment in Psychiatric Nursing",
        lessons: [
          { id: 7, title: "Mental Status Examination", completed: true },
          { id: 8, title: "Psychiatric Interview Techniques", completed: true },
          { id: 9, title: "Risk Assessment and Management", completed: false },
        ],
      },
      {
        title: "Therapeutic Communication",
        lessons: [
          { id: 10, title: "Principles of Therapeutic Communication", completed: true },
          { id: 11, title: "Active Listening and Empathy", completed: true },
          { id: 12, title: "Motivational Interviewing", completed: false },
        ],
      },
    ],
  },
  // Add more courses as needed
]

export default function CourseContentPage({ params }: { params: { courseId: string } }) {
  const course = courses.find(c => c.id === parseInt(params.courseId))

  if (!course) {
    notFound()
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <Button>Resume Course</Button>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium">Course Progress</div>
            <div className="text-sm text-muted-foreground">{course.completedLessons} / {course.totalLessons} lessons completed</div>
          </div>
          <Progress value={course.progress} className="h-2" />
        </CardContent>
      </Card>

      <Tabs defaultValue="modules" className="space-y-4">
        <TabsList>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
        </TabsList>
        <TabsContent value="modules" className="space-y-4">
          {course.modules.map((module, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>
                  {module.lessons.filter(lesson => lesson.completed).length} / {module.lessons.length} lessons completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        {lesson.completed ? (
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        ) : (
                          <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{lesson.title}</span>
                      </div>
                      <Link href={`/dashboard/courses/${params.courseId}/lessons/${lesson.id}`}>
                        <Button variant="outline" size="sm">
                          {lesson.completed ? 'Review' : 'Start'}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
              <CardDescription>Additional materials to support your learning</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-500 hover:underline">Course Textbook PDF</a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">Lecture Slides</a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">Supplementary Reading List</a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">Practice Quizzes</a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="discussions">
          <Card>
            <CardHeader>
              <CardTitle>Course Discussions</CardTitle>
              <CardDescription>Engage with your peers and instructors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No discussions have been started yet.</p>
            </CardContent>
            <CardFooter>
              <Button>Start a New Discussion</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

