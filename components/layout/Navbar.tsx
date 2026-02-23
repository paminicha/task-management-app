import Link from "next/link";

export default function Navbar() {
  return (
    // <nav className="bg-gray-800 text-white px-6 py-4 flex gap-6">
    <nav className="px-6 py-4 flex gap-6 items-center shadow-md border-b border-b-gray-400" 
      style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-nav)" }}
    >
      <Link href="/" className="font-semibold hover:text-yellow-400">Home</Link>

      <Link href="/dashboard" className="hover:text-yellow-400">My App</Link>
      <Link href="/profile" className="hover:text-yellow-400">Profile</Link>
      <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
      <Link href="/contact" className="hover:text-yellow-400">contact</Link>
      
    </nav>
  );
}
