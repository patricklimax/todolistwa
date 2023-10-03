import { ReactNode } from "react"

type NotificationProps = {
  children: ReactNode,
  title: string
}

export const NotificationTask = ({ title, children }: NotificationProps) => {
  return (
    <div className="flex items-center gap-1">
      {title}
      <span className='text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-400'>
        {children}
      </span>
    </div>
  )
}