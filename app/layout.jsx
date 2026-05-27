import "./globals.css";

export const metadata = {
  title: "Central Valley Notary Group",
  description: "Professional mobile notary services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}