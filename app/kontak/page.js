export default function KontakPage() {
    return (
      <main className="kontak-container">
        <div className="kontak-card">
          <h1>Kontak Saya</h1>
          <p>Silakan isi formulir di bawah ini untuk menghubungi saya.</p>
  
          <form>
            <input type="text" placeholder="Nama Anda" required />
            <input type="email" placeholder="Email Anda" required />
            <textarea placeholder="Pesan Anda" required></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </main>
    );
  }
  