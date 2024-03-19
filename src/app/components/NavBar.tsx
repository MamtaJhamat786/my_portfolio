'use client'

import React from "react";
import Link from "next/link";
import Icon from '@mdi/react';
import { usePathname } from 'next/navigation'
import { mdiLinkedin, mdiGithub, mdiFacebook } from '@mdi/js';
import '../globals.css'

const Navbar = () => {
    const aStyle={
        textDecoration:'none',
        color: 'black'
      }
      const linkStyle={
        fontSize: 'medium',
        fontWeight: 500, 
        color: 'black', 
        textDecoration: 'none'
      }
      const pathname = usePathname()
      console.log(pathname)
      
  return (
    <div style={{ 
        backgroundColor: '#FFE019',
        height: '52px',
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '0 15px'
        }}>
      <div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', height: '100%'}}>
        <Link className={pathname == "/home" ? "active" : ""} href='/home'  style={linkStyle}>Home</Link>
        <Link className={pathname == "/about" ? "active" : ""} href='/about'  style={linkStyle}>About me</Link>
        <Link className={pathname == "/experience" ? "active" : ""} href='/experience' style={linkStyle}>Resume</Link>
      </div>
    <div style={{
      display: 'flex',
      gap: '10px'
    }}>
      <a target="_blank" style={aStyle} href="https://www.linkedin.com/in/mamta-%E2%80%94-16a510170/"><Icon path={mdiLinkedin} size={1} /></a>
      <a target="_blank" style={aStyle} href="https://github.com/MamtaJhamat786"><Icon path={mdiGithub} size={1} /></a> 
      <a target="_blank" style={aStyle} href="https://www.facebook.com/kaur.mamta.96"><Icon path={mdiFacebook} size={1} /></a> 
    </div>
  </div>
  );
};

export default Navbar;