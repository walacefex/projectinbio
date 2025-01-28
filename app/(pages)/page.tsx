import FAQ from "../components/landingPage/Faq";
import Header from "../components/landingPage/Header";
import Hero from "../components/landingPage/Hero";
import Pricing from "../components/landingPage/Pricing";
import Video from "../components/landingPage/Video";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Header />
      <Video />
      <Pricing />
      <FAQ />
    </div>
  );
}
