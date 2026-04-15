import type { ReactNode } from "react";

export const metadata = {
  title: "My First App",
  description: "Simple app",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
