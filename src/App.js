
import './App.css';
import MainPage from './component/MainPage';
import { Route, Routes } from 'react-router-dom';
import MealInfo from './component/MealInfo';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}></Route>
    </Routes>
    </>
      
    
  );
}

export default App;
