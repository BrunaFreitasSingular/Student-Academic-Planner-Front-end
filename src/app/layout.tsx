import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { DisciplineProvider } from "@/src/context/DisciplineContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <DisciplineProvider>
            <Navbar />
            {children}
          </DisciplineProvider>
        </main>
      </body>
    </html>
  );
}