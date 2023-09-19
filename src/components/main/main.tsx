import { Header } from "../header"
import { TitleProject } from "../titleProject"
import { Footer } from "../footer/footer"

type Props = {
  children: React.ReactNode,
}

export const MainPage = ({ children }: Props) => {
  return (
    <main className="container mx-auto min-h-screen flex flex-col antialiased relative px-4 md-0 pt-16 justify-between">
      <div>
        <Header />
        <TitleProject title={"Lista de "} subtitle={"Tarefas"} />
        {children}
      </div>
      <Footer />
    </main>
  )
}
