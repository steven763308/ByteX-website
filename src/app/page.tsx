import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      {/* Loading Screen */}
      <div id="loading" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f0f] text-white text-2xl animate-pulse">
        ByteX Technology
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-[#0f0f0f] border-b border-[#1a1a1a] z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">ByteX</div>
          <nav className="space-x-6 hidden md:flex">
            <Link href="#">Home</Link>
            <Link href="#features">Features</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm">
            Connect Wallet
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6 pt-24">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4">
            ByteX Technology
          </h1>
        </div>
        <div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            Building the Future of Web3 with Cutting-Edge Tech
          </p>
        </div>
        <div className="mt-10">
          <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-[#121212]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web3 Integration",
              desc: "Seamless wallet and smart contract connections.",
            },
            {
              title: "Dark Futuristic UI",
              desc: "Crafted for tech startups and digital pioneers.",
            },
            {
              title: "Scalable Infrastructure",
              desc: "Built on modern stacks for future growth.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#1e1e1e] bg-[#181818] p-6 hover:scale-[1.03] transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0f0f0f] text-center py-8 border-t border-[#1a1a1a]">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} ByteX Technology. All rights reserved.</p>
      </footer>

      {/* Loading Script */}
      <script>
        {`
          window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            if (loading) loading.style.display = 'none';
          });
        `}
      </script>
    </main>
  );
}