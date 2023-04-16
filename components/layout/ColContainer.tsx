export default function ColContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
      {children}
    </div>
  );
}
