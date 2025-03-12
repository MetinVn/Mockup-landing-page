import project from "../images/hero-images/project.png";
import overlay from "../images/hero-images/Overlay.png";
import { TopPart } from "../layouts/HeroTop";
import mail from "../images/hero-images/mail.png";
import git_pull from "../images/hero-images/git-pull-request.png";
import send from "../images/hero-images/send.png";
import grid from "../images/hero-images/grid.png";
import sandbox from "../images/hero-images/codesandbox.png";
import coverletter from "../images/hero-images/file.png";
import signal from "../images/hero-images/signal.png";
import maximize from "../images/hero-images/maximize.png";
import illustration from "../images/hero-images/Illustration.png";
import illustration2 from "../images/hero-images/Illustration2.png";
import illustration3 from "../images/hero-images/Illustration3.png";
import { HeroBottom } from "../layouts/HeroBottom";

export type ItemProps = {
  img: string;
  title: string;
  paragraph: string;
};

const HeroTopItems: ItemProps[] = [
  {
    img: coverletter,
    title: "AI Cover Letter Generator",
    paragraph:
      "The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.",
  },
  {
    img: signal,
    title: "Smart Personalization",
    paragraph:
      "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.",
  },
  {
    img: maximize,
    title: "Resume Scanner",
    paragraph:
      "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.",
  },
];

const HeroTopItems2: ItemProps[] = [
  {
    img: coverletter,
    title: "Cover Letter",
    paragraph: "A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.",
  },
  {
    img: mail,
    title: "Resignation Letters",
    paragraph:
      "A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company.",
  },
  {
    img: git_pull,
    title: "Connection Request",
    paragraph:
      "A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user.",
  },
  {
    img: send,
    title: "Outreach Emails",
    paragraph:
      "Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration.",
  },
  {
    img: grid,
    title: "Resume Optimization",
    paragraph:
      "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.",
  },
  {
    img: sandbox,
    title: "Resume Design",
    paragraph:
      "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.",
  },
];

function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <TopPart
        description="Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT"
        display="input"
        header="with PostJob"
        items={HeroTopItems}
        styledHeader="Win your dream job"
      />

      {/*Second Screen */}
      <div className="bg-[var(--color-green)] rounded-xl my-5 lg:my-20">
        <div className="flex flex-col items-center w-full space-y-2 text-center h-[200px] pt-7">
          <h1 className="text-5xl font-semibold w-full max-w-[500px]">Submit Better job applications</h1>
          <span className="my-5 md:my-0 text-6xl xl:text-9xl font-bold tracking-wider">10x faster</span>
          <p className="mt-1 max-w-[530px] font-semibold text-center leading-tight">
            AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT
          </p>
        </div>
        <div className="mt-30 px-1 lg:px-20 relative">
          <img src={project} className="w-full h-auto" alt="project photo" />
          <div className="absolute inset-0 bg-cover bg-center mix-blend-color" style={{ backgroundImage: `url(${overlay})` }}></div>
        </div>
      </div>

      <TopPart
        styledHeader=""
        items={HeroTopItems2}
        display="button"
        header="Spend less time looking for work"
        description="We'll help you through the hardest part of your job search."
        smallText={true}
        shrinkText={true}
        fontBold={true}
      />

      <HeroBottom
        buttonText="Try For free Now"
        buttonType="third"
        bgColor="green"
        imgSrc={illustration}
        paragraph="A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language processing to help job seekers create customized and effective cover letters."
        header="Free AI cover letter generator powered by GPT"
      />
      <HeroBottom
        buttonText="Optimize your resume"
        buttonType="third"
        bgColor="green"
        paragraph="By optimizing keywords in your resume, you can increase your chances of getting noticed by recruiters and landing interviews for the jobs you want."
        imgSrc={illustration2}
        header="Optimize the keywords in your resume"
        reverseSides={true}
      />
      <HeroBottom
        buttonText="Create an Account"
        buttonType="second"
        bgColor="dark"
        paragraph="By following these design tips, you can create a professional and effective resume that will help you stand out to recruiters and hiring managers."
        imgSrc={illustration3}
        header="Free resume design templates"
      />
    </section>
  );
}

export default Hero;
