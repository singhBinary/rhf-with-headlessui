import { CodeBracketIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="fixed sm:relative top-0 z-10 p-4 border-b border-gray-300 bg-gradient-to-b font-mono from-zinc-200 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 flex justify-between">
      <code className="font-mono font-bold">
        React hook form with headlessui components
      </code>
      <div className="w-28 text-right">
        <a href="https://github.com/singhBinary/rhf-with-headlessui">
          <CodeBracketIcon className="h-6 w-6 cursor-pointer hover:bg-gray-300 rounded-md p-0.5 inline-block" />
        </a>
        <a href="https://dev.to/binarysingh/how-to-use-headlessui-with-react-hook-form-5dhe">
          <DocumentTextIcon className="h-6 w-6 cursor-pointer hover:bg-gray-300 rounded-md p-0.5 inline-block sm:mx-4 ml-4" />
        </a>
      </div>
    </header>
  );
}
