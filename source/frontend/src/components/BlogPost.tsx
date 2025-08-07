import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { marked } from 'marked'
import './styles/BlogPost.css'

function BlogPost() {
  const { slug } = useParams()
  const [contentHtml, setContentHtml] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    (
      async () => {
        try {
            const res = await fetch(`/blogs/${slug}.md`)
            if (!res.ok) throw new Error('Post not found')

            const markdown = await res.text()
            const html = await Promise.resolve(marked(markdown)) // TS-safe
            setContentHtml(html)
        } catch (err: any) {
        setError(err.message)
        }
      }
    )()
  }, [slug])

  if (error) return <p>{error}</p>
  if (!contentHtml) return <p>Loading...</p>

  return (
    <article className="markdown-container">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}

export default BlogPost
