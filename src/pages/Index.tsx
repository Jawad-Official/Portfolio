import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const TearDivider = ({ flip = false }: { flip?: boolean }) => (
  <div
    style={{
      height: 48,
      overflow: "hidden",
      position: "relative",
      transform: flip ? "scaleX(-1)" : undefined,
      lineHeight: 0,
    }}
  >
    <svg
      viewBox="0 0 1440 48"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <path
        d="M0,0 
           C60,48 120,0 180,32 
           C240,48 300,8 360,36 
           C420,48 480,4 540,30 
           C600,48 660,6 720,34 
           C780,48 840,10 900,38 
           C960,48 1020,2 1080,28 
           C1140,48 1200,8 1260,36 
           C1320,48 1380,12 1440,40 
           L1440,48 L0,48 Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "#f0f0f0" }}>
      <Navbar />
      <main>
        <HeroSection />

        {/* Tear into About (white) */}
        <div style={{ color: "#fff", marginBottom: -2 }}>
          <TearDivider />
        </div>

        <AboutSection />

        {/* Tear into Achievements (gray) */}
        <div style={{ color: "#f0f0f0", marginBottom: -2 }}>
          <TearDivider flip />
        </div>

        <AchievementsSection />

        {/* Tear into Projects (white) */}
        <div style={{ color: "#fff", marginBottom: -2 }}>
          <TearDivider />
        </div>

        <ProjectsSection />

        {/* Tear into Skills (gray) */}
        <div style={{ color: "#f0f0f0", marginBottom: -2 }}>
          <TearDivider flip />
        </div>

        <SkillsSection />

        {/* Tear into Contact (yellow) */}
        <div style={{ color: "#FFD93D", marginBottom: -2 }}>
          <TearDivider />
        </div>

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
};

export default Index;
