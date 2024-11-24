import Navbar from "../../../components/ui/Navbar";
// import { Toaster } from "react-hot-toast";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {/* Toaster to display notifications */}
                {/* <Toaster /> */}
                {children}
            </body>
        </html>
    );
}
