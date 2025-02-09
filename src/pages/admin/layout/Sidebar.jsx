import React from "react";
import { logo } from "../../../assets";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineTruck } from "react-icons/hi2";
import { TbSitemap } from "react-icons/tb";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";

const adminMenu = [
  {
    label: `dashboard`,
    url: ``,
    icon: <RxDashboard />,
  },
  {
    label: `all products`,
    url: `products`,
    icon: <TbSitemap />,
  },
  {
    label: `all orders`,
    url: `orders`,
    icon: <HiOutlineTruck />,
  },
  {
    label: `add product`,
    url: `add-product`,
    icon: <MdFormatListBulletedAdd />,
  },
  {
    label: `Payments`,
    url: `payments`,
    icon: <BsCreditCard />,
  },
];

export default function AdminSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed h-[100vh] overflow-hidden inset-y-0 left-0 z-50 transform bg-white shadow-lg text-black w-64 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        {/* Header */}
        <div className="flex gap-5  items-center pl-5 h-16 bg-black text-white">
          <img className="h-12 object-contain" src={logo} alt="Logo" />
          {/* <h1 className="text-xl font-normal">Admin Panel</h1> */}
        </div>

        {/* Navigation */}
        <nav className="mt-4 p-3 flex flex-col gap-3">
          {adminMenu.map((menu, i) => (
            <Link
              to={menu.url}
              className={`flex w-full items-center gap-3 capitalize font-medium text-base p-2 py-3 rounded-md duration-200 ${
                location.pathname === menu.url
                  ? "bg-main text-white"
                  : "bg-gray-100 hover:bg-main hover:text-white"
              }`}
              key={i}
            >
              <span className="text-xl">{menu.icon}</span>
              {menu.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
