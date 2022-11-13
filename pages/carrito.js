import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
      if(carrito.length > 0) {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
        setTotal(calculoTotal)
      }else{
        setTotal(0)
      }
      
  }, [carrito])

  const arreglo = []
  function cambiarCantidad(stock){
      for (let index = 1; index <= stock; index++) {
        arreglo.push(index);
        
      }
  }

  return (
    <Layout>
      <main className='contenedor'>
        <h1 className='heading'>Carrito</h1>

        <div className='contenido' >
          <div className='carrito' >
              <h2>Articulos</h2>
                  {carrito?.length === 0 ? 'No hay nada' : (
                    carrito.map( producto => (
                        <div key={producto.id} className='producto' >
                            {cambiarCantidad(producto.stock)}
                            <div>
                                <Image src={producto.imagen} width={250} height={480} alt={`imagen del producto${producto.nombre}`} />
                            </div>
                            <div>
                                <p className='nombre'>{producto.nombre}</p>
                                <p className='precio'>$ <span>{producto.precio}</span> </p>
                                <p className='subtotal'> <span>{producto.precio * producto.cantidad}</span> </p>
                                <select onChange={ e => actualizarCantidad({
                                    id: producto.id,
                                    cantidad: +e.target.value
                                }) } id='cantidad' >
                                    <option value={producto.cantidad}>{`cantidad actual ${producto.cantidad}`}</option>
                                    {arreglo?.map( i => (
                                      <option value={i}>{i}</option>
                                    ))}
                                </select>
                                <button onClick={ () => eliminarProducto(producto.id) }>X</button>
                            </div>
                        </div>
                    ))
                  )}
          </div>

                <h2>
                  total a pagar
                  ${total}
                </h2>
        </div>

      </main>
    </Layout>
  )
}
