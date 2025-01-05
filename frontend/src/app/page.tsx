'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { 
  Mail, 
  Shield, 
  BarChart3, 
  Zap, 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { FC, useState } from 'react';

// TODO: Fix type definitions for Lucide icons
// @ts-ignore
const IconWrapper: FC<LucideProps & { icon: any }> = ({ icon: Icon, ...props }) => {
  // @ts-ignore
  return <Icon {...props} />;
};

const WaitlistForm = ({ className = '' }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
      // Reset submission state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error joining waitlist:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 h-10 px-4 rounded-md border border-input bg-background/80 backdrop-blur-sm text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isSubmitted}
      />
      <button 
        type="submit" 
        className={`button-primary ${isSubmitted ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} flex items-center`}
        disabled={isSubmitted}
      >
        {isSubmitted ? (
          <>
            Added to Waitlist
            <IconWrapper icon={CheckCircle2} className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            Join Waitlist
            <IconWrapper icon={ArrowRight} className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
};

const HowItWorksChart = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Main Platform Card */}
      <div className="relative z-10 mx-auto mb-16 max-w-lg">
        <div className="transform transition-all hover:translate-y-[-4px] bg-[#2c3e50] text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-center">SendHuman</h3>
        </div>
        
        {/* Animated Connection Lines */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-16 flex justify-between items-center px-8">
          <div className="w-1/2 h-0.5 bg-gradient-to-r from-[#2c3e50] to-[#3498db] animate-pulse"></div>
          <div className="w-1/2 h-0.5 bg-gradient-to-r from-[#2c3e50] to-[#3498db] animate-pulse"></div>
        </div>
      </div>

      {/* Container Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-4">
        {[
          {
            name: "Gmail Session",
            logo: `<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M22.5 4.5v15c0 .85-.65 1.5-1.5 1.5H3c-.85 0-1.5-.65-1.5-1.5v-15c0-.85.65-1.5 1.5-1.5h18c.85 0 1.5.65 1.5 1.5z" fill="#E6E6E6"/>
              <path d="M22.5 4.5L12 12L1.5 4.5" stroke="#DB4437" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 12L1.5 4.5h19.5L12 12z" fill="#DB4437"/>
            </svg>`,
            browser: "Chrome",
            location: "New York, USA",
            ip: "156.33.x.x",
            stats: {
              sent: 23,
              read: 12,
              replied: 7,
              clicked: 5
            }
          },
          {
            name: "Outlook Session",
            logo: `<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="#0078D4"/>
              <path d="M3 4h18v6H3V4z" fill="#0078D4"/>
              <path d="M3 10h18v10H3V10z" fill="#00BCF2"/>
            </svg>`,
            browser: "Edge",
            location: "London, UK",
            ip: "82.14.x.x",
            stats: {
              sent: 19,
              read: 9,
              replied: 4,
              clicked: 3
            }
          }
        ].map((env, index) => (
          <div key={index} className="group relative">
            <div className="transform transition-all group-hover:translate-y-[-4px] bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md border border-blue-100">
              <div className="text-center mb-6">
                {/* Platform Logo */}
                <div className="inline-block mb-3" dangerouslySetInnerHTML={{ __html: env.logo }} />
                <h4 className="text-lg font-semibold text-[#2c3e50] mb-2">
                  {env.name}
                </h4>
                
                {/* Technical Details Pills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {env.browser}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {env.location}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    IP: {env.ip}
                  </span>
                </div>
              </div>

              {/* Activity Stats with Icons */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <IconWrapper icon={Mail} className="mr-2 h-4 w-4 text-blue-600" />
                    Emails Sent
                  </span>
                  <span className="font-semibold text-blue-600">{env.stats.sent}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <IconWrapper icon={Mail} className="mr-2 h-4 w-4 text-green-600" />
                    Emails Read
                  </span>
                  <span className="font-semibold text-green-600">{env.stats.read}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <IconWrapper icon={Mail} className="mr-2 h-4 w-4 text-purple-600" />
                    Replies
                  </span>
                  <span className="font-semibold text-purple-600">{env.stats.replied}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <IconWrapper icon={Mail} className="mr-2 h-4 w-4 text-orange-600" />
                    Links Clicked
                  </span>
                  <span className="font-semibold text-orange-600">{env.stats.clicked}</span>
                </div>
              </div>

              {/* Session Status */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Active Session</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="mt-12 text-center max-w-2xl mx-auto px-4">
        <p className="text-gray-600">
          Each email client session operates independently with randomized behavior patterns, making your outreach truly indistinguishable from manual sending.
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white dark:from-blue-900 dark:via-blue-950 dark:to-background"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 w-[1000px] h-[1000px] bg-blue-100/30 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-50/30 dark:bg-blue-950/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
              <span>✨ Now in private beta</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Send cold emails like a{" "}
                <span className="text-blue-600">human being</span>
                {" "}
                <span>would</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
                Achieve unmatched deliverability by replicating real human behavior in email clients.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                <span>Land in primary inbox</span>
              </div>
              <div className="flex items-center">
                <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                <span>Scale safely</span>
              </div>
              <div className="flex items-center">
                <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                <span>Stay undetected</span>
              </div>
            </div>

            <div className="w-full max-w-md space-y-4">
              <WaitlistForm />
              <p className="text-sm text-muted-foreground">
                Be the first to get access when we launch. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add the HowItWorksChart component after the hero section */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <HowItWorksChart />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              True Browser-Based Email Automation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Unlike API-based solutions, we replicate complete human interaction patterns in real email clients - 
              making your outreach indistinguishable from manual sending
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <IconWrapper icon={Mail} className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold">Complete Session Simulation</h3>
                <p className="text-muted-foreground">
                  Replicates natural user behavior including navigation patterns, reading times, and realistic typing variations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Natural page navigation</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Realistic reading delays</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                    <span>Human typing patterns</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <IconWrapper icon={Shield} className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
                <p className="text-muted-foreground">
                  Industry-leading infrastructure with residential proxies and sophisticated fingerprint management.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Premium residential IPs</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Fixed fingerprints per inbox</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-purple-600" />
                    <span>Automated session management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <IconWrapper icon={BarChart3} className="h-5 w-5 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-bold">Enterprise Scale</h3>
                <p className="text-muted-foreground">
                  Built for high-volume sales teams with advanced monitoring and team management capabilities.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-green-600" />
                    <span>Team collaboration tools</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-green-600" />
                    <span>Advanced monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-green-600" />
                    <span>Scalable infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900">
                  <IconWrapper icon={Mail} className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <h3 className="text-xl font-bold">AI-powered Inbox</h3>
                <p className="text-muted-foreground">
                  Smart inbox that automatically consolidates and categorizes all prospect replies for efficient follow-ups.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-indigo-600" />
                    <span>Smart reply categorization</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-indigo-600" />
                    <span>Automated follow-up queues</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-indigo-600" />
                    <span>Priority inbox management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent dark:from-rose-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 dark:bg-rose-900">
                  <IconWrapper icon={BarChart3} className="h-5 w-5 text-rose-600 dark:text-rose-300" />
                </div>
                <h3 className="text-xl font-bold">Campaign Management</h3>
                <p className="text-muted-foreground">
                  Comprehensive campaign oversight with real-time tracking and performance analytics.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-rose-600" />
                    <span>Real-time campaign tracking</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-rose-600" />
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-rose-600" />
                    <span>A/B testing tools</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900">
                  <IconWrapper icon={Zap} className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                </div>
                <h3 className="text-xl font-bold">50+ Integrations</h3>
                <p className="text-muted-foreground">
                  Seamlessly connect with your favorite tools and enhance your workflow efficiency.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-amber-600" />
                    <span>CRM integrations</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-amber-600" />
                    <span>Sales tools connectivity</span>
                  </li>
                  <li className="flex items-center">
                    <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-amber-600" />
                    <span>API access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Why choose SendHuman?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Designed for sales teams who want to scale their outreach without losing the human touch
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                  <IconWrapper icon={Users} className="h-5 w-5 text-orange-600 dark:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold">Scale Seamlessly</h3>
                <p className="text-muted-foreground">
                  Easily scale from a few hundred to thousands of emails per day while maintaining deliverability.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent dark:from-red-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                  <IconWrapper icon={Clock} className="h-5 w-5 text-red-600 dark:text-red-300" />
                </div>
                <h3 className="text-xl font-bold">Save Time</h3>
                <p className="text-muted-foreground">
                  Automate your outreach while maintaining the personal touch that gets responses.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent dark:from-teal-950/50"></div>
              <div className="relative space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900">
                  <IconWrapper icon={Zap} className="h-5 w-5 text-teal-600 dark:text-teal-300" />
                </div>
                <h3 className="text-xl font-bold">Boost Results</h3>
                <p className="text-muted-foreground">
                  Achieve higher open rates and responses with our human-like sending patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white dark:from-blue-900 dark:via-blue-950 dark:to-background"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-1/2 right-1/2 w-[800px] h-[800px] bg-blue-100/30 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-50/30 dark:bg-blue-950/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Ready to Scale Your Cold Outreach?
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Join thousands of professionals who trust SendHuman to deliver their cold emails with human-like precision.
            </p>
            <div className="w-full max-w-md space-y-4">
              <WaitlistForm />
              <p className="text-sm text-muted-foreground">
                Limited spots available. Join the waitlist to secure your access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container">
          <div className="py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">SendHuman</h4>
                <p className="text-sm text-muted-foreground">
                  Making cold emails feel warm and personal.
                </p>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/sendhuman" className="text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                  <a href="https://linkedin.com/company/sendhuman" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/demo" className="text-sm text-muted-foreground hover:text-foreground">
                      Demo
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/dpa" className="text-sm text-muted-foreground hover:text-foreground">
                      Data Processing Agreement
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:support@sendhuman.com" className="text-sm text-muted-foreground hover:text-foreground">
                      support@sendhuman.com
                    </a>
                  </li>
                  <li>
                    <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/status" className="text-sm text-muted-foreground hover:text-foreground">
                      System Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} SendHuman. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Link href="/terms" className="hover:text-foreground">
                  Terms
                </Link>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy
                </Link>
                <Link href="/cookies" className="hover:text-foreground">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
