import Hero from "../components/Hero";
import SocialBar from "../components/SocialBar";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="home-layout">
      <SocialBar />
      <div className="home-main">
        <Hero />
      </div>
    </section>
  );
}