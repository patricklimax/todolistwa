import './globals.css'
import { FormEvent, useEffect, useState } from 'react';
import { IconCheckbox, IconClipboardText, IconDeviceFloppy, IconTrashX } from '@tabler/icons-react';
import { MainPage } from './components/main/main';

type TaskProps = {
  id: string,
  title: string,
  time: string,
  isCompleted: boolean
}


export default function App() {
  const dataLocalStorage = (JSON.parse(localStorage.getItem('TAREFAS') || '[]'))
  const [tasks, setTasks] = useState<TaskProps[]>(dataLocalStorage);
  const tasksLength = tasks.length
  const taskFinish = tasks.filter(task => task.isCompleted === true).length
  const [newTask, setNewTask] = useState('');
  const currentDate = new Date().toLocaleDateString('pt-br', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const addNewTask = (e: FormEvent) => {
    if (newTask === "") {
      alert('Obrigatório inserir uma tarefa.')
    } else {
      e.preventDefault();
      setTasks([...tasks,
      {
        id: crypto.randomUUID(),
        title: newTask,
        time: currentDate,
        isCompleted: false
      }])
      setNewTask('')
    }
  }

  const onKeyDown = (e: { which: number; }) => {
    const ENTER_KEY = 13
    const ESCAPE_KEY = 27
    if (e.which === ENTER_KEY) {
      if (newTask === "") {
        alert('Obrigatório inserir uma tarefa.')
      } else {
        setTasks([...tasks,
        {
          id: crypto.randomUUID(),
          title: newTask,
          time: currentDate,
          isCompleted: false
        }])
        setNewTask('')
      }
    } else if (e.which === ESCAPE_KEY) {
      setNewTask('')
    }
  }

  const taskCompleted = (id: string) => {
    setTasks(tasks.map(tasks => (tasks.id === id
      ? { ...tasks, isCompleted: !tasks.isCompleted }
      : tasks)))
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('TAREFAS', JSON.stringify(tasks))
    }
  }, [tasks])

  return (
    <MainPage >
      <section className='w-full py-5 md:w-3/4 mx-auto'>
        <div className='flex gap-4 justify-center items-center rounded p-2 md:px-0 bg-slate-800'>
          <input
            className='w-full md:w-1/2 h-10 bg-transparent border border-[#07090e] rounded px-4 outline-none focus:outline-none text-slate-400 placeholder:text-slate-400 text-base font-medium'
            type="text"
            placeholder='O que você precisa fazer?'
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            onKeyDown={onKeyDown} />

          <button className='button save' onClick={addNewTask} title='Salvar tarefa?'>
            <IconDeviceFloppy stroke={2} size={22} />
          </button>
        </div>

        <div className='py-6 text-sm font-medium text-lime-500 flex justify-between '>
          <p>Tarefas criadas
            <span className='text-xs ml-2 px-2 py-1 bg-slate-800 rounded-full text-slate-400'>
              {tasksLength}
            </span>
          </p>
          <p>Tarefas concluídas
            <span className='text-xs ml-2 px-2 py-1 bg-slate-800 rounded-full text-slate-400'>
              {taskFinish} de {tasksLength}
            </span>
          </p>
        </div>

        <div className='w-full'>
          <ul className='w-full flex flex-col gap-4 rounded'>
            {tasks.map(task => (
              <li
                key={task.id}
                className='flex justify-between gap-1 items-center border border-slate-800 px-2 py-1 md:pl-4 rounded text-base'>
                <div className='text-slate-400 w-full'>
                  <p className={['taskTitle', task.isCompleted ? "cheked" : ""].join(" ")}>
                    {task.title}
                  </p>
                  <p className='text-[10px] text-white'>{task.time}</p>
                </div>
                <div className='flex gap-1 md:gap-2 text-sm text-gray-300'>
                  <button
                    className='button finished'
                    onClick={() => taskCompleted(task.id)}
                    title='Tarefa finalizada'>
                    <IconCheckbox stroke={2} size={22} />
                  </button>

                  <button
                    className='button remove'
                    onClick={() => removeTask(task.id)}
                    title='Remover tarefa'>
                    <IconTrashX stroke={2} size={22} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {tasksLength <= 0 && (
            <section className="w-full flex flex-col items-center justify-center bg-slate-800 rounded py-12 gap-3">
              <IconClipboardText size={50} color={'#84cc16'} stroke={2} />
              <div className='text-slate-400'>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </section>
          )}

        </div>
      </section>
    </MainPage>
  )
}

