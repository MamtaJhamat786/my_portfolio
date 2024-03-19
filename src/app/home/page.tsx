'use client'
import React from 'react'
import Image from "next/image";
import blue from '../../../public/images/my_img.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';

const HomePage = () => {
  const techStyle={
    backgroundColor: '#f6eca9',
    borderRadius: '15px',
    padding: '10px',
    display: 'flex',
    alignItens: 'center',
    whiteSpace: 'noWrap'
  }
  const isNotSmallScreen = useMediaQuery('(min-width:600px)');
  console.log(isNotSmallScreen);
  
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: !isNotSmallScreen ? 'column-reverse': 'row',
      padding: '40px',
      alignItems: 'center', 
      gap: '40px'
      }}>
      <Image src={blue} alt="my_img" height={600}></Image>
      <div>
        <span>A little bit about me </span>
        <h1>HI 🙋‍♀️ , I AM MAMTA</h1>
        <span style={{ fontSize: '18px', fontWeight: 400, lineHeight: '30px'}}>
          I am a Frontend Developer with a two and a half years of hands-on experience.
        </span>

        <br></br>
        <br></br>
        <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '30px'}}>
          Technologies
        </span>
        <br></br>
        <br></br>

        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <div style={techStyle}>React</div>
          <div style={techStyle}>Typescript</div>
          <div style={techStyle}>Javascript</div>
          <div style={techStyle}>Redux toolkit</div>
          <div style={techStyle}>Graphql</div>
          <div style={techStyle}>REST API</div>
          <div style={techStyle}>MUI</div>
          <div style={techStyle}>Bootstrap</div>
          <div style={techStyle}>GIT</div>
          <div style={techStyle}>NEXT JS</div>
          <div style={techStyle}>Node JS</div>
        </div>
        <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', lineHeight: '30px'}}>
        <span>mamtajhamat27@gmail.com</span>
        <span>+37253952494</span>
      </div>
      </div>
      
    </div>
  )
}

export default HomePage