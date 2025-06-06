import React from "react";
import Link from "next/link";
import {
  Search,
  Users,
  Target,
  MapPin,
  Clock,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  BrainCircuit,
  Handshake,
  TrendingUp,
  Facebook,
} from "lucide-react"

const Footer: React.FC = () => (
    <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-[151px] h-[54px] rounded-lg flex items-center justify-center">
                            <img
                                src="/logo.png"
                                alt="TechyRecruit Logo"
                                className="w-[151px] h-[54px] object-contain"
                            />
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        Empowering IT professionals to find their next opportunity and helping companies build exceptional
                        teams.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#jobs" className="text-slate-300 hover:text-white transition-colors">
                                Jobs
                            </Link>
                        </li>
                        <li>
                            <Link href="#blog" className="text-slate-300 hover:text-white transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <span className="text-slate-300">Job Placement</span>
                        </li>
                        <li>
                            <span className="text-slate-300">Career Consulting</span>
                        </li>
                        <li>
                            <span className="text-slate-300">Resume Review</span>
                        </li>
                        <li>
                            <span className="text-slate-300">Interview Prep</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                        <Link
                            href="https://www.linkedin.com/company/30227585"
                            className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href="#"
                            className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/techyrecruit"
                            className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
                <p className="text-slate-300 text-sm">© 2025 TechyRecruit. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
