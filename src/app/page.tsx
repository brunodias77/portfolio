import Image from 'next/image';
import Header from "@/components/Header";
import WelcomeSection from './sections/introduction';

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Header />
      <WelcomeSection />
    </main>
  )
}
