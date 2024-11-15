import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  // useNavigate,
} from "react-router-dom";
import {Header,Footer,Hubspot} from './components';


// main Routes

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about-us"));
const Contact = lazy(() => import("./pages/contact-us"));
const OurVideos = lazy(() => import("./pages/video"));
const Shop = lazy(() => import("./pages/shop"));
const Product = lazy(() => import("./pages/product"));
const Terms = lazy(() => import("./pages/termsandconditions"));
const PrivacyPage = lazy(() => import("./pages/privacy"));
const Checkout = lazy(() => import("./pages/checkout"));
const Construct = lazy(() => import("./pages/constr"));

// Admin Routes
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminOrders = lazy(() => import("./pages/admin/orders"));
const AdminProducts = lazy(() => import("./pages/admin/products"));


const Layout = () => {
  const location = useLocation();
  const hideHeaderFooterPaths = ['/order-success','/admin', '/dashboard','/dashboard/products','/dashboard/orders'];
  const hideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className="2xl:max-w-[2200px] mx-auto min-h-screen flex justify-between flex-col ">
      {!hideHeaderFooter  &&<Header/>}
      <Hubspot/>
        <Outlet />
        {!hideHeaderFooter  &&<Footer/>}
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <div className='h-[60vh] w-full overflow-hidden grid place-items-center capitalize animate-pulse'>page not found</div>
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Home/>
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Shop/>
          </Suspense>
        ),
      },
      {
        path: "/shop/:title",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Product/>
          </Suspense>
        ),
      },
      {
        path: "/under-construction",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Construct/>
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <About/>
          </Suspense>
        ),
      },
      {
        path: "/our-videos",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <OurVideos/>
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<p className='h-screen grid place-items-center'>Loading....</p>}>
            <Contact/>
          </Suspense>
        ),
      },
      
     
      
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
