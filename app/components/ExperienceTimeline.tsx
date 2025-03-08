export default function ExperienceTimeline({ experiences }: { experiences: any[] }) {
  return (
    <section>
      <h2 className="section-heading">Professional Experience</h2>
      <div className="space-y-12 relative">
        {experiences.map((exp, idx) => (
          <div key={idx} className="pl-6 border-l-2 border-blue-500 relative">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {exp.position}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.duration}
              </p>

              <ul className="space-y-3">
                {exp.highlights.map((highlight: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-500 mr-2 mt-1">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
