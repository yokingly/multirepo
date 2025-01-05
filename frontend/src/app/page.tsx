'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Send Emails Like a{' '}
                <span className="gradient-text">Human Being</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Automate your email outreach with human-like precision. No APIs, no OAuth2 - just natural email sending through Gmail's UI.
              </p>
            </div>
            <div className="space-x-4">
              <Link 
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Natural Email Sending</h3>
              <p className="text-muted-foreground">
                Send emails through Gmail's UI with human-like patterns and timing variations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Smart Proxy Rotation</h3>
              <p className="text-muted-foreground">
                Maintain high deliverability with intelligent IP rotation and session management.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Track campaign performance and optimize your outreach with detailed insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Join thousands of professionals who trust SendHuman for their email outreach.
            </p>
            <Link
              href="/signup"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
