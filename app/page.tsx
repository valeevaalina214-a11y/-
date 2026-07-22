import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Bloggers } from "@/components/Bloggers";
import { RocketGroup } from "@/components/RocketGroup";
import { Contacts } from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Five blocks only: hero, services, bloggers, Rocket Group, contacts */}
        <Hero />
        <Services />
        <Bloggers />
        <RocketGroup />
        <Contacts />
      </main>
      <footer className="bg-lavender-300 py-6 text-center text-xs text-graphite/70">
        © {new Date().getFullYear()} Rocket Agency. Creative Blogger Agency.
      </footer>
    </>
  );
}
