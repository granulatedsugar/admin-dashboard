// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Active Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];
export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Purity UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Esthera Jackson",
    email: "alexa@ellie.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Active",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Alexa Liras",
    email: "laurent@ellie.com",
    subdomain: "Frontend Developer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Laurent Michael",
    email: "laurent@ellie.com",
    subdomain: "Executive",
    domain: "Project Manager",
    status: "Active",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Freduardo Hill",
    email: "freduardo@ellie.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Active",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Daniel Thomas",
    email: "daniel@ellie.com",
    subdomain: "Backend Developer",
    domain: "Developer",
    status: "Offline",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@ellie.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Offline",
    date: "04/09/20",
  },
  {
    logo: avatar8,
    name: "Wilson Myboy",
    email: "wil@ellie.com",
    subdomain: null,
    domain: "Client",
    status: "Active",
    date: "05/17/22",
  },
  {
    logo: avatar9,
    name: "Simp Pony",
    email: "simp@ellie.com",
    subdomain: null,
    domain: "Agent",
    status: "Active",
    date: "10/17/22",
  },
  {
    logo: avatar10,
    name: "Walle Bee",
    email: "walle@ellie.com",
    subdomain: null,
    domain: "Client",
    status: "Active",
    date: "07/22/22",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];

export const productData = [
  {
    id: 1,
    product_number: 60011677,
    title: "Wire Bracelet",
    price: 2200.0,
    size: ["Small", "Medium", "Large"],
    color: "rose gold",
    purity: "18k",
    stock: 10,
    madeToOrder: false,
    description:
      "This bracelet's \"T\" motif emobdies an elegant aesthetic. As multifaceted as it is iconic, the Tiffany T collection is a tangible reminder of the connections we feel but can't always see. Pair this wire bracelet with other Tiffany T designs for a look that's equally modern and sophisticated.",
    category: "Bracelet",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-twire-bracelet-33263465_997778_ED_M.jpg",
    popular: true,
    state: "NEW",
    rating: {
      rate: 9,
      count: 120,
    },
  },
  {
    id: 2,
    product_number: 60011678,
    title: "Smile Pendant",
    price: 975.0,
    size: ["Small", "Medium", "Large"],
    color: "rose gold",
    purity: "18k",
    stock: 10,
    madeToOrder: false,
    description:
      "Simple and elegant, this curved pendant has a modern yet timeless aesthetic. The Tiffany T smile collection embodies the world's most universal gesture for happiness and the connections it creates. Layer this delicate pendant with other Tiffany pendants of varying sizes and lengths for a unique look.",
    category: "Pendant",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-tsmile-pendant-35189432_1009333_ED.jpg",
    popular: true,
    state: null,
    rating: {
      rate: 7,
      count: 120,
    },
  },
  {
    id: 3,
    product_number: 60011679,
    title: "Diamonds by the Yard® Earrings",
    price: 225.0,
    size: null,
    color: "yellow gold",
    purity: "18k",
    stock: 10,
    madeToOrder: false,
    description:
      "A modern take on classic diamond studs, the simple design of these earrings takes center stage with hand-polished bezel-set diamonds. Elsa Peretti’s revolutionary Diamonds by the Yard® collection features bezel-set stones that forever changed the role of diamonds in fashion. Wear these diamond studs on their own or mix and match with statement-making drop earrings for a bold look.",
    category: "Earrings",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/elsa-perettidiamonds-by-the-yard-earrings-12818653_960210_ED_M.jpg",
    popular: true,
    state: null,
    rating: {
      rate: 9.5,
      count: 120,
    },
  },
  {
    id: 4,
    product_number: 60011680,
    title: "Wrap Necklace",
    price: 3000.0,
    size: null,
    color: "silver",
    purity: null,
    stock: 10,
    madeToOrder: false,
    description:
      "Tiffany HardWear is elegantly subversive and captures the spirit of the women of NEW York City. This bold necklace is both refined and rebellious.",
    category: "Necklace",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-hardwearwrap-necklace-37953407_970064_ED_M.jpg",
    popular: true,
    state: "NEW",
    rating: {
      rate: 10,
      count: 120,
    },
  },
  {
    id: 5,
    product_number: 60011681,
    title: "Open Heart Pendant",
    price: 575.0,
    size: ["7 mm", "11 mm", "16 mm", "22 mm"],
    color: "yellow gold",
    purity: "18k",
    stock: 10,
    madeToOrder: false,
    description:
      "The simple, evocative shape of Elsa Peretti® Open Heart designs celebrates the spirit of love. This elegant style is one of her most celebrated icons.",
    category: "Bracelet",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/elsa-perettiopen-heart-pendant-60957401_1023440_ED.jpg",
    popular: true,
    state: null,
    rating: {
      rate: 6,
      count: 120,
    },
  },
  {
    id: 6,
    product_number: 60011682,
    title: "True® Diamond in Platinum",
    price: 14000.0,
    size: [3, 4, 5, 6, 7, 8, 9],
    color: "white gold",
    purity: "18k",
    stock: 10,
    madeToOrder: true,
    description:
      "Graphic and geometric with a T-shaped detail in the setting, the Tiffany True® engagement ring is a NEW icon of modern love. With a refined platinum band and a Tiffany True® diamond, a NEW square mixed-cut diamond unique to Tiffany, the Tiffany True® engagement ring features clean lines and striking details.",
    category: "Engagement Ring",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-tiffany-true-diamond-in-platinum-63594873_996049_ED_M.jpg",
    popular: true,
    state: "NEW",
    rating: {
      rate: 6,
      count: 120,
    },
  },
  {
    id: 7,
    product_number: 60011683,
    title: "Ibex Brooch",
    price: 17000.0,
    size: null,
    color: "yellow gold",
    purity: "18k",
    stock: 10,
    madeToOrder: false,
    description:
      "Jean Schlumberger’s visionary creations are among the world’s most intricate designs. Inspired by the majestic beauty of the natural world, this 18k yellow gold and platinum brooch is traced with scintillating round brilliant diamonds and a pink sapphire.",
    category: "Brooch",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-co-schlumbergeribex-brooch-21000736_1020292_ED.jpg",
    popular: true,
    state: null,
    rating: {
      rate: 7.5,
      count: 120,
    },
  },
  {
    id: 8,
    product_number: 60011684,
    title: "Crown Charm",
    price: 250.0,
    size: null,
    color: "silver",
    purity: null,
    madeToOrder: false,
    stock: 15,
    description: "Royally appointed. Charm in sterling silver.",
    category: "Charms",
    img:
      "https://media.tiffany.com/is/image/Tiffany/23457814_927014_ED?$EcomItemMax$&id=sdRqB1&fmt=jpg&fit=constrain,1&wid=860&hei=860&hei=1724&wid=1724&qlt=90&op_usm=2.0,1.0,6.0&$cropN=0.1,0.1,0.8",
    popular: true,
    state: null,
    rating: {
      rate: 6,
      count: 120,
    },
  },
  {
    id: 9,
    product_number: 60011685,
    title: "Round Brilliant Diamond",
    price: 250.0,
    size: [3, 4, 5, 6, 7, 8, 9, 10],
    color: "silver",
    purity: null,
    stock: 15,
    madeToOrder: true,
    description: "Royally appointed. Charm in sterling silver.",
    category: "Charms",
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-round-brilliant-diamond-68975425_1028237_ED_M.jpg",
    popular: false,
    state: null,
    rating: {
      rate: 6,
      count: 120,
    },
  },
];

export const orderData = [
  {
    id: 98374562,
    email: " ",
    financial_status: "pending",
    name: "Wall Ebee",
    title: "Crown Charm",
    product_number: 60011685,
    price: 250,
    img:
      "https://media.tiffany.com/is/image/Tiffany/23457814_927014_ED?$EcomItemMax$&id=sdRqB1&fmt=jpg&fit=constrain,1&wid=860&hei=860&hei=1724&wid=1724&qlt=90&op_usm=2.0,1.0,6.0&$cropN=0.1,0.1,0.8",
    grams: "1300",
    quantity: 2,
    price: 13.5,
    rate: 0.06,
    kind: "authorization",
    status: "Pending",
    amount: 500,
  },
  {
    id: 78234662,
    email: " ",
    financial_status: "pending",
    name: "Simp Pony",
    title: "Round Brilliant Diamond",
    product_number: 60011685,
    price: 250,
    img:
      "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-round-brilliant-diamond-68975425_1028237_ED_M.jpg",
    grams: "1300",
    quantity: 1,
    price: 13.5,
    rate: 0.06,
    kind: "authorization",
    status: "Paid",
    amount: 250,
  },
];
