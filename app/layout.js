import "./globals.css";

export const metadata = {
  title: "Reza Ryandi Maulana",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
