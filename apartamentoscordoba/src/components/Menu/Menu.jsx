import { NavLink, Link } from "react-router-dom"

function Menu() {

    return (  
          
        <nav class="navbar navbar-expand-lg navbar-dark px-3">
            <figure class="nav_logo">
                <a href="./index.html"><img src="./imagenes/logo.png" alt="logo Apartamentos" width="200px" /></a>
            </figure>
            <div class="collapse navbar-collapse justify-content-end" id="navtoggler-aboutus">
                <ul class="nav_menu">
                    <NavLink to='/departamentos'>
                    <li>
                        <a>Departamentos</a>
                    </li>
                    </NavLink>
                </ul>
            </div>
        </nav>
         
      )
  
  }

  export default Menu