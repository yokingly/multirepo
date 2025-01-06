'use client';

import * as React from 'react';
import Link from 'next/link';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-bold text-xl gradient-text">
              Sendhuman
            </div>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/features" className="nav-link">
              Features
            </Link>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
            <Link href="/login" className="nav-link">
              Login
            </Link>
            <Link href="/signup" className="button-primary">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 