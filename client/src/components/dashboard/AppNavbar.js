"use client";

import { LogOut, Settings, User, Sparkles } from "lucide-react";
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
    <nav className="relative p-6 flex items-center justify-between z-10 overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-emerald-400/10" 
             style={{
               animation: 'pulse 4s ease-in-out infinite alternate'
             }} />
      </div>

      {/* LEFT SECTION - Enhanced Sidebar Trigger */}
      <div className="relative z-10">
        <div className="group relative">
          {/* Glow Effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/30 via-teal-500/25 to-emerald-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Background Shimmer */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          <SidebarTrigger className="relative bg-slate-800/40 border-emerald-500/25 hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-teal-500/15 hover:border-emerald-400/40 transition-all duration-500 backdrop-blur-lg shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:shadow-lg hover:scale-105 active:scale-95" />
        </div>
      </div>

      {/* RIGHT SECTION - Enhanced User Menu */}
      <div className="flex items-center gap-6 relative z-10">
        {/* Decorative Element */}
        <div className="hidden sm:block relative">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">Online</span>
          </div>
        </div>
          
        {/* Enhanced User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-full">
            <div className="group relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/50 via-teal-500/40 to-emerald-500/50 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Middle Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              <div className="relative">
                {/* Rotating Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 via-teal-500/30 to-emerald-500/40 rounded-full animate-spin" 
                     style={{
                       animation: 'spin 8s linear infinite'
                     }} />
                
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full " />
                
                <Avatar className="relative border-2 border-emerald-500/40 hover:border-emerald-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-110 active:scale-95 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-bold text-sm shadow-lg">CN</AvatarFallback>
                </Avatar>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 shadow-lg shadow-emerald-400/50 " />
              </div>
            </div>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent 
            sideOffset={15} 
            className="bg-slate-900/98 backdrop-blur-2xl border-emerald-500/30 shadow-2xl shadow-emerald-500/20 rounded-xl min-w-[200px] p-2"
          >
            <DropdownMenuLabel className="text-emerald-300 font-bold text-sm px-3 py-2 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-lg mb-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full " />
                My Account
              </div>
            </DropdownMenuLabel>
            
            <DropdownMenuSeparator className="bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 h-px my-2" />
            
            <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-emerald-500/15 hover:to-teal-500/15 transition-all duration-300 rounded-lg mx-1 my-1 px-3 py-2.5 group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-md group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                  <User className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="font-medium text-slate-200">Profile</span>
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
            
            <DropdownMenuSeparator className="bg-gradient-to-r from-transparent via-slate-300/30 to-transparent h-px my-2" />
            
            <DropdownMenuItem variant="destructive" asChild>
              <div className="hover:bg-gradient-to-r hover:from-red-500/15 hover:to-red-400/15 transition-all duration-300 rounded-lg mx-1 my-1 px-3 py-2.5 group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-red-500/20 rounded-md group-hover:bg-red-500/30 transition-all duration-300">
                    <LogOut className="h-4 w-4 text-red-500" />
                  </div>
                  <AppLogout />
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default AppNavbar;