import { Header } from "@/components/header";
import { IconButton } from "@/components/icon-button";
import { Table } from "@/components/table";
import { TableCell } from "@/components/table/table-cell";
import { TableHeader } from "@/components/table/table-header";
import { TableRow } from "@/components/table/table-row";
import { Eye, Trash2, UserPen } from "lucide-react";

export default function Home() {
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
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-base text-zinc-900">Marcos Paulo</span>
                    <p className="font-bold text-sm text-zinc-400">marcospaullo552@gmail.com</p>
                  </div>
                </TableCell>

                <TableCell>Ciência da Computação</TableCell>
                <TableCell>0000000000</TableCell>
                <TableCell>20 anos</TableCell>
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
      </Table>
    </main>
  );
}
