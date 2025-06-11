'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getCourses } from "@/http/get-all-courses"
import { useQuery } from "@tanstack/react-query"

export function StudentForm() {

  const { data, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCourses(),
  })

  return (
    <form className="space-y-4">
      <div className="space-y-1 flex flex-col">
        <label htmlFor="fullName" className="text-base font-semibold">Nome completo</label>
        <input type="name" id="fullName" defaultValue={""} className="px-4 py-2 rounded border-[1.5px] border-zinc-400 bg-transparent text-sm focus:border-purple-500" />
      </div>

      <div className="space-y-1 flex flex-col">
        <label htmlFor="email" className="text-base font-semibold">E-mail do estudante</label>
        <input type="email" id="email" defaultValue={""} className="px-4 py-2 rounded border-[1.5px] border-zinc-400 bg-transparent text-sm focus:border-purple-500" />
      </div>


      <div className="space-y-1 flex flex-col">
        <label htmlFor="email" className="text-base font-semibold">Selecione o curso</label>
        {isLoading ? (
          <p>Loading...</p>
        ): (
          <Select>
          <SelectTrigger className = "w-full shadow-none border-zinc-400 rounded">
            <SelectValue placeholder = "" />
      </SelectTrigger>
      <SelectContent>
        {data && data.courses.map((course) => (
          <SelectItem key={course.id} value={course.id}>
            {course.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
      </div >


      <div className="flex items-center gap-4">
        <div className="space-y-1 flex flex-col">
          <label htmlFor="registration" className="text-base font-semibold">Número da matrícula</label>
          <input type="name" id="registration" defaultValue={""} className="px-4 py-2 rounded border-[1.5px] border-zinc-400 bg-transparent text-sm focus:border-purple-500 max-w-44" />
        </div>

        <div className="space-y-1 flex flex-col">
          <label htmlFor="name" className="text-base font-semibold">Data de nascimento</label>
          <input type="name" id="name" defaultValue={""} className="px-4 py-2 rounded border-[1.5px] border-zinc-400 bg-transparent text-sm focus:border-purple-500 max-w-44" />
        </div>
      </div>

      <button
        type="submit"
        className="bg-purple-500 px-6 py-3 rounded-lg text-base text-zinc-50 font-bold w-full"
      >
        Cadastrar novo aluno
      </button>
    </form >
  )
}