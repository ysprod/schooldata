import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { AuthUserProvider } from "@/firebase/auth";
import Appbar from "@/components/Appbar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecole +",
  description: "Par YAYA SIDIBE",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthUserProvider>
          <ToastContainer />
          <Appbar />
          <div className="flex flex-col items-center mx-auto max-w-7xl">
            {children}
          </div>
          <Toaster />
          <Footer />
        </AuthUserProvider>
      </body>
    </html>
  );
};

export default RootLayout;