import { Button } from "../components/ui/Button";

type HeroBottomProps = {
  header: string;
  paragraph: string;
  reverseSides?: boolean;
  imgSrc: string;
  bgColor: "dark" | "green";
  buttonType: "second" | "third";
  buttonText: string;
};

export const HeroBottom = (props: HeroBottomProps) => {
  return (
    <div
      className={`w-full flex flex-col ${
        props.reverseSides ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-8 md:gap-20 ${
        props.bgColor === "dark" ? "bg-[var(--color-gray)]" : "bg-[var(--color-green)]"
      } p-6 md:p-10`}
    >
      <div
        className={`flex flex-col w-full md:w-1/2 max-w-[500px] space-y-7 ${
          props.bgColor === "dark" ? "text-[var(--color-white)]" : "text-[var(--color-dark)]"
        } text-center md:text-start`}
      >
        <h1 className="text-4xl md:text-5xl font-medium">{props.header}</h1>
        <p className="text-sm font-medium">{props.paragraph}</p>
        {props.buttonType === "second" && <Button variant="secondary" children={props.buttonText} />}
        {props.buttonType === "third" && <Button variant="tertiary" children={props.buttonText} />}
      </div>

      <div className="w-fit flex justify-center">
        <img src={props.imgSrc} className="w-full h-auto bg-center bg-cover" alt="illustration" />
      </div>
    </div>
  );
};
