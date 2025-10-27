import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Award, Heart, Shield } from "lucide-react";
import { publicAsset } from "@/lib/utils";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us - Dittrich & Lamers, LLP Family Law Attorneys"
        description="Meet Amber Lamers and Steve Dittrich, experienced family law attorneys in Rochester, MN with over 50 years of combined experience serving families in their family law and divorce needs."
        canonicalUrl="/about"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={publicAsset("/law-library.jpg")} 
            alt="Professional law library with legal books and resources" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Our Firm</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dedicated to providing compassionate and effective legal representation
          </p>
        </div>
      </section>

      {/* Our Firm Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              Engaged, Responsive and Committed to Your Case
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Our lawyers take a client-centric approach to every case. When you reach out to us for help, you are not shuffled around and left waiting. We want to make sure that a knowledgeable attorney hears your problem, needs and goals as quickly as possible so that we can take measures to assist you.
              </p>
              <p className="mb-6">
                What matters to you, matters to us. We maintain constant communication with our clients, and when you work with us, you will know you have a strong and caring advocate by your side.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Veteran Owned</h3>
                  <p className="text-gray-600">Retired military veteran owned law office</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">LGBTQ+ Friendly</h3>
                  <p className="text-gray-600">Safe zone and welcoming environment</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-slate-700 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Female Owned</h3>
                  <p className="text-gray-600">Woman-owned law practice</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Attorneys Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Attorneys</h2>
          
          {/* Amber Lamers */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <img 
                  src={publicAsset("/amber-lamers-photo.png")} 
                  alt="Amber Lamers" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Amber Lamers</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Amber began her legal career as a family law legal assistant in Rochester, Minnesota, before earning her law degree from Hamline University in 2006.
                  </p>
                  <p className="mb-4">
                    While balancing full-time work and studies, she gained recognition for her legal aptitude, leading to a clerkship with Judge Joseph F. Wieners.
                  </p>
                  <p className="mb-4">
                    After her clerkship, she became a successful attorney specializing in family law, handling cases in Minnesota District and Appellate Courts.
                  </p>
                  <p className="mb-4">
                    Amber is an active member of multiple bar associations and has been recognized as a Super Lawyers Rising Star.
                  </p>
                  <p>
                    She is also a mother of two and understands the challenges of balancing work and family.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Steve Dittrich */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 order-1 lg:order-2">
                <img 
                  src={publicAsset("/steve-dittrich.jpg")} 
                  alt="Steve Dittrich - Family Law Attorney" 
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-2 order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Steve Dittrich</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Steven has been a family law attorney since 1999, handling cases in Minnesota's District, Appellate, and Supreme Courts. He specializes in divorce, custody, support, property division, and military family law.
                  </p>
                  <p className="mb-4">
                    A retired U.S. Army Reserve officer with 22 years of service, he deployed to Afghanistan and led missions in Germany and El Salvador.
                  </p>
                  <p className="mb-4">
                    Steven is recognized for his negotiation skills, pro bono work, and legal excellence, earning distinctions from Martindale-Hubbell and multiple legal organizations.
                  </p>
                  <p>
                    He is also active in mentoring, youth sports coaching, and community service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

