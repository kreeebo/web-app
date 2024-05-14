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
  `tw-relative tw-z-50 tw-max-h-96 tw-min-w-32 tw-overflow-hidden
    tw-rounded-2xl 
    tw-text-base tw-data-[state=open]:animate-in tw-py-4
    data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 
    data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 
    data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 
    data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:-tw-slide-in-from-bottom-2`,
  {
    variants: {
      variant: {
        outlined: "tw-bg-[#3D3D3D] tw-text-white",
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  },
);

export const selectTriggerVariants = cva(
  `tw-flex tw-h-10 tw-w-full tw-items-center tw-justify-between data-[disabled]:tw-opacity-60 data-[disabled]:tw-cursor-not-allowed
      tw-px-8 tw-pr-0 tw-py-2 tw-text-base tw-max-w-max focus:tw-outline-none`,
  {
    variants: {
      variant: {
        outlined: "tw-border tw-border-white tw-border-solid tw-rounded-[2rem]",
        solid: "ts",
      },
      size: {
        md: "tw-h-12",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export const selectItemVariants = cva(
  "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-start tw-rounded tw-py-1.5 tw-mx-4 tw-px-4 tw-outline-none focus:tw-bg-jet-black focus:tw-text-white data-[disabled]:tw-cursor-not-allowed data-[disabled]:tw-opacity-50",
  {
    variants: {
      variant: {
        outline: "focus:tw-bg-jet-black",
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
