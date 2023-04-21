import { useEffect, useState } from "react"
import { gFetch } from "../../utils/gFetch";

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
            <h1>{catalogo}</h1>
            {loading ?
                <div class="loading"></div>
                :
                <div>

                    {departamentos.map(departamento =>
                        <article key={departamento.id} class="container grid">
                            <h2>
                                Apartamento {departamento.name}
                            </h2>
                            <div>
                                <img src={departamento.foto} class="grid_img" />
                            </div>
                            <div>
                                <p class="grid_p">{departamento.descripcion}</p>

                            </div>
                            <div>
                                <h3>Precio por noche: {departamento.precio}</h3>
                            </div>
                            <div className="card-footer"> 
                            <button>Detalles</button>
                            </div>
                            
                        </article>)}

                </div>
            }
        </>
    )

}