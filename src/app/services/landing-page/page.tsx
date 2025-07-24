// app/services/landing-page/page.tsx
import PageHeader from "@/components/PageHeader";

export default function LandingPageService() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-24">
      <PageHeader title="Landing Page 开发" subtitle="为你的品牌打造高转化、高视觉冲击的单页宣传页面。" />

      <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed">
        <p>我们专注开发视觉吸引力强、加载速度快的 Landing Page，适合产品推广、电商引流、App 上线等场景。</p>
        <ul className="list-disc pl-6">
          <li>100% 响应式设计</li>
          <li>自定义滚动动画与区块展示</li>
          <li>支持表单收集 / WhatsApp 联系按钮</li>
          <li>快速上线：5～7 个工作日交付</li>
        </ul>
      </div>
    </main>
  );
}
