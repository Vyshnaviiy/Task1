import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, NavLink, Outlet, Route, Routes } from "react-router-dom";
import "./style.css";

function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Preboard</h1>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </aside>
      <main className="page">
        <Outlet />
      </main>
    </div>
  );
}

function Home() {
  return <h2>Home: Welcome to the React Router practice app.</h2>;
}

function About() {
  return <h2>About: This page explains nested routes and client-side navigation.</h2>;
}

function Contact() {
  return <h2>Contact: Email intern-support@example.com for help.</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
