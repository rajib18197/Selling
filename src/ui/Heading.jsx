export function Heading({ as, children, className }) {
  const Type = as;

  return (
    <Type className={`bg-slate-900 text-slate-50 ${className} p-1`}>
      {children}
    </Type>
  );
}
