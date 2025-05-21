import type { LayoutProps } from "@/interface";

export default function POSLayout({ children, className }: LayoutProps) {
  return (
    <div className="flex flex-row max-h-screen">
      <div
        className={`flex-1 p-sm flex flex-col w-full h-screen overflow-y-scroll ${className}`}
      >
        {children}
      </div>
      <div className="w-[30rem] border"></div>
    </div>
  );
}
