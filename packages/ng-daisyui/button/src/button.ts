import { computed, Directive, input } from '@angular/core';
import {
  buttonVariants,
  TDuiButtonOutline,
  TDuiButtonResponsive,
  TDuiButtonSize,
  TDuiButtonVariant,
  TDuiButtonWide,
} from './types';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';

@Directive({
  selector: 'button[duiButton]',
  standalone: true,
  exportAs: 'duiButton',
  host: {
    '[class]': '_computedClass()',
  },
})
export class DuiButton {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  public readonly duiVariant = input<TDuiButtonVariant>('default');
  public readonly duiOutline = input<TDuiButtonOutline>(false);
  public readonly duiSize = input<TDuiButtonSize>('normal');
  public readonly duiResponsive = input<TDuiButtonResponsive>(false);
  public readonly duiWide = input<TDuiButtonWide>(false);

  protected readonly _computedClass = computed(() =>
    clsx(
      buttonVariants({
        variant: this.duiVariant(),
        outline: this.duiOutline(),
        size: this.duiSize(),
        responsive: this.duiResponsive(),
        wide: this.duiWide(),
      }),
      this.userClass()
    )
  );
}
