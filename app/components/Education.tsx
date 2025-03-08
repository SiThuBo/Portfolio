export default function Education({
  education,
  awards,
}: {
  education: any[];
  awards: string[];
}) {
  return (
    <section>
      <h2 className="section-heading">Education & Awards</h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="pl-6 border-l-2 border-green-500 relative">
            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0" />
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
          </div>
        ))}

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Awards</h3>
          <ul className="list-disc pl-6 space-y-2">
            {awards.map((award, idx) => (
              <li key={idx} className="text-gray-700 dark:text-gray-300">
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
