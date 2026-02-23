// root layout (theme, font) ครอบทุกหน้าใน app ทั้งหมด
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
// import Sidebar from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" > {/* className="dark" */}
      <body>
        <Navbar></Navbar>
        {children}
      </body>
      
    </html>
  );
}
