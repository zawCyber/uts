export default function CV() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl w-full">
          {/* Header Section */}
          <div className="flex items-center mb-6">
            <div>
              <h1 className="text-black font-bold">Reza Ryandi Maulana</h1>
              <p className="text-gray-600">Full-Stack Developer</p>
              <p className="text-gray-500">Zaw@gmail.com | 085733169868</p>
            </div>
          </div>
  
          {/* Summary Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">
              Summary
            </h2>
            <p className="text-gray-700">
              Passionate and detail-oriented Full-Stack Developer with 5+ years of
              experience building scalable web applications. Skilled in modern
              JavaScript frameworks, backend technologies, and database
              management.
            </p>
          </div>
  
          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">
              Skills
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>JavaScript (React, Next.js, Node.js)</li>
              <li>Python (Django, Flask)</li>
              <li>Database Management (PostgreSQL, MongoDB)</li>
              <li>DevOps (Docker, Kubernetes, AWS)</li>
            </ul>
          </div>
  
          {/* Experience Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">
              Experience
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">Tech Solutions Inc. | 2019 - Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                <li>Developed and maintained scalable web applications.</li>
                <li>
                  Collaborated with cross-functional teams to implement
                  client-driven features.
                </li>
                <li>Optimized backend processes, reducing server costs by 20%.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Junior Developer Intern
              </h3>
              <p className="text-gray-600">Innovatech | 2018 - 2019</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                <li>Assisted in building responsive front-end interfaces.</li>
                <li>
                  Wrote automated tests to ensure consistent code quality.
                </li>
                <li>Improved system performance by 15% through refactoring.</li>
              </ul>
            </div>
          </div>
  
          {/* Education Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">
              Education
            </h2>
            <div>
              <h3 className="font-semibold text-gray-800">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600">University of Technology | 2014 - 2018</p>
            </div>
          </div>
  
          {/* Footer */}
          <div className="text-center text-gray-500 text-sm">
            © 2025 John Doe. All Rights Reserved.
          </div>
        </div>
      </div>
    );
  }
  