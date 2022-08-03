import { Route, Routes } from 'react-router-dom';
import Analysis from './Components/Dashboard/Analysis';
import Ecommerce from './Components/Dashboard/Ecommerce';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import MyReview from './Components/Dashboard/MyReview';
import Profile from './Components/Dashboard/Profile';
import searchPage from './Components/Dashboard/searchPage';
import Header from './Components/Header';
import Home from './Components/Home';
import Main from './Components/Dashboard/Main';
function App() {
  return (

    <>
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/dashboard' element={
          <Dashboard></Dashboard>
        }>
          <Route index element={<Home></Home>}></Route>
          <Route path='MyReview' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='analysis' element={<Analysis></Analysis>}></Route>
          <Route path='Ecommerce' element={<Ecommerce></Ecommerce>}></Route>
          <Route path='searchPage' element={<searchPage></searchPage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
