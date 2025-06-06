import React from "react";
import { Search, Users, TrendingUp } from "lucide-react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg border ${className}`}>{children}</div>
);

const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
    <div className={className}>{children}</div>
);

const AboutUs: React.FC = () => (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">About TechyRecruit</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    We specialize in IT job placement and career consultancy, connecting top talent with leading companies in
                    the technology sector.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="h-8 w-8 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-3">Talent Scouting</h3>
                        <p className="text-slate-600">
                            We identify and connect exceptional IT professionals with opportunities that match their skills and
                            aspirations.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="h-8 w-8 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-3">Personalized Hiring</h3>
                        <p className="text-slate-600">
                            Our tailored approach ensures the perfect fit between candidates and companies, creating lasting
                            partnerships.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <TrendingUp className="h-8 w-8 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-3">Career Guidance</h3>
                        <p className="text-slate-600">
                            Expert guidance and mentorship to help IT professionals advance their careers and reach their full
                            potential.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

export default AboutUs;