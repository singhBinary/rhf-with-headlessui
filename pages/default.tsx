import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";

import RadioGroupDefaultWrapper from "@/components/formElements/RadioGroupDefault";
import ComboBoxDefaultWrapper from "@/components/formElements/ComboBoxDefault";
import Header from "@/components/layout/Header";
import ColContainer from "@/components/layout/ColContainer";
import ColHeading from "@/components/layout/ColHeading";
import CodeBlock from "@/components/format/CodeBlock";

type FormData = {
  storage: string;
  user: string;
};

const comboBoxOptions = [
  { id: 1, label: "Wade Cooper", value: "wade" },
  { id: 2, label: "Arlene Mccoy", value: "arlene" },
];

const radioGroupOptions = [
  {
    id: 1,
    value: "startup",
    label: "Startup",
    desc: "12GB",
  },
  {
    id: 2,
    value: "business",
    label: "Business",
    desc: "16GB",
  },
];

export default function DefaultBehaviour() {
  const router = useRouter();
  const { storage, user } = router.query;

  const {
    watch,
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<FormData>();

  const [formData, setFormData] = useState({});

  const onSubmit = (data: FormData) => setFormData(data);

  const storageWatch = watch("storage");
  const userWatch = watch("user");

  const getValCorrespondingOption = (value: string, options: any[]) => {
    const option = options.find((option) => option.value === value);
    return option;
  };

  useEffect(() => {
    if (storage && user) {
      reset({
        storage: getValCorrespondingOption(
          storage as string,
          radioGroupOptions
        ),
        user: getValCorrespondingOption(user as string, comboBoxOptions),
      });
    } else {
      reset({ storage: undefined, user: undefined });
    }
    setFormData({});
  }, [storage, user]);

  return (
    <main className="min-h-screen sm:px-24 sm:py-10 ">
      <Header />

      <p className="mt-24 sm:mt-10 px-4">
        The headless ui components like combobox and radio group use an array of
        options and each option in this array is an object. By default, headless
        ui sends you the complete information of selected option i.e the
        complete object of the selected option. But, it is very rare that you'll
        need this. So, I have also created a version of the components to return
        only the value of the selected option instead of complete object. You
        can check it out
        <Link href="/" className="text-orange-500">
          {" "}
          here
        </Link>
      </p>

      <div className="grid lg:mb-0 lg:grid-cols-3 w-full mt-6 lg:mt-10">
        <ColContainer>
          <ColHeading heading="Form" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="storage"
              control={control}
              rules={{
                required: "Please select a storage option",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <RadioGroupDefaultWrapper
                  label="Radio Group"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={radioGroupOptions}
                  error={errors.storage}
                />
              )}
            />

            <Controller
              name="user"
              control={control}
              rules={{
                required: "Please select a user",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <ComboBoxDefaultWrapper
                  label="Combo Box"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={comboBoxOptions}
                  error={errors.user}
                />
              )}
            />

            <button
              type="submit"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 mt-5 mb-2"
            >
              Submit
            </button>
            {storage && user ? (
              <Link
                href="/default"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ml-3"
              >
                Without Prefill
              </Link>
            ) : (
              <Link
                href="/default?storage=business&user=arlene"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ml-3"
              >
                Prefill
              </Link>
            )}
          </form>
        </ColContainer>

        <ColContainer>
          <CodeBlock
            heading="Watch"
            codeJson={{ storage: storageWatch, user: userWatch }}
          />

          <CodeBlock
            heading="Form Submission Data"
            codeJson={formData}
            headingCustomClass="lg:border-gray-300 lg:border-t-2 lg:mt-10 pt-10"
          />
        </ColContainer>

        <ColContainer>
          <CodeBlock
            heading="Form States"
            codeJson={{
              errors,
              isDirty,
              isSubmitting,
              touchedFields,
              submitCount,
            }}
          />
        </ColContainer>
      </div>
    </main>
  );
}
