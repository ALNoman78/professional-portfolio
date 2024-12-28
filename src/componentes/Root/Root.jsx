import PropTypes from 'prop-types'
import Home from '../Home/Home'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Root = () => {

    const navigation = useNavigation()
    return (
        <div>
            <Home></Home>
            {
                navigation.state = 'loading ' ? :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    )
}

Root.propTypes = {}

export default Root