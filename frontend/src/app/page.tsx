'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Send Emails Like a{' '}
                <span className="gradient-text">Human Being</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Automate your email outreach with human-like precision. No APIs, no OAuth2 - just natural email sending through Gmail's UI.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="button-primary">
                Start Free Trial
              </Link>
              <Link href="/demo" className="button-secondary">
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Natural Email Sending</h3>
              <p className="text-muted-foreground">
                Send emails through Gmail's UI with human-like patterns and timing variations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Smart Proxy Rotation</h3>
              <p className="text-muted-foreground">
                Maintain high deliverability with intelligent IP rotation and session management.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Track campaign performance and optimize your outreach with detailed insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Join thousands of professionals who trust SendHuman for their email outreach.
            </p>
            <Link href="/signup" className="button-primary">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
