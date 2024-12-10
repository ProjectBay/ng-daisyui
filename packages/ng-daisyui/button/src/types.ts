import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: '',
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      ghost: 'btn-ghost',
      link: 'btn-link',
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
    },
    outline: {
      false: '',
      true: 'btn-outline',
    },
    size: {
      normal: '',
      xs: 'btn-xs',
      sm: 'btn-sm',
      lg: 'btn-lg',
    },
    responsive: {
      false: '',
      true: 'sm:btn-sm md:btn-md lg:btn-lg',
    },
    wide: {
      false: '',
      true: 'btn-wide',
    },
  },
  defaultVariants: {
    variant: 'default',
    outline: false,
    size: 'normal',
    responsive: false,
    wide: false,
  },
});
type ButtonVariants = VariantProps<typeof buttonVariants>;
export type TDuiButtonVariant = ButtonVariants['variant'];
export type TDuiButtonOutline = ButtonVariants['outline'];
export type TDuiButtonSize = ButtonVariants['size'];
export type TDuiButtonResponsive = ButtonVariants['responsive'];
export type TDuiButtonWide = ButtonVariants['wide'];
