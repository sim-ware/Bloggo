import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PostList from './PostList'
import type { Post } from '../types'

describe('PostList', () => {
  it('renders posts', () => {
    const posts: Post[] = [
      { id: 1, title: 'Test Post', content: 'Test Content' }
    ]
    
    render(<PostList posts={posts} />)
    
    expect(screen.getByText('Test Post')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
}) 