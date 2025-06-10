import { api } from "./client";

interface GetStudentsResponse {
  students: {
    id: string
    fullName: string
    email: string
    course: string
    registration: string
    birthDate: string
  }[],
  count: number
}

interface GetStudentsRequest {
  pageIndex: number
}

export async function getStudents({ pageIndex = 0 }: GetStudentsRequest) {
  const result = await api.get(`students?pageIndex=${pageIndex}`).json<GetStudentsResponse>()

  return result
}