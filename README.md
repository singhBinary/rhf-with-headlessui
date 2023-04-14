## About

This repo demonstartes how to use [Headless UI](https://headlessui.com/) components with the [React Hook Form](https://react-hook-form.com/) by creating wrapper over for headless ui components for better resuability and then hooking up them with the react hook form library and start using them in forms without breaking a sweat.

Components covered -

- [Combobox (Autocomplete)](https://headlessui.com/react/combobox)
- [Radio Group](https://headlessui.com/react/radio-group)

## Good to know

The headless ui components like combobox and radio group use an array of options and each option in this array is an object. By default, headless ui sends you the complete information of selected option i.e the complete object of the selected option. But, it is very rare that you'll need this. So, I have modified the components to return only the value of the selected option instead of complete object. If you want to stick to the default behaviou you can use the default components i.e, ComboBoxDefault and RadioGroupDefault.

The Combobox also has an ongoing bug/enhancement where the options are not displayed automatically on field focus. This has also been taken care of with the help of this [thread](https://github.com/tailwindlabs/headlessui/discussions/1236)

I also noticed a class "select-none" added to <Combobox.Option /> which caused issues for me like moving the cursor to the extreme left (starting of input field) on selection of an option from the mouse. Hence, I have removed it. Because, anyways the design of these components is upto the users.

## Demo

A working demo for the same can be found at []()

This project is deployed using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Getting Started on local

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run this project locally make sure that you have Node.js 14.6.0 or newer

Next, Clone this repo and run the following commands

```bash
npm install
#followed by
npm run dev # or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) or the URL displayed on terminal with your browser to see the result.
