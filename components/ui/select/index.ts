import { type VariantProps, cva } from "class-variance-authority";

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

export const selectContentVariants = cva(
  `relative z-50 max-h-96 min-w-32 overflow-hidden
    rounded-2xl 
    text-base data-[state=open]:animate-in py-4
    data-[state=closed]:animate-out data-[state=closed]:fade-out-0 
    data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
    data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
    data-[side=right]:slide-in-from-left-2 data-[side=top]:-slide-in-from-bottom-2`,
  {
    variants: {
      variant: {
        outlined: "bg-[#3D3D3D] text-white",
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  },
);

export const selectTriggerVariants = cva(
  `flex h-10 w-full items-center justify-between data-[disabled]:opacity-60 data-[disabled]:cursor-not-allowed
      px-8 pr-0 py-2 text-base max-w-max focus:outline-none`,
  {
    variants: {
      variant: {
        outlined: "border border-white border-solid rounded-[2rem]",
        filled: "ts",
      },
      size: {
        lg: "h-[3.75rem]",
        md: "h-12",
        sm: "h-8",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  },
);

export const selectItemVariants = cva(
  "relative flex cursor-default select-none items-start rounded py-1.5 mx-4 px-4 outline-none focus:bg-jet-black focus:text-white data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        outline: "focus:bg-jet-black",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;
export type SelectContentVariants = VariantProps<typeof selectContentVariants>;
export type SelectItemVariants = VariantProps<typeof selectItemVariants>;
