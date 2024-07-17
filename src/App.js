import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Addproduct from './components/Addproduct';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Delete from './components/Delete';
import Update from './components/Update';
import View from './components/View';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Addproduct/></>
    },
    {
      path:"/delete",
      element:<><Delete/></>
    },
    {
      path:"/display",
      element:<><view/></>
    }, {
      path:"/update",
      element:<><Update/></>
    }, {
      path:"/display",
      element:<><View/></>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>

     
    </div>
  );
}

export default App;
