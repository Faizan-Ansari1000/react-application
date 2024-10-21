import Footer from "../Component/Footer/Footer";

function Service() {
    return (
        <>
            <div>
                <div>
                    <section className="py-20 bg-gray-50 m-3">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-12 text-blue-600">Our Premier Service: Custom Software Development</h2>
                            <div className="max-w-2xl mx-auto">
                                <img
                                    src="https://cdn.vectorstock.com/i/500p/07/19/software-development-programming-coding-vector-29570719.jpg"
                                    alt="Custom Software Development"
                                    className="w-full h-64 object-cover rounded-lg mb-6"
                                />
                                <p className="text-lg text-gray-700 mb-6">
                                    At [Your Company Name], we specialize in delivering custom software solutions tailored to your business needs.
                                    Our expert team of developers, designers, and project managers work collaboratively to create applications
                                    that enhance efficiency, drive growth, and improve user experience.
                                </p>
                                <h3 className="text-2xl font-semibold mb-4">Why Choose Our Custom Software Development?</h3>
                                <ul className="list-disc text-left mb-6 mx-auto max-w-md ms-3">
                                    <li className="mb-2">✨ **Tailored Solutions:** We develop software that meets your specific requirements and goals.</li>
                                    <li className="mb-2">🚀 **Agile Methodology:** Our iterative approach ensures flexibility and faster delivery.</li>
                                    <li className="mb-2">🔒 **Robust Security:** We prioritize the security of your data and applications with best practices.</li>
                                    <li className="mb-2">📈 **Scalability:** Our solutions are designed to grow with your business.</li>
                                    <li className="mb-2">🤝 **Post-Launch Support:** We offer ongoing support to ensure your software continues to perform optimally.</li>
                                </ul>
                                <p className="text-lg text-gray-700 mb-6">
                                    Whether you need a web application, mobile app, or enterprise solution, our team is here to help you every step of the way.
                                    Let us turn your vision into reality!
                                </p>
                                <a
                                    href="#"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-12 text-blue-600">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-4">

                            {/* Mobile App Development Card */}
                            <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center p-6">
                                    <img src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg" alt="Mobile App Development" className="w-32 h-32 object-cover rounded-full mb-4" />
                                    <h3 className="text-2xl font-semibold mb-2">Mobile App Development</h3>
                                    <p className="text-gray-700 mb-4">
                                        We create user-friendly mobile applications for both iOS and Android.
                                    </p>
                                    <ul className="list-disc text-left mb-4">
                                        <li>Custom UI/UX Design</li>
                                        <li>Cross-Platform Development</li>
                                        <li>Ongoing Support</li>
                                    </ul>
                                    <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
                                </div>
                            </div>

                            {/* Web Development Card */}
                            <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center p-6">
                                    <img src="https://becreative.qa/wp-content/uploads/2021/08/Carts-App-Qatar-Branding-Packaging-Web-Design-2.jpg" alt="Web Development" className="w-32 h-32 object-cover rounded-full mb-4" />
                                    <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                                    <p className="text-gray-700 mb-4">
                                        We design and develop stunning, responsive websites tailored for your needs.
                                    </p>
                                    <ul className="list-disc text-left mb-4">
                                        <li>Responsive Design</li>
                                        <li>CMS Development</li>
                                        <li>SEO Optimized</li>
                                    </ul>
                                    <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
                                </div>
                            </div>

                            {/* SEO Services Card */}
                            <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center p-6">
                                    <img src="https://www.oyova.com/wp-content/uploads/2024/03/social-best-ecommerce-platform-for-seo.jpg" alt="SEO Services" className="w-32 h-32 object-cover rounded-full mb-4" />
                                    <h3 className="text-2xl font-semibold mb-2">SEO Services</h3>
                                    <p className="text-gray-700 mb-4">
                                        Enhance your visibility and attract organic traffic with our SEO strategies.
                                    </p>
                                    <ul className="list-disc text-left mb-4">
                                        <li>Keyword Research</li>
                                        <li>On-Page Optimization</li>
                                        <li>Analytics Tracking</li>
                                    </ul>
                                    <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
                                </div>
                            </div>

                            {/* Digital Marketing Card */}
                            <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center p-6">
                                    <img src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg" alt="Digital Marketing" className="w-32 h-32 object-cover rounded-full mb-4" />
                                    <h3 className="text-2xl font-semibold mb-2">Digital Marketing</h3>
                                    <p className="text-gray-700 mb-4">
                                        Amplify your brand's reach with tailored digital marketing solutions.
                                    </p>
                                    <ul className="list-disc text-left mb-4">
                                        <li>Social Media Strategy</li>
                                        <li>Email Campaigns</li>
                                        <li>Content Creation</li>
                                    </ul>
                                    <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
                                </div>
                            </div>

                            {/* E-commerce Solutions Card */}
                            <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center p-6">
                                    <img src="https://media.licdn.com/dms/image/C5112AQFg_D683HXb8g/article-cover_image-shrink_600_2000/0/1520196824069?e=2147483647&v=beta&t=vx_nN6oRnjYdYHqV1vBbOLCOyZDeRQo4CNQBBko47aU" alt="E-commerce Solutions" className="w-32 h-32 object-cover rounded-full mb-4" />
                                    <h3 className="text-2xl font-semibold mb-2">E-commerce Solutions</h3>
                                    <p className="text-gray-700 mb-4">
                                        Build a powerful online store with our e-commerce solutions.
                                    </p>
                                    <ul className="list-disc text-left mb-4">
                                        <li>Payment Gateway Integration</li>
                                        <li>Inventory Management</li>
                                        <li>Customer Experience Optimization</li>
                                    </ul>
                                    <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
                                </div>
                            </div>

                            {/* Cloud Solutions Card */}
                            <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center p-6">
                                    <img src="https://www.creativewebglance.com/wp-content/uploads/2024/05/best_coom_ltf.png" alt="Cloud Solutions" className="w-32 h-32 object-cover rounded-full mb-4" />
                                    <h3 className="text-2xl font-semibold mb-2">Cloud Solutions</h3>
                                    <p className="text-gray-700 mb-4">
                                        Leverage cloud technology to improve your operational efficiency.
                                    </p>
                                    <ul className="list-disc text-left mb-4">
                                        <li>Cloud Migration Services</li>
                                        <li>Data Storage Solutions</li>
                                        <li>Managed Cloud Services</li>
                                    </ul>
                                    <a href="#" className="text-blue-600 font-bold hover:underline">Learn More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    )
};

export default Service;