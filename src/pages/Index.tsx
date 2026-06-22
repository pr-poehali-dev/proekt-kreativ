import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Speakers from "@/components/Speakers";
import Partners from "@/components/Partners";
import Promo from "@/components/Promo";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Speakers />
      <Partners />
      <Promo />
      <Registration />
      <Footer />
    </main>
  );
};

export default Index;