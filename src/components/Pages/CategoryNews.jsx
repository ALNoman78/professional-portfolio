import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import LeftNavbar from '../Navbar/LeftNavbar'

const CategoryNews = () => {
    return (
        <div className='grid grid-cols-12 gap-3 md:w-11/12 mx-auto'>
            <aside className='col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

CategoryNews.propTypes = {}

export default CategoryNews