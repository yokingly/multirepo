'use client';

import * as React from 'react';
import Link from 'next/link';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Sendhuman</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="nav-link">
            Sign in
          </Link>
          <Link href="/signup" className="button-primary">
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
} 