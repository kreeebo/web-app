export { default as Select } from "./Select.vue";
export { default as SelectValue } from "./SelectValue.vue";
export { default as SelectTrigger } from "./SelectTrigger.vue";
export { default as SelectContent } from "./SelectContent.vue";
export { default as SelectGroup } from "./SelectGroup.vue";
export { default as SelectItem } from "./SelectItem.vue";
export { default as SelectItemText } from "./SelectItemText.vue";
export { default as SelectLabel } from "./SelectLabel.vue";
export { default as SelectSeparator } from "./SelectSeparator.vue";
export { default as SelectScrollUpButton } from "./SelectScrollUpButton.vue";
export { default as SelectScrollDownButton } from "./SelectScrollDownButton.vue";

import { type VariantProps, cva } from "class-variance-authority";

export const selectVariants = cva(
	"flex h-16 w-full items-center justify-between px-3 pt-3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 placeholder:text-[#9ca3af]",
	{
		variants: {
			variant: {
				default: "dark:bg-jet-black dark:text-white  dark:bg-jet-black",
				dark: "dark:bg-eerie-black dark:text-white placeholder:text-white placeholder:font-normal",
			},
			radius: {
				default: "rounded-lg",
				large: "rounded-[24px]",
			},
			size: {
				default: "h-16",
				small: "h-12 pt-0 px-4",
			},
		},
		defaultVariants: {
			variant: "default",
			radius: "default",
			size: "default",
		},
	}
);

export const selectContentVariants = cva(
	"relative z-50 max-h-96 min-w-32 overflow-hidden rounded-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-jet-black dark:text-white",
	{
		variants: {
			variant: {
				default: "dark:bg-jet-black dark:text-white  dark:bg-jet-black",
				dark: "dark:bg-eerie-black dark:text-white placeholder:text-white placeholder:font-normal",
			},
			radius: {
				default: "rounded-lg",
				large: "rounded-[24px]",
			},
			size: {
				default: "h-16",
				small: "h-12 pt-0 px-4",
			},
		},
		defaultVariants: {
			variant: "default",
			radius: "default",
			size: "default",
		},
	}
);

export type SelectVariants = VariantProps<typeof selectVariants>;
