import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'
import CollaztComponent from './CollaztComponent'
import MenuComponent from './MenuComponent'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            let { minumero } = useParams()
            return (<TablaMultiplicar numero={minumero} />)
        }

        function CollaztComponentElement() {
            let { collatz } = useParams()
            return (<CollaztComponent numero={collatz} />)
        }
        return (
            <BrowserRouter>
                <MenuComponent />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tabla/:minumero' element={<TablaMultiplicarElement />} />
                    <Route path='/collazt/:collatz' element={<CollaztComponentElement />} />
                    <Route path='*' element={<NotFound />} />

                </Routes>
            </BrowserRouter>
        )
    }
}
