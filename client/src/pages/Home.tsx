import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CredentialsCarousel from "@/components/CredentialsCarousel";
import SEO from "@/components/SEO";
import { Scale, Users, Shield, FileText, Home as HomeIcon, Gavel, FileEdit, DollarSign, UserX, Heart } from "lucide-react";

export default function Home() {
  const practiceAreas = [
    { icon: Scale, title: "Marriage Dissolution", description: "Legal guidance for divorce, including asset division and spousal support" },
    { icon: Users, title: "Child Custody", description: "Helping parents establish custody and parenting time arrangements" },
    { icon: Heart, title: "Adoption", description: "Guiding families through the adoption process" },
    { icon: Shield, title: "Enforcement of Court Orders", description: "Compliance with custody, support, and other court rulings" },
    { icon: HomeIcon, title: "Property Division", description: "Fair distribution of assets and debts during divorce proceedings" },
    { icon: Gavel, title: "Appeals", description: "Challenging or defending family law rulings in higher courts" },
    { icon: FileEdit, title: "Modification", description: "Custody, support, or other agreements due to life changes" },
    { icon: DollarSign, title: "Child Support", description: "Establishing, modifying, or enforcing child support obligations" },
    { icon: FileText, title: "Spousal Maintenance", description: "Determining or adjusting financial support between spouses" },
    { icon: UserX, title: "Termination of Parental Rights", description: "Legal process for ending parental responsibilities and rights" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      
      {/* Hero Section */}
      <section className="md:relative md:h-[700px] lg:h-[800px] md:overflow-hidden">
        {/* Hero Image */}
        <div className="h-[350px] md:h-full overflow-hidden">
          <img 
            src="/hero-enhanced.png" 
            alt="Dittrich & Lamers Family Law Attorneys - Rochester, Minnesota" 
            className="w-full h-full object-cover object-[center_50%] md:object-[center_65%] md:pb-[85px]"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        {/* Hero Text - Below image on mobile, minimal overlay on desktop */}
        <div className="bg-slate-900 text-white py-8 px-4 md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-slate-900/90 md:py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Family Law Attorneys
            </h1>
            <p className="text-base md:text-lg mb-2 max-w-3xl mx-auto">
              We Focus Exclusively on Family Law and Marriage Dissolution Issues.
            </p>
            <p className="text-sm md:text-base mb-4 max-w-2xl mx-auto">
              More than <strong>30 years</strong> of combined experience serving individuals in their family and divorce-related issues. Serving Rochester, MN and beyond.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 text-base">
                Work With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials Carousel */}
      <CredentialsCarousel />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Your Experts in a variety of family & divorce law-related cases.
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                From the straight-forward uncontested marriage dissolution proceedings to the highly contested child custody and/or property division proceedings requiring District Court, Minnesota Court of Appeals, and Minnesota Supreme Court involvement, family & divorce lawyers Dittrich & Lamers, LLP has the necessary experience to assist individuals in all areas of family law.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Moreover, Dittrich & Lamers, LLP does not view the individuals we represent as just "clients." We understand the high potential of turmoil a family law related issue may cause. Our office is not just a person's family or divorce attorney, but a trusted companion in navigating through this difficult and stressful time.
              </p>
              <Link href="/about">
                <Button className="bg-slate-700 hover:bg-slate-800 text-white">
                  Learn More About Us
                </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 overflow-hidden">
                <img 
                  src="/amber-lamers-photo.png" 
                  alt="Amber Lamers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Amber Lamers</h3>
                <p className="text-gray-600 mb-4">
                  Amber began her legal career as a family law legal assistant in Rochester, Minnesota, before earning her law degree from Hamline University in 2006. She is recognized as a Super Lawyers Rising Star and is an active member of multiple bar associations.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="w-full">View Full Profile</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 overflow-hidden">
                <img 
                  src="/steve-dittrich.jpg" 
                  alt="Steve Dittrich - Family Law Attorney" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Steve Dittrich</h3>
                <p className="text-gray-600 mb-4">
                  Steven has been a family law attorney since 1999. A retired U.S. Army Reserve officer with 22 years of service, he specializes in divorce, custody, support, property division, and military family law.
                </p>
                <Link href="/about">
                  <Button variant="outline" className="w-full">View Full Profile</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Dittrich & Lamers, LLP handles all levels of family law litigation and Alternative Dispute Resolution
            </h2>
            <p className="text-xl mb-4">
              District Court, Minnesota Court of Appeals, and Minnesota Supreme Court
            </p>
            <p className="text-lg">
              We are one of the few family and divorce law offices in Minnesota with the knowledge to handle the complexities of a military marriage dissolution or other military member family law issue. Additionally, our office handles same sex adoptions and same sex marriage dissolutions. We are a safe zone and provide a welcoming environment for members of the LGBTQ+ community.
            </p>
            <p className="text-lg font-semibold mt-4">
              We are a female owned and retired military veteran owned law office.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            We knowledgeably and proficiently handle all areas of family law including:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-slate-700 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/practice-areas">
              <Button size="lg" className="bg-slate-700 hover:bg-slate-800 text-white">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Discover how we can help you today.</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

