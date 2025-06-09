import { UserRoundPlus } from "lucide-react";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <h1 className="font-bold text-lg">Listagem de alunos</h1>
      <button className="bg-purple-500 px-6 py-3 rounded-lg text-base text-zinc-50 font-bold flex items-center gap-2.5">
        <UserRoundPlus className="size-5" />
        Adicionar novo aluno
      </button>
    </header>
  )
}