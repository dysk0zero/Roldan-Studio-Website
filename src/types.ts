// src/types.ts
export type IconComponent = (props: Record<string, unknown>) => any;

export type IconText = {
  icon: IconComponent;
  text: string;
};

export type ServiceVM = {
  title: string;
  subtitle: string;
  cta: string;
  isCustom: boolean;
  outcomes: IconText[];
  features: IconText[];
  dev: IconText[];
  price: string;
};
