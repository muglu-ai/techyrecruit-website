// components/RecognisedBy.tsx
import React from 'react';
import Image from 'next/image';

// We define the structure for each logo to keep our code clean and typed.
type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Array of logos with their respective properties.
// Note: The dimensions are set to handle the different aspect ratios.
// The `startup-india` logo is wider, as requested.
const logos: Logo[] = [
  {
    src: '/iaf-approved-iso-certification-service.jpg',
    alt: 'IAF Approved ISO Certification',
    width: 96, // Represents a square-like logo
    height: 96,
  },
  {
    src: '/iso-9001-2015.jpg',
    alt: 'ISO 9001:2015 Certified',
    width: 96, // Represents a square-like logo
    height: 96,
  },
  {
    src: '/dpiit.png',
    alt: 'DPIIT Government of India Recognition',
    width: 96, // Represents a square-like logo
    height: 96,
  },
  {
    src: '/startup-india.png',
    alt: 'Startup India Recognised',
    width: 220, // A wider width for the horizontal logo
    height: 55,  // A smaller height to maintain its aspect ratio
  },
];

const RecognisedBy: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-slate-600 uppercase tracking-wider">
            Our Certifications & Recognitions
          </h2>
        </div>
        <div className="mt-10">
          {/* 
            - `flex flex-wrap`: Allows logos to wrap to the next line on small screens.
            - `justify-center`: Keeps the logos centered in the container.
            - `items-center`: Vertically aligns the logos, which is important for items of different heights.
            - `gap-x-10 gap-y-8`: Provides consistent spacing.
          */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 sm:gap-x-16">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex justify-center"
                // Adding a title attribute provides a simple tooltip on hover for better UX
                title={logo.alt}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  // This gives a professional, uniform look. Logos are grayscale by default
                  // and reveal their color on hover.
                  className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognisedBy;