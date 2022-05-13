import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Page404 from '../views/404'
import Home from '../views/Home'
import PokeDetail from '../views/PokeDetail'

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/pokemon/:id" element={<PokeDetail />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent