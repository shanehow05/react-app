import {Route, Routes} from 'react-router-dom'
import AboutUs from './AboutUs'
import CreatePassword from './CreatePassword'
import Homepage from './Homepage'
import Main from "../services/images/Main"
import PageNotFound from './PageNotFound'







function Container () {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/AboutUs' element={<AboutUs/>}/>
                <Route path='/CreatePassword' element={<CreatePassword/>}/>
                <Route path='*' element={<PageNotFound/>}/>
                



            </Routes>
            <Main />


        </div>
    )



}

export default Container