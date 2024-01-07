
import imagen from '../../public/img/nosotros.jpg'
import styles from'../styles/nosotros.css'

export function meta() {
  return(
     [
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de música'},
  ]
  )
}
export function links() {
  return [
 
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
function Nosotros() {
  return (
      <main className="contenedor nosotros">
          <h2 className="heading">Nosotros</h2>
          <div className="contenido">
              <img src={imagen} alt="imagen nosotros"/>
              <div>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed molestie ante, ut viverra dui. Praesent elit eros, bibendum eu iaculis eu, efficitur egestas nibh. Nullam a mattis nisl, vitae interdum odio. Vivamus nec nulla eleifend, ullamcorper lacus in, posuere orci. </p>

                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sed molestie ante, ut viverra dui. Praesent elit eros, bibendum eu iaculis eu, efficitur egestas nibh. Nullam a mattis nisl, vitae interdum odio. Vivamus nec nulla eleifend, ullamcorper lacus in, posuere orci. Pellentesque placerat, nibh quis euismod fermentum, neque lectus consequat enim, ut aliquam nibh ante ac neque.</p>
              </div>
          </div>
      </main>
  )
}

export default Nosotros