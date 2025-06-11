import { api } from "./client";

interface GetCoursesResponse {
  courses: {
    id: string
    name: string
  }[],
}

export async function getCourses() {
  const result = await api.get(`courses`).json<GetCoursesResponse>()

  return result
}