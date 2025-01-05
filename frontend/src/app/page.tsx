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

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual waitlist signup API call
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

  const WaitlistForm = ({ className = '' }) => (
    <form onSubmit={handleJoinWaitlist} className={`flex gap-2 ${className}`}>
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
                Advanced human behavior simulation that makes your outreach truly indistinguishable from manual sending.
                Built for enterprise sales teams who need unmatched deliverability at scale.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                <span>Complete session simulation</span>
              </div>
              <div className="flex items-center">
                <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                <span>Premium residential proxies</span>
              </div>
              <div className="flex items-center">
                <IconWrapper icon={CheckCircle2} className="mr-2 h-4 w-4 text-blue-600" />
                <span>Enterprise-ready platform</span>
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

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Advanced Human Behavior Simulation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our platform goes beyond simple email sending - we replicate complete human interaction patterns
              that make detection virtually impossible for email service providers
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
