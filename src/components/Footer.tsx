import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer({ setStep, setClickedIndex, setCorrect }: Footer) {
    return (
        <Box className='bg-primaryBlue flex flex-wrap text-primaryFontBasic p-5'>
            <Box className='basis-full sm:basis-1/3'>
                <Typography fontWeight={600} fontSize={15} component={'p'}>
                    Контакты:
                </Typography>
                <Typography marginTop={1} component={'p'}>
                    <a href='https://t.me/+79965003886' target='_blank' className='text-base'>Telegram</a>
                </Typography>
                <Typography marginTop={1} component={'p'}>
                    <a href='mailto:kobykhnov.bl@gmail.com' className='text-base'>kobykhnov.bl@gmail.com</a>
                </Typography>
                <Typography marginTop={1} component={'p'}>
                    <a href='https://portfolio-daifoll.vercel.app' target='_blank' className='text-base'>Портфолио</a>
                </Typography>
            </Box>

            <Box className='basis-full sm:basis-1/3 flex items-start flex-col mt-10 sm:mt-0'>
                <Typography fontWeight={600} fontSize={15} component={'p'}>
                    Страницы:
                </Typography>
                <Typography marginTop={1}>
                    <Link to="/" onClick={() => (setStep(0), setCorrect(0), setClickedIndex([]))}>
                        <Button sx={{ padding: 0 }} >
                            <span className='text-primaryFontBasic text-sm'>Главная</span>
                        </Button>
                    </Link>
                </Typography>
                <Typography marginTop={1}>
                    <Link to="/about">
                        <Button sx={{ padding: 0 }}>
                            <span className='text-primaryFontBasic text-sm'>О&nbsp;проекте</span>
                        </Button>
                    </Link>
                </Typography>
                <Typography marginTop={1}>
                    <Link to="/contact">
                        <Button sx={{ padding: 0 }}>
                            <span className='text-primaryFontBasic text-sm'>Контакты</span>
                        </Button>
                    </Link>
                </Typography>
            </Box>
            <Box className='basis-full'>
                <Typography marginTop={5} fontWeight={600} fontSize={15} component={'p'}>
                    {new Date().getFullYear()} г.
                </Typography>
            </Box>
        </Box>
    )
}
