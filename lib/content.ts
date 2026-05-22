export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaSecondaryText: string;
  image: string;
}

export interface AboutSection {
  badge: string;
  title: string;
  body: string;
  stats: Array<{ value: string; label: string }>;
  image: string;
}

export interface Service {
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
  rating: number;
}

export interface ContactSection {
  title: string;
  subtitle: string;
}

export interface FooterSection {
  tagline: string;
  links: Array<{ label: string; href: string }>;
}

export interface Theme {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  headingFont: string;
  bodyFont: string;
}

export interface SiteContent {
  business: BusinessInfo;
  hero: HeroSection;
  about: AboutSection;
  services: Service[];
  testimonials: Testimonial[];
  contact: ContactSection;
  footer: FooterSection;
  theme: Theme;
}

export const content: SiteContent = {
  business: {
    name: "Acme Business",
    tagline: "Quality you can trust",
    phone: "+91 98765 43210",
    email: "hello@acme.business",
    address: "123 Main Street, Mumbai, Maharashtra 400001",
    mapUrl: "",
  },
  hero: {
    headline: "Welcome to Acme Business",
    subheadline: "We deliver exceptional service with a personal touch.",
    ctaText: "Get Started",
    ctaSecondaryText: "Learn More",
    image: "/images/hero.jpg",
  },
  about: {
    badge: "About Us",
    title: "Who We Are",
    body: "We are a passionate team dedicated to delivering the best experience to our customers. With years of expertise and a customer-first approach, we stand apart.",
    stats: [
      { value: "500+", label: "Happy Clients" },
      { value: "10+", label: "Years Experience" },
      { value: "99%", label: "Satisfaction Rate" },
      { value: "24/7", label: "Support" },
    ],
    image: "/images/about.jpg",
  },
  services: [
    {
      name: "Service One",
      description: "A comprehensive solution tailored to your needs.",
      icon: "⭐",
      image: "/images/service-1.jpg",
    },
    {
      name: "Service Two",
      description: "Expert guidance every step of the way.",
      icon: "🎯",
      image: "/images/service-2.jpg",
    },
    {
      name: "Service Three",
      description: "Reliable, fast, and affordable.",
      icon: "🚀",
      image: "/images/service-3.jpg",
    },
    {
      name: "Service Four",
      description: "Premium quality at competitive prices.",
      icon: "💎",
      image: "/images/service-4.jpg",
    },
    {
      name: "Service Five",
      description: "Innovative approaches to your challenges.",
      icon: "🔥",
      image: "/images/service-5.jpg",
    },
    {
      name: "Service Six",
      description: "End-to-end support and maintenance.",
      icon: "🛡️",
      image: "/images/service-6.jpg",
    },
  ],
  testimonials: [
    {
      name: "Priya Sharma",
      text: "Outstanding service! They exceeded every expectation and delivered on time.",
      role: "Business Owner",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      text: "Professional, reliable, and truly dedicated to customer satisfaction.",
      role: "Marketing Director",
      rating: 5,
    },
    {
      name: "Anita Patel",
      text: "The best decision we made was partnering with this team. Highly recommended!",
      role: "Entrepreneur",
      rating: 5,
    },
  ],
  contact: {
    title: "Let's Talk",
    subtitle: "Reach out to us and we'll get back to you within 24 hours.",
  },
  footer: {
    tagline: "Quality you can trust, service you'll love.",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  theme: {
    primary: "#2563eb",
    primaryDark: "#1d4ed8",
    secondary: "#f8fafc",
    accent: "#f59e0b",
    background: "#ffffff",
    surface: "#f1f5f9",
    textPrimary: "#0f172a",
    textSecondary: "#64748b",
    headingFont: "Space Grotesk",
    bodyFont: "Inter",
  },
};
