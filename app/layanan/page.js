export default function LayananPage() {
    return (
      <main className="layanan-container">
        <h1>Layanan Saya</h1>
        <p>Saya menyediakan berbagai layanan profesional untuk kebutuhan digital Anda.</p>
        <div className="layanan-grid">
          <div className="layanan-item">
            <h2>Website Development</h2>
            <p>Membangun website responsif dan cepat menggunakan teknologi terbaru.</p>
          </div>
          <div className="layanan-item">
            <h2>UI/UX Design</h2>
            <p>Desain antarmuka yang menarik dan pengalaman pengguna yang optimal.</p>
          </div>
          <div className="layanan-item">
            <h2>SEO Optimization</h2>
            <p>Meningkatkan visibilitas website Anda di mesin pencari dengan strategi SEO terbaik.</p>
          </div>
        </div>
      </main>
    );
  }
  