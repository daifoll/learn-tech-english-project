import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';

export const Home = () => {
  return (
    <>
      <Container>
        <h1 className='text-lg font-semibold flex mt-10'>Выберите слова для тренировки:</h1>
        <div className='flex min-[280px]:flex-col lg:h-auto max-w-full sm:justify-center'>
          <Link
            className='
            flex 
            items-center 
            text-lg 
            transition 
            duration-75 
            h-56 
            basis-1/3 
            p-4 
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
            
            <span className='flex items-baseline align-middle'><LanguageIcon fontSize='inherit'/></span>
            <span className='flex ml-1'>
              Английские слова
            </span>

          </Link>
          <Link
            className='
            flex 
            uppercase
            items-center 
            text-lg 
            transition 
            duration-75 
            h-56
            basis-1/3 
            p-4 
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
