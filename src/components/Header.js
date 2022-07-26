import {NavLink} from "react-router-dom"


function Header () {

    return (
        <div> 
            <nav className="nav">
            <h1 className="heading-one"> Tessera</h1>
                <NavLink className='navbarlink' to={'/'}>Homepage</NavLink>
                <NavLink className='navbarlink' to={'/AboutUs'}>AboutUs</NavLink>
                <NavLink className='navbarlink' to={'/CreatePassword'}>CreatePassword</NavLink>
                



            </nav>


        </div>
    )
}

export default Header