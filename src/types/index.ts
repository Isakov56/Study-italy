export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  education: string;
  message?: string;
}

export interface PricingTier {
  amount: string;
  currency: string;
  condition: string;
  type: 'visa-based' | 'upfront';
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
}

export interface FloatingCard {
  id: string;
  icon: string;
  text: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
}