import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import {useAuth} from '../security/AuthContext';



export default function HeaderComponent(){

    const authContext = useAuth();

    const isAuthenticated = authContext.isAuthenticated


    console.log(authContext)


    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to={`welcome/dummy`}>Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                { isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            { !isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            { isAuthenticated && <Link className="nav-link" to="/logout" onClick={authContext.logout}>Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    );
}
