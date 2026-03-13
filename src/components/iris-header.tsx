"use client"

import { LogIn, User, MoreHorizontal, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { name: "날씨 현황", active: true },
  { name: "일정", active: false },
  { name: "방송 이력", active: false },
]

export function IrisHeader() {
  const [activeTab, setActiveTab] = useState("날씨 현황")

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between rounded-xl bg-card/50 px-4 py-3 border shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary font-bold text-xl border border-primary/30">
            IR
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none text-foreground">Iris</h1>
            <p className="text-xs text-muted-foreground">AI 날씨 알림 시스템</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs font-medium text-muted-foreground hover:bg-white/5">
            <Bell className="mr-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-lg border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 text-xs font-semibold px-4">
            로그인됨
          </Button>
        </div>
      </header>

      <nav className="grid grid-cols-3 gap-2">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            onClick={() => setActiveTab(item.name)}
            className={cn(
              "h-12 rounded-xl border text-sm font-semibold transition-all duration-200",
              activeTab === item.name 
                ? "bg-primary/20 border-primary/50 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]" 
                : "bg-card/30 border-transparent text-muted-foreground hover:bg-card/50"
            )}
          >
            {item.name}
          </Button>
        ))}
      </nav>
    </div>
  )
}
