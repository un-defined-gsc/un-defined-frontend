// ** Next Import
import Link from 'next/link'

// ** MUI Components
import {
  Button,
  Typography,
  Box,
} from '@mui/material'
import { styled } from '@mui/material/styles'

// ** Layout Import
import BlankLayout from '@/layout/BlankLayout'

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  },
}))

const Error401 = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h1'>401</Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Erişim kısıtlaması! 🔐
          </Typography>
          <Typography variant='body2'>Bu sayfaya erişmek için yetkin yok. Ana sayfaya dön!</Typography>
        </BoxWrapper>
        <Link passHref href='/'>
          <Button component='a' variant='contained' sx={{ px: 5.5, mt: 3 }}>
            Ana sayfaya dön
          </Button>
        </Link>
      </Box>
    </Box>
  )
}
Error401.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Error401
