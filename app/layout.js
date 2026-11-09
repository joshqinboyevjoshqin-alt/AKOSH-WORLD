import "./globals.css";

export const metadata = {
  title: "AKOSH WORLD",
  description: "AKOSH WORLD — Your digital universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
