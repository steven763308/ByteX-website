// app/services/web-system/page.tsx
import PageHeader from "@/components/PageHeader";

export default function WebSystemService() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 pt-32 pb-24">
      <PageHeader
        title="系统开发 / Dashboard"
        subtitle="根据你的业务流程，开发专属管理后台或客户面板系统。"
      />

      <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed">
        <p>
          如果你希望提升内部效率、追踪客户数据、自动化处理订单，系统开发是你的最佳选择。我们为企业打造稳定、易用、具备权限控管的管理平台。
        </p>
        <ul className="list-disc pl-6">
          <li>Dashboard 仪表板设计（图表、数据展示）</li>
          <li>支持登入 / 权限分级（Admin / User）</li>
          <li>整合 API、数据库、上传功能等</li>
          <li>响应式布局，适配 PC / 平板</li>
          <li>开发周期视功能复杂度，7～21 天交付</li>
        </ul>
      </div>
    </main>
  );
}
