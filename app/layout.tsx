import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import MenuProvider from "./menu-provider";

export const metadata = {
  title: "TJCChen's Website",
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
          <Header />
          {children}
          <Footer />
          <MobileMenu />
        </MenuProvider>
      </body>
    </html>
  );
}
