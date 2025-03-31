import React, { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import type { Post } from './types'

export default function App() {
  const [posts, setPosts] = useState<Post[]>([])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Bloggo</h1>
      <PostForm onPostCreated={(post) => setPosts([...posts, post])} />
      <PostList posts={posts} />
    </div>
  )
} 