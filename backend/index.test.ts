import { describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import app from './index.js'
import db from './db.js'

const TEST_POST = { title: 'Minimal', content: 'Yes it is.' }

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
      .send(TEST_POST)

    expect(res.status).toBe(201)
    expect(res.body).toMatchObject(TEST_POST)
    expect(res.body.id).toBeDefined()

    const getRes = await request(app).get('/posts')
    expect(getRes.body).toHaveLength(1)
  })

  it('POST /posts requires title and content', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ title: 'Missing content' })

    expect(res.status).toBe(400)
  })
})
