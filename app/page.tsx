import { portfolioData } from './data/portfolioData';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <Hero data={portfolioData} />

        <section>
          <h2 className="section-heading">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {portfolioData.profile.summary}
          </p>
        </section>

        <ExperienceTimeline experiences={portfolioData.experience} />

        <Skills skills={portfolioData.skills} />

        <Education education={portfolioData.education} awards={portfolioData.awards} />

        <Contact contact={portfolioData.contact} />
      </div>
    </main>
  );
}
