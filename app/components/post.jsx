import {Link}from '@remix-run/react'
import {formatearFecha} from '../utils/helpers'

function post({post}) {
 const {titulo, contenido, imagen, url, publishedAt} = post
 const content =contenido.map
  return (
    <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido[0].children[0].text}</p>
            <Link className='enlace' to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

export default post