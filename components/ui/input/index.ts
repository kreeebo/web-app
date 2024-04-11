export { default as Input } from "./Input.vue";

import { type VariantProps, cva } from "class-variance-authority";

export const inputVariants = cva(
	"block font-normal px-3 pb-2.5 pt-6 w-full text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer",
	{
		variants: {
			variant: {
				default: "dark:bg-jet-black dark:text-white  dark:bg-jet-black",
				dark: "dark:bg-eerie-black dark:text-white  placeholder:text-white placeholder:font-normal",
			},
			size: {
				default: "h-16",
				comfortable: "h-12 pt-0 pb-0",
			},
			rounded: {
				default: "rounded-lg",
				smooth: "rounded-[24px]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			rounded: "default",
		},
	}
);

export type InputVariants = VariantProps<typeof inputVariants>;
