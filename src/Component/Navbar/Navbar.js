import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    const About = () => {
        navigate('/About')
    }

    const Service = () => {
        navigate('/Service')
    }

    const Contact = () => {
        navigate('/Contact')
    }


    const Profile = () => {
        navigate('/Profile')
    }

    return (
        <header className="bg-black text-white p-6 shadow-lg">
            <div className="container mx-auto">
                <nav>
                    <ul className="flex justify-center space-x-8">
                        <li>
                            <button onClick={() => window.location.href = '/'} className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1">Home</button>
                        </li>
                        <li>
                            <button onClick={About} className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1">About</button>
                        </li>
                        <li>
                            <button onClick={Service} className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1">Service</button>
                        </li>
                        <li>
                            <button onClick={Contact} className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1">Contact</button>
                        </li>
                        <li>
                            <button onClick={Profile} className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1">Profile</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>


    );
}

export default Navbar;
