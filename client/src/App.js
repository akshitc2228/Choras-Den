import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  createBrowserRouter,
  RouteProvider,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
