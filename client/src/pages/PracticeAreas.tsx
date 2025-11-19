import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Scale, Users, Shield, FileText, Home as HomeIcon, Gavel, FileEdit, DollarSign, Heart } from "lucide-react";
import { publicAsset } from "@/lib/utils";

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Marriage Dissolution",
      description: "Legal guidance for divorce, including asset division and spousal support. We handle both contested and uncontested divorce proceedings with care and professionalism."
    },
    {
      icon: HomeIcon,
      title: "Property Division",
      description: "Fair distribution of assets and debts during divorce proceedings. We ensure equitable division of marital property and protect your financial interests."
    },
    {
      icon: Users,
      title: "Child Custody",
      description: "Helping parents establish custody and parenting time arrangements. We advocate for the best interests of your children while protecting your parental rights."
    },
    {
      icon: Gavel,
      title: "Appeals",
      description: "Challenging or defending family law rulings in higher courts. Our experience extends to the Minnesota Court of Appeals and Minnesota Supreme Court."
    },
    {
      icon: DollarSign,
      title: "Spousal Maintenance",
      description: "Determining or adjusting financial support between spouses. We help establish fair spousal maintenance arrangements based on your circumstances."
    },
    {
      icon: Shield,
      title: "Enforcement of Court Orders",
      description: "Compliance with custody, support, and other court rulings. We take action when court orders are not being followed."
    },
    {
      icon: FileEdit,
      title: "Modification",
      description: "Custody, support, or other agreements due to life changes. We help modify existing orders when circumstances change significantly."
    },
    {
      icon: FileText,
      title: "Child Support",
      description: "Establishing, modifying, or enforcing child support obligations. We ensure children receive the financial support they deserve."
    },
    {
      icon: Heart,
      title: "Adoption",
      description: "Guiding families through the adoption process. We handle same-sex adoptions and provide support throughout this joyful journey."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Practice Areas - Family Law Services | Dittrich & Lamers, LLP"
        description="Comprehensive family law services in Rochester, MN including divorce, child custody, property division, adoption, child support, and more. Expert legal representation for your family law needs."
        keywords="divorce lawyer Rochester MN, child custody attorney, family law services, property division, adoption attorney, child support lawyer, spousal maintenance"
        canonicalUrl="/practice-areas"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={publicAsset("/scales-justice.jpg")} 
            alt="Scales of justice and gavel representing family law practice" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Practice Areas</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive family law services tailored to your needs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              We knowledgeably and proficiently handle all areas of family law
            </h2>
            <p className="text-lg text-gray-700">
              From straight-forward uncontested marriage dissolution proceedings to highly contested child custody and property division proceedings requiring District Court, Minnesota Court of Appeals, and Minnesota Supreme Court involvement, we have the necessary experience to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <Icon className="h-14 w-14 text-slate-700 mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Military Family Law Section */}
      <section className="py-16 bg-slate-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Military Family Law</h2>
            <p className="text-xl mb-4">
              We are one of the few family and divorce law offices in Minnesota with the knowledge to handle the complexities of a military marriage dissolution or other military member family law issue.
            </p>
            <p className="text-lg">
              With Steve Dittrich's 22 years of U.S. Army Reserve service, including deployment to Afghanistan, we understand the unique challenges military families face.
            </p>
          </div>
        </div>
      </section>

      {/* Court Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              All Levels of Family Law Litigation
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Dittrich & Lamers, LLP handles all levels of family law litigation and Alternative Dispute Resolution, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">District Court</h3>
                  <p className="text-gray-600">Trial-level proceedings</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Court of Appeals</h3>
                  <p className="text-gray-600">Appellate advocacy</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Supreme Court</h3>
                  <p className="text-gray-600">Highest court representation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to discuss your case?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with one of our experienced family law attorneys.
          </p>
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

