import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Career Compass',
  description: 'Breaking barriers to college preparation and career guidance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
