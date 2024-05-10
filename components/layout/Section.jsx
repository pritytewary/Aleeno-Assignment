"use client";

export default function Section({ children, className }) {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950  ">
      <section className="p-4 w-full ">{children}</section>
    </div>
  );
}
