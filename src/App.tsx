import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-[var(--color-lightDark)] min-h-screen h-auto w-full">
        <Header />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
