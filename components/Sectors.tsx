import React from "react";

type Sector = {
    name: string;
    imageUrl: string;
};

const sectors: Sector[] = [
    {
        name: "Information Technology",
        imageUrl: "https://static.wixstatic.com/media/nsplsh_55796874716f6c4b4d6234~mv2.jpg/v1/fill/w_216,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Maxwell%20Ridgeway.jpg",
    },
    {
        name: "Fintech",
        imageUrl: "https://static.wixstatic.com/media/9fd997_66e7721136e14eee80ed81386d02edf4~mv2.jpg/v1/fill/w_216,h_194,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/istockphoto-914422452-612x612.jpg",
    },
    {
        name: "Semicon",
        imageUrl: "https://static.wixstatic.com/media/9fd997_dd7d6030df324470a68cec71a0201977~mv2.jpg/v1/fill/w_216,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/chip-or-microchip-icon-on-white-vector.jpg",
    },
    {
        name: "Telecom",
        imageUrl: "https://static.wixstatic.com/media/9fd997_016e47a14a5a4a98b8f561071149d848~mv2.jpg/v1/fill/w_216,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/istockphoto-1184778656-612x612.jpg",
    },
    {
        name: "Healthcare",
        imageUrl: "https://static.wixstatic.com/media/9fd997_782888d34c9447ab8e2a5d0d7e89ba3c~mv2.jpg/v1/fill/w_216,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(12)_edited.jpg",
    },
    {
        name: "Supply Chain",
        imageUrl: "https://static.wixstatic.com/media/9fd997_a8eb187c48384cd1841b2e1a6e706d4a~mv2.jpeg/v1/fill/w_216,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1529046634785.jpeg",
    },
    // {
    //     name: "Call Center Employee",
    //     imageUrl: "/images/call-center.jpg",
    // },
    {
        name: "BFSI/ITES/BPO/KPO",
        imageUrl: "https://static.wixstatic.com/media/11062b_4c18505b988d49e2b2605ded0ba8357d~mv2.jpeg/v1/fill/w_216,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Call%20Center%20Employee.jpeg",
    },
    {
        name: "Energy",
        imageUrl: "https://static.wixstatic.com/media/9fd997_933670085d1644d5aae45e8b19fb45e7~mv2.jpg/v1/fill/w_216,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/pre-cop-roadmap-on-tripling-renewable-power-doubling-energy-efficiency-by-2030.jpg",
    },
];

const regions =
    "India, the UK, USA, Middle East, Europe, Australia, Russia, Japan, and beyond.";

const Sectors: React.FC = () => (
    <section style={{ position: "relative", overflow: "hidden", minHeight: 600 }} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
        {/* Video Background */}
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
                // opacity: 0.25, // Adjust for readability
            }}
        >
            <source src="https://video.wixstatic.com/video/11062b_6743da5900054f1f8e69f53302930a6a/720p/mp4/file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, padding: "32px 0" }}>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Our Recruitment Sectors
                    </h1>
            <p>
                We provide comprehensive manpower services globally across diverse sectors including Tech, IT, Non IT, 
                Fintech, Healthcare, Automobile, Semiconductor, and more, serving regions like {regions}
            </p>
            <div
                className="grid gap-8 mt-6 justify-center"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    display: "grid",
                    marginTop: 24,
                }}
            >
                {sectors.map((sector) => (
                    <div
                        key={sector.name}
                        style={{
                            border: "1px solid #eee",
                            borderRadius: 8,
                            padding: 16,
                            textAlign: "center",
                            background: "#fafbfc",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        }}
                    >
                        <img
                            src={sector.imageUrl}
                            alt={sector.name}
                            style={{
                                width: "100%",
                                height: 120,
                                objectFit: "cover",
                                borderRadius: 6,
                                marginBottom: 12,
                            }}
                        />
                        <h3 style={{ fontSize: 18, margin: 0 }}>{sector.name}</h3>
                    </div>
                ))}
            </div>
            {/* <p style={{ marginTop: 32, fontStyle: "italic", color: "#888" }}>
                Image credits: Maxwell Ridgeway and respective sources.
            </p> */}
        </div>
        </div>
        </div>
    </section>
);

export default Sectors;