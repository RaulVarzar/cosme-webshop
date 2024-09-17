import { Newsletter } from "@/components/newsletter/newsletter";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar/navbar";
import Popular from "../components/popular/popular";
import { Collections } from "@/components/collections/collectionsSection";
import ScrollContext from "@/components/ScrollContext";

export default function Home() {
  return (
    <ScrollContext>
      <div className="grid items-center min-h-screen justify-items-center">
        <Navbar />
        <main className="relative w-full max-w-8xl">
          <Hero />
        </main>
        <Carousel />
        <Popular />
        <Collections />
        <Newsletter />
        <Footer />
      </div>
    </ScrollContext>
  );
}
