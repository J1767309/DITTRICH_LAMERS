import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { publicAsset } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SteveDittrich() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Steve Dittrich - Family Law Attorney | Dittrich & Lamers, LLP"
        description="Meet Steve Dittrich, a family law attorney since 1999 and retired U.S. Army Reserve officer. Specializing in divorce, custody, and military family law in Rochester, MN."
        canonicalUrl="/attorneys/steve-dittrich"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={publicAsset("/law-library.jpg")}
            alt="Professional law library"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Steve Dittrich</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Family Law Attorney
          </p>
        </div>
      </section>

      {/* Attorney Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <img
                  src={publicAsset("/steve-dittrich.jpg")}
                  alt="Steve Dittrich - Family Law Attorney"
                  className="w-full rounded-lg shadow-lg mb-6"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Contact</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong><br />
                    <a href="tel:5072887365" className="text-slate-700 hover:text-slate-800">
                      (507) 288-7365
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong><br />
                    <a href="mailto:info@dittrichlamers.com" className="text-slate-700 hover:text-slate-800">
                      info@dittrichlamers.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About Steve</h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Steven has been a family law attorney since 1999, handling cases in Minnesota's District, Appellate, and Supreme Courts. He specializes in divorce, custody, support, property division, and military family law.
                  </p>
                  <p>
                    A retired U.S. Army Reserve officer with 22 years of service, he deployed to Afghanistan and led missions in Germany and El Salvador.
                  </p>
                  <p>
                    Steven is recognized for his negotiation skills, pro bono work, and legal excellence, earning distinctions from Martindale-Hubbell and multiple legal organizations.
                  </p>
                  <p>
                    He is also active in mentoring, youth sports coaching, and community service.
                  </p>
                </div>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg" className="bg-slate-700 hover:bg-slate-800 text-white">
                      Schedule a Consultation
                    </Button>
                  </Link>
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
