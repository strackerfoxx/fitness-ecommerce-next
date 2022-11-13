import Producto from "./producto"

export default function ListadoRopa({productos}) {
  return (
    <>
      <h2 className="heading">Our most Popular Watches</h2>
      <div className='productos-grid'>
          {productos?.map( producto => (
            <Producto productos={producto} key={producto.id} />
          ))}
      </div>
    </>
  )
}