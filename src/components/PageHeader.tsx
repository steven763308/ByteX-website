// components/PageHeader.tsx
interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      <p className="text-gray-400 mt-4">{subtitle}</p>
    </div>
  );
}
