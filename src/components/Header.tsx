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
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
