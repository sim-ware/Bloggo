import React from 'react'
import type { Post } from '../types'

interface Props {
  posts: Post[]
}

export default function PostList({ posts }: Props) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <article key={post.id} className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.content}</p>
        </article>
      ))}
    </div>
  )
} 