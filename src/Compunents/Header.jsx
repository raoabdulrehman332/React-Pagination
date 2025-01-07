import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer } from 'antd';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import AboutUs from "./Pages/AboutUs";
import { CardContext } from '../Context/CardContext';

export default function Header() {
  const { cardItem } = useContext(CardContext);
  const [isLogin, setIsLogin] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="text-gray-600 body-font mb-10 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          {/* Logo */}
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl font-semibold">Libassi Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
            <Link to={'/'} className="mr-5 hover:text-green-500">
              Home
            </Link>
            <Link to={'/Pages/AboutUs'} className="mr-5 hover:text-green-500">
              About
            </Link>
            <Link to={'/Pages/ContactUs'} className="mr-5 hover:text-green-500">
              Contact Us
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <Button>Log in</Button>
              <Button type="primary">Sign up</Button>
            </div>
            {isLogin && <Avatar />}
            <Link to={'/cart'} className="hover:scale-105 transition-all">
              <Badge count={cardItem.length}>
                <ShoppingCartOutlined style={{ fontSize: 24 }} />
              </Badge>
            </Link>
            {/* Mobile Menu Icon */}
            <MenuOutlined
              className="text-xl cursor-pointer md:hidden"
              onClick={toggleDrawer}
            />
          </div>
        </div>
      </header>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        closable={true}
      >
        <nav className="flex flex-col space-y-4">
          <Link to={'/'} onClick={toggleDrawer} className="text-gray-700 hover:text-green-500">
            Home
          </Link>
          <Link to={'/about'} onClick={toggleDrawer} className="text-gray-700 hover:text-green-500">
            About
          </Link>
          <Link to={'/contact'} onClick={toggleDrawer} className="text-gray-700 hover:text-green-500">
            Contact Us
          </Link>
          <Link to={'/contact'} onClick={toggleDrawer} className="text-gray-700 hover:text-green-500">
            Log in
          </Link>
          {/* <div className="flex flex-col space-y-2 mt-4">
            <Button onClick={toggleDrawer}>Log in</Button>
            <Button type="primary" onClick={toggleDrawer}>
              Sign up
            </Button>
          </div> */}
        </nav>
      </Drawer>
    </>
  );
}
