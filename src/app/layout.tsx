import { FC, ReactNode } from 'react';
import { Barlow } from '@next/font/google';
import 'styles/globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className={barlow.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
