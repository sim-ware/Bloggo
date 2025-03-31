import { describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import app from './index.js'
import db from './db.js'

beforeEach(() => {
  db.exec('DELETE FROM posts')
})

describe('Blog API', () => {
  it('GET /posts returns empty array initially', async () => {
    const res = await request(app).get('/posts')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })

  it('POST /posts adds a post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ title: 'Minimal', content: 'Yes it is.' })

    expect(res.status).toBe(201)
    expect(res.body.title).toBe('Minimal')
    expect(res.body.content).toBe('Yes it is.')

    const getRes = await request(app).get('/posts')
    expect(getRes.body).toHaveLength(1)
  })
})
