import MobileNav from "@/components/mobilenav";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import "../globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Van', lastName: 'Arkride' }

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn} />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg"
                        width={30}
                        height={30}
                        alt="menu-icon"
                    />

                    <div>
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>

        </main>
    );
}

