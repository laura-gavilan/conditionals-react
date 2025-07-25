import './App.css'
import { AddFruitForm } from './components/AddFruitForm/AddFruitForm'
import { DynamicShoppingList } from './components/DynamicShoppingList/DynamicShoppingList'
import { EmailCollector } from './components/EmailCollector/EmailCollector'
import { MovieFavorites } from './components/MovieFavorites/MovieFavorites'
import { NamesList } from './components/NameList/NameList'
import { OrderManager } from './components/OrderManager/OrderManager'
import { ProductList } from './components/ProductList/ProductList'
import { RemoveItemList } from './components/RemoveItemList/RemoveItemList'
import { RestaurantMenu } from './components/RestaurantMenu/RestaurantMenu'
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard'
import { TaskList } from './components/TaskList/TaskList'
import { ToggleItemList } from './components/ToggleItemsList/ToggleItemsList'
import { UserFiltersList } from './components/UserFiltersList/UserFiltersList'

export const App = () => {
  return (

    <div>
      <h1>Condicionales</h1>

      <NamesList/>

      <ProductList/>

      <TaskList/>
      
      <AddFruitForm/>

      <RemoveItemList/>

      <DynamicShoppingList/>

      <ToggleItemList/>

      <OrderManager/>

      <UserFiltersList/>

      <ScoreBoard/>

      <MovieFavorites/>

      <EmailCollector/>

      <RestaurantMenu/>
    </div>
  )
}