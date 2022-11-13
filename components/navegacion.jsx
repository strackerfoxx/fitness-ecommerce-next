import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navegacion() {
    var router = useRouter().pathname
    router.toString()
    return(
        <nav className="navegacion" >
            <Link href='/' className={router == '/' ? 'prime' : ''} >index</Link>
            <Link href='/tienda' className={router == '/tienda' ? 'prime' : ''} >tienda</Link>
            <Link href='/blog' className={router == '/blog' ? 'prime' : ''} >blog</Link>
            <Link href='/nosotros' className={router == '/nosotros' ? 'prime' : ''} >nosotros</Link>
            <Link href='/carrito'> <Image src='/img/carrito.png' width={40} height={30} alt='imagen de carrito' /> </Link>
        </nav>
    )
}