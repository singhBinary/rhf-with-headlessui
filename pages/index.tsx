import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import RadioGroupWrapper from "@/components/formElements/RadioGroup";
import ComboBoxWrapper from "@/components/formElements/ComboBox";
import Header from "@/components/layout/Header";
import ColContainer from "@/components/layout/ColContainer";
import ColHeading from "@/components/layout/ColHeading";
import CodeBlock from "@/components/format/CodeBlock";

type FormData = {
  storage: string;
  user: string;
};

export default function Home() {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<FormData>();

  const [formData, setFormData] = useState({});

  const onSubmit = (data: FormData) => setFormData(data);

  const storageWatch = watch("storage");
  const userWatch = watch("user");

  return (
    <main className="min-h-screen sm:px-24 sm:py-10 ">
      <Header />

      <div className="grid lg:mb-0 lg:grid-cols-3 w-full mt-24 sm:mt-16">
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
                <RadioGroupWrapper
                  label="Radio Group"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={[
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
                  ]}
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
                <ComboBoxWrapper
                  label="Combo Box"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  options={[
                    { id: 1, label: "Wade Cooper", value: "wade" },
                    { id: 2, label: "Arlene Mccoy", value: "arlene" },
                  ]}
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
