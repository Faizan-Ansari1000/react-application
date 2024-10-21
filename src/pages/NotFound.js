import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <div>
                <section className="flex items-center justify-center h-screen bg-gray-100 text-center">
                    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
                        <h1 className="text-6xl font-bold text-gray-800">404</h1>
                        <h2 className="mt-4 text-2xl text-gray-600">Page Not Found</h2>
                        <p className="mt-2 text-gray-500">
                            Sorry, the page you are looking for does not exist.
                        </p>
                        <div className="mt-6">
                            <Link to={'/'} className="bg-purple-600 text-white p-5 border rounded-full hover:bg-purple-500 transition duration-300">
                                Go to Homepage
                            </Link>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default NotFound;