import { Header } from "@/components/header";
import { IconButton } from "@/components/icon-button";
import { Table } from "@/components/table";
import { TableCell } from "@/components/table/table-cell";
import { TableHeader } from "@/components/table/table-header";
import { TableRow } from "@/components/table/table-row";
import { getStudents } from "@/http/get-all-students";
import { calculateAge } from "@/utils/calculate-age";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Trash2, UserPen } from "lucide-react";

interface HomeProps {
  searchParams: {
    page?: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = Number(searchParams.page) || 1
  const pageIndex = currentPage - 1

  const { students, count: total } = await getStudents({ pageIndex })

  const totalPages = Math.ceil(total / 10)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <main className="w-full min-h-screen bg-zinc-50 px-8 py-6">
      <Header />

      <Table>
        <thead>
          <tr className="border-b border-zinc-400">
            <TableHeader>Aluno</TableHeader>
            <TableHeader>Curso</TableHeader>
            <TableHeader>Matricula</TableHeader>
            <TableHeader>Idade</TableHeader>
            <TableHeader>Ações</TableHeader>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => {
            return (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-base text-zinc-900">{student.fullName}</span>
                    <p className="font-bold text-sm text-zinc-400">{student.email}</p>
                  </div>
                </TableCell>

                <TableCell>{student.course}</TableCell>
                <TableCell>{student.registration}</TableCell>
                <TableCell>
                  {calculateAge(student.birthDate)} anos
                </TableCell>
                <TableCell>
                  <div className="flex gap-1.5 items-center">
                    <IconButton transparent>
                      <Trash2 className="size-6 text-red-500" />
                    </IconButton>
                    <IconButton transparent>
                      <UserPen className="size-6 text-purple-600" />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <TableCell className="text-zinc-900" colSpan={3}>
              Exibindo {currentPage} de {total} itens
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span className="text-zinc-500">
                  Página {currentPage} de {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton
                    disabled={isFirstPage}
                    href={`/?page=1`}
                  >
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={isFirstPage}
                    href={`/?page=${currentPage - 1}`}
                  >
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={isLastPage}
                    href={`/?page=${currentPage + 1}`}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={isLastPage}
                    href={`/?page=${totalPages}`}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </main>
  );
}
