import ColHeading from "@/components/layout/ColHeading";

export default function CodeBlock({
  heading,
  headingCustomClass,
  codeJson,
}: {
  heading: string;
  headingCustomClass?: string;
  codeJson: any;
}) {
  return (
    <>
      <ColHeading heading={heading} customClass={headingCustomClass} />
      <pre>{JSON.stringify(codeJson, null, 2)}</pre>
    </>
  );
}
