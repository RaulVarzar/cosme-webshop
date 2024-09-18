import { Newsletter } from "@/components/newsletter/newsletter";
import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar/navbar";
import Popular from "../components/popular/popular";
import { Collections } from "@/components/collections/collectionsSection";
import ScrollContext from "@/components/ScrollContext";

export default function Home() {
  return (
    <ScrollContext>
      <Navbar />
      <div className="grid items-center min-h-screen justify-items-center">
        <div className=" w-full grid items-center justify-items-center">
          <Hero />
          <Carousel />
          <div className="bg-base-100 w-full z-10">
            <Popular />
            <Collections />
            <Newsletter />
          </div>
        </div>
        <Footer />
      </div>
    </ScrollContext>
  );
}
