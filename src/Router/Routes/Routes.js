import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Footer from "../../Pages/Shared/Footer/Footer";
import Signup from "../../Pages/Signup/Signup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/login', element: <Login></Login>},
        {path: '/signup', element: <Signup></Signup>},
        {path: '/checkout/:id', loader: ({params})=>fetch(`https://geinus-car-sever.vercel.app/services/${params.id}`), element: <PrivetRoute><Checkout></Checkout></PrivetRoute>},
        {path: '/orders', element: <Orders></Orders>},
        {path: 'footer', element: <Footer></Footer>}
       
       
    ]}
])