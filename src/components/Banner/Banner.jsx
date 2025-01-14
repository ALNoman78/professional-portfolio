import Index from '../TextAnimate/TextAnimate'
import TextAnimate from '../TextAnimate/TextAnimate'

const Banner = () => {
    return (
        <div className="hero bg-base-200 md:p-44 my-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img 
                    src="https://i.ibb.co.com/7GnCyqY/450471296-1779014549258789-671374007755444183-n.jpg"
                    className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-5xl font-bold">Front-End Developer</h1>
                    <Index></Index>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            {/* <TextAnimate></TextAnimate> */}
            {/* <Index></Index> */}
        </div>
    )
}

Banner.propTypes = {}

export default Banner