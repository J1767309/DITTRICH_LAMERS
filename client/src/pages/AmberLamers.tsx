import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { publicAsset } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AmberLamers() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Amber Lamers - Family Law Attorney | Dittrich & Lamers, LLP"
        description="Meet Amber Lamers, an experienced family law attorney in Rochester, MN. Super Lawyers Rising Star with expertise in divorce, custody, and appellate advocacy."
        canonicalUrl="/attorneys/amber-lamers"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Amber Lamers</h1>
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
                  src={publicAsset("/amber-lamers-photo.png")}
                  alt="Amber Lamers"
                  className="w-full rounded-lg shadow-lg mb-6"
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Amber Lamers</h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Attorney Amber Lamers brings extensive experience and passionate advocacy to complex family law matters throughout Minnesota. Named a Super Lawyers Rising Star in 2014, 2016, and 2017, and recognized as a Top Woman Attorney in Minnesota in 2016, she has built a distinguished career representing clients through marriage dissolution, custody disputes, business valuations, and appellate proceedings. Known for her zealous advocacy and deep understanding of the emotional complexities inherent in family law transitions, Amber combines vast legal knowledge with genuine empathy to guide clients through their most difficult life changes, both at the district court and appellate levels.
                  </p>
                  <p>
                    While an undergraduate at Winona State University, Amber's adjunct professors—practicing attorneys who recognized her natural legal aptitude—encouraged her to pursue law. In 2001, she began her legal career as a family law legal assistant for Attorney Lawrence Downing in Rochester, Minnesota. She worked more than 40 hours per week while pursuing her law degree from Hamline University School of Law, demonstrating the dedication that would define her career. During her final year at Hamline, District Court Judge Joseph F. Wieners took notice of Amber's intellect and resolve, individually selecting her to serve as his law clerk upon her 2006 graduation. This clerkship provided invaluable experience working closely with the judiciary while observing litigation proceedings firsthand.
                  </p>
                  <p>
                    Following her clerkship, Amber returned to practice with Larry Downing, and when he retired in 2010, she and Steven Dittrich became partners—a partnership that has now endured for 24 years. As both a practicing attorney and the mother of two active children who has personally experienced divorce, Amber brings unique insight to understanding the legal complexities and emotional challenges her clients face during family transitions.
                  </p>
                  <p>
                    Amber is an active member of the Family Law Section of the American Bar Association, the Minnesota Bar Association, and the Family Law Section of the Olmsted County Bar Association.
                  </p>
                  <p>
                    <strong>Practice Areas:</strong> Marriage Dissolution, Child Custody, Parenting Time, Child Support, Spousal Maintenance, Property Division, Business Valuation, Paternity, Adoptions, Harassment Restraining Orders, Orders for Protection, Family Law Appeals.
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
