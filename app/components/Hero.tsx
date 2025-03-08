export default function Hero({ data }: { data: any }) {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {data.profile.name}
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
        {data.profile.title}
      </h2>
      <div className="flex justify-center space-x-4">
        <a
          href={data.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          GitHub
        </a>
        <a
          href={data.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
