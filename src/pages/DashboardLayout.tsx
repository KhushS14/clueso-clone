import { Outlet } from "react-router-dom";
import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Sidebar */}
      <DashboardSidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      {/* Main Content Wrapper */}
      <div
        className={`min-h-screen transition-all ${
          collapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="p-6 pt-20 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
