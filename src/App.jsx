import TaskList from './components/TaskList'
import TaskFotm from './components/TaskFotm'

function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container mx-auto'>
        <TaskFotm />
        <TaskList />
      </div>  
    </div>
  )
}

export default App