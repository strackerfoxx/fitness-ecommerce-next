import Link from 'next/link'
import Image from 'next/image'
import Navegacion from './navegacion'

export default function Header() {
  return (
    <div className='header'>
      <div className='barra'>
          <div className="logo">
            <Link href='/'>
                <Image src="/img/logo.png" alt="logo de la marca" width={90} height={90} />
            </Link>
          </div> 
          <Navegacion/>
      </div>
  </div>
  )
}
