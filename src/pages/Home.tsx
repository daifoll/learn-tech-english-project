import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';

export const Home = () => {
  return (
    <>
      <Container sx={{paddingRight: 1, paddingLeft: 1}}>
        <h1 className='text-base sm:text-lg font-semibold flex mt-10'>Выберите слова для тренировки:</h1>
        <div className='flex flex-col lg:h-auto sm:justify-center'>
          <Link
            className='
            flex 
            items-center 
            text-sm
            sm:text-lg 
            transition 
            duration-75 
            h-56 
            basis-1/3 
            p-2
            sm:p-4
            border-x 
            bg-primaryBlue 
            hover:bg-slate-50 
            hover:shadow-lg 
            text-slate-50 
            hover:text-primaryBlue
            md:justify-center
            mt-3
            uppercase
            '
            to='/choose'>
            
            <span className='flex items-baseline'><LanguageIcon fontSize='inherit'/></span>
            <span className='flex ml-1'>
              English words
            </span>

          </Link>
          <Link
            className='
            flex 
            uppercase
            items-center 
            text-sm
            sm:text-lg 
            transition 
            duration-75 
            h-56
            basis-1/3
            p-2 
            sm:p-4 
            bg-primaryBlue 
            hover:bg-slate-50 
            hover:shadow-lg 
            text-slate-50 
            hover:text-primaryBlue 
            md:justify-center
            mt-3
           
          '

            to='/choose2'>

            <span className='flex'><LanguageIcon fontSize='inherit'/></span>
            <span className='flex ml-1'>
              Русские слова
            </span>

          </Link>
        </div>
      </Container>
    </>
  )
}
