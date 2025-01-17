import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Evolving Role of PMHNPs in Modern Healthcare",
    excerpt: "Explore how Psychiatric-Mental Health Nurse Practitioners are shaping the future of mental health care delivery.",
    date: new Date('2025-01-15'),
    author: "Dr. John Rossi",
    category: "Career Insights"
  },
  {
    id: 2,
    title: "Understanding the Latest Updates to DSM-5-TR",
    excerpt: "A comprehensive overview of the recent changes to the Diagnostic and Statistical Manual of Mental Disorders.",
    date: new Date('2025-01-10'),
    author: "Dr. Emily Chen",
    category: "Clinical Knowledge"
  },
  {
    id: 3,
    title: "Self-Care Strategies for PMHNP Students",
    excerpt: "Essential tips for maintaining your own mental health while pursuing your PMHNP certification.",
    date: new Date('2025-01-05'),
    author: "Sarah Johnson, PMHNP",
    category: "Student Life"
  },
  // Add more blog posts as needed
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">PMHNP Insights Blog</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.category}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <p className="text-sm text-muted-foreground">
                By {post.author} • {formatDistanceToNow(post.date, { addSuffix: true })}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.id}`}>
                <Button variant="outline">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated with PMHNP Insights</h2>
        <p className="text-lg mb-6">
          Subscribe to our newsletter for the latest articles, study tips, and PMHNP news.
        </p>
        <Link href="/newsletter-signup">
          <Button size="lg">Subscribe to Newsletter</Button>
        </Link>
      </div>
    </div>
  )
}

