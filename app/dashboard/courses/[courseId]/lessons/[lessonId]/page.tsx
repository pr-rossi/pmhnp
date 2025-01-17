'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// This would typically come from a database
const lessonData = {
  id: 1,
  title: "History of Psychiatric Nursing",
  content: `
    <h2>Introduction</h2>
    <p>Psychiatric nursing has a rich and complex history that spans several centuries. This lesson will explore the key developments and figures that have shaped the field into what it is today.</p>
    
    <h2>Early Beginnings</h2>
    <p>The roots of psychiatric nursing can be traced back to the 18th century when the treatment of mental illness began to shift from punishment to care. Key points include:</p>
    <ul>
      <li>The work of Philippe Pinel in France, who advocated for more humane treatment of the mentally ill.</li>
      <li>The establishment of the first psychiatric hospitals in the late 1700s and early 1800s.</li>
    </ul>

    <h2>The Era of Asylum Care</h2>
    <p>The 19th century saw the rise of large psychiatric asylums. This period was characterized by:</p>
    <ul>
      <li>The belief that a structured environment could cure mental illness.</li>
      <li>The emergence of "moral treatment" as a therapeutic approach.</li>
      <li>The gradual recognition of nursing as a crucial component of psychiatric care.</li>
    </ul>

    <h2>The Birth of Modern Psychiatric Nursing</h2>
    <p>The early 20th century marked significant advancements in the field:</p>
    <ul>
      <li>The work of Dorothea Dix in advocating for better conditions in mental hospitals.</li>
      <li>The establishment of formal training programs for psychiatric nurses.</li>
      <li>The influence of psychoanalytic theory on nursing practice.</li>
    </ul>

    <h2>Post-World War II Developments</h2>
    <p>The latter half of the 20th century brought revolutionary changes:</p>
    <ul>
      <li>The introduction of psychotropic medications in the 1950s.</li>
      <li>The deinstitutionalization movement and the shift towards community-based care.</li>
      <li>The development of specialized roles like the Psychiatric-Mental Health Nurse Practitioner.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Understanding the history of psychiatric nursing provides valuable context for current practices and future developments in the field. As you progress in your studies, you'll see how this rich history informs modern approaches to mental health care.</p>
  `,
  quiz: [
    {
      question: "Who advocated for more humane treatment of the mentally ill in France during the 18th century?",
      options: ["Sigmund Freud", "Philippe Pinel", "Florence Nightingale", "Dorothea Dix"],
      correctAnswer: 1
    },
    {
      question: "What therapeutic approach emerged during the era of asylum care?",
      options: ["Electroconvulsive therapy", "Psychoanalysis", "Moral treatment", "Cognitive behavioral therapy"],
      correctAnswer: 2
    },
    {
      question: "Which development in the 1950s revolutionized psychiatric treatment?",
      options: ["Introduction of psychotropic medications", "Establishment of formal nursing programs", "Deinstitutionalization movement", "Rise of psychoanalytic theory"],
      correctAnswer: 0
    }
  ]
}

export default function LessonPage({ params }: { params: { courseId: string, lessonId: string } }) {
  const [activeTab, setActiveTab] = useState('content')
  const [quizAnswers, setQuizAnswers] = useState<number[]>([])
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const router = useRouter()

  const handleQuizSubmit = () => {
    setQuizSubmitted(true)
  }

  const handleNextLesson = () => {
    // This would typically navigate to the next lesson
    // For now, we'll just go back to the course page
    router.push(`/dashboard/courses/${params.courseId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{lessonData.title}</h1>
        <Button variant="outline" onClick={() => router.push(`/dashboard/courses/${params.courseId}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Course
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="content">Lesson Content</TabsTrigger>
              <TabsTrigger value="quiz">Quiz</TabsTrigger>
            </TabsList>
            <TabsContent value="content">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: lessonData.content }} />
            </TabsContent>
            <TabsContent value="quiz">
              <div className="space-y-4">
                {lessonData.quiz.map((question, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{question.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id={`question-${index}-option-${optionIndex}`}
                            name={`question-${index}`}
                            value={optionIndex}
                            checked={quizAnswers[index] === optionIndex}
                            onChange={() => {
                              const newAnswers = [...quizAnswers]
                              newAnswers[index] = optionIndex
                              setQuizAnswers(newAnswers)
                            }}
                            disabled={quizSubmitted}
                          />
                          <label htmlFor={`question-${index}-option-${optionIndex}`}>{option}</label>
                          {quizSubmitted && optionIndex === question.correctAnswer && (
                            <CheckCircle className="text-green-500 h-4 w-4" />
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
                {!quizSubmitted && (
                  <Button onClick={handleQuizSubmit}>Submit Quiz</Button>
                )}
                {quizSubmitted && (
                  <div>
                    <p className="text-lg font-semibold">
                      You scored {quizAnswers.filter((answer, index) => answer === lessonData.quiz[index].correctAnswer).length} out of {lessonData.quiz.length}
                    </p>
                    <Button onClick={() => setActiveTab('content')}>Review Lesson</Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" disabled>Previous Lesson</Button>
          <Button onClick={handleNextLesson}>Next Lesson</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

