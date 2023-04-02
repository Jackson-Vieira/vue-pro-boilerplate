import type { AxiosInstance } from 'axios'


interface getRepositorieLanguagesResponse {
  data: {
    [key: string]: number
  }
}

export default (httpClient: AxiosInstance) => ({
  getRepositorieLanguages: async (owner: string, repo: string) => {
    const response = await httpClient.get<getRepositorieLanguagesResponse>(`/repos/${owner}/${repo}/languages`)

    return {
      data: response.data,
      status: response.status
    }
  }
})
