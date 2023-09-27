import { IconSettingsCode } from "@tabler/icons-react"

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col items-center py-6 text-xs text-lime-500 bg-[#07090e]">
      {/* <div className="flex gap-1 items-center">
        <p>Desenvolvido com</p>
        <span><IconHeartCode size={16} />
        </span>
      </div> */}
      <p> {/*Todos os direitos reservados - */}{year}</p>
      <div className="flex gap-1 items-center">
        <p>Em construção... </p>
        <span>
          <IconSettingsCode size={16} />
        </span>
      </div>
    </footer>
  )
}