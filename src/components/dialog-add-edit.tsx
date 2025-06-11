import {
  DialogProps
} from "@radix-ui/react-dialog"

import * as Dialog from "@radix-ui/react-dialog"
import { StudentForm } from "./student-form"

interface DialogAddEditProps extends DialogProps { }

export function DialogAddEdit({ children }: DialogAddEditProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.DialogPortal>
        <Dialog.DialogOverlay className="fixed inset-0 bg-black/70" />
        <Dialog.DialogContent className="fixed space-y-10 px-6 py-8 right-0 top-0 bottom-0 h-screen min-w-[421px] z-10 bg-zinc-100 border-l border-zinc-400">
          <Dialog.DialogTitle
          className="text-xl font-bold text-zinc-900 mb-10"
          >
            Adicionar aluno
          </Dialog.DialogTitle>

          <StudentForm />
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  )
}