'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {

  return (
    <header className="bg-emerald-500 h-[350px] w-full absolute -z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <div>Johnrome.</div>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4">
            <Link href="/"> Home</Link>
            <Link href="/"> Home</Link>
            <Link href="/"> Home</Link>
            <Link href="/"> Home</Link>
          </ul>
          <button className="bg-slate-800 px-4 py-1.5 rounded-lg text-white hover:bg-slate-800/80 transition duration-300">
            Hello
          </button>
        </div>
      </nav>
    </header>
  );
}
