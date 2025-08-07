import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type BlogMeta = {
  slug: string
  title: string
  date: string
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<BlogMeta[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/blogs/index.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load blog index')
        return res.json()
      })
      .then(setBlogs)
      .catch(() => setError('Could not load blog list.'))
  }, [])

  if (error) return <div>{error}</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {blogs.map(blog => (
          <li key={blog.slug}>
            <Link
              to={`/blogs/${blog.slug}`}
              className="text-xl font-semibold hover:underline text-blue-600 dark:text-blue-400"
            >
              {blog.title}
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}