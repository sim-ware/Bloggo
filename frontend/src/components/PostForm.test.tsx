import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PostForm from './PostForm'
import type { Post } from '../types'

describe('PostForm', () => {
  it('calls onPostCreated when form is submitted', async () => {
    const mockPost: Post = { id: 1, title: 'Test', content: 'Content' }
    const onPostCreated = vi.fn()
    
    // Mock fetch for this test
    const mockFetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve(mockPost)
    })
    global.fetch = mockFetch

    render(<PostForm onPostCreated={onPostCreated} />)
    
    // Use await findByPlaceholderText to ensure elements are in the DOM
    const titleInput = await screen.findByPlaceholderText('Post title')
    const contentInput = await screen.findByPlaceholderText('Post content')
    const submitButton = await screen.findByRole('button')

    // Simulate user interactions
    await userEvent.type(titleInput, 'Test')
    await userEvent.type(contentInput, 'Content')
    await userEvent.click(submitButton)

    // Wait for the fetch and state updates to complete
    await vi.waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        'http://localhost:3000/posts',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'Test', content: 'Content' })
        })
      )
      expect(onPostCreated).toHaveBeenCalledWith(mockPost)
    })

    // Verify form was reset
    expect(titleInput).toHaveValue('')
    expect(contentInput).toHaveValue('')
  })
}) 