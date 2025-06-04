import { Button } from "../components/ui/Button";

type ItemProps = {
  img: string;
  title: string;
  paragraph: string;
};

type TopPartProps = {
  subHeader: string;
  styledHeader?: string;
  description: string;
  display: "button" | "input";
  items: ItemProps[];
  smallText?: boolean;
  shrinkText?: boolean;
  fontBold?: boolean;
};

export const HeroTop = (props: TopPartProps) => {
  return (
    <>
      <header
        className={`flex flex-col text-6xl ${props.smallText ? "lg:text-5xl" : " lg:text-8xl"} ${
          props.shrinkText ? "w-full max-w-[400px]" : ""
        } ${props.fontBold ? "font-medium" : "font-light"} text-center leading-tight font-sans`}
      >
        {props.styledHeader && <h1 className="text-[var(--color-green)]">{props.styledHeader}</h1>}
        <h1 className="text-[var(--color-white)]">{props.subHeader}</h1>
      </header>
      <p className="mt-5 px-1 md:px-0 text-[var(--color-lightGray)] text-center max-w-[400px] lg:max-w-[350px]">
        {props.description}
      </p>

      {props.display === "input" && (
        <form className="w-full flex flex-col items-center mt-5">
          <div className="relative w-full max-w-[400px] lg:max-w-[490px]">
            <input
              type="email"
              className="text-sm lg:text-lg appearance-none outline-0 pl-5 pr-32 py-[12px] w-full rounded-2xl border border-[var(--color-lightGray)] bg-[var(--color-gray)] text-[var(--color-lightGray)]"
              placeholder="Your Email"
            />
            <div className="absolute top-0 bottom-0 right-[6px] flex items-center">
              <Button variant="primary" padding="px-2 py-2 lg:py-[7px] lg:px-10" children="Start For Free" />
            </div>
          </div>
        </form>
      )}
      {props.display === "button" && (
        <div className="pt-5">
          <Button variant="secondary" children="Create an Account" />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 px-2 md:px-0 gap-3 lg:gap-7 py-4 lg:py-10 max-w-[700px] lg:max-w-[1200px] mt-10">
        {props.items.map((item, index) => (
          <div
            key={index}
            className="p-3 lg:p-6 bg-[var(--color-accentGray)] rounded-lg w-full max-w-full lg:max-w-[300px]"
          >
            <img src={item.img} alt={item.title} className="w-fit h-auto" />
            <h2 className="mt-2 text-xl text-[var(--color-white)]">{item.title}</h2>
            <p className="mt-1 text-base text-[var(--color-lightGray)]">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </>
  );
};
