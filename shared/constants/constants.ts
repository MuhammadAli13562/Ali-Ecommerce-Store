export const TopLinks = [
  {
    category: "All",
    reference: "/categories",
  },
  {
    category: "Men",
    reference: "/categories/men/all",
  },
  {
    category: "Women",
    reference: "/categories/women/all",
  },

  {
    category: "Kids",
    reference: "/categories/kids/all",
  },
];

export const BottomLinks = [
  {
    title: "Home",
    ref: "/",
  },
  {
    title: "About",
    ref: "/about",
  },
  {
    title: "Terms & Conditions",
    ref: "/termsandconditions",
  },
  {
    title: "Shipping & Return Policy",
    ref: "/shippingandreturnPolicy",
  },
  {
    title: "Privacy Policy",
    ref: "/privacypolicy",
  },
  {
    title: "FAQ",
    ref: "/faq",
  },
];

export const credits = ["NextJS , Vercel , Sanity , Stripe"];

import one from "@/public/Carousel/one.jpg";
import two from "@/public/Carousel/two.jpg";
import three from "@/public/Carousel/three.jpg";
import four from "@/public/Carousel/four.jpg";

export const CarouselImages = [one, two, three, four];

import teeshirt from "@/public/Collage/teeman.jpg";
import jeans from "@/public/Collage/jeans.jpg";

export const TeeShirtCollage = {
  image: teeshirt,
  content: "Go out for some casual T-shirts bussiness",
  href: "/categories/men/shirts",
};

export const JeansCollage = {
  image: jeans,
  content: "Wear Jeans to save the planet next sunday at 6th avenue",
  href: "/categories/men/pants",
};
