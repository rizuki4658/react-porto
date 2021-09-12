import { EasePage, FadePage } from '~/interface/transition';

export const Easing: EasePage = [0.6, -0.05, 0.01, 0.99];

export const FadeInUp: FadePage = {
  initial: {
    y: -60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: Easing
    }
  },
  exit: { y: -10, opacity: 0 }
}
