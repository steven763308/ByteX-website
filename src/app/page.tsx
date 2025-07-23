import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
//import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
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
      <section className="py-24 px-6 bg-[#121212]">
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
    </main>
  );
}
