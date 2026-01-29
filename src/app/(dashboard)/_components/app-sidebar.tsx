"use client";
import {
  ChartSpline,
  Dumbbell,
  LayoutDashboard,
  Settings,
  Trophy,
  Users,
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
    <Sidebar>
      <SidebarContent className="bg-black text-white ">
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
                        className={`h-[45px] hover:text-white  font-bold ${isActive ? "bg-gradient-to-r from-[#329150] to-[#0d4728] hover:bg-gradient-to-r hover:from-[#0d4728] hover:to-[#329150]" : "hover:bg-gradient-to-r hover:from-[#329150] hover:to-[#0d4728]"}`}
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
      </SidebarContent>
    </Sidebar>
  );
}
