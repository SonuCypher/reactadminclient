import {useEffect,useState} from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css';
import Root from './components/Root';
import Home from './components/home';
import Feed from './components/feed';
import Login from './components/login';
import Signup from './components/signup';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
      { path:"/", element:<Home />,},
      { path:"feed", element:<Feed />,},
      { path:"login", element:<Login />,},
      { path:"signup", element:<Signup />,},
    ]
  }
])

function App() {

return <RouterProvider router={router} />

  // const [backendData,setBackendData] = useState([{}])

  // useEffect(()=>{
  //   fetch("/signup").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data);
  //     }
  //   )
  // },[])
  // return (
  //   <>
  //   <h1>hello there</h1>
  //   {backendData.map(user=><h3>{user.name}</h3>)}

  //   <form>
  //     <label htmlFor="username">name</label>
  //     <input type="text" name="username" id="username" />
  //     <button>post</button>
  //   </form>
  //   </>
  // );
}

export default App;
