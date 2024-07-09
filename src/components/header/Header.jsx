"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import "./Header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header container">
      <div className="logo">
        <Link className="logoText" href="/">Candleaf</Link>
      </div>
      <nav className={`nav ${isMobile ? "navMobile" : ""}`}>
        <Link href="/discovery" className="navLink" onClick={() => setIsMobile(false)}>Discovery</Link>
        <Link href="/about" className="navLink" onClick={() => setIsMobile(false)}>About</Link>
        <Link href="/contact" className="navLink" onClick={() => setIsMobile(false)}>Contact us</Link>
      </nav>
        <div className="icons">
          <CiUser className="icon" />
          <IoCartOutline className="icon" />
        </div>
      <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </header>
  );
}

export default Header;
