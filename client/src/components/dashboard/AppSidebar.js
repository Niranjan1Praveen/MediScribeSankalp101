import {
  Home,
  ChevronUp,
  Grid,
  Stethoscope,
  User2,
  Search,
  BarChart,
  Mic,
  FileText,
  Dumbbell,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const items = [
  {
    title: "Documentation",
    url: "/dashboard/",
    icon: FileText,
    description: "View docs & guides",
    badge: null,
  },
  {
    title: "Conversation",
    url: "/dashboard/liveConversation",
    icon: Mic,
    description: "Real-time chat",
    badge: "New",
  },
  {
    title: "Digital Prescription",
    url: "/dashboard/digiPrescription",
    icon: Stethoscope,
    description: "Manage prescriptions",
    badge: null,
  },
  {
    title: "Fitness Generator",
    url: "/dashboard/fitnessGenerator",
    icon: Dumbbell,
    description: "Create workout plans",
    badge: null,
  },
  {
    title: "Search Prescription",
    url: "/dashboard/searchPrescription",
    icon: Search,
    description: "Find prescriptions",
    badge: null,
  },
  {
    title: "Report Analyser",
    url: "http://127.0.0.1:5001",
    icon: BarChart,
    description: "Anayse reports",
    badge: null,
  },
];
const AppSidebar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4 ">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Image
                src={user?.picture}
                alt="logo"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>Welcome {user.given_name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <hr />
      <SidebarContent className="relative z-10 px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-emerald-300 font-bold text-xs uppercase tracking-wider mb-4 px-3 py-2 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-lg ">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Application
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="group relative overflow-hidden"
                  >
                    <Link
                      href={item.url}
                      className="relative flex items-center gap-3 p-3 rounded-xl transition-all duration-500 backdrop-blur-sm"
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm" />

                      <div className="relative z-10 flex items-center gap-3 w-full">
                        <div className="relative">
                            <item.icon className="h-4 w-4 flex items-center justify-center text-emerald-400 transition-colors duration-300" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            {item.description}
                          </div>
                        </div>

                        {item.badge && (
                          <div className="ml-auto">
                            <span className="inline-flex justify-center items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20">
                              {item.badge}
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {user.given_name} <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
