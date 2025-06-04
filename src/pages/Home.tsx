import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Header } from "../layouts/Header";

export const Home = () => {
  return (
    <div className="bg-[var(--color-lightDark)] min-h-screen h-auto w-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};
