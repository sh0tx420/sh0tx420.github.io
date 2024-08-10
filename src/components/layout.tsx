import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function Layout({ children }: any) {
    return (
        <div className={inter.className}>
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}
