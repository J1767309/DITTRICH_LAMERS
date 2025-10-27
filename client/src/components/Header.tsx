import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { publicAsset } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={publicAsset("/DittrichLamers_Logo_outlined.png")}
              alt="Dittrich & Lamers, LLP"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-slate-300 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-slate-300 font-medium transition-colors">
              About
            </Link>
            <Link href="/practice-areas" className="text-white hover:text-slate-300 font-medium transition-colors">
              Practice Areas
            </Link>
            <Link href="/contact">
              <Button 
                className="bg-slate-700 hover:bg-slate-600 text-white px-6"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

          {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-600">
            <Link 
              href="/" 
              className="block py-2 text-white hover:text-slate-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-white hover:text-slate-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/practice-areas" 
              className="block py-2 text-white hover:text-slate-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link 
              href="/contact" 
              className="block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="bg-slate-700 hover:bg-slate-600 text-white w-full">
                Contact Us
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

