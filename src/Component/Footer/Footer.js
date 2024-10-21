function Footer() {
    return (
        <div>
            <div>
            <footer className="bg-gray-900 text-white py-6">
    <div className="container mx-auto flex flex-col items-center">
        <div className="mb-2">
            <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
        </div>
        <div className="flex space-x-6 mb-1">
            <a href="#" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
                <i className="fab fa-instagram"></i>
            </a>
        </div>
        <div className="text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500">Privacy Policy</a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-gray-400 hover:text-orange-500">Terms of Service</a>
        </div>
    </div>
</footer>


            </div>
        </div>
    );
};

export default Footer;