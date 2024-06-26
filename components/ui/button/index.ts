import { type VariantProps, cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex max-w-content items-center justify-center text-base whitespace-nowrap rounded-3xl font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 gap-2 px-4",
  {
    variants: {
      variant: {
        filled:
          "bg-chartreuse dark:bg-chartreuse dark:text-eerie-black dark:hover:bg-chartreuse/90",
        outlined:
          "border border-white bg-transparent hover:bg-white hover:text-eerie-black dark:border-white dark:bg-transparent dark:hover:bg-white dark:hover:text-eerie-black transition-colors",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
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

export type ButtonVariants = VariantProps<typeof buttonVariants>;
