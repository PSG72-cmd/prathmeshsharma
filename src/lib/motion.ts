// ─── Shared motion config ────────────────────────────────────────────────────
// All animation constants in one place so nothing gets improvised.

export const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

export const scrollReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EXPO_OUT,
      delay: i * 0.075,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.1,
    },
  },
};

export const heroCharacter = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: EXPO_OUT,
      delay: i * 0.04,
    },
  }),
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EXPO_OUT } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: EXPO_OUT } },
};

export const slideUpPanel = {
  rest: { y: "100%" },
  hover: {
    y: "0%",
    transition: { duration: 0.35, ease: EXPO_OUT },
  },
};

export const buttonHover = {
  scale: 1,
  y: 0,
};

export const buttonTap = {
  scale: 0.98,
  y: 1,
};
