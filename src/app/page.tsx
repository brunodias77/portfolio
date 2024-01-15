import Header from "@/components/Header";
import WelcomeSection from './sections/introduction';
import AboutSection from "@/components/AboutSection";
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className=" min-h-screen">
      {/* <Header /> */}
      <NavBar />
      <WelcomeSection />
      <AboutSection />
      <Skills />
      <Footer />
    </main>
  )
}
