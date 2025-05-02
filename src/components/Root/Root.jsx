import Home from '../Home/Home'
import { Outlet, useNavigation } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import Navbar from '../Navbar/Navbar'

const Root = () => {

    const navigation = useNavigation()
    return (
        <div className='font-Montserrat'>
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
        </div>
    )
}

Root.propTypes = {}

export default Root