import { Newsletter } from "@/components/newsletter/newsletter";
import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar/navbar";
import Popular from "../components/popular/popular";
import { Collections } from "@/components/collections/collectionsSection";
import ScrollContext from "@/components/ScrollContext";
import Modal from "@/components/navbar/modal";
import { AnimatePresence } from "framer-motion";

export default function Home({ searchParams }) {
  const showModal = searchParams?.login;

  return (
    <ScrollContext>
      <AnimatePresence>{showModal && <Modal />}</AnimatePresence>
      <Navbar />
      <div className="grid items-center min-h-screen justify-items-center">
        <div className="grid items-center w-full justify-items-center">
          <Hero />
          <Carousel />
          <div className="z-10 w-full bg-base-100">
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
