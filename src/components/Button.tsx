type ButtonProps = {
  name: string;
  padding?: string;
  type: "button" | "submit" | "reset";
};

export function Button({ name, padding, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`cursor-pointer h-auto text-sm lg:text-lg bg-[var(--color-green)] hover:bg-[var(--color-white)] hover:text-[var(--color-green)] text-[var(--color-black)] ${
        padding ? padding : "py-2 px-10"
      } max-h-fit font-semibold rounded-xl transition-all duration-500`}>
      {name}
    </button>
  );
}

export function ButtonSecondary({ name, padding, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`cursor-pointer h-auto text-sm lg:text-lg border-1 border-[var(--color-green)] bg-[var(--color-gray)] hover:bg-[var(--color-green)] hover:text-[var(--color-dark)] text-[var(--color-white)] ${
        padding ? padding : "py-2 px-10"
      } max-h-fit font-semibold rounded-xl transition-all duration-500`}>
      {name}
    </button>
  );
}

export function ButtonThird({ name, padding, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`cursor-pointer h-auto text-sm lg:text-lg border-1 border-[var(--color-gray)] bg-[var(--color-green)] hover:bg-[var(--color-dark)] hover:text-[var(--color-green)] text-[var(--color-gray)] ${
        padding ? padding : "py-2 px-10"
      } max-h-fit font-semibold rounded-xl transition-all duration-500`}>
      {name}
    </button>
  );
}
