import TextAnimate from '../TextAnimate/TextAnimate'

const Banner = () => {
    return (
        <div className="hero bg-base-200 md:p-44 my-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/7GnCyqY/450471296-1779014549258789-671374007755444183-n.jpg"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            <TextAnimate></TextAnimate>
        </div>
    )
}

Banner.propTypes = {}

export default Banner