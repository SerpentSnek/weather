import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='Home'>
      <h1 className='mx-auto bg-gradient-to-br from-cyan-400 to-red-800'>hello</h1>
    </div>
  );
}
