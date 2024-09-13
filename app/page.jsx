import { Newsletter } from "@/components/newsletter";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Popular from "../components/popular";
import { Collections } from "@/components/collections/collectionsSection";

export default function Home() {
  return (
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
  );
}
