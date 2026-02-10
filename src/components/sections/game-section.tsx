"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassPanel } from "../glass-panel";

type LogEntry = {
  id: number;
  text: string;
  type: "command" | "response" | "system" | "error" | "success";
};

type GameState = {
    hostFound: boolean;
    portsScanned: boolean;
    isCompromised: boolean;
};

const initialGameState: GameState = {
    hostFound: false,
    portsScanned: false,
    isCompromised: false,
};

const initialLog: LogEntry[] = [
    { id: 1, text: "Cyber Intrusion Simulator Initialized.", type: "system" },
    { id: 2, text: "Your mission: Infiltrate the target server at 10.1.1.42.", type: "system" },
    { id: 3, text: "Type 'help' to see available commands.", type: "system" },
];

export function GameSection() {
  const [log, setLog] = useState<LogEntry[]>(initialLog);
  const [input, setInput] = useState("");
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const focusInput = () => inputRef.current?.focus();

  const addLogEntry = useCallback((text: string, type: LogEntry["type"]) => {
    setLog((prev) => [...prev, { id: prev.length + 1, text, type }]);
  }, []);

  const handleCommand = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;

    const command = input.trim();
    if (!command) return;

    addLogEntry(`> ${command}`, "command");
    setInput("");
    setIsProcessing(true);

    setTimeout(() => {
        const [cmd, ...args] = command.toLowerCase().split(' ');
        
        switch(cmd) {
            case 'help':
                addLogEntry("Available commands:\n  help        - Show this help message\n  nmap        - Scan network or hosts\n  searchsploit - Search for exploits\n  exploit     - Launch an exploit\n  reset       - Reset the simulation", "response");
                if (gameState.isCompromised) {
                    addLogEntry("Post-exploitation commands:\n  ls          - List files\n  cat         - Display file content", "response");
                }
                break;
            
            case 'reset':
                addLogEntry("Resetting simulation...", "system");
                setGameState(initialGameState);
                setLog(initialLog);
                break;

            case 'nmap':
                if (args[0] === '10.1.1.0/24') {
                    addLogEntry("Scanning network 10.1.1.0/24...", "response");
                    setTimeout(() => {
                        addLogEntry("Host 10.1.1.42 is up.", "success");
                        setGameState(prev => ({ ...prev, hostFound: true }));
                    }, 1000);
                } else if (args[0] === '10.1.1.42') {
                    if (gameState.hostFound) {
                        addLogEntry("Scanning host 10.1.1.42 for services...", "response");
                        setTimeout(() => {
                            addLogEntry("PORT   STATE SERVICE  VERSION\n21/tcp open  ftp      vsftpd 2.3.4\n22/tcp open  ssh      OpenSSH 8.2p1\n80/tcp open  http     Apache httpd 2.4.41", "response");
                            addLogEntry("Hint: A service seems to have a known vulnerability.", "system");
                            setGameState(prev => ({ ...prev, portsScanned: true }));
                        }, 1500);
                    } else {
                        addLogEntry("Error: Host 10.1.1.42 not found. Scan the network first.", "error");
                    }
                } else {
                    addLogEntry("Usage: nmap <10.1.1.0/24 | 10.1.1.42>", "error");
                }
                break;
            
            case 'searchsploit':
                if (!gameState.portsScanned) {
                    addLogEntry("Error: You need to enumerate services before searching for exploits.", "error");
                    break;
                }
                if (args.join(' ') === 'vsftpd 2.3.4') {
                    addLogEntry("Searching for 'vsftpd 2.3.4' exploits...", "response");
                    setTimeout(() => {
                         addLogEntry("Found: vsftpd 2.3.4 - Backdoor Command Execution", "success");
                    }, 1000);
                } else {
                    addLogEntry(`No results found for '${args.join(' ')}'.`, "response");
                }
                break;

            case 'exploit':
                if (!gameState.portsScanned) {
                    addLogEntry("Error: Run a service scan first.", "error");
                    break;
                }
                if (args[0] === 'vsftpd_2.3.4' && args[1] === '10.1.1.42') {
                     addLogEntry("Launching exploit vsftpd_2.3.4 against 10.1.1.42...", "response");
                     setTimeout(() => {
                        addLogEntry("[+] Exploit successful! Root shell obtained.", "success");
                        addLogEntry("Welcome to root@10.1.1.42. Type 'ls' to look around.", "system");
                        setGameState(prev => ({ ...prev, isCompromised: true }));
                     }, 2000);
                } else {
                    addLogEntry("Exploit failed. Check target and exploit name.", "error");
                    addLogEntry("Usage: exploit <exploit_name> <target_ip>", "error");
                }
                break;
            
            case 'ls':
                if(gameState.isCompromised) {
                    if (args[0] === '/root' || args.length === 0) {
                        addLogEntry("flag.txt", "response");
                    } else {
                        addLogEntry(`ls: cannot access '${args[0]}': No such file or directory`, "error");
                    }
                } else {
                    addLogEntry(`command not found: ${cmd}`, "error");
                }
                break;

            case 'cat':
                if(gameState.isCompromised) {
                    if (args[0] === 'flag.txt') {
                        addLogEntry("Congratulations! You have successfully infiltrated the system.", "success");
                        addLogEntry("CYNEX-FLAG{M15510N_C0MPL3T3_GG}", "success");
                    } else {
                        addLogEntry(`cat: ${args[0]}: No such file or directory`, "error");
                    }
                } else {
                    addLogEntry(`command not found: ${cmd}`, "error");
                }
                break;

            default:
                addLogEntry(`command not found: ${cmd}`, "error");
                break;
        }
        setIsProcessing(false);
    }, 500);
    
  }, [input, isProcessing, addLogEntry, gameState]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <GlassPanel
      className="w-full !p-0 overflow-hidden shadow-lg shadow-neon-red/10 hover:shadow-xl hover:shadow-neon-red/20"
      onClick={focusInput}
    >
      <div
        className="h-[500px] flex flex-col"
      >
        <div className="p-3 flex items-center gap-2 border-b bg-secondary/50">
          <Terminal className="w-5 h-5 text-muted-foreground" />
          <span className="font-code text-sm">Cyber Intrusion Simulator</span>
        </div>
        <div ref={terminalBodyRef} className="flex-grow p-4 overflow-y-auto font-code text-sm leading-relaxed bg-card">
          {log.map((entry) => (
            <div key={entry.id} className={cn("whitespace-pre-wrap", {
                "text-green-500": entry.type === "success",
                "text-accent": entry.type === "command",
                "text-foreground": entry.type === "response",
                "text-muted-foreground": entry.type === "system",
                "text-red-500": entry.type === "error",
            })}>
                {entry.text}
            </div>
          ))}
          {isProcessing && <div className="text-muted-foreground animate-pulse">...</div>}
        </div>
        <form onSubmit={handleCommand} className="p-2 border-t bg-secondary/50">
          <div className="flex items-center font-code text-sm">
            <span className={cn("mr-2", gameState.isCompromised ? "text-green-500" : "text-red-500")}>{gameState.isCompromised ? 'root@10.1.1.42:~#' : 'operator>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent w-full focus:outline-none"
              autoFocus
              autoComplete="off"
              disabled={isProcessing}
            />
          </div>
        </form>
      </div>
    </GlassPanel>
  );
}
