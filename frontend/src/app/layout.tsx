import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-white">
          <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white shadow-sm">
            <div className="flex-1">
              <a href="/" className="text-xl font-bold text-blue-600">Sendhuman</a>
            </div>
            <nav className="flex gap-4 items-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 rounded border border-blue-500 text-blue-500 hover:bg-blue-50">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-4">
                  <a href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</a>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </nav>
          </header>
          <main className="pt-16">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
