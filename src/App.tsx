import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SideBar from "./components/menu/sidebar";
import Title1 from "./views/pages/title-1";
import Title2 from "./views/pages/title-2";
import Layout from "./components/menu/layout";
import { useSearch } from "./context/SearchContext";
import Title3 from "./views/pages/title-3";
import Title4 from "./views/pages/title-4";
import Profile from "./views/pages/Profile";
import Login from "./views/login/page";
import Register from "./views/register/page";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { query } = useSearch();

  const objContent = [
    {
      id: 1,
      name: "John",
      surname: "Doe",
      age: 30,
      city: "Paris",
      country: "France",
      numberCode: "+33",
      isoCountryCodes: "FRA",
    },
    {
      id: 2,
      name: "Franci",
      surname: "Sheshi",
      age: 24,
      city: "Tirana",
      country: "Albania",
      numberCode: "+355",
      isoCountryCodes: "Alb",
    },
    {
      id: 3,
      name: "Artur",
      surname: "Begolli",
      age: 36,
      city: "Munich",
      country: "Germany",
      numberCode: "+49",
      isoCountryCodes: "DEU",
    },
    {
      id: 4,
      name: "Andre",
      surname: "Pavigno",
      age: 32,
      city: "Firenze",
      country: "Italy",
      numberCode: "+39",
      isoCountryCodes: "Ita",
    },
    {
      id: 5,
      name: "Alessio",
      surname: "Rondo",
      age: 29,
      city: "Roma",
      country: "Italy",
      numberCode: "+39",
      isoCountryCodes: "Ita",
    },
  ];

  const handleRegister = (
    username: string,
    email: string,
    password: string,
    name: string,
    surname: string,
    age: number,
    city: string,
    country: string
  ) => {
    const storedUsers = JSON.parse(
      localStorage.getItem("userCredentials") || "[]"
    );

    const userExists = storedUsers.some(
      (u: any) =>
        u.username.toLowerCase() === username.toLowerCase() ||
        u.email.toLowerCase() === email.toLowerCase()
    );

    if (!userExists) {
      const newUser = {
        username,
        email,
        password,
        name,
        surname,
        age,
        city,
        country,
      };

      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem("userCredentials", JSON.stringify(updatedUsers));
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      navigate("/profile", { state: { newUser } });
      setIsAuthenticated(true);
    }
  };

  const handleLogin = (username: string, password: string) => {
    const storedUsers = JSON.parse(
      localStorage.getItem("userCredentials") || "[]"
    );

    const foundUser = storedUsers.find(
      (user: any) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      setIsAuthenticated(true);
      navigate("/pages/page-1");

      console.log("User logged in successfully: ", foundUser);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedUsers = JSON.parse(
      localStorage.getItem("userCredentials") || "[]"
    );
    const storedUser = localStorage.getItem("currentUser");

    if (storedUser) {
      setIsAuthenticated(true);
      navigate("/pages/page-1");
    }

    const checkIfUserExists = (username: string) => {
      return storedUsers.some((user: any) => user.username === username);
    };
  }, []);

  return (
    <div className="App">
      {isAuthenticated ? (
        <Layout logout={handleLogout}>
          <main className="flex flex-row md:flex-row min-h-screen mt-14 text-start">
            <aside className="w-full md:w-64 bg-gray-800 text-center fixed top-32 bottom-1 p-1">
              <SideBar />
            </aside>
            <div className="flex-1 ml-0 md:ml-64 md:mt-0 p-5 bg-gray-100 pt-10">
              <div className="h-full flex flex-col">
                <Routes>
                  <Route
                    path="/pages/page-1"
                    element={<Title1 query={query} />}
                  />
                  <Route
                    path="/pages/page-2"
                    element={<Title2 query={query} />}
                  />
                  <Route
                    path="/pages/page-3"
                    element={<Title3 query={query} data={objContent} />}
                  />
                  <Route
                    path="/pages/page-4"
                    element={<Title4 query={query} />}
                  />
                  <Route
                    path="/pages/profile"
                    element={<Profile query={query} />}
                  />
                </Routes>
              </div>
            </div>
          </main>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
