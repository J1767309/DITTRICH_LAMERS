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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Steve Dittrich</h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Attorney Steve Dittrich brings over 25 years of family law experience and distinguished military service to his practice throughout Minnesota. Recognized with a LexisNexis Martindale-Hubbell Peer Review Rating of Distinguished for Ethical Standards and Legal Ability, and named a Top 100 Family Law Lawyer in Minnesota by The American Society of Legal Advocates, he has built an exceptional career representing clients in marriage dissolution, custody disputes, property division, and military family law matters. Known for his skilled negotiation and ability to defuse emotionally charged situations, Steve combines extensive courtroom experience with the discipline and dedication forged through 22 years of military service.
                  </p>
                  <p>
                    Steve began his private practice in 1999, representing individuals in Minnesota District Court, Minnesota Court of Appeals, and Minnesota Supreme Court. A District Court Judge noted during his peer review that Steve is "a very capable, mature attorney who has a good way of working with family law clients in a way that defuses the often intense emotions that may be present." His accolades include American Academy of Trial Attorneys Premier 100 Trial Attorney, The National Advocates Top 100 Lawyers, American Institute of Family Law Attorneys 10 Best in Exceptional and Outstanding Client Service, and American Registry's Top Ten Percent America's Most Honored Professionals.
                  </p>
                  <p>
                    A retired U.S. Army Reserve officer, Steve served for 22 years—a rare accomplishment shared by only 0.6% of the U.S. population. He deployed to Afghanistan from 2003 to 2004 as a Civil Affairs Officer during Operation Enduring Freedom and led overseas military missions in Germany and El Salvador. This service exemplifies his commitment to loyalty, duty, and selfless service—values he brings to every client relationship.
                  </p>
                  <p>
                    Steve's dedication extends deeply into his community. For more than five years, he coached several hundred children as a volunteer youth athletic coach in volleyball, softball, basketball, and soccer. He served as a volunteer attorney coach for the Rochester John Marshall High School Mock Trial team, which placed second in its region. Currently, he mentors college students through the Gustavus Adolphus College Mentoring Program. For his pro bono work, the Minnesota State Bar Association has recognized Steve as a North Star Lawyer for providing 50 or more hours of pro bono legal services annually, and the Olmsted County Board of Commissioners has honored his dedication to pro bono service.
                  </p>
                  <p>
                    In addition to family law, Steve drafts Wills, Powers of Attorney, and Health Care Directives.
                  </p>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900">Practice Areas</h3>
                <p className="text-gray-700">
                  Marriage Dissolution, Child Custody, Family Support, Property Division, Adoption, Post-Dissolution Proceedings, Military Family Law, Wills, Powers of Attorney, Health Care Directives.
                </p>

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
