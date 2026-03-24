import "./globals.css";

export const metadata = {
  title: "AdPulse AI",
  description: "AI-powered Google Ads optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
