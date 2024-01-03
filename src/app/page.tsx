import Header from "@/components/Header";
import WelcomeSection from './sections/introduction';
import AboutSection from "@/components/AboutSection";
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';


export default function Home() {
  return (
    <main className=" min-h-screen">
      {/* <Header /> */}
      <NavBar />
      <WelcomeSection />
      <AboutSection />
    </main>
  )
}
