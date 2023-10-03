import { IconClipboardText } from "@tabler/icons-react"

export const NoTask = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-slate-800 rounded py-28 md:py-12 gap-3">
      <IconClipboardText size={50} color={'#84cc16'} stroke={2} />
      <div className='text-slate-400 text-center'>
        <p>Você ainda não tem tarefas cadastradas.</p>
        <p>Crie tarefas e mantenha sua rotina organizada.</p>
      </div>
    </section>
  )
}