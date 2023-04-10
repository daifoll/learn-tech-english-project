import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const Contact = () => {
    return (
        <Container className = 'pt-11 w-full'>
            <Typography fontWeight={600} fontSize={30} component={'p'}>
                Связь со мной:
            </Typography>
            <Typography marginTop={2} component={'p'}>
                <a href='https://t.me/+79965003886' target='_blank' className='hover:text-primaryBlue text-[20px]'>Telegram</a>
            </Typography>
            <Typography marginTop={2} component={'p'}>
                <a href='mailto:kobykhnov.bl@gmail.com' className='hover:text-primaryBlue text-[20px]'>kobykhnov.bl@gmail.com</a>
            </Typography>
            <Typography marginTop={2} component={'p'}>
                <a href='https://portfolio-daifoll.vercel.app' target='_blank' className='hover:text-primaryBlue text-[20px]'>Портфолио</a>
            </Typography>
        </Container>
    )
}
