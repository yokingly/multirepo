'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu.Root className="relative flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-bold text-xl gradient-text">SendHuman</span>
              </motion.div>
            </Link>
            {!isHome && (
              <NavigationMenu.List className="hidden md:flex md:space-x-4">
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    href="/features"
                  >
                    Features
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    href="/pricing"
                  >
                    Pricing
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    href="/docs"
                  >
                    Documentation
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </NavigationMenu.Root>
      </div>
    </header>
  );
} 