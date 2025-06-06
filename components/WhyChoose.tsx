import { FC } from "react";
import { Handshake, Target, BrainCircuit } from "lucide-react";

const WhyChoose: FC = () => (
    <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Why Choose Us</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Discover what sets TechyRecruit apart in the competitive world of IT recruitment.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                        <Handshake className="h-10 w-10 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800">Trusted Network</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Built on years of successful placements and lasting relationships with top-tier technology companies worldwide.
                    </p>
                </div>

                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                        <Target className="h-10 w-10 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800">Personalized Support</h3>
                    <p className="text-slate-600 leading-relaxed">
                        One-on-one guidance throughout your job search journey, from resume optimization to interview preparation.
                    </p>
                </div>

                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                        <BrainCircuit className="h-10 w-10 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-800">Industry Expertise</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Deep understanding of technology trends, market demands, and the skills that drive success in IT careers.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default WhyChoose;