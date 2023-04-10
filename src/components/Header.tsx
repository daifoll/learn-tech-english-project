import { AppBar, Box, Button, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import { useState } from 'react';


export const Header = ({ showDictionary, setStep, setCorrect, setClickedIndex, children }: Header) => {
  const [show, setShow] = useState(false)


  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={show}
        onClose={() => setShow(false)}
        onOpen={() => setShow(true)}
        swipeAreaWidth={20}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        className='sm:hidden'
      >

        <AppBar className='' component='nav' position='relative'>
          <Toolbar className='flex flex-col justify-start h-screen items-start sm:hidden'>
            <Link className='mb-4' to="/" onClick={() => (setStep(0), setCorrect(0), setClickedIndex([]))}>
              <Button>
                <span className='text-primaryFontBasic text-nav-l sm:hidden'><HomeIcon fontSize='inherit' /></span>
              </Button>
            </Link>
            <Link className='mb-4' to="/about">
              <Button>
                <span className='text-primaryFontBasic text-nav-l sm:hidden'><InfoIcon fontSize='large' /></span>
              </Button>
            </Link>
            <Link className='mb-4' to="/contact">
              <Button>
                <span className='text-primaryFontBasic text-nav-l sm:hidden'><ContactPageIcon fontSize='large' /></span>
              </Button>
            </Link>
            <Button onClick={showDictionary} >
              <span className='text-primaryFontBasic text-nav-l sm:hidden'><MenuBookIcon fontSize='large' /></span>
            </Button>
            {children}
          </Toolbar>
        </AppBar>
      </SwipeableDrawer>

      <AppBar className='' component='nav' position='relative'>
        <Toolbar className='flex flex-col justify-center items-start sm:flex-row'>
          <Box className='flex-col sm:hidden w-full'>
            <Button onClick={() => setShow(!show)}>
              <span className='text-primaryFontBasic'>
                <MenuIcon />
              </span>
            </Button>
          </Box>
          <Box className='hidden sm:flex w-full'>
            <Link to="/" onClick={() => (setStep(0), setCorrect(0), setClickedIndex([]))}>
              <Button>
                <span className='text-primaryFontBasic text-sm hidden sm:inline'>Главная</span>
              </Button>
            </Link>
            <Link to="/about">
              <Button>
                <span className='text-primaryFontBasic text-sm hidden sm:inline'>О&nbsp;проекте</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button>
                <span className='text-primaryFontBasic text-sm hidden sm:inline'>Контакты</span>
              </Button>
            </Link>
            <Button onClick={showDictionary}>
              <span className='text-primaryFontBasic text-sm hidden sm:inline'>Словарь</span>
            </Button>
          </Box>
          {children}
        </Toolbar>
      </AppBar>
    </>

  )
}
