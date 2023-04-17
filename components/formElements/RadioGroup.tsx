import { RadioGroup } from "@headlessui/react";
import { FieldError } from "react-hook-form";

export default function RadioGroupWrapper({
  label,
  value = '',
  onChange,
  options,
  onBlur,
  error,
}: {
  label: string;
  value: string | number;
  onChange: any;
  onBlur: any;
  options: {
    id: number | string;
    value: string;
    label: string;
    desc: string;
  }[];
  error: FieldError | undefined;
}) {
  return (
    <>
      <RadioGroup value={value} onChange={onChange} onBlur={onBlur}>
        <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
          {label}
        </RadioGroup.Label>
        <div className="space-y-2 mt-4">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.id}
              value={option.value}
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-300"
                    : ""
                }
                  ${
                    checked
                      ? "bg-orange-900 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {option.label}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline ${
                            checked ? "text-orange-100" : "text-gray-500"
                          }`}
                        >
                          <span>{option.desc}</span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error.message}
        </p>
      )}
    </>
  );
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
