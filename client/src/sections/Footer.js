import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import facebook from "@/assets/images/facebook.svg";
import x from "@/assets/images/x.svg";
import github from "@/assets/images/github.svg";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/5 to-teal-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main footer content */}
      <div className="relative backdrop-blur-sm bg-slate-900/50 border-t border-emerald-400/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Top section with logo and social links */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            {/* Logo section */}
            <div className="flex items-center mb-6 lg:mb-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Image
                  src={logo}
                  alt="Logo"
                  width={50}
                  height={50}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  MediScribe
                </h3>
                <p className="text-slate-400 text-sm">Building the future</p>
              </div>
            </div>

            {/* Social media links */}
            <div className="flex space-x-6">
              {[
                { icon: facebook, href: "#", label: "Facebook" },
                { icon: x, href: "#", label: "X" },
                { icon: github, href: "#", label: "GitHub" }
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="group relative p-3 rounded-full backdrop-blur-md bg-white/5 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 rounded-full transition-all duration-300"></div>
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="relative z-10 filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Glowing divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group relative px-4 py-2 text-slate-200 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
    </footer>
  );
}