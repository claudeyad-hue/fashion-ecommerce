export const products = [
  // ==================== EARRINGS (6 Products) ====================
  {
    id: 1,
    slug: 'celestial-drop-earrings',
    name: 'Celestial Nova Drop Earrings',
    category: 'earrings',
    tagline: '18k gold vermeil with brilliant pavé crystals',
    description: 'Inspired by midnight constellations, these hand-finished drop earrings feature micro-faceted cubic zirconia suspended from tiered starburst links. Featherlight construction ensures all-day comfort without pulling.',
    details: [
      'Material: 18k Gold Vermeil over recycled sterling silver',
      'Stones: Conflict-free 5A grade Cubic Zirconia',
      'Length: 48mm drop | Weight: 3.2g per earring',
      'Hypoallergenic titanium posts with secure butterfly backs',
      'Includes bespoke velvet travel pouch and care polishing cloth'
    ],
    price: 1890,
    originalPrice: 2490,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Warm Gold', hex: '#D4AF37' },
      { name: 'Pure Silver', hex: '#E5E4E2' },
      { name: 'Champagne Rose', hex: '#ECC5C0' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 148,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 2,
    slug: 'baroque-pearl-hoops',
    name: 'Baroque Pearl Sculptural Hoops',
    category: 'earrings',
    tagline: 'Organic natural pearls on textured molten gold',
    description: 'An artful dialogue between raw nature and modern sculpture. Each pair features genuine, hand-selected freshwater baroque pearls suspended beneath a textured, molten-effect hoop.',
    details: [
      'Material: 14k Heavy Gold Plated recycled brass',
      'Organic genuine freshwater cultured baroque pearls',
      'Detachable pearls allow hoop to be worn independently',
      'Hoop diameter: 22mm | Total drop: 42mm',
      'Water and sweat resistant e-coating'
    ],
    price: 2150,
    originalPrice: 2850,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Lustre Pearl & Gold', hex: '#F0E6D2' },
      { name: 'Lustre Pearl & Silver', hex: '#D8D8D8' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 92,
    stockStatus: 'in-stock',
    badge: 'Trending',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 3,
    slug: 'minimalist-chunky-huggie-hoops',
    name: 'Atelier Chunky Huggie Hoops',
    category: 'earrings',
    tagline: 'Substantial hollowed silhouette for effortless daily stacking',
    description: 'The definitive daily hoop. Expertly engineered hollow chambers yield a substantial luxury aesthetic with virtually weightless wearability. Finished with a satisfying click clasp.',
    details: [
      'Outer diameter: 18mm | Thickness: 6mm',
      'Featherweight hollow core technology (under 2g each)',
      '18k Triple-micron yellow gold plating',
      'Nickel-free, lead-free and cadmium-free certification'
    ],
    price: 1250,
    originalPrice: 1690,
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Classic Gold', hex: '#E6C280' },
      { name: 'Mirror Silver', hex: '#D1D5DB' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 215,
    stockStatus: 'in-stock',
    badge: 'Essential',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 4,
    slug: 'prism-waterfall-chandeliers',
    name: 'Prism Waterfall Chandeliers',
    category: 'earrings',
    tagline: 'High-octane glamour with cascading crystal fringe',
    description: 'Cascading liquid-light crystal fringe engineered to capture every flicker of candlelight or camera flash. An editorial showstopper destined for gala evenings and celebratory nights.',
    details: [
      'Baguette & round-cut Austrian crystal cascades',
      'Length: 85mm dramatic statement drop',
      'Double-cushioned comfort back pads included',
      'Tarnish-resistant rhodium and gold dipping'
    ],
    price: 2490,
    originalPrice: 3200,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Diamond Sparkle', hex: '#E0F2FE' },
      { name: 'Smoky Topaz', hex: '#78350F' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 64,
    stockStatus: 'low-stock',
    badge: 'Limited Edition',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 5,
    slug: 'asymmetrical-flora-studs',
    name: 'Asymmetrical Botanical Ear Climbers',
    category: 'earrings',
    tagline: 'Delicate leaf climbers that contour the ear cartilage',
    description: 'Designed to trace the natural curvature of your ear lobe, these whimsical vine ear climbers combine freshwater seed pearls with hand-engraved golden leaves.',
    details: [
      'Curved ear crawl silhouette with gentle tension grip',
      'Freshwater micro-pearls and marquise cubic zirconia',
      'Can be worn as climbers or traditional vertical drops'
    ],
    price: 1450,
    originalPrice: 1950,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Vintage Gold', hex: '#D4AF37' },
      { name: 'Rose Petal', hex: '#FBCFE8' }
    ],
    availableSizes: [],
    rating: 4.6,
    reviewCount: 51,
    stockStatus: 'in-stock',
    badge: 'New',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 6,
    slug: 'bold-hammered-disc-earrings',
    name: 'Solstice Hammered Disc Drops',
    category: 'earrings',
    tagline: 'Modernist artisan textured discs catching light at every angle',
    description: 'Hand-hammered dual discs evoke ancient Mediterranean treasure, rendered in modern oversized proportions for effortless daytime confidence.',
    details: [
      'Matte brushed artisan surface texture',
      'Drop length: 52mm',
      'Ultra-light 4.1g pair weight'
    ],
    price: 1390,
    originalPrice: 1790,
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Hammered Gold', hex: '#C29B38' },
      { name: 'Brushed Silver', hex: '#CBD5E1' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 78,
    stockStatus: 'in-stock',
    badge: 'Artisan',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },

  // ==================== HANDBAGS (5 Products) ====================
  {
    id: 7,
    slug: 'monceau-structured-leather-tote',
    name: 'Monceau Structured Flap Tote',
    category: 'handbags',
    tagline: 'Italian vegetable-tanned vegan leather with bespoke brushed brass lock',
    description: 'Architectural lines meet everyday functional luxury. The Monceau tote accommodates up to a 14-inch laptop alongside daily essentials, secured with our signature turn-lock mechanism.',
    details: [
      'Dimensions: 36cm (W) x 28cm (H) x 14cm (D)',
      'Fits 13" & 14" MacBook Pro models comfortably',
      'Interior zip compartment and dual suede-lined slip pockets',
      'Reinforced base with four protective brass feet',
      'Removable and adjustable shoulder strap (48cm–58cm drop)'
    ],
    price: 4890,
    originalPrice: 6500,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Espresso Black', hex: '#1C1917' },
      { name: 'Cognac Caramel', hex: '#9A3412' },
      { name: 'Warm Taupe', hex: '#A8A29E' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 184,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 8,
    slug: 'marcel-quilted-baguette-bag',
    name: 'Marcel Quilted Chain Baguette',
    category: 'handbags',
    tagline: 'Diagonal chevron quilting with convertible braided gold chain',
    description: 'An ode to 90s French cinema elegance. Crafted from buttery-soft pebbled microfiber leather, the Marcel transitions seamlessly from day brunch into evening dinners.',
    details: [
      'Dimensions: 26cm x 15cm x 7cm',
      'Convertible chain: Wear doubled on shoulder or long as crossbody',
      'Custom gold-dipped interlocking push-lock closure',
      'Card slot panel with RFID blocking layer'
    ],
    price: 3690,
    originalPrice: 4800,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Midnight Obsidian', hex: '#0A0A0A' },
      { name: 'Crème Brulee', hex: '#F5EBE1' },
      { name: 'Bordeaux Burgundy', hex: '#8B2252' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 129,
    stockStatus: 'in-stock',
    badge: 'Trending',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 9,
    slug: 'verona-trapeze-satchel',
    name: 'Verona Trapeze Top-Handle Satchel',
    category: 'handbags',
    tagline: 'Sculpted wings with minimal equestrian hardware',
    description: 'Precision stitched and edged with contrast Italian glazing, the Verona satchel commands attention with its flared architectural silhouette and comfortable rolled handle.',
    details: [
      'Dimensions: 30cm x 22cm x 12cm',
      'Heavy magnetic center flap closure',
      'Structured side gussets maintain geometry when full'
    ],
    price: 4250,
    originalPrice: 5400,
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Chestnut Brown', hex: '#713F12' },
      { name: 'Onyx Black', hex: '#18181B' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 68,
    stockStatus: 'in-stock',
    badge: 'Runway',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },
  {
    id: 10,
    slug: 'solene-crescent-hobo-bag',
    name: 'Solene Crescent Leather Hobo',
    category: 'handbags',
    tagline: 'Relaxed slouch silhouette in glove-soft nappa leather',
    description: 'Effortless cool exemplified. The Solene crescent hugs snugly under the arm, crafted from ultra-pliable vegan nappa that drapes organically with every stride.',
    details: [
      'Dimensions: 34cm x 24cm x 8cm',
      'Internal zippered valuables pouch with key clip lanyard',
      'Ergonomic contoured shoulder pad for zero slippage'
    ],
    price: 3890,
    originalPrice: 4990,
    images: [
      'https://images.unsplash.com/photo-1614179689702-355944cd0918?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Olive Forest', hex: '#365314' },
      { name: 'Butter Cream', hex: '#FEF3C7' },
      { name: 'Jet Black', hex: '#000000' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 95,
    stockStatus: 'in-stock',
    badge: 'Popular',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 11,
    slug: 'capri-woven-market-tote',
    name: 'Capri Raffia & Saddle Leather Tote',
    category: 'handbags',
    tagline: 'Artisanal hand-woven natural palm fibers with cognac leather trims',
    description: 'Bring the Amalfi spirit anywhere. Woven by generational artisans and reinforced with full-grain leather straps, this tote transitions effortlessly from city workdays to coastal getaways.',
    details: [
      'Dimensions: 40cm x 30cm x 15cm',
      'Organic natural palm raffia with water-resistant interior lining',
      'Dual handle lengths for hand-carry and shoulder-carry'
    ],
    price: 3200,
    originalPrice: 4200,
    images: [
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Natural Sand & Tan', hex: '#D2B48C' },
      { name: 'Natural Sand & Black', hex: '#262626' }
    ],
    availableSizes: [],
    rating: 4.6,
    reviewCount: 81,
    stockStatus: 'low-stock',
    badge: 'Seasonal',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },

  // ==================== SLING BAGS (5 Products) ====================
  {
    id: 12,
    slug: 'kyoto-minimalist-crossbody-sling',
    name: 'Kyoto Structured Crossbody Sling',
    category: 'sling-bags',
    tagline: 'Compact curved profile with magnetic quick-draw phone slot',
    description: 'Designed for urban navigation. Features a dedicated quick-access exterior smartphone pocket, water-sealed zippers, and a wide webbed guitar strap for weightless comfort.',
    details: [
      'Dimensions: 22cm x 16cm x 7cm',
      'Exterior magnetic phone slip pocket (fits iPhone Pro Max)',
      'Custom brushed nickel hardware with 360-degree swivel clips',
      'Removable webbing strap adjustable from 75cm to 130cm'
    ],
    price: 2490,
    originalPrice: 3200,
    images: [
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Carbon Black', hex: '#171717' },
      { name: 'Caramel Saddle', hex: '#B45309' },
      { name: 'Matcha Green', hex: '#4D7C0F' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 162,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 13,
    slug: 'saddle-equestrian-sling',
    name: 'Palermo Equestrian Saddle Sling',
    category: 'sling-bags',
    tagline: 'Classic curved equestrian silhouette with polished horseshoe buckle',
    description: 'Heritage inspiration meets modern proportions. Featuring a curved contour that rests naturally against the hip and an internal accordion organizer for immaculate order.',
    details: [
      'Dimensions: 21cm x 17cm x 6.5cm',
      'Three dedicated interior card slots and zippered divider',
      'Supple pebble-grain vegan leather with waxed edge paint'
    ],
    price: 2890,
    originalPrice: 3800,
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Vintage Oak', hex: '#78350F' },
      { name: 'Raven Black', hex: '#0A0A0A' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 104,
    stockStatus: 'in-stock',
    badge: 'Heritage',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: false,
  },
  {
    id: 14,
    slug: 'lumiere-belt-and-sling-pouch',
    name: 'Lumiere 2-in-1 Belt & Sling Bag',
    category: 'sling-bags',
    tagline: 'Transitions from high-waist belt bag to diagonal chest sling',
    description: 'Utility elevated to runway chic. Wear it cinching an oversized blazer as a statement belt bag, or across the chest for streetwear styling.',
    details: [
      'Includes 2 interchangeable straps: slim leather belt & chunky chain',
      'Fits sunglasses, keys, lip gloss, and large smartphones',
      'Dimensions: 19cm x 12cm x 5cm'
    ],
    price: 2190,
    originalPrice: 2890,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Burgundy Wine', hex: '#8B2252' },
      { name: 'Matte Black', hex: '#1F2937' },
      { name: 'Ivory Bone', hex: '#F5F5F4' }
    ],
    availableSizes: [],
    rating: 4.6,
    reviewCount: 88,
    stockStatus: 'in-stock',
    badge: 'Versatile',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 15,
    slug: 'hyper-nylon-tactical-sling',
    name: 'Aero Stormproof Tech Sling',
    category: 'sling-bags',
    tagline: 'Waterproof ballistic nylon with magnetic Fidlock buckle',
    description: 'Engineered for all-weather commuters and festival-goers. Built from tear-resistant Cordura ballistic nylon with sealed YKK Aquaguard zippers and instant-release German hardware.',
    details: [
      'Material: 840D Recycled Ballistic Nylon with TPU laminate',
      'German Fidlock magnetic V-buckle for 1-second unfastening',
      'Key tether clip and hidden passport security pocket on back'
    ],
    price: 1990,
    originalPrice: 2600,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Stealth Black', hex: '#111827' },
      { name: 'Battleship Slate', hex: '#4B5563' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 145,
    stockStatus: 'in-stock',
    badge: 'Techwear',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 16,
    slug: 'charlotte-quilted-micro-sling',
    name: 'Charlotte Micro Quilted Camera Sling',
    category: 'sling-bags',
    tagline: 'Petite boxy camera silhouette with gold hardware and tassel pull',
    description: 'A charming boxy silhouette with generous depth that surprisingly packs all your evening essentials. Features a braided zip pull and contrast burgundy grosgrain interior.',
    details: [
      'Dimensions: 18cm x 13cm x 7cm',
      'Reinforced box frame protects fragile cosmetics and sunglasses',
      'Pebbled vegan leather that resists scratches and rain'
    ],
    price: 2350,
    originalPrice: 2990,
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Powder Blush', hex: '#FBCFE8' },
      { name: 'Classic Black', hex: '#18181B' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 73,
    stockStatus: 'low-stock',
    badge: 'Petite',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },

  // ==================== JEANS (5 Products) ====================
  {
    id: 17,
    slug: 'soho-high-rise-straight-leg-jeans',
    name: 'Soho High-Rise Straight Ankle Jeans',
    category: 'jeans',
    tagline: '12.5oz authentic Turkish organic cotton denim with 1% sculpting stretch',
    description: 'The denim Holy Grail. Designed with a leg-lengthening 11.5" rise that hugs the natural waist, followed by an easy straight cut down to a clean finished ankle hem. Authentic vintage wash with natural fading.',
    details: [
      'Fabric: 99% GOTS Certified Organic Cotton, 1% Comfort Elastane',
      'Rise: 11.5" high waist | Inseam: 28" (regular ankle crop)',
      'Classic 5-pocket construction with custom branded copper rivets',
      'Genuine leather back patch and matte nickel shank button',
      'Machine wash cold inside out, hang dry to preserve tint'
    ],
    price: 3290,
    originalPrice: 4290,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1475178626620-a4d074967571?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Vintage Indigo Wash', hex: '#3B82F6' },
      { name: 'Faded Sunbleached Blue', hex: '#93C5FD' },
      { name: 'Washed Charcoal Black', hex: '#374151' }
    ],
    availableSizes: ['24', '26', '28', '30', '32', '34'],
    rating: 4.9,
    reviewCount: 312,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 18,
    slug: 'tribeca-90s-wide-leg-palazzo-jeans',
    name: 'Tribeca 90s Wide-Leg Palazzo Jeans',
    category: 'jeans',
    tagline: 'Dramatic pooling silhouette with effortless drape in rigid raw denim',
    description: 'Channeling iconic 1990s street styling. Cut generously through the thigh into a floor-grazing flared leg that stacks perfectly over chunky loafers, platforms, or sneakers.',
    details: [
      'Fabric: 100% Ring-spun Heavyweight Cotton (13oz)',
      'Rise: 11" mid-high rise | Inseam: 32" full pool length',
      'Soft enzyme-wash treatment gives zero stiff break-in period',
      'Deep front slash pockets and reinforced bar-tack stitching'
    ],
    price: 3590,
    originalPrice: 4690,
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Pure Deep Indigo', hex: '#1E3A8A' },
      { name: 'Ecru Natural Cotton', hex: '#F3E8D6' },
      { name: 'Washed Ash Grey', hex: '#6B7280' }
    ],
    availableSizes: ['24', '26', '28', '30', '32'],
    rating: 4.8,
    reviewCount: 184,
    stockStatus: 'in-stock',
    badge: 'Trending',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 19,
    slug: 'chelsea-sculpt-super-skinny-jeans',
    name: 'Chelsea Instant Sculpt Skinny Jeans',
    category: 'jeans',
    tagline: '360° hold & lift fiber technology that never bags at the knees',
    description: 'Engineered with bi-stretch dualFX fibers, these skinny jeans hug every curve smoothly like a second skin while retaining 100% of their recovery all through long commutes.',
    details: [
      'Fabric: 73% Cotton, 23% Polyester, 4% Lycra dualFX',
      'Contoured waistband prevents gaping when sitting',
      'Inseam: 29" full ankle length'
    ],
    price: 2990,
    originalPrice: 3890,
    images: [
      'https://images.unsplash.com/photo-1475178626620-a4d074967571?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Pitch Black Stay-Color', hex: '#111827' },
      { name: 'Dark Ink Rinse', hex: '#1E293B' }
    ],
    availableSizes: ['24', '26', '28', '30', '32', '34'],
    rating: 4.7,
    reviewCount: 220,
    stockStatus: 'in-stock',
    badge: 'Sculpt Fit',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 20,
    slug: 'brooklyn-distressed-boyfriend-jeans',
    name: 'Brooklyn Slouchy Boyfriend Jeans',
    category: 'jeans',
    tagline: 'Relaxed slouch with hand-abraded knee distressing',
    description: 'The effortlessly stolen-from-the-boys look perfected for women. Sits comfortably below the natural waist with an easy tapered leg and rolled cuff option.',
    details: [
      'Fabric: 100% Sustainably Sourced Soft Cotton',
      'Hand-finished knee shreds and subtle pocket whisker abrasions',
      'Rise: 9.5" mid-rise slouch'
    ],
    price: 3450,
    originalPrice: 4400,
    images: [
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Vintage Sky Wash', hex: '#60A5FA' },
      { name: 'Distressed Medium Blue', hex: '#3B82F6' }
    ],
    availableSizes: ['26', '28', '30', '32', '34'],
    rating: 4.6,
    reviewCount: 97,
    stockStatus: 'low-stock',
    badge: 'Relaxed',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },
  {
    id: 21,
    slug: 'tactical-cargo-wide-denim',
    name: 'Nomad Multi-Pocket Cargo Denim',
    category: 'jeans',
    tagline: 'Utilitarian bellow pockets on structured carpenter wide leg',
    description: 'Streetwear meets luxury utility. Featuring 6 functional bellow cargo pockets, hammer loop styling, and double-knee panels rendered in crisp washed denim.',
    details: [
      'Relaxed straight-leg cargo fit with leg cinch toggles',
      'Total 6 reinforced pockets with tonal snap flaps',
      'Heavyweight 12.8oz cotton drill denim'
    ],
    price: 3890,
    originalPrice: 4990,
    images: [
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Olive Drab Denim', hex: '#3F4F38' },
      { name: 'Raw Black Cargo', hex: '#1C1917' },
      { name: 'Khaki Stone Wash', hex: '#D6C7A1' }
    ],
    availableSizes: ['26', '28', '30', '32', '34'],
    rating: 4.8,
    reviewCount: 112,
    stockStatus: 'in-stock',
    badge: 'Streetwear',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },

  // ==================== KEYCHAINS (5 Products) ====================
  {
    id: 22,
    slug: 'atelier-leather-tassel-keyring',
    name: 'Atelier Leather Clochette & Tassel Keyring',
    category: 'keychains',
    tagline: 'Hand-dyed Italian calfskin with solid brass horseshoe ring',
    description: 'Elevate your everyday carry or clip onto your favorite handbag as a bespoke charm. Features layered leather fringe and an enclosed leather key bell clochette.',
    details: [
      'Full grain Italian calf leather with edge burnishing',
      'Solid forged brass hardware with screw-pin D-ring',
      'Total length: 14cm'
    ],
    price: 690,
    originalPrice: 990,
    images: [
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578898395127-01ba2060b4eb?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Chestnut Leather', hex: '#9A3412' },
      { name: 'Jet Noir', hex: '#18181B' },
      { name: 'Burgundy Wine', hex: '#8B2252' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 210,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 23,
    slug: 'constellation-charm-keychain',
    name: 'Astral Crystal Talisman Bag Charm',
    category: 'keychains',
    tagline: 'Heavy gold-plated celestial charms with radiant quartz crystals',
    description: 'A miniature gallery of good fortune. Features an engraved sunburst, lucky clover, and bezel-set crystal point that jingles softly with motion.',
    details: [
      '24k Gold micro-plated alloy with protective lacquer',
      'Dual attachment: Keyring and sturdy lobster carabiner clasp',
      'Gift-boxed in gold-foiled drawer box'
    ],
    price: 790,
    originalPrice: 1100,
    images: [
      'https://images.unsplash.com/photo-1578898395127-01ba2060b4eb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Polished Gold', hex: '#EAB308' },
      { name: 'Rhodium Silver', hex: '#9CA3AF' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 153,
    stockStatus: 'in-stock',
    badge: 'Gift Idea',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 24,
    slug: 'sculpted-monogram-initial-keychain',
    name: 'Bespoke Architectural Monogram Charm',
    category: 'keychains',
    tagline: 'Heavyweight brushed typography charm with twist-lock cable',
    description: 'Substantial, minimalist typography inspired by Bauhaus signage. Screws shut with a knurled brass aircraft cable for zero chance of loose keys.',
    details: [
      'Cast solid brass with brushed satin finish (Weight: 45g)',
      'Flexible stainless steel aircraft wire ring with threaded lock'
    ],
    price: 590,
    originalPrice: 850,
    images: [
      'https://images.unsplash.com/photo-1614625282018-56e60f96e86e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578898395127-01ba2060b4eb?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Warm Brass', hex: '#CA8A04' },
      { name: 'Matte Gunmetal', hex: '#374151' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 290,
    stockStatus: 'in-stock',
    badge: 'Personalized',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 25,
    slug: 'cloisonne-floral-enamel-keychain',
    name: 'Jardin Cloisonné Enamel Flower Charm',
    category: 'keychains',
    tagline: 'Vibrant hand-poured glass enamel with 18k gilded borders',
    description: 'Inspired by Japanese botanical prints. Intricate copper wire outlines are filled with glossy, gem-tone vitreous enamels and fired to a mirror finish.',
    details: [
      'Hard cloisonné enamel that won’t fade or scratch',
      'Heavy-duty spring gate carabiner clips onto bag rings with 1 hand'
    ],
    price: 650,
    originalPrice: 890,
    images: [
      'https://images.unsplash.com/photo-1631209121750-a9f656d1cae5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Peony Blossom', hex: '#F43F5E' },
      { name: 'Azure Hydrangea', hex: '#0284C7' },
      { name: 'Marigold Blossom', hex: '#F59E0B' }
    ],
    availableSizes: [],
    rating: 4.6,
    reviewCount: 88,
    stockStatus: 'in-stock',
    badge: 'Handmade',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },
  {
    id: 26,
    slug: 'bohemian-macrame-cotton-keychain',
    name: 'Artisan Macramé & Wooden Bead Wristlet',
    category: 'keychains',
    tagline: 'Soft organic braided cotton cord with comfortable wrist loop',
    description: 'Slip it over your wrist for hands-free errands. Hand-knotted from unbleached organic cotton with turned beechwood beads and an antique brass clip.',
    details: [
      'Hand-knotted 100% natural recycled cotton',
      'Comfortable 16cm wristlet loop prevents dropping keys'
    ],
    price: 450,
    originalPrice: 650,
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614625282018-56e60f96e86e?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Natural Ecru', hex: '#F5EBE1' },
      { name: 'Terracotta Clay', hex: '#C2410C' },
      { name: 'Sage Green', hex: '#65A30D' }
    ],
    availableSizes: [],
    rating: 4.5,
    reviewCount: 64,
    stockStatus: 'in-stock',
    badge: 'Eco',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },

  // ==================== FASHION ACCESSORIES (5 Products) ====================
  {
    id: 27,
    slug: 'verona-pure-mulberry-silk-scarf',
    name: 'Verona 100% Mulberry Silk Square Scarf',
    category: 'fashion-accessories',
    tagline: 'Hand-rolled edges with exclusive hand-painted botanical print',
    description: 'Crafted from luminous 16-momme pure mulberry silk twill. Draped around the neck, styled as a chic headscarf, or tied around a tote handle, it instantly transforms any minimalist outfit.',
    details: [
      'Size: 70cm x 70cm generous silk square',
      '100% Grade 6A Long Strand Mulberry Silk Twill (16 Momme)',
      'Traditional hand-rolled, hand-stitched borders',
      'Breathable, natural temperature-regulating silk fibers'
    ],
    price: 1990,
    originalPrice: 2800,
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Burgundy Botanical', hex: '#8B2252' },
      { name: 'Navy Celestial', hex: '#1E3A8A' },
      { name: 'Champagne Flora', hex: '#F7EEE3' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 172,
    stockStatus: 'in-stock',
    badge: 'Pure Silk',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 28,
    slug: 'sculpted-waist-leather-belt',
    name: 'Palais Sculptural Buckle Leather Belt',
    category: 'fashion-accessories',
    tagline: 'Matte gold organic molten buckle with smooth Italian bridle leather',
    description: 'The defining cinch. Designed with a custom molten-metal oval buckle, this 3cm belt elevates high-waisted jeans, tailored trousers, or cinches oversized blazers.',
    details: [
      'Width: 30mm | Fits natural waist & hips',
      '100% Full-grain vegetable tanned leather strap',
      'Solid cast zinc alloy buckle with satin gold electroplating'
    ],
    price: 1590,
    originalPrice: 2190,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Cognac Brown', hex: '#9A3412' },
      { name: 'Satin Noir', hex: '#18181B' }
    ],
    availableSizes: ['S (26-28)', 'M (30-32)', 'L (34-36)'],
    rating: 4.8,
    reviewCount: 138,
    stockStatus: 'in-stock',
    badge: 'Essential',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 29,
    slug: 'velvet-and-pearl-padded-headband',
    name: 'Royale Padded Velvet & Pearl Headband',
    category: 'fashion-accessories',
    tagline: 'Plush velvet crown hand-embellished with assorted pearl cabochons',
    description: 'Regal yet completely wearable. Padded with high-resilience memory foam that sits softly behind the ears with zero pressure points or headaches.',
    details: [
      'Memory cushion core wrapped in deep pile silk velvet',
      'Hand-sewn faux pearls and crystal facets',
      'Padded end tips protect sensitive skin behind ears'
    ],
    price: 990,
    originalPrice: 1450,
    images: [
      'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Deep Burgundy Velvet', hex: '#8B2252' },
      { name: 'Midnight Emerald', hex: '#064E3B' },
      { name: 'Onyx Black', hex: '#111827' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 94,
    stockStatus: 'in-stock',
    badge: 'Editorial',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 30,
    slug: 'trinity-layered-paperclip-chain',
    name: 'Trinity Multi-Strand Layered Necklace',
    category: 'fashion-accessories',
    tagline: 'Pre-styled trio of herringbone, paperclip, and coin pendant chains',
    description: 'Instant effortless neck curation. Engineered with a single tangle-resistant magnetic multi-clasp, this set gives the look of three perfectly spaced chains in one click.',
    details: [
      'Three chains: 38cm Herringbone, 44cm Paperclip, 52cm Coin Drop',
      '18k Heavy Gold PVD vacuum coating (water & perfume safe)',
      'Single smart clasp prevents frustrating chain knots'
    ],
    price: 1890,
    originalPrice: 2500,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: '18k Rich Gold', hex: '#D4AF37' },
      { name: 'White Rhodium Silver', hex: '#D1D5DB' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 224,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 31,
    slug: 'silk-velvet-cloud-scrunchie-set',
    name: 'Cloud Silk Scrunchie Trio Gift Set',
    category: 'fashion-accessories',
    tagline: 'Pure mulberry silk oversized cloud scrunchies that protect hair from breakage',
    description: 'Say goodbye to hair creasing and split ends. Our oversized cloud scrunchies glide effortlessly over delicate strands without tugging or pulling.',
    details: [
      'Set of 3 oversized scrunchies in coordinating tones',
      '100% 22-Momme Mulberry Silk exterior',
      'Wide flat elastic band maintains bounce for over 500 wears'
    ],
    price: 790,
    originalPrice: 1190,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Autumn Tones (Champagne/Taupe/Burgundy)', hex: '#8B2252' },
      { name: 'Classic Monochromes (Black/White/Charcoal)', hex: '#1F2937' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 380,
    stockStatus: 'in-stock',
    badge: 'Hair Care',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
  },

  // ==================== LIFESTYLE ACCESSORIES (5 Products) ====================
  {
    id: 32,
    slug: 'roma-cat-eye-acetate-sunglasses',
    name: 'Roma Polarized Acetate Cat-Eye Sunglasses',
    category: 'lifestyle-accessories',
    tagline: 'Handmade Italian bio-acetate frames with 100% UV400 polarized clarity',
    description: 'Chic, assertive, and undeniably Italian. Featuring razor-sharp beveled edges on premium cellulose bio-acetate with category 3 polarized lenses that neutralize road and water glare.',
    details: [
      'Hand-polished Italian Mazzucchelli bio-acetate frame',
      'CR-39 Polarized lenses with anti-scratch and oleophobic coatings',
      '100% UVA/UVB Category 3 optical protection',
      'Includes faux leather collapsible triangular protective case'
    ],
    price: 2490,
    originalPrice: 3500,
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Dark Havana Tortoise', hex: '#582F0E' },
      { name: 'Gloss Piano Black', hex: '#000000' },
      { name: 'Translucent Champagne', hex: '#E7D7C1' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 146,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 33,
    slug: 'rfid-accordion-card-wallet',
    name: 'Atelier RFID Bifold Cardholder Wallet',
    category: 'lifestyle-accessories',
    tagline: 'Slim pebble leather pocket wallet with central currency slot',
    description: 'Engineered for the cashless era. Fits up to 8 cards plus folded currency in an ultra-slim 8mm profile, guarded by military-grade RFID-blocking weave.',
    details: [
      'Dimensions: 10.5cm x 7.5cm x 0.8cm (Weight: 38g)',
      '6 card slots, 2 receipt pockets, 1 center cash pouch',
      'Certified RFID 13.56 MHz shielding prevents digital skimming'
    ],
    price: 1190,
    originalPrice: 1690,
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Cognac Caramel', hex: '#9A3412' },
      { name: 'Emerald Forest', hex: '#064E3B' },
      { name: 'Carbon Black', hex: '#18181B' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 215,
    stockStatus: 'in-stock',
    badge: 'Compact',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 34,
    slug: 'geneva-mesh-minimalist-watch',
    name: 'Geneva Ultra-Slim Mesh Watch (34mm)',
    category: 'lifestyle-accessories',
    tagline: 'Surgical stainless steel mesh with sapphire-crystal glass',
    description: 'Understated horology for modern tastemakers. Features a clean sunburst dial, diamond-cut hands, and a Japanese Miyota quartz movement inside a 6.8mm wafer-thin case.',
    details: [
      'Case diameter: 34mm | Case thickness: 6.8mm',
      'Sapphire crystal glass: completely scratch-proof',
      'Water resistance: 5 ATM (50 meters / shower safe)',
      'Quick-release Milanese magnetic loop mesh strap'
    ],
    price: 3890,
    originalPrice: 5200,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Yellow Gold & Eggshell Dial', hex: '#D4AF37' },
      { name: 'Silver & Sunray White', hex: '#E5E7EB' },
      { name: 'Rose Gold & Emerald Dial', hex: '#ECC5C0' }
    ],
    availableSizes: [],
    rating: 4.9,
    reviewCount: 168,
    stockStatus: 'in-stock',
    badge: 'Luxury',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 35,
    slug: 'botanical-leather-iphone-case',
    name: 'Magsafe Pebble Leather Phone Case',
    category: 'lifestyle-accessories',
    tagline: 'Reinforced camera bezel and built-in N52 strong neodymium magnets',
    description: 'Wrap your phone in genuine touch luxury. Built with an impact-absorbing polycarbonate frame wrapped in water-resistant pebbled vegan leather with tactile aluminum buttons.',
    details: [
      'Compatible with Apple MagSafe chargers and magnetic wallets',
      '6ft drop-tested with internal microfiber cushion lining',
      'Available for iPhone 14/15/16 Pro & Pro Max series'
    ],
    price: 1290,
    originalPrice: 1790,
    images: [
      'https://images.unsplash.com/photo-1586953208270-767889fa9b55?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Burgundy Wine', hex: '#8B2252' },
      { name: 'Midnight Blue', hex: '#1E3A8A' },
      { name: 'Espresso Tan', hex: '#78350F' }
    ],
    availableSizes: [],
    rating: 4.6,
    reviewCount: 194,
    stockStatus: 'in-stock',
    badge: 'MagSafe',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 36,
    slug: 'canvas-and-leather-cosmetic-washbag',
    name: 'Voyage Water-Resistant Cosmetic Dopp Kit',
    category: 'lifestyle-accessories',
    tagline: 'Structured dual-tier washbag with wipeable antimicrobial lining',
    description: 'The ultimate travel companion. Unzips completely flat to reveal two waterproof clear compartments, keeping bottles upright and spill-proof on bathroom counters worldwide.',
    details: [
      'Heavy 16oz waxed canvas with leather carry handle',
      'Double gold zipper with full 180-degree flat opening'
    ],
    price: 1450,
    originalPrice: 1990,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586953208270-767889fa9b55?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Khaki Sand', hex: '#D2B48C' },
      { name: 'Charcoal Wax', hex: '#374151' }
    ],
    availableSizes: [],
    rating: 4.7,
    reviewCount: 82,
    stockStatus: 'in-stock',
    badge: 'Travel',
    isFeatured: false,
    isNewArrival: false,
    isBestSeller: false,
  },

  // ==================== TRENDING NOW (5 Products) ====================
  {
    id: 37,
    slug: 'stratus-chunky-platform-sneakers',
    name: 'Stratus Chunky Architectural Sneakers',
    category: 'trending',
    tagline: '55mm sculpted lightweight platform with memory foam cushioning',
    description: 'The sneaker defining this season’s editorial streetstyle. Features layered leather and mesh panels over a sculpted 55mm platform that feels like walking on air.',
    details: [
      'Sole height: 5.5cm lightweight EVA foam',
      'Breathable mesh underlays with tonal suede and leather overlays',
      'Ergonomic orthotic arch support insole included'
    ],
    price: 4490,
    originalPrice: 5800,
    images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Triple Chalk White', hex: '#FAFAFA' },
      { name: 'Cream & Warm Sand', hex: '#F5EBE1' },
      { name: 'Stealth Shadow', hex: '#18181B' }
    ],
    availableSizes: ['36', '37', '38', '39', '40', '41'],
    rating: 4.9,
    reviewCount: 348,
    stockStatus: 'in-stock',
    badge: 'Viral Pick',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 38,
    slug: 'sculpted-french-claw-clip-duo',
    name: 'Grand Palais Cellulose Claw Clip Set',
    category: 'trending',
    tagline: 'French bio-acetate hair claws with ultra-strong spring for thick hair',
    description: 'No snags, no slips. Hand-crafted from biodegradable cellulose acetate (not cheap plastic), with precision interlocking teeth engineered to hold thick or long hair firmly all day.',
    details: [
      'Set of 2: 1 Jumbo 11cm curved clip + 1 Midi 8cm rectangle clip',
      'Bio-cellulose acetate with gold-tone tempered steel spring',
      'Rounded teeth gently massage scalp without pulling roots'
    ],
    price: 890,
    originalPrice: 1290,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Caramel & Blonde Tortoise', hex: '#78350F' },
      { name: 'Rose Quartz & Pearl Cloud', hex: '#FCE7F3' },
      { name: 'Gloss Obsidian & Marble', hex: '#111827' }
    ],
    availableSizes: [],
    rating: 4.8,
    reviewCount: 512,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 39,
    slug: 'beaded-gemstone-phone-wristlet',
    name: 'Aura Freshwater Pearl & Quartz Phone Wristlet',
    category: 'trending',
    tagline: 'Heavy-duty Kevlar cord tether with baroque pearls and amethyst beads',
    description: 'The Gen-Z accessory staple elevated to fine jewelry standards. Connects via an ultra-slim universal tether tab that slips inside any phone case without blocking charging ports.',
    details: [
      'Genuine freshwater baroque pearls, rose quartz, and frosted glass',
      'Tested to withstand up to 15kg tensile pull force',
      'Universal tether tab included: works with 100% of phone cases'
    ],
    price: 750,
    originalPrice: 990,
    images: [
      'https://images.unsplash.com/photo-1586953208270-767889fa9b55?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Pearl & Moonstone', hex: '#EDE9FE' },
      { name: 'Multicolor Gemstone', hex: '#FED7AA' }
    ],
    availableSizes: [],
    rating: 4.6,
    reviewCount: 175,
    stockStatus: 'in-stock',
    badge: 'Trending',
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 40,
    slug: 'corset-cinch-leather-waist-belt',
    name: 'Sirene Lace-Up Corset Waist Cinch',
    category: 'trending',
    tagline: 'Sculpted wide contour with adjustable satin cord lacing and rear zip',
    description: 'As seen on runways and fashion week streetstyle. Transforms oversized button-downs, sweater dresses, and trench coats into dramatic hourglass silhouettes.',
    details: [
      'Width: 12cm contoured hourglass waist band',
      'Heavy-duty rear zip for effortless on/off wear',
      'Front satin lacing allows customizable snugness'
    ],
    price: 1890,
    originalPrice: 2500,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: 'Onyx Black', hex: '#18181B' },
      { name: 'Saddle Tan', hex: '#9A3412' }
    ],
    availableSizes: ['XS/S (24-27)', 'M/L (28-32)'],
    rating: 4.7,
    reviewCount: 118,
    stockStatus: 'in-stock',
    badge: 'Statement',
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 41,
    slug: 'infinity-stack-vermeil-rings-set',
    name: 'Cosmos 5-Piece Vermeil Stacking Rings',
    category: 'trending',
    tagline: 'Five tactile band textures: pavé, twisted rope, beaded, knife-edge & cigar',
    description: 'The complete finger party in one set. Wear them stacked together on a single finger for high-impact shine or distribute across both hands for an curated look.',
    details: [
      'Set includes 5 distinct stackable band styles',
      '18k Heavy Gold Vermeil over 925 Sterling Silver',
      'Micro-pavé 5A cubic zirconia stones'
    ],
    price: 1690,
    originalPrice: 2300,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80'
    ],
    availableColors: [
      { name: '18k Rich Gold', hex: '#D4AF37' },
      { name: 'Sterling Silver', hex: '#E5E7EB' },
      { name: 'Two-Tone Mixed Set', hex: '#D1D5DB' }
    ],
    availableSizes: ['US 6', 'US 7', 'US 8'],
    rating: 4.9,
    reviewCount: 388,
    stockStatus: 'in-stock',
    badge: 'Bestseller',
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
  }
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductById = (id) => products.find((p) => p.id === Number(id));
export const getProductsByCategory = (category) => products.filter((p) => p.category === category);
export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getTrendingProducts = () => products.filter((p) => p.category === 'trending' || p.badge === 'Trending' || p.badge === 'Viral Pick');
