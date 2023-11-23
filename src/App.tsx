import './globals.css'
import { FormEvent, useEffect, useState } from 'react';
import { IconCheckbox, IconChecks, IconDeviceFloppy, IconTrashX } from '@tabler/icons-react';
import { MainPage } from './components/main/main';
import { ButtonChecked, ButtonRemove } from './components/button/button';
import { NoTask } from './components/noTask/noTask';
import { NotificationTask } from './components/notificationsTask/notification';
import { MagicMotion } from 'react-magic-motion';

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

  const addNewTask = (e: FormEvent): void => {
    if (newTask === "") {
      alert('Obrigatório inserir uma tarefa.')
    } else {
      e.preventDefault();

      const taskToSave = {
        id: crypto.randomUUID(),
        title: newTask,
        time: currentDate,
        isCompleted: false
      }
      setTasks(([...tasks, taskToSave])
        .sort((a: TaskProps, b: TaskProps): 1 | -1 => {
          if (a.isCompleted < b.isCompleted) {
            return -1
          } else {
            return 1
          }
        }))
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
        setTasks(([...tasks,
        {
          id: crypto.randomUUID(),
          title: newTask,
          time: currentDate,
          isCompleted: false
        }].sort((a: TaskProps, b: TaskProps): 1 | -1 => {
          if (a.isCompleted < b.isCompleted) {
            return -1
          } else {
            return 1
          }
        })))
        setNewTask('')
      }
    } else if (e.which === ESCAPE_KEY) {
      setNewTask('')
    }
  }

  const taskCompleted = (id: string) => {
    setTasks((tasks.map(tasks => (tasks.id === id
      ? { ...tasks, isCompleted: !tasks.isCompleted }
      : tasks)).sort((a: TaskProps, b: TaskProps): 1 | -1 => {
        if (a.isCompleted < b.isCompleted) {
          return -1
        } else {
          return 1
        }
      })))
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
      <MagicMotion>
        <section className='w-full md:w-3/4 mx-auto'>
          <div className='flex gap-2 justify-center items-center rounded p-2 md:px-0 bg-slate-800'>
            <input
              className='inputSave border border-[#07090e]'
              type="text"
              placeholder='O que você precisa fazer?'
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              onKeyDown={onKeyDown} />

            <button className='button save' onClick={addNewTask} title='Salvar tarefa?'>
              <IconDeviceFloppy stroke={2} size={22} />
            </button>
          </div>

          <div className='py-6 text-sm font-medium text-lime-500 flex justify-between'>
            <NotificationTask title={'Tarefas criadas'}>
              {tasksLength}
            </NotificationTask>
            <NotificationTask title={'Tarefas concluídas'}>
              {taskFinish} de {tasksLength}
            </NotificationTask>
          </div>

          <div>
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
                    {task.isCompleted === true &&
                      <div className='flex items-center gap-1 rounded p-2 bg-lime-500 text-slate-800'>
                        <IconChecks size={22} stroke={2} />
                        <p className='hidden md:flex font-semibold'>Feito</p>
                      </div>
                    }
                    <ButtonChecked
                      onClick={() => taskCompleted(task.id)}
                      children={<IconCheckbox size={22} stroke={2} />} />

                    <ButtonRemove
                      onClick={() => removeTask(task.id)}
                      children={<IconTrashX size={22} stroke={2} />} />
                  </div>
                </li>
              ))}
            </ul>

            {tasksLength <= 0 && (
              <NoTask />
            )}
          </div>
        </section>
      </MagicMotion>
    </MainPage>
  )
}

