import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md z-40">
                    <div className="flex flex-col px-4 py-4 space-y-2">
                        <Link href="/" className="text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <a href="#layanan" className="text-gray-700 hover:text-blue-600">
                            Services
                        </a>
                        <a href="#portofolio" className="text-gray-700 hover:text-blue-600">
                            Portfolio
                        </a>
                        <a href="#kontak" className="text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
