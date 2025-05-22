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
  },
]

export const womenProducts: Product[] = [
  {
    id: "womens-suit-1",
    name: "Tailored Power Suit",
    description:
      "Impeccably tailored power suit in charcoal gray. Features a fitted jacket with subtle shoulder padding and straight-leg trousers.",
    price: 2600,
    images: [
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Charcoal"],
    featured: true,
  },
  {
    id: "womens-suit-2",
    name: "Cream Linen Blend Suit",
    description:
      "Elegant cream linen blend suit perfect for warm weather. Features a relaxed fit jacket and wide-leg trousers.",
    price: 2500,
    images: [
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Cream"],
    featured: true,
  },
  {
    id: "womens-blazer-1",
    name: "Structured Wool Blazer",
    description: "Structured wool blazer in deep emerald. Features a single-button closure and subtle peplum detail.",
    price: 1400,
    images: [
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Emerald"],
    featured: false,
  },
  {
    id: "womens-dress-1",
    name: "Silk Midi Dress",
    description:
      "Luxurious silk midi dress in a rich burgundy tone. Features a cowl neck and bias cut for an elegant drape.",
    price: 1700,
    images: [
      "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Burgundy"],
    featured: true,
  },
  {
    id: "womens-blouse-1",
    name: "Silk Bow Blouse",
    description: "Elegant silk blouse with a feminine bow detail at the neck. Perfect for office or evening wear.",
    price: 800,
    images: [
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Ivory", "Black"],
    featured: false,
  },
  {
    id: "womens-skirt-1",
    name: "Wool Pencil Skirt",
    description: "Classic wool pencil skirt with a high waist and back vent for ease of movement.",
    price: 600,
    images: [
      "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "women",
    sizes: ["32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colors: ["Black", "Navy"],
    featured: false,
  },
  {
    id: "womens-shoes-1",
    name: "Leather Pointed Toe Heels",
    description: "Elegant pointed toe heels crafted from premium leather with a comfortable 3-inch heel height.",
    price: 700,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop",
    ],
    category: "women",
    sizes: ["3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8"],
    colors: ["Black", "Nude"],
    featured: true,
  },
  {
    id: "womens-shoes-2",
    name: "Suede Ankle Boots",
    description: "Luxurious suede ankle boots with a side zipper and stacked heel. Perfect for day to evening wear.",
    price: 850,
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?q=80&w=1000&auto=format&fit=crop",
    ],
    category: "women",
    sizes: ["3", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8"],
    colors: ["Black", "Brown", "Burgundy"],
    featured: false,
  },
]

export function getProductById(id: string): Product | undefined {
  return [...menProducts, ...womenProducts].find((product) => product.id === id)
}
