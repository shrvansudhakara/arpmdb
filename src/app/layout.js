import './globals.css';

export const metadata = {
  title: 'ArpMDb',
  description: 'Movie database',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
