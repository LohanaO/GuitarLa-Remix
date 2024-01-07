import { getPost } from '../models/post.server'
import { useLoaderData } from '@remix-run/react'
import { formatearFecha } from '../utils/helpers'
import styles from '../styles/blog.css'

export async function loader({params}) {
    const {postUrl} = params
    const post = await getPost(postUrl)
    if(post.data.length === 0) {
      throw new Response('', {
        status: 404,
        statusText: 'Post no encontrado'
      })
    }
    return post
  }

  export function meta({data}) {

    return(
       [
      {title:`GuitarLa - Post ${data.data[0].attributes.titulo}` },
      {description:`Guitarras, Blog de guitarras, Post ${data.data[0].attributes.titulo}` },
    ]
    )
  }
  export function links() {
    return [
   
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
  }
  
function Post() {
  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt}= post.data[0].attributes
  const texto = contenido.map(cont => {
    return cont.children.map(parrafo => {
        return parrafo.text
    })
   })
  return (
    <article className='contenedor post mt-3'>
    <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen guitarra ${titulo}`} />
    <div className="contenido">
      <h3>{titulo}</h3>
      <p className="fecha">{formatearFecha(publishedAt)}</p>
      <p className="texto">{texto}</p>
    </div>
  </article>
)
  
}

export default Post