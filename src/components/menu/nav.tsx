import React, { FC, useState } from "react";
import { Button, Input, Menu } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const { Search } = Input;

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { query, updateSearchQuery } = useSearch();
  const [searchInput, setSearchInput] = useState<string>(query);

  const handleClick = (key: any) => {
    if (!key) navigate(key);
  };

  const searchToPathMap: { [key: string]: string } = {
    "page 1": "/pages/textareas",
    "page 2": "/pages/cards",
    "page 3": "/pages/tables",
    "page 4": "/pages/calendar",
    "page 5": "/pages/profile",
  };

  const handleSearch = () => {
    updateSearchQuery(searchInput);

    const normalizedSearch = searchInput.trim().toLowerCase();

    let targetPath = "";

    for (const [key, path] of Object.entries(searchToPathMap)) {
      if (normalizedSearch.includes(key)) {
        targetPath = path;
        break;
      }
    }

    if (targetPath) {
      navigate(targetPath);
    } else {
      navigate("/pages/not-found");
    }
  };

  return (
    <div className="w-full bg-blue-600 p-5 fixed top-0 items-center justify-between">
      {/* H1 Tag at the Start */}
      <h1 className="text-white text-3xl font-semibold duration-700 ease-in-out">
        Story Book
      </h1>
      <div className="flex items-center relative justify-between">
        <Menu
          onClick={handleClick}
          mode="horizontal"
          selectable={true}
          className="space-x-2 justify-between"
        >
          <Menu.Item key="1">
            <Button
              type="primary"
              size="large"
              className="rounded-md bg-blue-500 duration-500 ease-in-out hover:-translate-y-2 items-center"
            >
              <NavLink to="/pages/textareas" className="text-white">
                TextAreas
              </NavLink>
            </Button>
          </Menu.Item>
          <Menu.Item key="2">
            <Button
              type="primary"
              size="large"
              className="rounded-md bg-blue-500 duration-500 ease-in-out hover:-translate-y-2 items-center"
            >
              <NavLink to="/pages/cards" className="text-white">
                Cards
              </NavLink>
            </Button>
          </Menu.Item>
          <Menu.Item key="3">
            <Button
              type="primary"
              size="large"
              className="rounded-md bg-blue-500 duration-500 ease-in-out hover:-translate-y-2 items-center"
            >
              <NavLink to="/pages/tables" className="text-white">
                Tables
              </NavLink>
            </Button>
          </Menu.Item>
          <Menu.Item key="4">
            <Button
              type="primary"
              size="large"
              className="rounded-md bg-blue-500 duration-500 ease-in-out hover:-translate-y-2 items-center"
            >
              <NavLink to="/pages/calendar" className="text-white">
                Calendar
              </NavLink>
            </Button>
          </Menu.Item>
          <Menu.Item key="5">
            <Button
              type="primary"
              size="large"
              className="rounded-md bg-blue-500 duration-500 ease-in-out hover:-translate-y-2 items-center"
            >
              <NavLink to="/pages/profile" className="text-white">
                Profile
              </NavLink>
            </Button>
          </Menu.Item>
        </Menu>
        <div className="flex items-center px-128 justify-end">
          <Search
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onSearch={handleSearch}
            className="rounded-md w-[345px]"
            enterButton="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
