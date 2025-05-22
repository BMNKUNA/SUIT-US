export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export const menProducts: Product[] = [
  {
    id: "mens-suit-2-khaki",
    name: "Khaki Beige Tweed Three Piece Suit",
    description:
      "Elegant khaki beige tweed suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-khaki-beige-tweed-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Khaki Beige"],
    featured: true,
    seoTitle: "Khaki Beige Tweed Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Khaki Beige Tweed Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["khaki suit", "beige suit", "tweed suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-2-grey",
    name: "Grey Tweed Three Piece Suit",
    description:
      "Elegant grey tweed suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-grey-tweed-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Grey"],
    featured: true,
    seoTitle: "Grey Tweed Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Grey Tweed Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["grey suit", "tweed suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-2-royal-blue",
    name: "Royal Blue Tweed Three Piece Suit",
    description:
      "Elegant royal blue tweed suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-royal-blue-tweed-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Royal Blue"],
    featured: true,
    seoTitle: "Royal Blue Tweed Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Royal Blue Tweed Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["royal blue suit", "tweed suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-2-green",
    name: "Green Tweed Three Piece Suit",
    description:
      "Elegant green tweed suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-green-tweed-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Green"],
    featured: true,
    seoTitle: "Green Tweed Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Green Tweed Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["green suit", "tweed suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-1-black",
    name: "Black Tweed Three Piece Suit",
    description:
      "A timeless three piece black tweed suit crafted from premium feel fabric. Features a modern slim fit with notch lapels and a one-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-black-tweed-3-piece-suit.jpeg",
      "/mens/mens-suits/mens-black-tweed-3-piece-suit-fabric.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Black"],
    featured: true,
    seoTitle: "Black Tweed Three Piece Suit - SUIT US",
    seoDescription: "Shop the timeless Black Tweed Three Piece Suit for men at SUIT US. Premium feel fabric, modern slim fit.",
    seoKeywords: ["black suit", "tweed suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-2-chocolate",
    name: "Chocolate Brown Wool Three Piece Suit",
    description:
      "Elegant chocolate brown wool suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-chocolate-brown-premium-wool-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Chocolate Brown"],
    featured: true,
    seoTitle: "Chocolate Brown Wool Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Chocolate Brown Wool Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["chocolate brown suit", "wool suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-2-burgundy",
    name: "Burgundy Maroon Wool Three Piece Suit",
    description:
      "Elegant burgundy maroon wool suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-burgandy-maroon-premium-wool-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Burgundy Maroon"],
    featured: true,
    seoTitle: "Burgundy Maroon Wool Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Burgundy Maroon Wool Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["burgundy suit", "maroon suit", "wool suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-2-mustard",
    name: "Mustard Golden Wool Three Piece Suit",
    description:
      "Elegant mustard golden wool suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-mustard-golden-wool-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Mustard Golden"],
    featured: true,
    seoTitle: "Mustard Golden Wool Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Mustard Golden Wool Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["mustard suit", "golden suit", "wool suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-2-beige",
    name: "Beige Premium Wool Three Piece Suit",
    description:
      "Elegant beige wool suit made from super 150s wool. Features a tailored fit with peak lapels and a two-button closure.",
    price: 2900,
    images: [
      "/mens/mens-suits/mens-beige-premium-wool-3-piece-suit.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Beige"],
    featured: true,
    seoTitle: "Beige Premium Wool Three Piece Suit - SUIT US",
    seoDescription: "Shop the elegant Beige Premium Wool Three Piece Suit for men at SUIT US. Tailored fit, super 150s wool.",
    seoKeywords: ["beige suit", "wool suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-1-navy",
    name: "Classic Navy Blue Three Piece Suit",
    description:
      "A timeless three piece navy suit crafted from premium feel fabric. Features a modern slim fit with notch lapels and a one-button closure.",
    price: 2800,
    images: [
      "/mens/mens-suits/mens-suit-1-navy-blue.jpeg",
      "/mens/mens-suits/mens-suit-1-nav-blue-fabric.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Navy Blue"],
    featured: true,
    seoTitle: "Classic Navy Blue Three Piece Suit - SUIT US",
    seoDescription: "Shop the Classic Navy Blue Three Piece Suit for men at SUIT US. Timeless design, premium feel fabric.",
    seoKeywords: ["navy blue suit", "classic suit", "three piece suit", "mens suits", "SUIT US"],
  },
  {
    id: "mens-suit-1-sage",
    name: "Classic Sage Green Three Piece Suit",
    description:
      "A timeless three piece sage green suit crafted from premium feel fabric. Features a modern slim fit with notch lapels and a one-button closure.",
    price: 2800,
    images: [
      "/mens/mens-suits/mens-suit-1-sage-green.jpeg",
      "/mens/mens-suits/mens-suit-1-sage-fabric.jpeg",
    ],
    category: "men",
    sizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Sage Green"],
    featured: true,
    seoTitle: "Classic Sage Green Three Piece Suit - SUIT US",
    seoDescription: "Shop the Classic Sage Green Three Piece Suit for men at SUIT US. Timeless design, premium feel fabric.",
    seoKeywords: ["sage green suit", "classic suit", "three piece suit", "mens suits", "SUIT US"],
  },
]

