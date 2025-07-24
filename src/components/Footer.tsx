// components/Footer.tsx

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0f0f0f] text-center py-8 border-t border-[#1a1a1a]"
    >
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} ByteX Technology. All rights reserved.
      </p>
    </footer>
  );
}
