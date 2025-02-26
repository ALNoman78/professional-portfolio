// import TextAnimate from '../TextAnimate/TextAnimate'
import profileImage from '../../assets/linkdIn.jpg'
import BannerImage from '../../assets/banner.png'
import { FaArrowRight } from "react-icons/fa";
import Review from '../Review/Review';

const Banner = () => {
    return (
        <div>
            {/* <div className="hero bg-base-200 md:p-44 my-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img 
                    src={profileImage}
                    className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h3 className='font-bold md:text-4xl py-4 text-left text-black'>Hello , I'm Abdullah Al Noman.I'm Front-End Developer  </h3>
                    <p>I use most of the case in my project is React JS , Tailwind CSS , daisyUi , Firebase and some components library.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div> */}
            <div
                className="hero place-items-start md:p-36 "
                style={
                    {
                        backgroundImage: `url(${BannerImage})`,
                    }
                }>
                <div className='flex items-center'>
                    <div className=" text-neutral-content">
                        {/* icon start*/}
                        <div className="flex items-center">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white rounded-full p-2 text-black font-medium'>
                                <span>26k Happy Customers</span>
                            </div>
                        </div>
                        {/* icon end */}
                        <h1 className="mb-5 my-2 text-white md:text-[64px] font-semibold">Breathe better , <br /> <span>live better!</span></h1>
                        <p className="mb-5 text-white">
                            Discover how effortless breathing can enhance your life.
                            <br /> Take the first step Today!
                        </p>
                        <div className="navbar-end">
                            <a className="btn bg-[#FF6600] text-white rounded-full">Shop Now
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* review section added */}
            <div className='md:w-10/12 mx-auto bg-white'>
                <h2 className="text-[36px] font-semibold my-3">Customer Feedback</h2>
            </div>
            <div className="flex flex-col items-center">
                {[...Array(3)].map((_, index) => (
                    <Review key={index} />
                ))}
            </div>
        </div>
    )
}

Banner.propTypes = {}

export default Banner