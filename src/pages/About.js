import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer/Footer";

function About (){

    return (
        <div>
            <div>
            <section className="bg-blue-600 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg')" }}>
            <div className="bg-black opacity-50 inset-0 absolute"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInDown">About Us</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate__animated animate__fadeInUp">
                We are a dedicated team of professionals passionate about delivering innovative software solutions.
            </p>
        </div>
    </section>
    <section className="py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-8 text-gray-700 max-w-3xl mx-auto">
                Founded in 2020, we started with a vision to revolutionize the software industry. Our journey began with a small team of developers who believed in the power of technology to transform businesses. Over the years, we have grown into a full-fledged company, helping clients achieve their goals through custom software solutions.
            </p>
            <p className="mb-8 text-gray-700 max-w-3xl mx-auto">
                Our mission is to empower businesses with innovative technology solutions that drive growth and efficiency. We strive to understand our clients' needs and deliver tailored solutions that exceed their expectations.
            </p>
        </div>
    </section>

    <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-2">
                <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn">
                    <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                    <p>We believe in honesty and transparency in all our dealings. Trust is the foundation of our relationships with clients and partners.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn">
                    <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                    <p>We embrace change and encourage creativity. Our team is committed to finding innovative solutions to meet evolving challenges.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn">
                    <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                    <p>We strive for excellence in everything we do. Our goal is to deliver high-quality software solutions that meet the highest standards.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/340108293_979305756815017_2902137289574060955_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvlrtNql0XCqFb3VK7GPFjCJ3n05Az8lMInefTkDPyU24eJYBVV2yy45wyfnkYVmrdVBspfnJbvce1gLuiFFP1&_nc_ohc=XobyAriFVdgQ7kNvgGVGt8f&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AtZczIA47EfOhwHv5kFHiiP&oh=00_AYDrOFfLdGZbBR00HL6LX61UbYNsNwZMCXXBatPzU_w3mA&oe=671B43B1" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Faizan Ansari </h3>
                    <p className="text-gray-600">CEO & Founder</p>
                    <p className="text-gray-600">He is a MERN Stack Developer </p>
                    <p>Faizan Ansari visionary leader with a passion for technology and innovation.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-1/461327300_1547258932565553_5312556386297250161_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHxq7rX_MvJQoB__TZGbkwsdQZqviP1-Sx1Bmq-I_X5LPFdsP3qK8PFPdzpADip_vUCUJuCeaJoHYP24UloiJ2z&_nc_ohc=7k2mEMJ_rkkQ7kNvgE4ABR1&_nc_zt=24&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=Afx6xQSM_HFt5J9O4W5ygV7&oh=00_AYC2geBZyOARCM55WnvjmuStrt61gG_fuIYDWPXdGjAItg&oe=671B63F2" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Athar Ansari</h3>
                    <p className="text-gray-600">He is a MERN Stack Developer </p>
                    <p className="text-gray-600">CTO</p>
                    <p>Athar leads our technology strategy and ensures the highest quality standards.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/438087104_1341247623209659_7545616998862636187_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHqtmmrkO1WLJyPU1KT2t2OkDvgTypc7J-QO-BPKlzsnycZwAHwO1Y9XztZd6mNVSmkBHsu27y_-Q22BLM61dDb&_nc_ohc=7k4Ad9dYq3cQ7kNvgERsKK9&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=Az6z_AOFjN0siyFvHUotzId&oh=00_AYD0ZmE_uZNvgjd3cgnJdg8DZyGUFzVGVPG9vPvIMGwW4Q&oe=671B6923" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Shoaib Sheikh</h3>
                    <p className="text-gray-600">Lead Accountants</p>
                    <p>Shoaib is an expert in see the available in market new technologies and loves tackling complex challenges.</p>
                </div>
            </div>
        </div>
    </section>

    <Footer />

            </div>
        </div>
    )

};

export default About;