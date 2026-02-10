"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent, CardHeader } from "@/components/ui/card";
import { GlassPanel } from "./glass-panel";
import { useState } from "react";
import { cn } from "@/lib/utils";


const HighlightedCppCode = () => {
  return (
    <>
      <span className="token-preprocessor">#include</span>
      <span className="token-punctuation">{'<'}</span>
      <span className="token-string">iostream</span>
      <span className="token-punctuation">{'>'}</span>
      {'\n'}
      <span className="token-preprocessor">#include</span>
      <span className="token-punctuation">{'<'}</span>
      <span className="token-string">fstream</span>
      <span className="token-punctuation">{'>'}</span>
      {'\n'}
      <span className="token-preprocessor">#include</span>
      <span className="token-punctuation">{'<'}</span>
      <span className="token-string">string</span>
      <span className="token-punctuation">{'>'}</span>
      {'\n'}
      <span className="token-keyword">using</span> <span className="token-keyword">namespace</span> <span className="token-class-name">std</span>
      <span className="token-punctuation">;</span>
      {'\n\n'}
      <span className="token-type">void</span> <span className="token-function">addBus</span>
      <span className="token-punctuation">()</span>
      <span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-type">void</span> <span className="token-function">reserveSeat</span>
      <span className="token-punctuation">()</span>
      <span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-type">void</span> <span className="token-function">viewReservations</span>
      <span className="token-punctuation">()</span>
      <span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-type">void</span> <span className="token-function">viewBuses</span>
      <span className="token-punctuation">()</span>
      <span className="token-punctuation">;</span>
      {'\n\n'}
      <span className="token-type">int</span> <span className="token-function">main</span>
      <span className="token-punctuation">()</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'    '}<span className="token-type">int</span> choice <span className="token-operator">=</span> <span className="token-number">-1</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span>choice <span className="token-operator">!=</span> <span className="token-number">99</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n[ 0: Show Menu | 99: Exit ] -&gt; Enter Choice: "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-class-name">cin</span> <span className="token-operator">{'>>'}</span> choice<span className="token-punctuation">;</span>
      {'\n\n'}
      {'        '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>choice <span className="token-operator">==</span> <span className="token-number">0</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n===== BUS RESERVATION SYSTEM ====="</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n1. Add Bus Information"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n2. Reserve Seat(s)"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n3. Show Reservation Report"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n4. Show Available Buses"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n99. Exit Program"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n===================================="</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\nEnter Option: "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">cin</span> <span className="token-operator">{'>>'}</span> choice<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      {'        '}<span className="token-keyword">switch</span><span className="token-punctuation">(</span>choice<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'            '}<span className="token-keyword">case</span> <span className="token-number">1</span><span className="token-punctuation">:</span> <span className="token-function">addBus</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span> <span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">case</span> <span className="token-number">2</span><span className="token-punctuation">:</span> <span className="token-function">reserveSeat</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span> <span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">case</span> <span className="token-number">3</span><span className="token-punctuation">:</span> <span className="token-function">viewReservations</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span> <span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">case</span> <span className="token-number">4</span><span className="token-punctuation">:</span> <span className="token-function">viewBuses</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span> <span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">case</span> <span className="token-number">99</span><span className="token-punctuation">:</span> <span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Exiting...\n"</span><span className="token-punctuation">;</span> <span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">default</span><span className="token-punctuation">:</span> <span className="token-keyword">if</span><span className="token-punctuation">(</span>choice <span className="token-operator">!=</span> <span className="token-number">0</span><span className="token-punctuation">)</span> <span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Invalid Input!\n"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'    '}<span className="token-keyword">return</span> <span className="token-number">0</span><span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      <span className="token-type">void</span> <span className="token-function">addBus</span><span className="token-punctuation">()</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'    '}<span className="token-class-name">ofstream</span> busFile<span className="token-punctuation">(</span><span className="token-string">"bus_data.txt"</span><span className="token-punctuation">,</span> <span className="token-class-name">ios</span><span className="token-operator">::</span>app<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">string</span> plate<span className="token-punctuation">,</span> type<span className="token-punctuation">,</span> chasis<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">int</span> seats<span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n-----ADD BUS-----\n"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cin</span><span className="token-punctuation">.</span><span className="token-function">ignore</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span> 
      {'\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Enter Bus Plate Number: "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-function">getline</span><span className="token-punctuation">(</span><span className="token-class-name">cin</span><span className="token-punctuation">,</span> plate<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Enter Bus Chasis Number: "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-function">getline</span><span className="token-punctuation">(</span><span className="token-class-name">cin</span><span className="token-punctuation">,</span> chasis<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-keyword">do</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Enter Bus Type (mini/big): "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-class-name">cin</span> <span className="token-operator">{'>>'}</span> type<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span> <span className="token-keyword">while</span><span className="token-punctuation">(</span>type <span className="token-operator">!=</span> <span className="token-string">"mini"</span> <span className="token-operator">&&</span> type <span className="token-operator">!=</span> <span className="token-string">"big"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span> 
      {'\n\n'}
      {'    '}seats <span className="token-operator">=</span> <span className="token-punctuation">(</span>type <span className="token-operator">==</span> <span className="token-string">"mini"</span><span className="token-punctuation">)</span> <span className="token-operator">?</span> <span className="token-number">30</span> <span className="token-operator">:</span> <span className="token-number">50</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-comment">{'// Format: Plate | Chasis | Type | Seats'}</span>
      {'\n'}
      {'    '}busFile <span className="token-operator">{'<<'}</span> plate <span className="token-operator">{'<<'}</span> <span className="token-string">"|"</span> <span className="token-operator">{'<<'}</span> chasis <span className="token-operator">{'<<'}</span> <span className="token-string">"|"</span> <span className="token-operator">{'<<'}</span> type <span className="token-operator">{'<<'}</span> <span className="token-string">"|"</span> <span className="token-operator">{'<<'}</span> seats <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}busFile<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Bus added successfully.\n"</span><span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      <span className="token-type">void</span> <span className="token-function">reserveSeat</span><span className="token-punctuation">()</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'    '}<span className="token-function">viewBuses</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">string</span> plate<span className="token-punctuation">,</span> passenger<span className="token-punctuation">,</span> bPlate<span className="token-punctuation">,</span> bChassis<span className="token-punctuation">,</span> bType<span className="token-punctuation">,</span> goBack<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">int</span> seatNum<span className="token-punctuation">,</span> requestedSeats<span className="token-punctuation">,</span> totalSeats <span className="token-operator">=</span> <span className="token-number">0</span><span className="token-punctuation">,</span> reservedCount <span className="token-operator">=</span> <span className="token-number">0</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">bool</span> busFound <span className="token-operator">=</span> <span className="token-keyword">false</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n--- Starting Reservation ---"</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cin</span><span className="token-punctuation">.</span><span className="token-function">ignore</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Refer to the list above and enter Bus Plate Number: "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-function">getline</span><span className="token-punctuation">(</span><span className="token-class-name">cin</span><span className="token-punctuation">,</span> plate<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">ifstream</span> busFile<span className="token-punctuation">(</span><span className="token-string">"bus_data.txt"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">string</span> line<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span><span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> bPlate<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> bChassis<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> bType<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}busFile <span className="token-operator">{'>>'}</span> totalSeats<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}busFile<span className="token-punctuation">.</span><span className="token-function">ignore</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}
      <span className="token-keyword">if</span> <span className="token-punctuation">(</span>bPlate <span className="token-operator">==</span> plate<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'            '}busFound <span className="token-operator">=</span> <span className="token-keyword">true</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'    '}busFile<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span><span className="token-operator">!</span>busFound<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Error: Bus not found! Please check the plate number."</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-keyword">return</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">ifstream</span> checkSeats<span className="token-punctuation">(</span><span className="token-string">"seat.txt"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">string</span> sPlate<span className="token-punctuation">,</span> sName<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">int</span> sNum<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span>checkSeats <span className="token-operator">{'>>'}</span> sPlate <span className="token-operator">{'>>'}</span> sNum<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-function">getline</span><span className="token-punctuation">(</span>checkSeats<span className="token-punctuation">,</span> sName<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>sPlate <span className="token-operator">==</span> plate<span className="token-punctuation">)</span> reservedCount<span className="token-operator">++</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'    '}checkSeats<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-type">int</span> seatsLeft <span className="token-operator">=</span> totalSeats <span className="token-operator">-</span> reservedCount<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Seats Left in this bus: "</span> <span className="token-operator">{'<<'}</span> seatsLeft <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Do you want to see which specific seats are left? (Y/N): "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">char</span> showSeats<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cin</span> <span className="token-operator">{'>>'}</span> showSeats<span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>showSeats <span className="token-operator">==</span> <span className="token-string">'Y'</span> <span className="token-operator">||</span> showSeats <span className="token-operator">==</span> <span className="token-string">'y'</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Available Seat Numbers: "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-type">bool</span> first <span className="token-operator">=</span> <span className="token-keyword">true</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-keyword">for</span> <span className="token-punctuation">(</span><span className="token-type">int</span> i <span className="token-operator">=</span> <span className="token-number">1</span><span className="token-punctuation">;</span> i <span className="token-operator">{'<='}</span> totalSeats<span className="token-punctuation">;</span> i<span className="token-operator">++</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'            '}<span className="token-type">bool</span> taken <span className="token-operator">=</span> <span className="token-keyword">false</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-class-name">ifstream</span> verify<span className="token-punctuation">(</span><span className="token-string">"seat.txt"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span>verify <span className="token-operator">{'>>'}</span> sPlate <span className="token-operator">{'>>'}</span> sNum<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'                '}<span className="token-function">getline</span><span className="token-punctuation">(</span>verify<span className="token-punctuation">,</span> sName<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'                '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>sPlate <span className="token-operator">==</span> plate <span className="token-operator">&&</span> sNum <span className="token-operator">==</span> i<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'                    '}taken <span className="token-operator">=</span> <span className="token-keyword">true</span><span className="token-punctuation">;</span>
      {'\n'}
      {'                    '}<span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'                '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'            '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'            '}verify<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span><span className="token-operator">!</span>taken<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'                '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span><span className="token-operator">!</span>first<span className="token-punctuation">)</span> <span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">", "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'                '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> i<span className="token-punctuation">;</span>
      {'\n'}
      {'                '}first <span className="token-operator">=</span> <span className="token-keyword">false</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'        '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\nHow many seats do you want to reserve? "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cin</span> <span className="token-operator">{'>>'}</span> requestedSeats<span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>requestedSeats <span className="token-operator">{'>'}</span> seatsLeft<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Error: Only "</span> <span className="token-operator">{'<<'}</span> seatsLeft <span className="token-operator">{'<<'}</span> <span className="token-string">" seats available!"</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-keyword">return</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      {'    '}<span className="token-keyword">for</span> <span className="token-punctuation">(</span><span className="token-type">int</span> i <span className="token-operator">=</span> <span className="token-number">0</span><span className="token-punctuation">;</span> i <span className="token-operator">{'<'}</span> requestedSeats<span className="token-punctuation">;</span> i<span className="token-operator">++</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}retrySeat<span className="token-punctuation">:</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Enter Seat Number for Passenger "</span> <span className="token-operator">{'<<'}</span> i <span className="token-operator">+</span> <span className="token-number">1</span> <span className="token-operator">{'<<'}</span> <span className="token-string">": "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-class-name">cin</span> <span className="token-operator">{'>>'}</span> seatNum<span className="token-punctuation">;</span>
      {'\n\n'}
      {'        '}<span className="token-type">bool</span> alreadyTaken <span className="token-operator">=</span> <span className="token-keyword">false</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-class-name">ifstream</span> verify<span className="token-punctuation">(</span><span className="token-string">"seat.txt"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span>verify <span className="token-operator">{'>>'}</span> sPlate <span className="token-operator">{'>>'}</span> sNum<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'            '}<span className="token-function">getline</span><span className="token-punctuation">(</span>verify<span className="token-punctuation">,</span> sName<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>sPlate <span className="token-operator">==</span> plate <span className="token-operator">&&</span> sNum <span className="token-operator">==</span> seatNum<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'                '}alreadyTaken <span className="token-operator">=</span> <span className="token-keyword">true</span><span className="token-punctuation">;</span>
      {'\n'}
      {'                '}<span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'        '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'        '}verify<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'        '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>alreadyTaken <span className="token-operator">||</span> seatNum <span className="token-operator">{'>'}</span> totalSeats <span className="token-operator">||</span> seatNum <span className="token-operator">{'<'}</span> <span className="token-number">1</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'            '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Invalid or already reserved seat! Enter again."</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">goto</span> retrySeat<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Enter Passenger Name: "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-class-name">cin</span><span className="token-punctuation">.</span><span className="token-function">ignore</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-function">getline</span><span className="token-punctuation">(</span><span className="token-class-name">cin</span><span className="token-punctuation">,</span> passenger<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'        '}<span className="token-class-name">ofstream</span> seatFile<span className="token-punctuation">(</span><span className="token-string">"seat.txt"</span><span className="token-punctuation">,</span> <span className="token-class-name">ios</span><span className="token-operator">::</span>app<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}seatFile <span className="token-operator">{'<<'}</span> plate <span className="token-operator">{'<<'}</span> <span className="token-string">" "</span> <span className="token-operator">{'<<'}</span> seatNum <span className="token-operator">{'<<'}</span> <span className="token-string">" "</span> <span className="token-operator">{'<<'}</span> passenger <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}seatFile<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n------------------------------------"</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"RESERVATION SUCCESSFUL!"</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Bus Plate: "</span> <span className="token-operator">{'<<'}</span> plate <span className="token-operator">{'<<'}</span> <span className="token-string">" | Chassis: "</span> <span className="token-operator">{'<<'}</span> bChassis <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"------------------------------------"</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\nReserve for another bus? (Y/N): "</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">cin</span> <span className="token-operator">{'>>'}</span> goBack<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>goBack <span className="token-operator">==</span> <span className="token-string">"Y"</span> <span className="token-operator">||</span> goBack <span className="token-operator">==</span> <span className="token-string">"y"</span><span className="token-punctuation">)</span> <span className="token-function">reserveSeat</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      <span className="token-type">void</span> <span className="token-function">viewReservations</span><span className="token-punctuation">()</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'    '}<span className="token-class-name">ifstream</span> seatFile<span className="token-punctuation">(</span><span className="token-string">"seat.txt"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">string</span> plate<span className="token-punctuation">,</span> passenger<span className="token-punctuation">,</span> bPlate<span className="token-punctuation">,</span> bType<span className="token-punctuation">,</span> bChassis<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">int</span> seatNum<span className="token-punctuation">,</span> totalSeats<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">bool</span> empty <span className="token-operator">=</span> <span className="token-keyword">true</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n--- All Reserved Seats ---"</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span>seatFile <span className="token-operator">{'>>'}</span> plate <span className="token-operator">{'>>'}</span> seatNum<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}seatFile<span className="token-punctuation">.</span><span className="token-function">ignore</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-function">getline</span><span className="token-punctuation">(</span>seatFile<span className="token-punctuation">,</span> passenger<span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'        '}<span className="token-class-name">string</span> foundChassis <span className="token-operator">=</span> <span className="token-string">"Unknown"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-class-name">ifstream</span> busFile<span className="token-punctuation">(</span><span className="token-string">"bus_data.txt"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span><span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> bPlate<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'            '}<span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> bChassis<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> bType<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}busFile <span className="token-operator">{'>>'}</span> totalSeats<span className="token-punctuation">;</span>
      {'\n'}
      {'            '}busFile<span className="token-punctuation">.</span><span className="token-function">ignore</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>bPlate <span className="token-operator">==</span> plate<span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'                '}foundChassis <span className="token-operator">=</span> bChassis<span className="token-punctuation">;</span>
      {'\n'}
      {'                '}<span className="token-keyword">break</span><span className="token-punctuation">;</span>
      {'\n'}
      {'            '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'        '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'        '}busFile<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Bus: "</span> <span className="token-operator">{'<<'}</span> plate <span className="token-operator">{'<<'}</span> <span className="token-string">" (Chassis: "</span> <span className="token-operator">{'<<'}</span> foundChassis <span className="token-operator">{'<<'}</span> <span className="token-string">")"</span>
      {'\n'}
      {'             '}<span className="token-operator">{'<<'}</span> <span className="token-string">" | Seat: "</span> <span className="token-operator">{'<<'}</span> seatNum <span className="token-operator">{'<<'}</span> <span className="token-string">" | Passenger: "</span> <span className="token-operator">{'<<'}</span> passenger <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}empty <span className="token-operator">=</span> <span className="token-keyword">false</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'    '}seatFile<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>empty<span className="token-punctuation">)</span> <span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"No reservations found."</span> <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-punctuation">{'}'}</span>
      {'\n\n'}
      <span className="token-type">void</span> <span className="token-function">viewBuses</span><span className="token-punctuation">()</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'    '}<span className="token-class-name">ifstream</span> busFile<span className="token-punctuation">(</span><span className="token-string">"bus_data.txt"</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-class-name">string</span> plate<span className="token-punctuation">,</span> type<span className="token-punctuation">,</span> chasis<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">int</span> seats<span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-type">bool</span> empty <span className="token-operator">=</span> <span className="token-keyword">true</span><span className="token-punctuation">;</span>
      {'\n\n'}
      {'    '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"\n--- Available Buses ---\n"</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-keyword">while</span> <span className="token-punctuation">(</span><span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> plate<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">)</span> <span className="token-punctuation">{'{'}</span>
      {'\n'}
      {'        '}<span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> chasis<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-function">getline</span><span className="token-punctuation">(</span>busFile<span className="token-punctuation">,</span> type<span className="token-punctuation">,</span> <span className="token-string">'|'</span><span className="token-punctuation">)</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}busFile <span className="token-operator">{'>>'}</span> seats<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}busFile<span className="token-punctuation">.</span><span className="token-function">ignore</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'        '}<span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"Plate: "</span> <span className="token-operator">{'<<'}</span> plate <span className="token-operator">{'<<'}</span> <span className="token-string">" | Chassis: "</span> <span className="token-operator">{'<<'}</span> chasis <span className="token-operator">{'<<'}</span> <span className="token-string">" | Type: "</span> <span className="token-operator">{'<<'}</span> type <span className="token-operator">{'<<'}</span> <span className="token-string">" | Seats: "</span> <span className="token-operator">{'<<'}</span> seats <span className="token-operator">{'<<'}</span> endl<span className="token-punctuation">;</span>
      {'\n'}
      {'        '}empty <span className="token-operator">=</span> <span className="token-keyword">false</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-punctuation">{'}'}</span>
      {'\n'}
      {'    '}busFile<span className="token-punctuation">.</span><span className="token-function">close</span><span className="token-punctuation">()</span><span className="token-punctuation">;</span>
      {'\n'}
      {'    '}<span className="token-keyword">if</span> <span className="token-punctuation">(</span>empty<span className="token-punctuation">)</span> <span className="token-class-name">cout</span> <span className="token-operator">{'<<'}</span> <span className="token-string">"No buses found.\n"</span><span className="token-punctuation">;</span>
      {'\n'}
      <span className="token-punctuation">{'}'}</span>
      {'\n'}
    </>
  );
};

const codeFiles = [
  {
    name: "main.cpp",
    language: "cpp",
    content: <HighlightedCppCode />
  },
];

export function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(codeFiles[0].name);

  return (
    <div>
      <GlassPanel className="!p-0 shadow-2xl shadow-neon-purple/20">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <CardHeader>
              <TabsList className="bg-transparent p-0">
                  {codeFiles.map((file) => (
                  <TabsTrigger
                      key={file.name}
                      value={file.name}
                      className="data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-300 data-[state=active]:shadow-none text-muted-foreground"
                  >
                      {file.name}
                  </TabsTrigger>
                  ))}
              </TabsList>
              </CardHeader>
              <CardContent className="p-0">
              {codeFiles.map((file) => (
                <TabsContent key={file.name} value={file.name} forceMount className={cn("m-0", activeTab !== file.name && 'hidden')}>
                    <pre className="bg-transparent p-4 rounded-md text-sm font-code h-[500px] overflow-auto">
                      <code>{file.content}</code>
                    </pre>
                </TabsContent>
              ))}
              </CardContent>
          </Tabs>
      </GlassPanel>
    </div>
  );
}
