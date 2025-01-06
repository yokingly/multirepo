'use client';

import * as React from 'react';
import Link from 'next/link';

export function Navigation() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">Sendhuman</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="nav-link">
            Sign in
          </Link>
          <button onClick={scrollToBottom} className="button-primary bg-blue-600 hover:bg-blue-700">
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
} 