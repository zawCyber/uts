export default function PortfolioPage() {
    const projects = [
      { id: 1, title: "E-Commerce Website", image: "/projects/ecommerce.jpg" },
      { id: 2, title: "Personal Portfolio", image: "/projects/portfolio.jpg" },
      { id: 3, title: "Company Profile", image: "/projects/company.jpg" },
    ];
  
    return (
      <main className="portfolio-container">
        <h1>Portfolio</h1>
        <p>Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <h2>{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
  