import project from "../images/hero-images/project.png";
import overlay from "../images/hero-images/Overlay.png";
import { HeroTop } from "../layouts/HeroTop";
import illustration from "../images/hero-images/Illustration.png";
import illustration2 from "../images/hero-images/Illustration2.png";
import illustration3 from "../images/hero-images/Illustration3.png";
import { HeroBottom } from "../layouts/HeroBottom";
import { HeroTopItems, HeroTopItems2 } from "../constants/hero-top-items";

export const Hero = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <HeroTop
        styledHeader="Win your dream job"
        description="Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT"
        display="input"
        subHeader="with PostJob"
        items={HeroTopItems}
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
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-color"
            style={{ backgroundImage: `url(${overlay})` }}
          ></div>
        </div>
      </div>

      <HeroTop
        styledHeader=""
        items={HeroTopItems2}
        display="button"
        subHeader="Spend less time looking for work"
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
};
