'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Mail, Shield, BarChart3, Zap, Users, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="absolute inset-0 bg-[url('/mesh.svg')] opacity-30 bg-center bg-repeat-x animate-mesh"></div>
        </div>
        
        <div className="container relative">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Send Cold Emails Like a{" "}
                <span className="gradient-text">Human Being</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
                Scale your outreach from 10 to 10,000 emails while maintaining human-like precision. 
                No APIs, no OAuth2 - just natural email sending through Gmail&apos;s UI.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="button-primary">
                <Zap className="mr-2 h-4 w-4" />
                Start Free Trial
              </Link>
              <Link href="/demo" className="button-secondary">
                <Mail className="mr-2 h-4 w-4" />
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
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold">Natural Email Sending</h3>
              </div>
              <p className="text-muted-foreground">
                Send emails through Gmail&apos;s UI with human-like patterns, random delays, and natural typing variations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Shield className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold">Smart Proxy Rotation</h3>
              </div>
              <p className="text-muted-foreground">
                Maintain high deliverability with intelligent IP rotation, session management, and automated warmup.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                  <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-2xl font-bold">Advanced Analytics</h3>
              </div>
              <p className="text-muted-foreground">
                Track opens, replies, and engagement with detailed insights to optimize your outreach campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold">Scale Seamlessly</h3>
              </div>
              <p className="text-muted-foreground">
                Easily scale from a few hundred to thousands of emails per day while maintaining deliverability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                  <Clock className="h-6 w-6 text-red-600 dark:text-red-300" />
                </div>
                <h3 className="text-xl font-bold">Save Time</h3>
              </div>
              <p className="text-muted-foreground">
                Automate your outreach while maintaining the personal touch that gets responses.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900">
                  <Zap className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                </div>
                <h3 className="text-xl font-bold">Boost Results</h3>
              </div>
              <p className="text-muted-foreground">
                Achieve higher open rates and responses with our human-like sending patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Ready to Scale Your Cold Outreach?
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Join thousands of professionals who trust SendHuman to deliver their cold emails with human-like precision.
            </p>
            <Link href="/signup" className="button-primary">
              <Zap className="mr-2 h-4 w-4" />
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
