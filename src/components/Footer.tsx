import { ButtonThird } from "./Button";
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa6";

type FooterItemsProps = {
  header: string;
  items: string[];
};

const FooterItems = ({ header, items }: FooterItemsProps) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <h1 className="font-medium text-lg text-[var(--color-dark)]">{header}</h1>
      <ul className="text-sm font-medium tracking-wide space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a className="hover:underline" href="#someLink">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Footer() {
  const platformItems = [
    "Plans and Prices",
    "AI Create Letters",
    "AI Resume Checker",
    "Resume Templates",
    "Sell Templates",
    "Blog",
  ];
  const Features = ["AI Cover Letter Creator", "Resume Keywords Optimizer", "ATS Resume Checker"];
  const Resources = [
    "4 AI Tools for Applying a Job",
    "How to optimize Resume keywords",
    "Why you should use Chat GPT for creating Resume",
    "What should you include in a Cover Letter",
  ];

  return (
    <footer className="bg-[var(--color-green)] p-6 md:p-10 w-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-[var(--color-dark)] text-4xl md:text-6xl font-medium">What's next</h1>
        <p className="text-[var(--color-dark)] max-w-md">
          Submit better job apps — 10x faster. AI cover letter generator, resume keyword checker, outreach message
          writer, and more. Powered by GPT.
        </p>
        <ButtonThird type="button" name="Try For Free" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-10 px-6 md:px-16">
        <FooterItems header="Platform" items={platformItems} />
        <FooterItems header="Features" items={Features} />
        <FooterItems header="Resources" items={Resources} />
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
}

export default Footer;
