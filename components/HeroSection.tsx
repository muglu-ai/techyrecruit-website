// components/HeroSection.tsx

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => (
    <section className="pt-16 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            {/* 
              - On mobile (default), it's a single column grid.
              - On large screens (lg:), it becomes a two-column grid.
              - The gap is reduced on mobile (gap-8) and increased on desktop (lg:gap-12).
            */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* --- Left Column: Text Content --- */}
                <div className="space-y-8 text-center lg:text-left">
                    {/* 
                      - Padding is now responsive: p-6 on mobile, md:p-8 on larger screens.
                    */}
                    <div className="bg-white/80 rounded-xl shadow-md p-6 md:p-8 space-y-4 border border-slate-100">
                        {/* 
                          - Font size is now responsive for better scaling on mobile.
                        */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                            Empowering
                            <span className="text-[#00B4D8]"> Careers</span>,
                            <br className="block md:hidden" /> Enabling 
                            <span className="text-[#FFD60A]"> Hiring</span>
                        </h1>
                        {/* 
                          - Text size is adjusted for better mobile readability.
                        */}
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            We specialize in connecting top-tier talent with organizations across full-time, contract, and freelance roles — delivering reliable manpower services and career opportunities tailored to your needs.
                        </p>
                    </div>

                    {/* 
                      - This button group is already mobile-friendly (flex-col on mobile, sm:flex-row on larger).
                      - justify-center and lg:justify-start align the buttons correctly in both views.
                    */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-shadow">
                            Explore Jobs
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3"
                        >
                            Connect with Us
                        </Button>
                    </div>
                </div>

                {/* --- Right Column: Image --- */}
                <div className="relative">
                    {/* 
                      - The aspect ratio is now responsive. A more vertical 4/3 on mobile.
                      - A wider 3/1 ratio is used on large screens for a cinematic look.
                    */}
                    <div className="w-full aspect-[4/3] lg:aspect-[3/1] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-xl">
                        <img
                            src="https://static.wixstatic.com/media/9fd997_7539ea42cd5e449fb47a1b9dd3efe7a2~mv2.jpg/v1/fill/w_1845,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9fd997_7539ea42cd5e449fb47a1b9dd3efe7a2~mv2.jpg"
                            alt="Professional team collaboration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* 
                      - These decorative circles are now hidden on mobile (hidden)
                      - They appear on large screens (lg:block) to avoid cluttering the mobile view.
                    */}
                    <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/50 rounded-full"></div>
                    <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-slate-800/40 rounded-full"></div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;