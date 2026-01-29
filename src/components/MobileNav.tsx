import { useState } from 'react';

interface MobileNavProps {
    client?: 'load' | 'idle' | 'visible' | 'media' | 'only';
}

export default function MobileNav({ client = 'load' }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);

    const navItems = [
        { name: 'Features', href: '#features' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleNav}
                className="lg:hidden relative z-50 p-2 text-white hover:text-teal-400 transition-colors"
                aria-label="Toggle navigation"
            >
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
                    onClick={closeNav}
                    aria-hidden="true"
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-blue-950 to-blue-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between p-6 border-b border-blue-800/50">
                        <h2 className="text-xl font-bold text-white">Menu</h2>
                        <button
                            onClick={closeNav}
                            className="p-2 text-white hover:text-teal-400 transition-colors"
                            aria-label="Close navigation"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-6">
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={closeNav}
                                        className="block px-6 py-4 text-white hover:bg-blue-800/50 hover:text-teal-400 transition-all font-medium"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className="px-6 pt-4">
                                <a
                                    href="#contact"
                                    onClick={closeNav}
                                    className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition-all shadow-lg"
                                >
                                    Request Demo
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Drawer Footer */}
                    <div className="p-6 border-t border-blue-800/50">
                        <p className="text-sm text-blue-300 text-center">
                            © 2026 AgeniumTrack
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