export const womenProducts: Product[] = [
  {
    id: "womens-heels-1",
    name: "Black Floral Diamond Matric Farewell Stiletto Heels",
    description: "Elegant black stiletto heels with floral diamond accents, perfect for matric farewell and special occasions.",
    price: 750,
    images: [
      "/womens/heels/black-floral-diamond-matric-farewell-stiletto-heels.jpeg",
      "/womens/heels/black-floral-diamond-matric-farewell-stiletto-heels-2.jpeg",
    ],
    category: "women",
    sizes: ["3", "4", "5", "6", "7", "8"],
    colors: ["Black"],
    featured: true,
    seoTitle: "Black Floral Diamond Stiletto Heels - SUIT US",
    seoDescription: "Elegant black stiletto heels with floral diamond accents for matric farewell and special occasions.",
    seoKeywords: ["black heels", "stiletto heels", "matric farewell shoes", "diamond heels", "womens heels", "SUIT US"],
  },
  {
    id: "womens-heels-2",
    name: "Womens Rose Gold Black Matric Dance Stiletto Heels",
    description: "Stylish rose gold and black stiletto heels, perfect for matric dances and special events.",
    price: 750,
    images: [
      "/womens/heels/womens-rose-gold-black-matric-dance-stiletto-heels.jpeg",
    ],
    category: "women",
    sizes: ["3", "4", "5", "6", "7", "8"],
    colors: ["Rose Gold", "Black"],
    featured: true,
    seoTitle: "Rose Gold Black Stiletto Heels - SUIT US",
    seoDescription: "Shop stylish rose gold and black stiletto heels for matric dances and special events at SUIT US.",
    seoKeywords: ["rose gold heels", "black heels", "matric dance shoes", "stiletto heels", "womens heels", "SUIT US"],
  },
  {
    id: "womens-bag-1",
    name: "Matric Dance Evening Crystal Clutch Bag Rhinestone",
    description: "Sparkling crystal clutch bag with rhinestone details, perfect for matric dances and evening events.",
    price: 850,
    images: [
      "/womens/hand-bags/matric-dance-womens-evening-crystal-clutch-bag-rhinestone.jpg",
      "/womens/hand-bags/matric-dance-womens-evening-crystal-clutch-bag-rhinestone-2.jpg",
      "/womens/hand-bags/matric-dance-womens-evening-crystal-clutch-bag-rhinestone-3.jpg"
    ],
    category: "women",
    sizes: ["One Size"],
    colors: ["Crystal"],
    featured: true,
    seoTitle: "Matric Dance Evening Crystal Clutch Bag - SUIT US",
    seoDescription: "Shop the sparkling crystal clutch bag with rhinestones for matric dances and evening events at SUIT US.",
    seoKeywords: ["crystal clutch bag", "rhinestone bag", "evening bag", "matric dance bag", "womens bags", "SUIT US"],
  },
  {
    id: "womens-suit-1-camel",
    name: "Camel Two Piece Wide Leg Suit Blazer Set",
    description: "Stylish camel two piece wide leg suit featuring a blazer and trousers.",
    price: 2500,
    images: [
      "/womens/suits/womens-2-piece-wide-leg-suit-blazer-set-black-camel.jpeg",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Camel"],
    featured: true,
    seoTitle: "Camel Two Piece Wide Leg Suit - SUIT US",
    seoDescription: "Shop the stylish camel two piece wide leg suit blazer set for women at SUIT US.",
    seoKeywords: ["camel suit", "two piece suit", "wide leg trousers", "blazer set", "womens suits", "SUIT US"],
  },
  {
    id: "womens-suit-1-black",
    name: "Black Two Piece Wide Leg Suit Blazer Set",
    description: "Stylish black two piece wide leg suit featuring a blazer and trousers.",
    price: 2500,
    images: [
      "/womens/suits/womens-2-piece-wide-leg-suit-blazer-set-black-camel.jpeg", // This image needs correction
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Black"],
    featured: true,
    seoTitle: "Black Two Piece Wide Leg Suit - SUIT US",
    seoDescription: "Shop the stylish black two piece wide leg suit blazer set for women at SUIT US.",
    seoKeywords: ["black suit", "two piece suit", "wide leg trousers", "blazer set", "womens suits", "SUIT US"],
  },
  {
    id: "womens-suit-1-red",
    name: "Red Two Piece Wide Leg Suit Blazer Set",
    description: "Stylish red two piece wide leg suit featuring a blazer and trousers.",
    price: 2500,
    images: [
      "/womens/suits/womens-2-piece-wide-leg-suit-blazer-set-red-black.jpeg",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Red"],
    featured: true,
    seoTitle: "Red Two Piece Wide Leg Suit - SUIT US",
    seoDescription: "Shop the stylish red two piece wide leg suit blazer set for women at SUIT US.",
    seoKeywords: ["red suit", "two piece suit", "wide leg trousers", "blazer set", "womens suits", "SUIT US"],
  },
  {
    id: "womens-suit-2-camel",
    name: "Camel Two Piece Wide Leg Suit Blazer Set",
    description: "Stylish camel two piece wide leg suit featuring a blazer and trousers.",
    price: 2500,
    images: [
      "/womens/suits/womens-2-piece-wide-leg-suit-blazer-set-black-camel.jpeg", // Assuming this file contains the camel suit image
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Camel"],
    featured: true,
    seoTitle: "Camel Two Piece Wide Leg Suit - SUIT US",
    seoDescription: "Shop the stylish camel two piece wide leg suit blazer set for women at SUIT US.",
    seoKeywords: ["camel suit", "two piece suit", "wide leg trousers", "blazer set", "womens suits", "SUIT US"],
  },
  {
    id: "womens-suit-2-black",
    name: "Black Two Piece Wide Leg Suit Blazer Set",
    description: "Stylish black two piece wide leg suit featuring a blazer and trousers.",
    price: 2500,
    images: [
      "/womens/suits/womens-2-piece-wide-leg-suit-blazer-set-black-camel.jpeg", // Assuming this file also contains the black suit image
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Black"],
    featured: true,
    seoTitle: "Black Two Piece Wide Leg Suit - SUIT US",
    seoDescription: "Shop the stylish black two piece wide leg suit blazer set for women at SUIT US.",
    seoKeywords: ["black suit", "two piece suit", "wide leg trousers", "blazer set", "womens suits", "SUIT US"],
  },
  {
    id: "womens-suit-2-red",
    name: "Red Two Piece Wide Leg Suit Blazer Set",
    description: "Stylish red two piece wide leg suit featuring a blazer and trousers.",
    price: 2500,
    images: [
      "/womens/suits/womens-2-piece-wide-leg-suit-blazer-set-red-black.jpeg",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Red"],
    featured: true,
    seoTitle: "Red Two Piece Wide Leg Suit - SUIT US",
    seoDescription: "Shop the stylish red two piece wide leg suit blazer set for women at SUIT US.",
    seoKeywords: ["red suit", "two piece suit", "wide leg trousers", "blazer set", "womens suits", "SUIT US"],
  },
]

export function getProductById(id: string): Product | undefined {
  return [...menProducts, ...womenProducts].find((product) => product.id === id)
}
