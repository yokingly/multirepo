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
                  <button className="button-primary bg-blue-600 hover:bg-blue-700 flex items-center justify-center h-10 px-4 rounded-md text-white font-medium transition-all duration-200">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="button-primary bg-white hover:bg-blue-50 flex items-center justify-center h-10 px-4 rounded-md text-blue-600 font-medium transition-all duration-200 border border-blue-600">
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
