import { useState } from "react";
import { Button, ButtonSecondary } from "../components/Button";
import logo from "../images/Logo.png";

function HeaderLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[1560px] m-auto py-2 px-4 md:py-4 md:px-15 xl:py-5 xl:px-25">
      {/* Desktop Navigation UI */}
      <section className="hidden lg:flex justify-between h-[140px] items-center bg-transparent">
        <div className="flex items-center gap-0 lg:gap-4 text-lg">
          <div className="w-fit h-auto mr-10">
            <a href="#logo">
              <img src={logo} alt="company logo" />
            </a>
          </div>
          <a href="#ai-cover-letter-generator" className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors">
            AI Cover Letter Generator
          </a>
          <a href="#resume" className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors">
            Resume Template
          </a>
          <a href="#pricing" className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors">
            Pricing
          </a>
        </div>
        <div className="flex space-x-3 h-full items-center justify-center">
          <ButtonSecondary type="button" name="Sign In" />
          <Button type="button" name="Get Started" />
        </div>
      </section>

      {/* Mobile Navigation UI*/}
      <section className="flex lg:hidden items-center justify-between bg-transparent py-4">
        <div className="flex items-center">
          <a href="#logo">
            <img src={logo} alt="company logo" className="w-28" />
          </a>
        </div>
        <div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-lightGray)] focus:outline-none"
            aria-label="Toggle Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </section>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <section className="lg:hidden bg-[var(--color-gray)] px-4 pb-4">
          <div className="flex flex-col space-y-4 mt-4">
            <a
              href="#ai-cover-letter-generator"
              className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors">
              AI Cover Letter Generator
            </a>
            <a href="#resume" className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors">
              Resume Template
            </a>
            <a href="#pricing" className="text-[var(--color-lightGray)] hover:text-[var(--color-white)] transition-colors">
              Pricing
            </a>
            <div className="flex flex-col space-y-3 mt-3">
              <ButtonSecondary type="button" name="Sign In" />
              <Button type="button" name="Get Started" />
            </div>
          </div>
        </section>
      )}
    </nav>
  );
}

export default HeaderLayout;
