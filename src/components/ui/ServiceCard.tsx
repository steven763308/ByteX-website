// components/ServiceCard.tsx
import Link from "next/link";

interface Props {
  title: string;
  desc: string;
  href: string;
  className?: string;
}

export default function ServiceCard({ title, desc, href, className }: Props) {
  return (
    <Link href={href} className="h-full">
      <div
        className={`h-full flex flex-col justify-between bg-[#181818] border border-[#2a2a2a] p-6 rounded-xl hover:shadow-[0_0_20px_#7f5af0] hover:scale-[1.02] transition-all ${className}`}
      >
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
        <p className="mt-4 text-indigo-400 text-sm underline">了解更多 →</p>
      </div>
    </Link>
  );
}
