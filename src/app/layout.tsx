import type { Metadata } from "next";
import './globals.css';
import Navbar from "./components/Navbar";
import SocialsMedia from "./components/SocialsMedia";

export const metadata: Metadata = {
    title: "FOCOS CO",
    description: "Your go-to platform for innovative solutions."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full overflow-section">
            <head>
                <link rel="icon" href="/media/images/Logo.png" type="image/png" />
            </head>
            <body>
                <div className="min-h-full bg-background">
                    <Navbar />
                    <SocialsMedia/>
                    <main className="container mx-auto">
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