import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Pages/Banner'
import LeftNavbar from '../Navbar/LeftNavbar'
import SocialLogin from '../Navbar/RightNav'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
                <section>
                    <Banner></Banner>
                </section>
            </header>
            <main className='md:w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <SocialLogin></SocialLogin>
                </aside>
            </main>
        </div>
    )
}

HomePage.propTypes = {}

export default HomePage