import Footer from "../Component/Footer/Footer";

function Profile() {
    return (
        <div>
            <div>
                <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
                    <div class="flex items-center">
                        <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/340108293_979305756815017_2902137289574060955_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvlrtNql0XCqFb3VK7GPFjCJ3n05Az8lMInefTkDPyU24eJYBVV2yy45wyfnkYVmrdVBspfnJbvce1gLuiFFP1&_nc_ohc=XobyAriFVdgQ7kNvgGVGt8f&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AtZczIA47EfOhwHv5kFHiiP&oh=00_AYDrOFfLdGZbBR00HL6LX61UbYNsNwZMCXXBatPzU_w3mA&oe=671B43B1" alt="CEO Photo" class="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg" />
                        <div class="ml-6">
                            <h1 class="text-4xl font-bold text-gray-800">Faizan Ansari</h1>
                            <h2 class="text-2xl text-gray-600">CEO, ABC Software Company</h2>
                            <p class="mt-2 text-gray-500 italic">Innovator | Leader | Mentor</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2">Biography</h3>
                        <p class="mt-2 text-gray-600 leading-relaxed">
                            Faizan Ansari has been at the helm of ABC Software Company since its inception. Under his leadership, the company has grown exponentially,
                            focusing on customer satisfaction and cutting-edge technology. He is passionate about mentoring young entrepreneurs and promoting diversity
                            in tech. With a vision to revolutionize the software industry, John believes in innovation and sustainability.
                        </p>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2">Achievements</h3>
                        <ul class="mt-2 list-disc list-inside text-gray-600">
                            <li>Recognized as "Top CEO of the Year" by Tech Magazine (2023)</li>
                            <li>Led a team that developed award-winning software solutions</li>
                            <li>Advocate for technology in education, launching several initiatives</li>
                        </ul>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-xl font-semibold text-gray-700 border-b-2 border-blue-500 pb-2">Contact</h3>
                        <ul class="mt-2 text-gray-600">
                            <li>Email: <a href="#" class="text-blue-500 hover:underline">Faizan@example.com</a></li>
                            <li>Phone: <span class="text-gray-600">+0 (800) 098-7890</span></li>
                            <li>LinkedIn: <a href="#" class="text-blue-500 hover:underline">linkedin/Faizan</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-2">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Profile; 