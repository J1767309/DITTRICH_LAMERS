import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from 'react';

const credentials = [
  {
    name: "American Bar Association",
    image: "/credentials/aba.jpg",
    alt: "American Bar Association"
  },
  {
    name: "Minnesota's Best Lawyers",
    image: "/credentials/best-lawyers.jpg",
    alt: "Minnesota's Best Lawyers - July 2009"
  },
  {
    name: "Hamline University",
    image: "/credentials/hamline.jpg",
    alt: "Hamline University School of Law"
  },
  {
    name: "Super Lawyers",
    image: "/credentials/super-lawyers.png",
    alt: "Super Lawyers - Amber Lawrence - Selected 2018"
  },
  {
    name: "University of Arkansas",
    image: "/credentials/arkansas.jpg",
    alt: "University of Arkansas School of Law"
  },
  {
    name: "University of St. Thomas",
    image: "/credentials/st-thomas.jpg",
    alt: "University of St. Thomas Minnesota"
  },
  {
    name: "Minnesota State Bar Association",
    image: "/credentials/msba.jpg",
    alt: "Minnesota State Bar Association"
  },
  {
    name: "Safe Space Ally",
    image: "/credentials/safe-space.jpg",
    alt: "Safe Space Ally - LGBTQ+ Welcoming"
  }
];

export default function CredentialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps'
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any additional carousel setup here
    }
  }, [emblaApi]);

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Professional Credentials & Affiliations
        </h3>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-4"
              >
                <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={credential.image}
                    alt={credential.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          Recognized for excellence in family law practice
        </p>
      </div>
    </section>
  );
}

