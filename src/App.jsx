import './App.css'
import { NamesList } from './components/NameList/NameList'
import { ProductList } from './components/ProductList/ProductList'
import { TaskList } from './components/TaskList/TaskList'

export const App = () => {
  return (

    <div>
      <h1>Condicionales</h1>

      <NamesList/>

      <ProductList/>

      <TaskList/>
      
    </div>
  )
}