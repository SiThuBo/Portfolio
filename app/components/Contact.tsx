import GitHubIcon from "./GitHubIcon";
import LinkedinIcon from "./LinkedinIcon";

export default function Contact({ contact }: { contact: any }) {
  return (
    <section>
      <h2 className="section-heading">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="w-20 font-medium">Email:</span>
            <a href={`mailto:${contact.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {contact.email}
            </a>
          </div>
          <div className="flex items-center">
            <span className="w-20 font-medium">Phone:</span>
            <a href={`tel:${contact.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center">
            <span className="w-20 font-medium">Address:</span>
            <span className="text-gray-600 dark:text-gray-400">{contact.address}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
          >
            <GitHubIcon />
             GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
           <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
