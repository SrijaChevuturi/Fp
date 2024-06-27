import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Companies from './components/companies/Companies';
import Report from './components/placementData/data';
import Form from './components/placementForm/form';
import MedainPlacements from './components/medainPlacements/MedainPlacements';
import Login from './components/login/Login';


function App() {

  let router=createBrowserRouter([
      {
        path:'',
        element:<RootLayout/>,
        children:[
          {
            path:'',
            element:<Home/>
          },
          {
            path:'home',
            element:<Home/>
          },
          {
            path:'companies',
            element:<Companies/>
          },
          {
            path:'placementData',
            element:<Report/>
          },
          {
            path:'placementForm',
            element:<Form/>
          },
          {
            path:'medainPlacemnts',
            element:<MedainPlacements/>
          },
          {
            path:'login',
            element:<Login/>}
        ]

      }
  ])



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;