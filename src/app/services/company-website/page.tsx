// app/services/company-website/page.tsx
import PageHeader from "@/components/PageHeader";

export default function CompanyWebsiteService() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 pt-32 pb-24">
      <PageHeader
        title="公司官网设计"
        subtitle="为企业量身打造可信赖、品牌感强的官方网站，适用于各种行业。"
      />

      <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed">
        <p>
          我们专注于开发企业官网，帮助你在网络中建立强大品牌形象。无论是中小型企业还是创业公司，我们都能根据你业务的核心价值定制页面内容与视觉风格。
        </p>
        <ul className="list-disc pl-6">
          <li>支持中英文切换（多语言网站）</li>
          <li>整合联系表单 / WhatsApp / Google Maps</li>
          <li>展示产品、服务、公司简介、案例等</li>
          <li>模块化结构，方便后期扩展或管理</li>
          <li>7～10 个工作日交付（含上线）</li>
        </ul>
      </div>
    </main>
  );
}
