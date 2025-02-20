import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add the weights you need
});

export const metadata = {
  title: 'Portfolio | Aakash Rajbhar',
  description: "Aakash Rajbhar's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>{children}</body>
    </html>
  );
}
