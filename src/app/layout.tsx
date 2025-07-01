import type { Metadata } from "next";
import './globals.css';
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
    title: "FOCOS CO",
    description: "Your go-to platform for innovative solutions."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full">
            <body>
                <div className="min-h-screen bg-background text-foreground">
                    <Navbar />
                    <main className="container mx-auto p-4">
                        {children}
                    </main>
                    {/* <footer className="bg-gray-800 text-white text-center p-4 mt-8">
                        <p>&copy; {new Date().getFullYear()} FOCOS CO. All rights reserved.</p>
                        <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
                    </footer> */}
                </div>
            </body>
        </html>
    );
}