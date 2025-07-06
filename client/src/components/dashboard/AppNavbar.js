"use client";

import { LogOut, Settings,User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AppLogout from "./AppLogout";

const AppNavbar = () => {

  return (
    <nav className="relative p-4 flex items-center justify-between z-10">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse" />
        <div className="absolute top-4 right-1/3 w-1.5 h-1.5 bg-teal-400/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-3 left-1/2 w-0.5 h-0.5 bg-emerald-300/40 rounded-full animate-pulse delay-500" />
      </div>

      {/* LEFT */}
      <div className="relative z-10">
        <div className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <SidebarTrigger className="relative bg-white/10 dark:bg-slate-800/30 border-emerald-500/20 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 relative z-10">
          
        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full animate-pulse" />
                <Avatar className="relative border-2 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                  <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold">CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            sideOffset={10} 
            className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-emerald-500/20 shadow-xl shadow-emerald-500/10"
          >
            <DropdownMenuLabel className="text-emerald-700 dark:text-emerald-300 font-semibold">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20" />
            <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 transition-all duration-200">
              <User className="h-[1.2rem] w-[1.2rem] mr-2 text-emerald-600 dark:text-emerald-400" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 transition-all duration-200">
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2 text-teal-600 dark:text-teal-400" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" asChild>
              <div className="hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-400/10 transition-all duration-200">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2 text-red-500" />
                <AppLogout />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default AppNavbar;