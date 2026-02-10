"use client";

import { useEffect, useState } from "react";
import { Cpu, HardDrive, Globe, Monitor, Eye, X, Clock, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TelemetryData = {
  ip: string;
  device: string;
  os: string;
  gpu: string;
  resolution: string;
  timezone: string;
  connection: string;
};

export function TelemetryPanel() {
  const [data, setData] = useState<Partial<TelemetryData>>({});
  const [time, setTime] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const getTelemetry = async () => {
      let ip = "127.0.0.1";
      try {
        const ipRes = await fetch("https://api64.ipify.org?format=json");
        const ipJson = await ipRes.json();
        ip = ipJson.ip;
      } catch (error) {
        console.error("Could not fetch IP address.");
      }

      const os = navigator.platform || "Unknown OS";
      
      const ua = navigator.userAgent;
      let device = "Desktop";
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
          device = "Tablet";
      }
      if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
          device = "Mobile";
      }

      let gpu = "N/A";
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          }
        }
      } catch (e) {
        console.error("Could not get GPU info.");
      }

      setData({ 
        ip, 
        device, 
        os, 
        gpu,
        resolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        // @ts-ignore
        connection: navigator.connection?.effectiveType || 'N/A'
      });
    };

    getTelemetry();
  }, []);

  const InfoRow = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | undefined }) => (
    <div className="flex justify-between items-center text-xs">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-code text-foreground truncate">{value || "..."}</span>
    </div>
  );

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50 hidden md:block">
        <Card>
          <Button variant="ghost" size="icon" onClick={() => setIsVisible(true)} aria-label="Show Telemetry">
            <Eye className="w-5 h-5" />
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block w-80">
      <Card>
        <CardContent className="p-3 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold">Live System Info</p>
              <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)} className="-mr-2 -mt-1 h-7 w-7">
                <X className="w-4 h-4" />
                <span className="sr-only">Hide Telemetry</span>
              </Button>
            </div>
            <InfoRow icon={<Clock className="w-3 h-3" />} label="System Time" value={time} />
            <InfoRow icon={<Globe className="w-3 h-3" />} label="IP Address" value={data?.ip} />
            <InfoRow icon={<Monitor className="w-3 h-3" />} label="Resolution" value={data?.resolution} />
            <InfoRow icon={<Cpu className="w-3 h-3" />} label="OS / Device" value={`${data?.os} / ${data?.device}`} />
            <InfoRow icon={<HardDrive className="w-3 h-3" />} label="GPU Renderer" value={data?.gpu} />
            <InfoRow icon={<Globe className="w-3 h-3" />} label="Timezone" value={data?.timezone} />
            <InfoRow icon={<Wifi className="w-3 h-3" />} label="Connection" value={data?.connection} />
        </CardContent>
      </Card>
    </div>
  );
}
