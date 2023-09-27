import './main.css'
import { Header } from "../header"
import { TitleProject } from "../titleProject"
import { Footer } from "../footer/footer"

type Props = {
  children: React.ReactNode,
}

export const MainPage = ({ children }: Props) => {
  return (
    <main
      className="mainBox mx-auto min-h-screen pt-16 flex flex-col antialiased relative justify-between">
      <div>
      <Header />
      <TitleProject title={"Lista de "} subtitle={"Tarefas"} />
      <div className='px-4 md:px-0'>
        {children}
      </div>

      </div>
      <Footer />
    </main>
  )
}
