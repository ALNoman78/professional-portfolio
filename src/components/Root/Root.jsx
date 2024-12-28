import PropTypes from 'prop-types'
import Home from '../Home/Home'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ThreeDots } from 'react-loader-spinner'

const Root = () => {

    const navigation = useNavigation()
    return (
        <div>
            <Home></Home>
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
            <Footer></Footer>
        </div>
    )
}

Root.propTypes = {}

export default Root