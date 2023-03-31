import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import { NotFoundSVG } from '../components/NotFoundSVG'

export const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '40px'}}>
        <Typography fontWeight={600} fontSize={40} textTransform='uppercase' color='primary'>
            Страница не найдена :(
        </Typography>
        <NotFoundSVG sx={{fontSize:'20rem', marginTop: '40px'}} color='primary' height='800px' width='800px' viewBox='0 0 486.075 486.075'/>
    </Container>
  )
}
