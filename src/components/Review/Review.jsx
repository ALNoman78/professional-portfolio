import { FaStar, FaHeart, FaCheckCircle } from "react-icons/fa";

const Review = () => {
    return (
        <div className="md:w-10/12 mx-auto p-6 bg-white rounded-lg ">
            {/* Title */}
            <hr className="border-gray-200 mb-4" />
            <div className="flex justify-between">
                <div>
                    {/* Profile Section */}
                    <div className="flex items-center gap-3">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" // Replace with actual image URL
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <h3 className="text-lg font-semibold flex items-center gap-1">
                            Arlene McCoy
                            <FaCheckCircle className="text-green-500" />
                        </h3>
                    </div>

                    {/* Rating & Likes */}
                    <div className="flex items-center gap-3 mt-2 text-gray-600">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                        <span>|</span>
                        <div className="flex items-center gap-1">
                            <FaHeart className="text-red-500" />
                            <span>(1.5K)</span>
                        </div>
                    </div>

                    {/* Review Text */}
                    <p className="mt-2 text-gray-700">
                        This nasal clip has helped me reduce snoring and breathe easier at night.
                        Comfortable and barely noticeable!
                    </p>

                    {/* Image Review */}
                    <div className="mt-3">
                        <img
                            src="https://i.ibb.co.com/7tpQKwgJ/image-9.png" // Replace with actual image URL
                            alt="Product"
                            className="w-24 h-24 rounded-md"
                        />
                    </div>
                </div>
                {/* Time Ago Badge */}
                <div className="mt-3">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm">
                        1 Week Ago
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Review;
