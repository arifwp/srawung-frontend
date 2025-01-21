export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="w-full h-full min-h-dvh bg-black">{children}</div>;
}
