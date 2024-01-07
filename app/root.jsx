import { useState, useEffect } from "react";
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";
import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";

export function meta() {
  const error = useRouteError();
  if (error?.status === 404) {
    return [
      {
        title: `GuitarLA - Error 404`,
      },
      {
        description: `Contenido no encontrado`,
      },
    ];
  }

  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { description: "Venta de guitarras, blog de música y más!" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://csstools.github.io/normalize.css/11.0.0/normalize.css",
    },

    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (carrito?.length === 0) return;
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCarrito(carritoLS);
  }, []);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      //Iterar sobre el arreglo e identificar el elemento duplicado
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          //Actualizar la cantidad
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      //actualizar el carrito con el nuevo State
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter(
      (guitarraState) => guitarraState.id !== id
    );
    setCarrito(carritoActualizado);
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        //Actualizar la cantidad
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });

    setCarrito(carritoActualizado);
  };
  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra,
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/** Manejo de Errores **/
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <section className="content-error">
        <p className="error">
          <span className="status">{error.status}</span>
          <span className="text">{error.statusText}</span>
        </p>
        <Link to="/" className="error-btn">
          Volver al inicio
        </Link>
      </section>
    </Document>
  );
}

export function ErrorBoundary({}) {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <section className="content-error">
          <p className="error">
            <span className="status">{error.status}</span>
            <span className="text">{error.statusText}</span>
          </p>
          <Link to="/" className="error-btn">
            Volver al inicio
          </Link>
        </section>
      </Document>
    );
  }
}
