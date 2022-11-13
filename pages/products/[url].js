import Layout from '../../components/layout'
import Image from 'next/image'
import { useState } from 'react'

export default function Producto({productos, agregarCarrito}) {
    const { nombre, descripcion, precio, imagen, stock } = productos.attributes
    const image = imagen.data.attributes.formats.medium.url
    const {id} = productos
    const [cantidad, setCantidad] = useState(1)

    const arreglo = []
    for (let index = 1; index <= stock; index++) {
        arreglo.push(index);
        
    }

    function handleSubmit(e){
        e.preventDefault()

        if(cantidad < 1){
            alert('la cantidad minima es 1')
            return
        }

        const producto = {
            id,
            nombre, 
            precio, 
            imagen: image, 
            stock, 
            cantidad
        }
        agregarCarrito(producto)

    }
  return (
    <Layout>
        <div className='contenedor producto full'>
         <Image src={image} alt={`imagen del producto: ${nombre}`} width={500} height={500} />
           <div className="contenido" >
               <h1 className='heading'>{nombre}</h1>
               <p>Unidades en existencia:<p className='precio'> {stock}</p></p>
                 <p>Unidades en precio:<p className='precio'> {precio}</p></p>    
                 <a href="/" className='enlace'>Comprar ahora</a>  

                 <form onSubmit={handleSubmit} className='formulario' >
                    <label>Selecciona una cantidad</label>
                    <select onChange={ e => setCantidad(+e.target.value) }  id='cantidad'>
                        {arreglo.map( i => (
                            <option value={i}>{i}</option>
                        ))}
                    </select>

                    <input type='submit' value='agregar al carrito' />
                 </form>
                 
             </div>
         </div>
         <p>{descripcion}</p>
    </Layout>
  )
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/products`)
    const {data: productos} = await respuesta.json()

    const paths = productos.map( producto => ({
        params: {
            url: producto.id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}){
    const id = parseInt(url)
    const respuesta = await fetch(`${process.env.API_URL}/products/${id}?populate=imagen`)
    const {data: productos} = await respuesta.json()
    return {
      props: {
        productos
      }
    }
    
}
// export async function getServerSideProps({query: {url}}){
//     const respuesta = await fetch(`${process.env.API_URL}/products?populate=imagen`)
//     const {data: productos} = await respuesta.json()
//     return {
//       props: {
//         productos
//       }
//     }
// }