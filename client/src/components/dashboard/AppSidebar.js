import {
  Stethoscope,
  User2,
  ChevronUp,
  Search,
  Mic,
  FileText,
  Dumbbell,
  Sparkles,
  LogOut,
  Settings,
  UserCircle
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
  SidebarMenuBadge,
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
    title: "Live Conversation",
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
];

const AppSidebar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);

  return (
    <Sidebar collapsible="icon" className="relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/3 to-emerald-500/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] via-transparent to-teal-500/[0.02]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse" />
        <div className="absolute top-32 right-6 w-0.5 h-0.5 bg-teal-400/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-64 left-8 w-1.5 h-1.5 bg-emerald-300/20 rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-32 right-4 w-1 h-1 bg-teal-300/30 rounded-full animate-pulse delay-500" />
      </div>

      {/* Glow Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />

      <SidebarHeader className="py-6 px-4 relative z-10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="group relative overflow-hidden bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 border border-emerald-500/20 hover:border-emerald-400/30 transition-all duration-500 rounded-xl h-14 backdrop-blur-sm">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm" />
              
              <div className="relative flex items-center gap-3 z-10">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-10 h-10 rounded-full border-2 border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300 overflow-hidden">
                    <Image
                      src={user?.picture}
                      alt="profile"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-emerald-300 font-semibold text-sm">Welcome back</span>
                  <span className="text-slate-200 font-bold">{user.given_name}</span>
                </div>
                
                <div className="ml-auto">
                  <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Enhanced Separator */}
      <div className="relative px-4 py-2">
        <div className="h-px bg-gradient-to-r from-emerald-500/30 via-teal-500/40 to-emerald-500/30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse" />
      </div>

      <SidebarContent className="relative z-10 px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-emerald-300 font-bold text-xs uppercase tracking-wider mb-4 px-3 py-2 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-lg border border-emerald-500/10">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Application
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="group relative overflow-hidden">
                    <Link href={item.url} className="relative flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-teal-500/15 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 backdrop-blur-sm">
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm" />
                      
                      <div className="relative z-10 flex items-center gap-3 w-full">
                        <div className="relative">
                          <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                            <item.icon className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                          </div>
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
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 animate-pulse">
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

      <SidebarFooter className="relative z-10 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="group relative overflow-hidden bg-gradient-to-r from-slate-800/50 to-slate-800/30 hover:from-emerald-500/15 hover:to-teal-500/15 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 rounded-xl h-14 backdrop-blur-sm">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm" />
                  
                  <div className="relative z-10 flex items-center gap-3 w-full">
                    <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                      <User2 className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                        {user.given_name}
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        Manage account
                      </div>
                    </div>
                    
                    <ChevronUp className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 transition-all duration-300 group-hover:rotate-180" />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent 
                align="end" 
                className="bg-slate-900/98 backdrop-blur-2xl border-emerald-500/30 shadow-2xl shadow-emerald-500/20 rounded-xl min-w-[200px] p-2"
              >
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-teal-500/15 transition-all duration-300 rounded-lg mx-1 my-1 px-3 py-2.5 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-md group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                      <UserCircle className="h-4 w-4 text-emerald-400" />
                    </div>
                    <span className="font-medium text-slate-200">Account</span>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-teal-500/15 transition-all duration-300 rounded-lg mx-1 my-1 px-3 py-2.5 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-md group-hover:from-teal-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                      <Settings className="h-4 w-4 text-teal-400" />
                    </div>
                    <span className="font-medium text-slate-200">Settings</span>
                  </div>
                </DropdownMenuItem>
                
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent my-2" />
                
                <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-red-500/15 hover:to-red-400/15 transition-all duration-300 rounded-lg mx-1 my-1 px-3 py-2.5 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-red-500/20 rounded-md group-hover:bg-red-500/30 transition-all duration-300">
                      <LogOut className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="font-medium text-slate-200">Sign out</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;