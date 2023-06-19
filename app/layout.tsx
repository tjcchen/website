import "./globals.scss";
import { Suspense } from "react";
import { NavigationEvents } from "@/components/navigation/navigation-events";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import MenuProvider from "./menu-provider";

export const metadata = {
  title: "Andy Chen's Website",
  description: "A personal intro website made by Andy with heart.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MenuProvider>
          {/* Header */}
          <Header />
          {/* Page Content */}
          {children}
          {/* Footer */}
          <Footer />
          {/* Mobile Menu Overlay */}
          <MobileMenu />
          {/* url change event */}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </MenuProvider>
      </body>
    </html>
  );
}
