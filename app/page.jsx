import { Newsletter } from "@/components/newsletter/newsletter";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Popular from "../components/popular";
import { Collections } from "@/components/collections/collectionsSection";
import ScrollContext from "@/components/ScrollContext";

export default function Home() {
  return (
    <ScrollContext>
      <div className="grid items-center justify-items-center min-h-screen">
        <Navbar />
        <main className="max-w-8xl relative w-full">
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
