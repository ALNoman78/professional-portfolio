import Home from '../Home/Home'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ThreeDots } from 'react-loader-spinner'
import Navbar from '../Navbar/Navbar'
import Index from '../NewBanner/Index'

const Root = () => {

    const navigation = useNavigation()
    return (
        <div className='md:max-w-7xl mx-auto'>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                    :
                    <Outlet></Outlet>
            }
            <Index></Index>
        </div>
    )
}

Root.propTypes = {}

export default Root