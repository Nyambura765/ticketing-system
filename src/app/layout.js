// src/app/layout.js
import './globals.css'; 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ticketing System</title>
      </head>
      <body className="bg-white text-green-700">
        {children}
      </body>
    </html>
  );
}
