import mail from "../images/hero-images/mail.png";
import git_pull from "../images/hero-images/git-pull-request.png";
import send from "../images/hero-images/send.png";
import grid from "../images/hero-images/grid.png";
import sandbox from "../images/hero-images/codesandbox.png";
import coverletter from "../images/hero-images/file.png";
import signal from "../images/hero-images/signal.png";
import maximize from "../images/hero-images/maximize.png";

type ItemProps = {
  img: string;
  title: string;
  paragraph: string;
};

export const HeroTopItems: ItemProps[] = [
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

export const HeroTopItems2: ItemProps[] = [
  {
    img: coverletter,
    title: "Cover Letter",
    paragraph:
      "A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.",
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
