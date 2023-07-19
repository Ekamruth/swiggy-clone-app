import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/Homepage/HomePage'
import Citypage from './pages/Citypage/Citypage';

function App() {

  const router = createBrowserRouter([
    {path: "/", element:<HomePage/>},
    {path: "/city", element:<Citypage/>}
  ])

  return(
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}


export default App;
