
export const Titrepage = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold text-center text-white">{children}</h1>
    </div>
  );
};
