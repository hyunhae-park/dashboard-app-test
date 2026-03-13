"use client"

import { IrisHeader } from "@/components/iris-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Wind, 
  Droplets, 
  MapPin, 
  RefreshCw,
  LayoutGrid,
  Calendar,
  Send,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

const metrics = [
  { label: "지역", value: "2", active: true },
  { label: "스케줄", value: "1", active: true },
  { label: "방송", value: "5", active: true },
  { label: "API 성공", value: "22", active: true, color: "text-sky-400" },
  { label: "API 실패", value: "63", active: true, color: "text-rose-500" },
  { label: "알림", value: "6", active: true },
]

const LocationCard = ({ title, subTitle, icon: Icon, color }: any) => (
  <Card className="flex-1 bg-card/40 border-slate-800 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col hover:border-sky-500/50 transition-all duration-300 group">
    <CardHeader className="flex flex-row items-center gap-3 space-y-0 p-4 bg-slate-800/50 border-b border-slate-700/50">
      <div className={cn("p-2 rounded-lg bg-opacity-20", color)}>
        <Icon className={cn("h-5 w-5", color.replace('bg-', 'text-'))} />
      </div>
      <div>
        <CardTitle className="text-sm font-bold">{title}</CardTitle>
        <p className="text-[10px] text-muted-foreground">{subTitle}</p>
      </div>
    </CardHeader>
    <CardContent className="p-4 flex-1 flex flex-col gap-4">
      {/* 3-Day Forecast */}
      <div className="grid grid-cols-3 gap-2">
        {['오늘', '내일', '모레'].map((day, i) => (
          <div key={day} className="flex flex-col items-center p-2 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <span className="text-[10px] text-muted-foreground mb-1">{day}</span>
            <span className="text-[10px] text-slate-400 mb-1">{14 + i}일({['목', '금', '토'][i]})</span>
            <Cloud className="h-6 w-6 text-sky-400 my-1" />
            <span className="text-sm font-bold">7° / 16°</span>
            <div className="flex items-center text-[10px] text-sky-400 mt-1">
              <Droplets className="h-3 w-3 mr-1" /> 10%
            </div>
          </div>
        ))}
      </div>

      {/* 10-Day List */}
      <div className="space-y-1 overflow-y-auto max-h-[300px] pr-1 custom-scrollbar">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center justify-between py-2 px-3 rounded-md bg-slate-900/20 hover:bg-slate-900/40 border border-transparent hover:border-slate-800 transition-colors">
            <span className="text-xs text-slate-400 w-16">2/17({['화', '수', '목', '금', '토', '일', '월'][i % 7]})</span>
            <div className="flex items-center gap-2 flex-1 justify-center">
              <Cloud className="h-4 w-4 text-slate-500" />
              <span className="text-xs font-medium">구름많음</span>
            </div>
            <div className="flex items-center gap-4 w-24 justify-end">
              <span className="text-xs font-bold whitespace-nowrap">-2° / 12°</span>
              <div className="flex items-center text-[10px] text-sky-400/70 w-8">
                <Droplets className="h-3 w-3 mr-0.5" /> 20%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-800/50 text-[10px]">
        <div className="flex gap-2">
          <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">미세먼지 51 보통</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">초미세먼지 25 보통</span>
        </div>
        <span className="text-muted-foreground/50">전체보기</span>
      </div>
    </CardContent>
  </Card>
)

export default function Home() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto py-2">
      <IrisHeader />

      {/* Status Bar */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">2026-02-14 기준</span>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-[10px] text-muted-foreground hover:bg-white/5">
            <RefreshCw className="mr-1 h-3 w-3" /> 새로고침
          </Button>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 shadow-inner group hover:border-sky-500/30 transition-colors">
              <span className={cn("text-xl font-black mb-0.5 tracking-tight", m.color || "text-foreground")}>
                {m.value}
              </span>
              <span className="text-[10px] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        <LocationCard 
          title="현장" 
          subTitle="김해 진례면" 
          icon={LayoutGrid} 
          color="bg-amber-500" 
        />
        <LocationCard 
          title="우리집" 
          subTitle="부산 서전로 3동" 
          icon={MapPin} 
          color="bg-sky-500" 
        />
      </div>

      {/* Footer System Info */}
      <div className="flex items-center justify-between px-2 pt-4 border-t border-slate-800 text-[10px] text-muted-foreground/40 font-mono">
        <div>SYS_VER: 2.0.4-LTS // ENC_V1.2</div>
        <div>Uptime: 23d 14h 22m 10s</div>
        <div>2026-02-14 기준</div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.2);
        }
      `}</style>
    </div>
  )
}
