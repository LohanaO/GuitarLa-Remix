import { getGuitarras } from '../models/guitarras.server'
import { useLoaderData} from "@remix-run/react";
import ListadoGuitarras from '../components/listado-guitarras';

export function meta(){
    return[
        {
        title: 'GuitaLA - Tienda'
        }
    ]
}

export async function loader(){
    const guitarras = await getGuitarras()
    return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
    <section className='tienda'>
        <h2 className='heading'>Nuestra Colección</h2>
        <ListadoGuitarras  
          guitarras= {guitarras}
        />
    </section>
  )
}

export default Tienda