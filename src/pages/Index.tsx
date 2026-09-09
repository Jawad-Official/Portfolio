import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AbstractSection from "@/components/AbstractSection";
import FocusSection from "@/components/FocusSection";
import ProjectsSection from "@/components/ProjectsSection";
import RecordSection from "@/components/RecordSection";
import StackSection from "@/components/StackSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div style={{ background: "#FAF8F3", color: "#1A1815", fontWeight: 400 }}>
      <Navbar />
      <main>
        <HeroSection />
        <AbstractSection />
        <FocusSection />
        <ProjectsSection />
        <RecordSection />
        <StackSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
