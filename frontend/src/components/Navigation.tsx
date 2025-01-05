'use client';

import * as React from 'react';
import Link from 'next/link';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="relative flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="font-bold text-xl">SendHuman</div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium">
              Login
            </Link>
            <Link href="/signup" className="text-sm font-medium">
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 