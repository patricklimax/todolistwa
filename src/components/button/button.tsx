import { ReactNode } from "react";

type Props = {
  title?: string,
  onClick: () => void;
  children: ReactNode;
}

export const ButtonSave = ({ title, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className='px-1 py-2 bg-slate-800 text-lime-500 text-sm font-medium transition-all duration-500 ease-in rounded flex items-center justify-center md:hover:bg-emerald-900 md:hover:text-emerald-200'>
      <span className="mx-1">
        {children}
      </span>
      {title}
    </button>
  )
}

export const ButtonEdit = ({ title, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className='px-1 py-2 bg-slate-800 text-lime-500 text-sm font-medium transition-all duration-500 ease-in rounded flex items-center justify-center md:hover:bg-orange-900 md:hover:text-orange-200'>
      <span className="mx-1">
        {children}
      </span>
      {title}
    </button>
  )
}

export const ButtonChecked = ({ title, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className='px-1 py-2 bg-slate-800 text-lime-500 text-sm font-medium transition-all duration-500 ease-in rounded flex items-center justify-center md:hover:bg-blue-900 md:hover:text-blue-200'>
      <span className="mx-1">
        {children}
      </span>
      {title}
    </button>
  )
}

export const ButtonRemove = ({ title, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className='px-1 py-2 bg-slate-800 text-lime-500 text-sm font-medium transition-all duration-500 ease-in rounded flex items-center justify-center md:hover:bg-red-900 md:hover:text-red-200'>
      <span className="mx-1">
        {children}
      </span>
      {title}
    </button>
  )
}