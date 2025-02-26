import Home from '../Home/Home'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ThreeDots } from 'react-loader-spinner'
import Navbar from '../Navbar/Navbar'
import Index from '../NewBanner/Index'
import NewNav from '../NewNav/NewNav'

const Root = () => {

    const navigation = useNavigation()
    return (
        <div className='font-Montserrat'>
            {/* <Navbar></Navbar> */}
            <NewNav></NewNav>
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
            {/* <Index></Index> */}
        </div>
    )
}

Root.propTypes = {}

export default Root