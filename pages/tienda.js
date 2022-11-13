import Layout from '../components/layout'
import ListadoRopa from '../components/listado-ropa'

export default function Tienda({productos}) {
  return (
    <Layout title='tienda' >
        <ListadoRopa productos={productos} />
    </Layout>
  )
}

export async function getStaticProps(){
    const respuesta = await fetch(`${process.env.API_URL}/products?populate=imagen`)
    const {data: productos} = await respuesta.json()
    return {
      props: {
        productos
      }
    }
}