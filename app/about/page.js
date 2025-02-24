export default function AboutPage() {
    return (
      <main className="about-container">
        <div className="about-content">
          <img src="/profile.jpg" alt="My Profile" className="profile-image" />
          <div className="about-text">
            <h1>Hi, I'm Reza Ryandi Maulana</h1>
            <p>
              Saya adalah seorang Web Developer & UI/UX Designer dengan pengalaman dalam membangun 
              website interaktif dan modern. Saya selalu bersemangat untuk menciptakan solusi yang inovatif 
              dan memberikan pengalaman pengguna terbaik.
            </p>
            <div className="about-buttons">
              <a href="/cv.pdf" className="btn">Download CV</a>
              <a href="/kontak" className="btn btn-secondary">Hubungi Saya</a>
            </div>
          </div>
        </div>
      </main>
    );
  }
  