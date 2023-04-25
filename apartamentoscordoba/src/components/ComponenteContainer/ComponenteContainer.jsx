import { useEffect, useState } from "react"
import { gFetch } from "../../utils/gFetch";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCounts";
import Galerias from "../Galeria/Galerias";
export const ComponenteContainer = ({ catalogo }) => {

    const [departamentos, setDepartamentos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        gFetch()
            .then(resp => setDepartamentos(resp))
            .catch(err => console.log(err))
            .then(resp => console.log(resp))
            .finally(() => setLoading(false))
    }, [])

    console.log(departamentos)

    return (
        <>
            <h1>Departamentos</h1>
            {loading ?
                <div class="loading"></div>
                :
                <div class="flexarticle">

                    {departamentos.map(departamento =>
                        <article key={departamento.id} class="container grid">
                            <h2>
                                Apartamento {departamento.name}
                            </h2>
                            <div>
                                <img src={departamento.foto} class="grid_img" />
                            </div>
                            <div class="descripcion">
                                <p class="grid_p">{departamento.descripcion}</p>

                            </div>
                            <div>
                                <h3>Precio por noche: {departamento.precio}</h3>
                            </div>
                            <div className="card-footer">
                                <Link to={`/galeria`}>     
                                    <button>Galería</button>      
                                </Link>
                                <div>
                                    <ItemCount />
                                </div>
                            </div>

                        </article>)}

                </div >
            }
        </>
    )

}