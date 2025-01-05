'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Send Emails Like a{' '}
                <span className="gradient-text">Human Being</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Automate your email outreach with human-like precision. No APIs, no OAuth2 - just natural email sending through Gmail's UI.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-4"
            >
              <Link href="/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-10 md:grid-cols-3"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Natural Email Sending</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Send emails through Gmail's UI with human-like patterns and timing variations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Smart Proxy Rotation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Maintain high deliverability with intelligent IP rotation and session management.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Advanced Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Track campaign performance and optimize your outreach with detailed insights.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Join thousands of professionals who trust SendHuman for their email outreach.
            </p>
            <Link href="/signup">
              <Button size="lg">Start Your Free Trial</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
