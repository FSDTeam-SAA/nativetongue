"use client";
import {
  ChartSpline,
  Dumbbell,
  LayoutDashboard,
  Settings,
  Trophy,
  Users,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Live Feed",
    url: "/live-feed",
    icon: ChartSpline,
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: Trophy,
  },
  {
    title: "Sports",
    url: "/sports",
    icon: Dumbbell,
  },
  {
    title: "Community",
    url: "/community",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <Sidebar className="flex flex-col justify-between h-full">
      <SidebarContent className="bg-black text-white flex flex-col justify-between">
        <div>
          <SidebarGroup>
            <SidebarGroupLabel>
              <Link href={`/`}>
                <Image
                  src={`/logo.png`}
                  alt="img.png"
                  width={1000}
                  height={1000}
                  className="object-cover mt-16"
                />
              </Link>
            </SidebarGroupLabel>

            <SidebarGroupContent className="mt-16">
              <SidebarMenu>
                {items.map((item) => {
                  const isActive = pathName === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className={`h-[45px] flex items-center gap-2 px-4 font-bold ${
                            isActive
                              ? "bg-gradient-to-r from-[#329150] to-[#0d4728] hover:bg-gradient-to-r hover:from-[#0d4728] hover:to-[#329150] hover:text-white"
                              : "hover:bg-gradient-to-r hover:from-[#329150] hover:to-[#0d4728] hover:text-white"
                          }`}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* User Profile + Logout Section */}
        <div className="mb-8 px-4 flex flex-col items-start gap-3">
          {/* Profile Info */}
          <div className="flex items-center gap-3">
            <Image
              src="/profile.png"
              alt="Alex Morgan"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border border-gray-700"
            />
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">Alex Morgan</span>
              <span className="text-gray-400 text-xs">Super Admin</span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full flex items-center gap-2 text-[#E53838] border border-[#E53838] px-4 py-2 rounded-lg hover:bg-[#E53838]/60 hover:text-white transition"
          >
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
