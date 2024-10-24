import { Image } from "sanity"

export interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "extender1",
    name: "NetGear N300 Wi-Fi Extender",
    image: "https://example.com/images/netgear-n300-main.jpg",
    images: [
      "https://example.com/images/netgear-n300-1.jpg",
      "https://example.com/images/netgear-n300-2.jpg",
      "https://example.com/images/netgear-n300-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 49.99,
    currency: "USD",
    description: "Boosts Wi-Fi coverage by up to 300 Mbps.",
    sku: "netgear-n300-wifi-extender"
  },
  {
    id: "extender2",
    name: "TP-Link AC750 Wi-Fi Extender",
    image: "https://example.com/images/tplink-ac750-main.jpg",
    images: [
      "https://example.com/images/tplink-ac750-1.jpg",
      "https://example.com/images/tplink-ac750-2.jpg",
      "https://example.com/images/tplink-ac750-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White", "Gray"],
    price: 35.99,
    currency: "USD",
    description: "Expands your router's signal with speeds up to 750Mbps.",
    sku: "tplink-ac750-wifi-extender"
  },
  {
    id: "extender3",
    name: "Linksys RE6500 AC1200 Wi-Fi Extender",
    image: "https://example.com/images/linksys-re6500-main.jpg",
    images: [
      "https://example.com/images/linksys-re6500-1.jpg",
      "https://example.com/images/linksys-re6500-2.jpg",
      "https://example.com/images/linksys-re6500-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 79.99,
    currency: "USD",
    description: "Dual-band Wi-Fi extender with four Gigabit Ethernet ports.",
    sku: "linksys-re6500-wifi-extender"
  },
  {
    id: "extender4",
    name: "D-Link DAP-1650 Wi-Fi Extender",
    image: "https://example.com/images/dlink-dap1650-main.jpg",
    images: [
      "https://example.com/images/dlink-dap1650-1.jpg",
      "https://example.com/images/dlink-dap1650-2.jpg",
      "https://example.com/images/dlink-dap1650-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 59.99,
    currency: "USD",
    description: "High-speed AC1200 dual-band Wi-Fi with four Gigabit ports.",
    sku: "dlink-dap1650-wifi-extender"
  },
  {
    id: "extender5",
    name: "NetGear EX3700 Wi-Fi Extender",
    image: "https://example.com/images/netgear-ex3700-main.jpg",
    images: [
      "https://example.com/images/netgear-ex3700-1.jpg",
      "https://example.com/images/netgear-ex3700-2.jpg",
      "https://example.com/images/netgear-ex3700-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 59.99,
    currency: "USD",
    description: "Covers up to 1000 sq. ft. with speeds up to 750Mbps.",
    sku: "netgear-ex3700-wifi-extender"
  },
  {
    id: "extender6",
    name: "TP-Link RE450 AC1750 Wi-Fi Extender",
    image: "https://example.com/images/tplink-re450-main.jpg",
    images: [
      "https://example.com/images/tplink-re450-1.jpg",
      "https://example.com/images/tplink-re450-2.jpg",
      "https://example.com/images/tplink-re450-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White", "Gray"],
    price: 69.99,
    currency: "USD",
    description: "Extends dual-band Wi-Fi to boost coverage and speeds.",
    sku: "tplink-re450-wifi-extender"
  },
  {
    id: "extender7",
    name: "Belkin Dual-Band AC1200 Wi-Fi Extender",
    image: "https://example.com/images/belkin-ac1200-main.jpg",
    images: [
      "https://example.com/images/belkin-ac1200-1.jpg",
      "https://example.com/images/belkin-ac1200-2.jpg",
      "https://example.com/images/belkin-ac1200-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 79.99,
    currency: "USD",
    description: "Boosts your existing Wi-Fi network with dual-band speeds.",
    sku: "belkin-ac1200-wifi-extender"
  },
  {
    id: "extender8",
    name: "ASUS RP-AC55 Wi-Fi Range Extender",
    image: "https://example.com/images/asus-rp-ac55-main.jpg",
    images: [
      "https://example.com/images/asus-rp-ac55-1.jpg",
      "https://example.com/images/asus-rp-ac55-2.jpg",
      "https://example.com/images/asus-rp-ac55-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 69.99,
    currency: "USD",
    description: "Dual-band 802.11ac Wi-Fi extender with quick setup.",
    sku: "asus-rp-ac55-wifi-extender"
  },
  {
    id: "extender9",
    name: "Rock Space AC1200 Wi-Fi Extender",
    image: "https://example.com/images/rockspace-ac1200-main.jpg",
    images: [
      "https://example.com/images/rockspace-ac1200-1.jpg",
      "https://example.com/images/rockspace-ac1200-2.jpg",
      "https://example.com/images/rockspace-ac1200-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 39.99,
    currency: "USD",
    description: "Covers up to 1292 sq. ft. with AC1200 dual-band Wi-Fi.",
    sku: "rockspace-ac1200-wifi-extender"
  },
  {
    id: "extender10",
    name: "Motorola MX1200 Wi-Fi Range Extender",
    image: "https://example.com/images/motorola-mx1200-main.jpg",
    images: [
      "https://example.com/images/motorola-mx1200-1.jpg",
      "https://example.com/images/motorola-mx1200-2.jpg",
      "https://example.com/images/motorola-mx1200-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 49.99,
    currency: "USD",
    description: "Extends your Wi-Fi network with fast AC1200 speeds.",
    sku: "motorola-mx1200-wifi-extender"
  },
  {
    id: "extender11",
    name: "NetGear Nighthawk X6S EX8000 Wi-Fi Extender",
    image: "https://example.com/images/netgear-nighthawk-ex8000-main.jpg",
    images: [
      "https://example.com/images/netgear-nighthawk-ex8000-1.jpg",
      "https://example.com/images/netgear-nighthawk-ex8000-2.jpg",
      "https://example.com/images/netgear-nighthawk-ex8000-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 199.99,
    currency: "USD",
    description: "Tri-band Wi-Fi extender with speeds up to 3000Mbps.",
    sku: "netgear-nighthawk-ex8000-wifi-extender"
  },
  {
    id: "extender12",
    name: "Eero Pro Wi-Fi Mesh Extender",
    image: "https://example.com/images/eero-pro-main.jpg",
    images: [
      "https://example.com/images/eero-pro-1.jpg",
      "https://example.com/images/eero-pro-2.jpg",
      "https://example.com/images/eero-pro-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 99.99,
    currency: "USD",
    description: "Wi-Fi mesh extender with coverage up to 1600 sq. ft.",
    sku: "eero-pro-wifi-extender"
  },
  {
    id: "extender13",
    name: "TP-Link RE220 Wi-Fi Extender",
    image: "https://example.com/images/tplink-re220-main.jpg",
    images: [
      "https://example.com/images/tplink-re220-1.jpg",
      "https://example.com/images/tplink-re220-2.jpg",
      "https://example.com/images/tplink-re220-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 29.99,
    currency: "USD",
    description: "Boosts Wi-Fi coverage up to 1200 sq. ft. with dual-band speeds.",
    sku: "tplink-re220-wifi-extender"
  },
  {
    id: "extender14",
    name: "NetGear EX6120 AC1200 Wi-Fi Extender",
    image: "https://example.com/images/netgear-ex6120-main.jpg",
    images: [
      "https://example.com/images/netgear-ex6120-1.jpg",
      "https://example.com/images/netgear-ex6120-2.jpg",
      "https://example.com/images/netgear-ex6120-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 59.99,
    currency: "USD",
    description: "Dual-band AC1200 Wi-Fi coverage with external antennas.",
    sku: "netgear-ex6120-wifi-extender"
  },
  {
    id: "extender15",
    name: "Linksys RE7000 Max-Stream AC1900+ Wi-Fi Extender",
    image: "https://example.com/images/linksys-re7000-main.jpg",
    images: [
      "https://example.com/images/linksys-re7000-1.jpg",
      "https://example.com/images/linksys-re7000-2.jpg",
      "https://example.com/images/linksys-re7000-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 99.99,
    currency: "USD",
    description: "Covers up to 10,000 sq. ft. with dual-band speeds up to 1900Mbps.",
    sku: "linksys-re7000-wifi-extender"
  },
  {
    id: "extender16",
    name: "Motorola MX2100 Mesh Wi-Fi System",
    image: "https://example.com/images/motorola-mx2100-main.jpg",
    images: [
      "https://example.com/images/motorola-mx2100-1.jpg",
      "https://example.com/images/motorola-mx2100-2.jpg",
      "https://example.com/images/motorola-mx2100-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 159.99,
    currency: "USD",
    description: "Mesh Wi-Fi system with high-performance AC2100 speeds.",
    sku: "motorola-mx2100-wifi-system"
  },
  {
    id: "extender17",
    name: "NetGear Orbi AC2200 Tri-Band Wi-Fi Extender",
    image: "https://example.com/images/netgear-orbi-ac2200-main.jpg",
    images: [
      "https://example.com/images/netgear-orbi-ac2200-1.jpg",
      "https://example.com/images/netgear-orbi-ac2200-2.jpg",
      "https://example.com/images/netgear-orbi-ac2200-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 249.99,
    currency: "USD",
    description: "Tri-band coverage with up to 2200Mbps speeds and mesh networking.",
    sku: "netgear-orbi-ac2200-wifi-extender"
  },
  {
    id: "extender18",
    name: "TP-Link RE650 AC2600 Wi-Fi Extender",
    image: "https://example.com/images/tplink-re650-main.jpg",
    images: [
      "https://example.com/images/tplink-re650-1.jpg",
      "https://example.com/images/tplink-re650-2.jpg",
      "https://example.com/images/tplink-re650-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 119.99,
    currency: "USD",
    description: "Provides speeds up to 2600Mbps with 4-stream dual-band technology.",
    sku: "tplink-re650-wifi-extender"
  },
  {
    id: "extender19",
    name: "Rock Space AX1800 Wi-Fi 6 Extender",
    image: "https://example.com/images/rockspace-ax1800-main.jpg",
    images: [
      "https://example.com/images/rockspace-ax1800-1.jpg",
      "https://example.com/images/rockspace-ax1800-2.jpg",
      "https://example.com/images/rockspace-ax1800-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 89.99,
    currency: "USD",
    description: "Supports Wi-Fi 6 technology with speeds up to 1800Mbps.",
    sku: "rockspace-ax1800-wifi-extender"
  },
  {
    id: "extender20",
    name: "D-Link AC1900 Mesh Wi-Fi Extender",
    image: "https://example.com/images/dlink-ac1900-main.jpg",
    images: [
      "https://example.com/images/dlink-ac1900-1.jpg",
      "https://example.com/images/dlink-ac1900-2.jpg",
      "https://example.com/images/dlink-ac1900-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 129.99,
    currency: "USD",
    description: "Dual-band extender with Mesh Wi-Fi support for seamless coverage.",
    sku: "dlink-ac1900-wifi-extender"
  },
  {
    id: "extender21",
    name: "TP-Link Deco X20 Wi-Fi 6 Mesh Extender",
    image: "https://example.com/images/tplink-deco-x20-main.jpg",
    images: [
      "https://example.com/images/tplink-deco-x20-1.jpg",
      "https://example.com/images/tplink-deco-x20-2.jpg",
      "https://example.com/images/tplink-deco-x20-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 179.99,
    currency: "USD",
    description: "Wi-Fi 6 mesh system with coverage up to 5800 sq. ft.",
    sku: "tplink-deco-x20-wifi-extender"
  },
  {
    id: "extender22",
    name: "NetGear EX7700 Nighthawk X6 Wi-Fi Extender",
    image: "https://example.com/images/netgear-ex7700-main.jpg",
    images: [
      "https://example.com/images/netgear-ex7700-1.jpg",
      "https://example.com/images/netgear-ex7700-2.jpg",
      "https://example.com/images/netgear-ex7700-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 149.99,
    currency: "USD",
    description: "Tri-band extender with 866Mbps speeds on the 5GHz band.",
    sku: "netgear-ex7700-wifi-extender"
  },
  {
    id: "extender23",
    name: "Linksys Velop MX5 Wi-Fi 6 Mesh Extender",
    image: "https://example.com/images/linksys-velop-mx5-main.jpg",
    images: [
      "https://example.com/images/linksys-velop-mx5-1.jpg",
      "https://example.com/images/linksys-velop-mx5-2.jpg",
      "https://example.com/images/linksys-velop-mx5-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 299.99,
    currency: "USD",
    description: "Next-gen Wi-Fi 6 mesh extender with up to 5.3Gbps speeds.",
    sku: "linksys-velop-mx5-wifi-extender"
  },
  {
    id: "extender24",
    name: "ASUS RP-AX56 Wi-Fi 6 Range Extender",
    image: "https://example.com/images/asus-rp-ax56-main.jpg",
    images: [
      "https://example.com/images/asus-rp-ax56-1.jpg",
      "https://example.com/images/asus-rp-ax56-2.jpg",
      "https://example.com/images/asus-rp-ax56-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 79.99,
    currency: "USD",
    description: "Supports Wi-Fi 6 for fast and efficient coverage in large homes.",
    sku: "asus-rp-ax56-wifi-extender"
  },
  {
    id: "extender25",
    name: "Google Nest Wi-Fi Range Extender",
    image: "https://example.com/images/google-nest-wifi-main.jpg",
    images: [
      "https://example.com/images/google-nest-wifi-1.jpg",
      "https://example.com/images/google-nest-wifi-2.jpg",
      "https://example.com/images/google-nest-wifi-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 169.99,
    currency: "USD",
    description: "Seamless Google Nest Wi-Fi coverage for whole-home use.",
    sku: "google-nest-wifi-extender"
  },
  {
    id: "extender26",
    name: "TP-Link RE315 AC1200 Wi-Fi Extender",
    image: "https://example.com/images/tplink-re315-main.jpg",
    images: [
      "https://example.com/images/tplink-re315-1.jpg",
      "https://example.com/images/tplink-re315-2.jpg",
      "https://example.com/images/tplink-re315-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 49.99,
    currency: "USD",
    description: "Dual-band AC1200 Wi-Fi coverage with ethernet port for stability.",
    sku: "tplink-re315-wifi-extender"
  },
  {
    id: "extender27",
    name: "NetGear EX7000 AC1900 Wi-Fi Range Extender",
    image: "https://example.com/images/netgear-ex7000-main.jpg",
    images: [
      "https://example.com/images/netgear-ex7000-1.jpg",
      "https://example.com/images/netgear-ex7000-2.jpg",
      "https://example.com/images/netgear-ex7000-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 119.99,
    currency: "USD",
    description: "Dual-band extender with external antennas and 1900Mbps speeds.",
    sku: "netgear-ex7000-wifi-extender"
  },
  {
    id: "extender28",
    name: "Belkin AC750 Dual-Band Wi-Fi Range Extender",
    image: "https://example.com/images/belkin-ac750-main.jpg",
    images: [
      "https://example.com/images/belkin-ac750-1.jpg",
      "https://example.com/images/belkin-ac750-2.jpg",
      "https://example.com/images/belkin-ac750-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 39.99,
    currency: "USD",
    description: "Compact dual-band AC750 extender with easy plug-and-play setup.",
    sku: "belkin-ac750-wifi-extender"
  },
  {
    id: "extender29",
    name: "Amped Wireless AC1750 Wi-Fi Extender",
    image: "https://example.com/images/amped-wireless-ac1750-main.jpg",
    images: [
      "https://example.com/images/amped-wireless-ac1750-1.jpg",
      "https://example.com/images/amped-wireless-ac1750-2.jpg",
      "https://example.com/images/amped-wireless-ac1750-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["Black"],
    price: 139.99,
    currency: "USD",
    description: "Covers up to 12,000 sq. ft. with 1750Mbps dual-band speeds.",
    sku: "amped-wireless-ac1750-wifi-extender"
  },
  {
    id: "extender30",
    name: "Tenda AC1200 Dual-Band Wi-Fi Extender",
    image: "https://example.com/images/tenda-ac1200-main.jpg",
    images: [
      "https://example.com/images/tenda-ac1200-1.jpg",
      "https://example.com/images/tenda-ac1200-2.jpg",
      "https://example.com/images/tenda-ac1200-3.jpg"
    ],
    categories: ["Wi-Fi Extenders", "Networking"],
    sizes: ["One Size"],
    colors: ["White"],
    price: 49.99,
    currency: "USD",
    description: "Dual-band AC1200 extender with external antennas for wide coverage.",
    sku: "tenda-ac1200-wifi-extender"
  }
]
