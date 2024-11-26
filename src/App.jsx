import "./App.css";
import { ScrollToTop } from "react-router-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Header, Footer, Hubspot,PageLoader } from "./components";

// Pages
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about-us"));
const Contact = lazy(() => import("./pages/contact-us"));
const OurVideos = lazy(() => import("./pages/video"));
const Shop = lazy(() => import("./pages/shop"));
const Product = lazy(() => import("./pages/product"));
const Orders = lazy(() => import("./pages/orders"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const Construct = lazy(() => import("./pages/constr"));
const Profile = lazy(() => import("./pages/profile"));
const PagenotFound = lazy(() => import("./pages/pageNot"));

// Admin Pages

const AdminNav = lazy(() => import("./pages/admin/layout/Navbar"));
const AdminSidebar = lazy(() => import("./pages/admin/layout/Sidebar"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminOrders = lazy(() => import("./pages/admin/Orders"));
const AdminOrder = lazy(() => import("./pages/admin/Order"));
const AdminProducts = lazy(() => import("./pages/admin/Products"));
const AddProduct = lazy(() => import("./pages/admin/AddProduct"));

// Admin Layout
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Determine if the current route is the login page
  const isLoginPage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className="flex h-screen bg-gray-100 text-black w-full">
        {/* Conditionally render Sidebar */}
        {!isLoginPage && (
          <AdminSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}

        {/* Main Content */}
        <div className="flex flex-col flex-1 w-full">
          {/* Conditionally render Top Bar */}
          {!isLoginPage && <AdminNav setIsSidebarOpen={setIsSidebarOpen} />}

          {/* Main body */}
          <div className="flex-1 p-4 overflow-y-scroll w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

// User Layout
const UserLayout = () => {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className="2xl:max-w-[2200px] mx-auto min-h-screen flex flex-col">
        <Header />
        <Hubspot />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [isAdminView, setIsAdminView] = useState(false); //  admin view

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAdminView ? <AdminLayout /> : <UserLayout />,
      children: [
        // User Routes
        ...(!isAdminView
          ? [
              { path: "/", element: <Suspense fallback={<PageLoader/>}><Home /></Suspense> },
              { path: "/login", element: <Suspense fallback={<PageLoader/>}><LoginPage /></Suspense> },
              { path: "/about-us", element: <Suspense fallback={<PageLoader/>}><About /></Suspense> },
              { path: "/contact-us", element: <Suspense fallback={<PageLoader/>}><Contact /></Suspense> },
              { path: "/our-videos", element: <Suspense fallback={<PageLoader/>}><OurVideos /></Suspense> },
              { path: "/shop", element: <Suspense fallback={<PageLoader/>}><Shop /></Suspense> },
              { path: "/shop/:title", element: <Suspense fallback={<PageLoader/>}><Product /></Suspense> },
              { path: "/orders", element: <Suspense fallback={<PageLoader/>}><Orders /></Suspense> },
              { path: "/under-construction", element: <Suspense fallback={<PageLoader/>}><Construct /></Suspense> },
              { path: "/profile", element: <Suspense fallback={<PageLoader/>}><Profile /></Suspense> },
              { path: "*", element: <Suspense fallback={<PageLoader/>}><PagenotFound/></Suspense> },
            ]
          : []),
        // Admin Routes
        ...(isAdminView
          ? [
              { path: "/", element: <Suspense fallback={<PageLoader/>}><AdminLogin /></Suspense> },
              { path: "*", element: <Suspense fallback={<PageLoader/>}><p className="text-xl font-medium animate-bounce">Page not Found🙈</p></Suspense> },
              { path: "/dashboard", element: <Suspense fallback={<PageLoader/>}><Dashboard /></Suspense> },
              { path: "/orders", element: <Suspense fallback={<PageLoader/>}><AdminOrders /></Suspense> },
              { path: "/order/:id", element: <Suspense fallback={<PageLoader/>}><AdminOrder /></Suspense> },
              { path: "/products", element: <Suspense fallback={<PageLoader/>}><AdminProducts /></Suspense> },
              { path: "/add-product", element: <Suspense fallback={<PageLoader/>}><AddProduct /></Suspense> },
            ]
          : []),
      ],
    },
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
