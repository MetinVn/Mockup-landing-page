import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Logo } from "../components/ui/Logo";

const NAV_LINKS = [
  { label: "AI Cover Letter Generator", href: "#ai-cover-letter-generator" },
  { label: "Resume Template", href: "#resume" },
  { label: "Pricing", href: "#pricing" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1560px] m-auto py-2 px-4 md:py-4 md:px-15 xl:py-5 xl:px-25">
      {/* Desktop Navigation */}
      <section className="hidden lg:flex justify-between h-[140px] items-center bg-transparent">
        <div className="flex items-center gap-0 lg:gap-4 text-lg">
          <div className="w-fit h-auto mr-10">
            <Logo />
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex space-x-3 h-full items-center justify-center">
          <Button variant="secondary">Sign In</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </section>

      {/* Mobile Navigation */}
      <section className="flex lg:hidden items-center justify-between bg-transparent py-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-lightGray)] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </section>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <section className="lg:hidden bg-[var(--color-gray)] px-4 pb-4">
          <div className="flex flex-col space-y-4 mt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col space-y-3 mt-3">
              <Button variant="secondary">Sign In</Button>
              <Button variant="primary">Get Started</Button>
            </div>
          </div>
        </section>
      )}
    </nav>
  );
};
