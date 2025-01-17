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

  // ... rest of the marketing page content from (marketing)/page.tsx
}