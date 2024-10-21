import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

function Home() {

    const navigate = useNavigate()

    const goToContact = () => {
        navigate('/Contact')
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div>
                    <section className="bg-blue-600 text-white py-32 relative overflow-hidden m-3 border rounded-md">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1207217852/vector/programming-testing-app-on-different-devices-creation-software-and-coding-internet-pages-for.jpg?s=612x612&w=0&k=20&c=84TPoTRyO589B5rh1WvW0EQDbbPN_0ITkMsAO5ENz2g=')" }}>
                            <div className="bg-black opacity-50 inset-0 absolute"></div>
                        </div>
                        <div className="container mx-auto relative z-10 text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown">Innovating Your Future</h1>
                            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate__animated animate__fadeInUp">
                                Transforming your ideas into reality with our expert software solutions tailored just for you.
                            </p>
                            <div className="flex justify-center mb-12 animate__animated animate__fadeIn">
                                <a href="#" className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-400 transition duration-300 transform hover:scale-105 mr-4">
                                    Get Started
                                </a>
                                <a href="#" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105">
                                    Learn More
                                </a>
                            </div>

                            <div className="max-w-3xl mx-auto mb-12 animate__animated animate__fadeInUp">
                                <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
                                <p className="mb-4">Here’s what sets us apart:</p>
                                <ul className="list-disc list-inside text-left">
                                    <li className="flex items-center mb-2">
                                        <span className="text-xl mr-2">✅</span>
                                        <span><strong>Customized Solutions:</strong> Tailored to fit your unique needs.</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="text-xl mr-2">✅</span>
                                        <span><strong>Experienced Team:</strong> Experts dedicated to your success.</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="text-xl mr-2">✅</span>
                                        <span><strong>24/7 Support:</strong> Here whenever you need us.</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="text-xl mr-2">✅</span>
                                        <span><strong>Proven Success:</strong> Delivering projects on time and within budget.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg max-w-md mx-auto animate__animated animate__fadeInUp">
                                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                                <p className="mb-4">Contact us today to discuss your ideas and how we can bring them to life.</p>
                                <button onClick={goToContact} className="border border-black text-black px-8 py-3 rounded-lg  hover:text-blue-600 transition duration-300 transform hover:scale-105">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
                <div>
                    <section className="py-20 m-3">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-10">Latest Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <img src="https://www.specbee.com/sites/default/files/inline-images/e_commerce_0.jpg" alt="Project 1" className="mb-4 rounded h-64" />
                                    <h3 className="text-2xl font-semibold mb-2">Project One</h3>
                                    <p className="text-gray-600">A cutting-edge web application for e-commerce.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <img src="https://i.pinimg.com/736x/9e/c7/9c/9ec79cb33b34eec7ba84bdc740deede1.jpg" alt="Project 2" className="mb-4 rounded" />
                                    <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
                                    <p className="text-gray-600">Mobile app designed for fitness tracking.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <img src="https://www.openproject.org/blog/2022/2022-09-19-cloud-project-management-software/cloud-project-management-software-aa152b2e.jpg" alt="Project 3" className="mb-4 h-64 rounded" />
                                    <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
                                    <p className="text-gray-600">Cloud solution for data management and storage.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
};

export default Home;