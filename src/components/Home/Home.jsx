import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import CategoryNews from '../Pages/CategoryNews'

const Home = () => {
    return (
        <div className='md:w-[11/12] mx-auto'>
            <Banner></Banner>
            <CategoryNews />
            <Footer></Footer>
        </div>
    )
}

Home.propTypes = {}

export default Home