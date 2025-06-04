import { Features, Platform, Resources } from "../constants/footer-display-items";
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { Button } from "./ui/Button";
import { FooterSection } from "./footer/FooterSection";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-green)] p-6 md:p-10 w-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-[var(--color-dark)] text-4xl md:text-6xl font-medium">What's next</h1>
        <p className="text-[var(--color-dark)] max-w-md">
          Submit better job apps — 10x faster. AI cover letter generator, resume keyword checker, outreach message
          writer, and more. Powered by GPT.
        </p>
        <Button variant="tertiary">Try For Free</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-10 px-6 md:px-16">
        <FooterSection header="Platform" items={Platform} />
        <FooterSection header="Features" items={Features} />
        <FooterSection header="Resources" items={Resources} />
        <div className="flex flex-col gap-3 items-start md:items-center">
          <div className="text-start">
            <h1 className="font-medium text-lg">Support</h1>
            <span className="text-sm font-medium">support@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <a href="#instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#linkedin">
              <FaLinkedin size={20} />
            </a>
            <a href="#telegram">
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>

      <hr className="mx-auto my-6 w-4/5 h-[1px] bg-[var(--color-dark)]" />

      <ul className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-[var(--color-accentGray)]">
        <li className="flex items-center gap-1">
          <span className="text-xl">©</span>
          <a href="#link" className="hover:underline">
            Copywriting
          </a>
        </li>
        <li className="hidden sm:block h-4 w-px bg-[var(--color-accentGray)]"></li>
        <li>
          <a href="#link" className="hover:underline">
            All Rights Reserved
          </a>
        </li>
        <li className="hidden sm:block h-4 w-px bg-[var(--color-accentGray)]"></li>
        <li>
          <a className="hover:underline" href="#link">
            Terms of Use
          </a>
        </li>
        <li className="hidden sm:block h-4 w-px bg-[var(--color-accentGray)]"></li>
        <li>
          <a className="hover:underline" href="#link">
            Privacy
          </a>
        </li>
      </ul>
    </footer>
  );
};
