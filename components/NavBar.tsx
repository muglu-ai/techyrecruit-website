import React from "react";
import Link from "next/link";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => (
    <button
        className={`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none ${className}`}
        {...props}
    >
        {children}
    </button>
);

const NavBar: React.FC = () => (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                    <div className="w-[151px] h-[54px] rounded-lg flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="TechyRecruit Logo"
                            className="w-[151px] h-[54px] object-contain"
                        />
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">
                        About
                    </Link>
                    <Link href="#jobs" className="text-slate-600 hover:text-slate-800 transition-colors">
                        Jobs
                    </Link>
                    <Link href="#blog" className="text-slate-600 hover:text-slate-800 transition-colors">
                        Blog
                    </Link>
                    <Link href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">
                        Contact
                    </Link>
                    <Button className="bg-slate-800 hover:bg-slate-700 text-white">Get Started</Button>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;
