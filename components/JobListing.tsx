import React from "react";

const JobListing: React.FC = () => (
    <section id="jobs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Recent Opportunities</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Explore the latest IT positions from our network of trusted partners.
                </p>
            </div>
            <div className="iframe-container mb-12">
                <iframe
                    src="https://app.xinterview.ai/careers/3f7df4d4-50a5-4374-857e-6179d05bd9fd"
                    frameBorder={0}
                    allowFullScreen
                    className="w-full h-[600px] rounded-lg border border-slate-200"
                    title="Job Listings"
                ></iframe>
            </div>
        </div>
    </section>
);

export default JobListing;