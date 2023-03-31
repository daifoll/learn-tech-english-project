import { Article } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='min-[280px]:flex-col md:h-screen lg:flex-row lg:h-auto max-w-full'>
      <Link
        className='
            flex 
            items-center 
            text-lg 
            transition 
            duration-75 
            h-56 
            basis-1/2 
            p-4 
            border-x 
            bg-primaryBlue 
            hover:bg-slate-50 
            hover:shadow-lg 
            text-slate-50 
            hover:text-primaryBlue
            md:justify-center
            
            '
        to='/choose'>
        Слова для чтения документации (с английского на русский)
      </Link>
      <Link
        className='
            flex 
            items-center 
            text-lg 
            transition 
            duration-75 
            h-56
            basis-1/2 
            p-4 
            bg-primaryBlue 
            hover:bg-slate-50 
            hover:shadow-lg 
            text-slate-50 
            hover:text-primaryBlue 
            md:justify-center
            mt-1
           
          '

        to='/choose2'>Слова для чтения документации (с русского на английский)</Link>
    </div>
  )
}
