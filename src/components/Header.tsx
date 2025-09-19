import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-700 text-white p-2">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo-de-producao-de-cinema.jpg"
            alt="Logo de Produção de Cinema"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
        </Link>

        <div className="flex space-x-4 relative right-8">
          <Link href="/" className="text-2xl font-bold">
            Home
          </Link>
          <Link href="/about" className="text-2xl font-bold">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
