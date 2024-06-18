import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Companies from './components/companies/Companies';

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