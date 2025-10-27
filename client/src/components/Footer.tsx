import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dittrich & Lamers Law</h3>
            <p className="text-gray-300 mb-4">
              Family Law and Divorce Lawyers in Rochester, MN. We pride ourselves on advocating for your rights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-slate-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-slate-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-gray-300 hover:text-slate-300 transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-slate-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-slate-400" />
                <span className="text-gray-300">
                  3143 Superior Drive NW, Suite C<br />
                  Rochester, Minnesota 55901
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-slate-400" />
                <a href="tel:5072809999" className="text-gray-300 hover:text-slate-300 transition-colors">
                  (507) 280-9999
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-slate-400" />
                <a href="mailto:info@dittrichlamers.com" className="text-gray-300 hover:text-slate-300 transition-colors">
                  info@dittrichlamers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dittrich & Lamers Law. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

