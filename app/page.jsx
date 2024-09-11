import { Carousel } from "./carousel";
import Footer from "./footer";
import Hero from "./hero";
import { Navbar } from "./navbar";
import Popular from "./popular";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen py-8">
      <Navbar />
      <main className="max-w-8xl relative w-full">
        <Hero />
      </main>
      <Carousel />
      <Popular />
      <Footer />
    </div>
  );
}
