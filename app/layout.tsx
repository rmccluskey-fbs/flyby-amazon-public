export const metadata = {
  title: "Flyby Shine | Amazon Associates",
  description:
    "Flyby Shine Amazon Associates landing page with field-tested gear lists used for drone-powered exterior cleaning and maintenance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
