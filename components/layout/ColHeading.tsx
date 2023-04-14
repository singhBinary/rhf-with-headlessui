import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ColHeading({ customClass, heading }: { customClass?: string, heading: string }) {
  return (
    <h2
      className={`${inter.className} mb-3 text-2xl font-semibold ${customClass}`}
    >
      {heading}{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
  );
}
