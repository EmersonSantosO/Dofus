import {Link} from "react-router-dom"

export function Navigation() {
    return (
        <div>
            <Link to="/guias">
                <h1>Guia App</h1>
            </Link>
            <Link to="/guias-create">Create Guia</Link>
        </div>
    )
    
}