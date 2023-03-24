import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Partner from '../../components/Partner';
import { ThemeProvider, createTheme } from '@mui/material/styles'

let theme = createTheme();
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <ThemeProvider theme={theme}>
      <div>
        <Partner
          imageUrl="/ambuj.png"
          title="Ambuj"
          subtitle="Developer"
          content="Howard"
        />
      </div>
      </ThemeProvider>

    </>

  )
}
