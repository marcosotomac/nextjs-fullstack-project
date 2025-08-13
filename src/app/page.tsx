import { Link } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div>
          <h1>Welcome to Our Repair Shop</h1>
          <address>
            <p>123 Repair St.</p>
            <p>Repair City, RC 12345</p>
          </address>
          <p>
            <Link href="tel: 555555555" className="hover:underline">
              555-555-5555
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
