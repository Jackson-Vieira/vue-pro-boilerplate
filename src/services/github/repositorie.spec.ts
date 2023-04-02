import { describe, it, expect } from 'vitest'
import { createHttpClient } from '../factories/httpClient'
import repositorie from './repositorie'

const httpClient = createHttpClient('https://api.github.com')

const api = repositorie(httpClient)

describe('repositoryAPI', () => {
  it('should return status code 200', async () => {
    const owner = 'octocat'
    const repo = 'Hello-World'

    const response = await api.getRepositorieLanguages(owner, repo)

    expect(response.status).toBe(200)
  })
})
