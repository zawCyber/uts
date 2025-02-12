"use client";

import { useEffect, useState } from "react";

export default function StudentTable() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const students = [
    { no: 1, nim: "12345678", nama: "Reza", gender: "L", prodi: "Informatika", kelas: "TI-3B", semester: 5, alamat: "Bandung", hobby: "Coding", citaCita: "Software Engineer" },
    { no: 2, nim: "87654321", nama: "Alya", gender: "P", prodi: "Sistem Informasi", kelas: "SI-3A", semester: 5, alamat: "Jakarta", hobby: "Design", citaCita: "UI/UX Designer" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-6 w-full max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-white mb-6">📚 Data Mahasiswa</h2>

        {/* TAMPILAN DESKTOP */}
        {isDesktop ? (
          <table className="w-full border-collapse bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                {["No", "NIM", "Nama", "Gender", "Prodi", "Kelas", "Semester", "Alamat", "Hobby", "Cita-cita"].map((head, index) => (
                  <th key={index} className="p-3 text-sm border border-gray-700">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-700 transition-all border-b border-gray-600">
                  {Object.values(student).map((value, idx) => (
                    <td key={idx} className="p-3 text-center">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          // TAMPILAN MOBILE (GRID SYSTEM)
          <div className="grid gap-4">
            {students.map((student, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg shadow-md">
                {Object.entries(student).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
