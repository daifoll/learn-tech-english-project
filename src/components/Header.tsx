import { AppBar, Button, Toolbar } from '@mui/material'
import React, { Children } from 'react'
import { Link } from 'react-router-dom'

export const Header = ({showDictionary, setStep, setCorrect, setClickedIndex, children}: Header) => {


  return (
      <AppBar component='nav' position='relative'>
        <Toolbar>
          <Link to="/" onClick={() => (setStep(0), setCorrect(0), setClickedIndex([]))}><Button sx={{ color: '#fff' }}>Главная</Button></Link>
          <Link to="/about"><Button sx={{ color: '#fff'}}>О проекте</Button></Link>
          <Link to="/contact"><Button sx={{ color: '#fff'}}>Контакты</Button></Link>
          <Button onClick={showDictionary} sx={{ color: '#fff' }}>Словарь</Button>
          {children}
        </Toolbar>
      </AppBar>

   
  )
}
