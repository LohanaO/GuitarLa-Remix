import { getPosts } from '../models/post.server' 
import { useLoaderData } from '@remix-run/react'
import styles from '../styles/blog.css'
import ListadoPost from '../components/listado-posts'

export function meta() {
  return(
     [
    {title: 'GuitarLA - Nuestro Blog'},
    {description: 'Venta de guitarras, blog de música'},
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

export async function loader() {
  const posts = await getPosts()
  return posts.data
}
function Blog() {
  const posts = useLoaderData()
  return (
  <main className="contenedor">
   <ListadoPost posts={posts}/>
  </main>
  )
}

export default Blog