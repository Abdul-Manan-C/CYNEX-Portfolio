"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Terminal } from "lucide-react";
import { GlassPanel } from "../glass-panel";

type OutputLine = {
  type: "input" | "output" | "error" | "system";
  text: string;
};

const quizQuestions = [
    { question: "What command is used to list files and directories?", answer: "ls" },
    { question: "How do you change the current directory?", answer: "cd" },
    { question: "What command displays the content of a file?", answer: "cat" },
    { question: "How do you create a new directory named 'test'?", answer: "mkdir test" },
    { question: "What command is used to find text in a file?", answer: "grep" },
];

export function CyberLabSection() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<OutputLine[]>([
    { type: "system", text: "CYNEX Cyber Lab v1.0. Type 'help' for available commands." },
  ]);
  const [mode, setMode] = useState<"normal" | "quiz">("normal");
  const [quizState, setQuizState] = useState({ questionIndex: 0, score: 0 });

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const focusInput = () => inputRef.current?.focus();

  const commands: { [key: string]: () => void } = {
    help: () => {
      setOutput((prev) => [
        ...prev,
        { type: "output", text: "Available commands: help, start, scan, exploit, learn, game, quiz, about" },
      ]);
    },
    start: () => {
        setOutput((prev) => [...prev, {type: "output", text: "Starting diagnostics..."}]);
    },
    scan: () => {
        setOutput((prev) => [...prev, {type: "output", text: "Scanning network... No vulnerabilities found."}]);
    },
    exploit: () => {
        setOutput((prev) => [...prev, {type: "error", text: "No target specified."}]);
    },
    learn: () => {
        setOutput((prev) => [...prev, {type: "output", text: "Opening learning module... See 'Learning Lab' section."}]);
    },
    game: () => {
        setOutput((prev) => [...prev, {type: "output", text: "Initializing game... See 'Game' section."}]);
    },
    about: () => {
      setOutput((prev) => [
        ...prev,
        { type: "output", text: "user: Ch Manan // CYNEX\nrole: Computer Science Undergraduate | Cybersecurity | Vibe Coder\nphilosophy: Break -> Understand -> Build -> Automate" },
      ]);
    },
    date: () => {
      setOutput((prev) => [...prev, { type: "output", text: new Date().toString() }]);
    },
    clear: () => {
      setOutput([]);
    },
    quiz: () => {
        setMode("quiz");
        setQuizState({ questionIndex: 0, score: 0 });
        setOutput(prev => [...prev, { type: "system", text: "Linux Mastery Quiz started! Type 'exit' to quit." }, {type: "output", text: quizQuestions[0].question}]);
    }
  };

  const handleQuizInput = (cmd: string) => {
    if (cmd.toLowerCase() === 'exit') {
        setMode('normal');
        setOutput(prev => [...prev, {type: 'system', text: `Quiz exited. Final score: ${quizState.score}/${quizQuestions.length}`}]);
        return;
    }

    const currentQuestion = quizQuestions[quizState.questionIndex];
    if(cmd.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        const newScore = quizState.score + 1;
        setQuizState(prev => ({...prev, score: newScore}));
        setOutput(prev => [...prev, {type: 'system', text: "Correct!"}]);
    } else {
        setOutput(prev => [...prev, {type: 'system', text: `Incorrect. The answer is: ${currentQuestion.answer}`}]);
    }

    const nextQuestionIndex = quizState.questionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
        setQuizState(prev => ({...prev, questionIndex: nextQuestionIndex}));
        setOutput(prev => [...prev, {type: 'output', text: quizQuestions[nextQuestionIndex].question}]);
    } else {
        setMode('normal');
        setOutput(prev => [...prev, {type: 'system', text: `Quiz finished! Final score: ${quizState.score}/${quizQuestions.length}`}]);
    }
  };

  const handleCommand = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    setOutput((prev) => [...prev, { type: "input", text: `> ${cmd}` }]);
    
    if (mode === 'quiz') {
        handleQuizInput(cmd);
    } else {
        const commandFn = commands[cmd.toLowerCase()];
        if (commandFn) {
            commandFn();
        } else {
            setOutput((prev) => [
            ...prev,
            { type: "error", text: `command not found: ${cmd}` },
            ]);
        }
    }
    
    setInput("");
  }, [input, mode, commands, handleQuizInput]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <GlassPanel
        className="w-full !p-0 overflow-hidden shadow-lg shadow-neon-green/10 hover:shadow-xl hover:shadow-neon-green/20"
        onClick={focusInput}
      >
      <div
        className="h-[500px] flex flex-col"
      >
        <div className="p-3 flex items-center gap-2 border-b bg-secondary/50">
          <Terminal className="w-5 h-5 text-muted-foreground" />
          <span className="font-code text-sm text-muted-foreground">/bin/bash</span>
        </div>
        <div ref={terminalBodyRef} className="flex-grow p-4 overflow-y-auto font-code text-sm leading-relaxed bg-card">
          {output.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line.type === 'input' ? (
                <span className="text-accent">{line.text}</span>
              ) : line.type === 'error' ? (
                <span className="text-red-500">{line.text}</span>
              ) : line.type === 'system' ? (
                <span className="text-muted-foreground">{line.text}</span>
              ) : (
                <span className="text-foreground">{line.text}</span>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleCommand} className="p-2 border-t bg-secondary/50">
          <div className="flex items-center font-code text-sm">
            <span className="text-red-500 mr-2">{mode === 'quiz' ? 'answer>' : 'operator>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent w-full focus:outline-none text-foreground"
              autoFocus
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </GlassPanel>
  );
}
