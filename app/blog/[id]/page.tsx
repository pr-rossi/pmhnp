import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Evolving Role of PMHNPs in Modern Healthcare",
    content: `
      <p>The healthcare landscape is constantly changing, and the role of Psychiatric-Mental Health Nurse Practitioners (PMHNPs) is evolving alongside it. In this article, we'll explore how PMHNPs are shaping the future of mental health care delivery and why their role is more crucial than ever.</p>

      <h2>Expanding Access to Mental Health Care</h2>
      <p>One of the most significant impacts of PMHNPs is their ability to expand access to mental health care, especially in underserved areas. With a growing shortage of psychiatrists, PMHNPs are stepping in to fill the gap, providing essential mental health services to communities that might otherwise go without.</p>

      <h2>Integrating Physical and Mental Health Care</h2>
      <p>PMHNPs are at the forefront of integrating mental health care into primary care settings. This holistic approach recognizes the intricate connection between physical and mental health, leading to better overall patient outcomes.</p>

      <h2>Embracing Telehealth</h2>
      <p>The recent surge in telehealth adoption has opened new avenues for PMHNPs to provide care. Virtual consultations allow for greater flexibility and accessibility, making it easier for patients to receive the mental health support they need.</p>

      <h2>Advancing Evidence-Based Practice</h2>
      <p>PMHNPs are not just practitioners; they're also researchers and innovators. Many are involved in clinical research, contributing to the growing body of evidence-based practices in psychiatric care.</p>

      <h2>Conclusion</h2>
      <p>As the demand for mental health services continues to grow, the role of PMHNPs will only become more vital. Their unique blend of nursing expertise and specialized psychiatric training positions them perfectly to meet the complex mental health needs of diverse populations.</p>
    `,
    date: new Date('2025-01-15'),
    author: "Dr. John Rossi",
    category: "Career Insights"
  },
  // Add more blog posts as needed
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 hover:bg-gray-100">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
        
        <article className="prose lg:prose-xl mx-auto max-w-[48rem] bg-white p-8 rounded-lg shadow-sm">
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-bold tracking-tight !mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="font-medium">{post.author}</span>
              <span>•</span>
              <time>{format(post.date, 'MMMM d, yyyy')}</time>
              <span>•</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>
          </div>
          
          <div 
            className="prose prose-gray prose-headings:font-semibold prose-p:text-gray-600 prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>

        <div className="mt-16 mx-auto max-w-[48rem] bg-white p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-3">Enjoyed this article?</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for more insights on PMHNP practice and education.
          </p>
          <Link href="/newsletter-signup">
            <Button size="lg" className="font-medium">Subscribe to Newsletter</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

