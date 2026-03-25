import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#FFD93D", borderBottom: "3px solid #000" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-0 flex-shrink-0"
          aria-label="JA Logo"
        >
          <div
            style={{
              background: "#66D9EF",
              border: "2px solid #000",
              boxShadow: "3px 3px 0px #000",
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "18px",
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            JA
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-black hover:underline underline-offset-4 decoration-2 transition-all"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="neo-btn px-4 py-2 text-sm font-bold text-black"
            style={{
              background: "#66D9EF",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Get In Touch!
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: "2px solid #000", background: "#FFD93D" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="neo-btn px-4 py-2 text-sm font-bold text-black text-center mt-2"
                style={{ background: "#66D9EF" }}
              >
                Get In Touch!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
