import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { SubjectProvider } from "@/src/context/ModalContext"
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <Providers>
            <SubjectProvider>
              {children}
            </SubjectProvider>
          </Providers>
        </main>
      </body>
    </html>
  );
}
