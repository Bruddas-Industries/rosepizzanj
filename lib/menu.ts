export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  note?: string;
  variants?: { label: string; price: string }[];
};

export type MenuCategory = {
  id: string;
  label: string;
  description?: string;
  sizes?: string[];
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "pizza",
    label: "Pizza",
    description: "All pizzas are made fresh to order with our homemade sauce.",
    sizes: ["Small", "Large", "Sicilian"],
    items: [
      {
        name: "Cheese",
        description: "A classic favorite, loaded with melted cheese.",
        price: "$15.00 / $16.00 / $20.00",
      },
      {
        name: "Toppings",
        description: "Meatball, mushroom, onion, pepperoni, peppers, sausage, black olives.",
        price: "$3.00 / $3.50 / $4.00",
      },
      {
        name: "Special Toppings",
        description: "Chicken, broccoli, eggplant, ricotta, fresh tomatoes, bacon.",
        price: "$3.50 / $4.50 / $5.50",
      },
      {
        name: "Rose's Special",
        description: "Includes all standard toppings — a customer favorite!",
        price: "$25.00 / $26.00 / $31.00",
      },
      {
        name: "12\" Gluten Free Pizza",
        description: "",
        price: "$13.00 / — / —",
      },
    ],
  },
  {
    id: "gourmet-pizza",
    label: "Gourmet Pizza",
    description: "Our signature creations — bold flavor combinations built with the same fresh-made dough and homemade sauce as our classic pizzas.",
    sizes: ["Small", "Large", "Sicilian"],
    items: [
      {
        name: "Hawaiian",
        description: "Diced pineapple and ham — a sweet and savory classic.",
        price: "$20.00 / $23.00 / $28.00",
      },
      {
        name: "Buffalo Chicken",
        description: "Spicy buffalo chicken, mozzarella, and a drizzle of blue cheese dressing.",
        price: "$20.00 / $23.00 / $28.00",
      },
      {
        name: "Penne Ala Vodka",
        description: "Penne pasta and vodka sauce on a pizza crust.",
        price: "$21.00 / $23.00 / $30.00",
      },
      {
        name: "Vodka Sauce",
        description: "Rich and creamy vodka sauce on a bed of melted mozzarella cheese.",
        price: "$17.00 / $19.00 / $26.00",
      },
      {
        name: "White Pizza",
        description: "Pizza without tomato sauce",
        price: "$17.50 / $19.50 / $24.50",
      },
      {
        name: "White Pizza w/ Broccoli",
        description: "Broccoli and creamy white sauce on a bed of melted mozzarella cheese.",
        price: "$21.00 / $24.00 / $30.00",
      },
      {
        name: "White Pizza w/ Chicken",
        description: "Tender chicken on a bed of creamy white sauce and melted mozzarella cheese.",
        price: "$21.00 / $24.00 / $30.00",
      },
      {
        name: "White Pizza w/ Fresh Garlic",
        description: "Fresh garlic adds a rich flavor to this classic white pizza.",
        price: "$21.00 / $23.00 / $30.00",
      },
      {
        name: "Chicken Bacon Ranch",
        description: "Tender chicken, crispy bacon, and a drizzle of ranch dressing.",
        price: "$21.00 / $23.00 / $30.00",
      },
      {
        name: "BBQ Chicken Pizza",
        description: "Tender chicken with BBQ sauce on a bed of melted mozzarella cheese.",
        price: "$21.00 / $23.00 / $30.00",
      },
      {
        name: "Bacon Pizza",
        description: "Pizza with bacon bits on a bed of melted mozzarella cheese.",
        price: "$21.00 / $23.00 / $30.00",
      },
    ],
  },
  {
    id: "slices",
    label: "Pizza by the Slice",
    items: [
      {
        name: "Regular Slice",
        price: "$2.85",
      },
      {
        name: "Sicilian Slice",
        price: "$2.85",
      },
      {
        name: "Marinara 7\" Pie",
        price: "$5.75",
      },
      {
        name: "Toppings",
        description: "Crushed tomatoes, fresh garlic, onion, peppers, black olives.",
        price: "$1.00",
      },
    ],
  },
  {
    id: "calzones",
    label: "Calzones",
    items: [
      {
        name: "Regular",
        description: "Ham, mozzarella & ricotta cheese.",
        price: "$10.75",
      },
      {
        name: "Jumbo",
        description: "Ham, mozzarella & ricotta cheese.",
        price: "$19.00",
      },
      {
        name: "Extra Filling",
        variants: [
          { label: "Regular", price: "$2.50" },
          { label: "Jumbo", price: "$3.50" },
        ],
      },
    ],
  },
  {
    id: "hand-rolls",
    label: "Hand Rolls",
    items: [
      {
        name: "Sausage Rolls",
        price: "$6.50",
      },
      {
        name: "Pepperoni Rolls",
        price: "$6.50",
      },
    ],
  },
  {
    id: "cold-subs",
    label: "Cold Subs",
    description:
      "All subs prepared with lettuce, tomato, onion, hot peppers, oil, vinegar, salt & oregano. Ask for mayonnaise.",
    items: [
      { name: "Ham, Cheese, Salami", price: "$6.50" },
      { name: "Ham, Cheese, Cappicola", price: "$6.50" },
      { name: "Ham, Cheese", price: "$6.50" },
      { name: "Cheese & Pepperoni", price: "$6.50" },
      { name: "Cheese", price: "$6.00" },
      { name: "Tuna Fish", price: "$7.00" },
      { name: "Turkey (Breast)", price: "$6.50" },
      {
        name: "Italian Hero",
        description: "Ham, Cheese, Salami, Cappicola",
        price: "$7.00",
      },
      { name: "Cold Sub Parmigiana", price: "$8.00" },
      { name: "Roast Beef", price: "$7.75" },
      { name: "Chicken, Lettuce, Tomato", price: "$8.25" },
      {
        name: "Party Subs",
        description: "3 foot & 6 foot subs available — we specialize in party orders!",
        price: "$16.00 / foot",
        note: "Any cold cuts · For parties only",
      },
    ],
  },
  {
    id: "hot-heroes",
    label: "Hot Heroes 10\"",
    description: "Served in a platter for +$1. Comes with a side of bread.",
    items: [
      { name: "Meatball", price: "$9.50" },
      { name: "Meatball Parmigiana", price: "$10.50" },
      { name: "Sausage", price: "$9.50" },
      { name: "Sausage Parmigiana", price: "$10.50" },
      { name: "Sausage & Peppers", price: "$10.50" },
      { name: "Sausage, Peppers & Onions", price: "$11.25" },
      { name: "Sausage & Peppers Parmigiana", price: "$11.50" },
      { name: "Eggs & Peppers", price: "$10.00" },
      { name: "Eggs & Pepperoni", price: "$10.00" },
      { name: "Eggs & Sausage", price: "$10.50" },
      { name: "Eggplant Parmigiana", price: "$10.75" },
      { name: "Chicken Parmigiana", price: "$12.00" },
      { name: "Veal Parmigiana", price: "$13.00" },
      { name: "Veal & Peppers", price: "$13.00" },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      { name: "Antipasto", price: "$8.50" },
      { name: "Tossed Salad", price: "$4.50" },
      { name: "Tuna Salad", price: "$7.75" },
      { name: "Chicken Cutlet Salad", price: "$8.50" },
      { name: "Turkey Salad", price: "$7.25" },
      { name: "Cheese Salad", price: "$5.50" },
    ],
  },
  {
    id: "baked-dishes",
    label: "Baked Dishes 7\"",
    items: [
      { name: "Homemade Lasagna", price: "$12.00" },
      { name: "Manicotti (3 Jumbo)", price: "$13.00" },
      { name: "Baked Ziti", price: "$12.00" },
      { name: "Baked Ziti w/ Chicken", price: "$14.50" },
      { name: "Baked Ziti w/ Meatballs (2)", price: "$14.50" },
      { name: "Baked Ziti w/ Sausage", price: "$13.50" },
      { name: "Baked Ziti w/ Veal", price: "$15.50" },
      { name: "Stuffed Shells (4)", price: "$12.00" },
      { name: "Cheese or Meat Ravioli (6 Large)", price: "$13.00" },
      { name: "Garlic Bread", price: "$4.50" },
      { name: "Garlic Bread w/ Mozzarella", price: "$5.00" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta 7\"",
    description: "Comes with your choice of penne, ziti, or linguine.",
    items: [
      { name: "Pasta w/ Sauce", price: "$11.00" },
      { name: "Pasta w/ Garlic & Oil", price: "$11.00" },
      { name: "Pasta w/ Meatballs (2)", price: "$13.50" },
      { name: "Pasta w/ Sausage", price: "$12.50" },
      { name: "Pasta w/ Chicken Parm", price: "$14.00" },
      { name: "Pasta w/ Veal Parm", price: "$15.00" },
      { name: "Pasta w/ Meat Sauce", price: "$13.00" },
      { name: "Cavatelli w/ Broccoli", price: "$13.00" },
      { name: "Gnocchi or Cavatelli w/ Sauce", price: "$13.00", description: "With Meat Sauce, Alfredo Sauce, or Vodka Sauce +$2.50" },
    ],
  },
  {
    id: "seafood-pasta",
    label: "Seafood & Pasta",
    items: [
      { name: "Linguine w/ Shrimp", price: "$17.00", description: "Your choice of alfredo or marinara sauce." },
      { name: "Linguine w/ Baby Clams (shucked)", price: "$13.00", description: "Your choice of alfredo or marinara sauce." },
      { name: "Linguine w/ Clams (whole)", price: "$16.00", description: "Your choice of alfredo or marinara sauce." },
      { name: "Linguine w/ Mussels", price: "$16.00", description: "Your choice of alfredo or marinara sauce." },
      { name: "Mussels (12 half shells)", price: "$12.00", description: "Your choice of sweet, medium, or hot marinara sauce." },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Garlic Knots", variants: [
        { label: "Seven", price: "$4.50" },
        { label: "Twelve", price: "$6.50" },
      ] },
      { name: "Side of Meatballs (3)", price: "$8.00" },
      { name: "Side of Sausage", price: "$7.50" },
      { name: "Side of Sauce (4 oz)", price: "$1.75" },
    ],
  },
];

/** Items to feature on the homepage — pulled from the real menu. */
export const FEATURED_ITEMS = [
  {
    name: "Cheese Pizza",
    description: "A classic favorite, loaded with melted cheese.",
    price: "From $15.00",
    image: "/images/cheese_pizza.jpeg",
    imageAlt: "Fresh cheese pizza at Rose's Pizza",
  },
  {
    name: "Rose's Special",
    description: "Sicilian square pizza with mozzarella, tomato sauce, pepperoni, onions, mushrooms, green peppers, and black olives.",
    price: "From $25.00",
    image: "/images/sicilian_rose_special.jpeg",
    imageAlt: "Rose's Special pizza",
  },
  {
    name: "Italian Hero",
    description: "Toasted bread, ham, cheese, salami, and capicola. Subs Prepared with lettuce, tomato, onion, banana hot peppers, oil, vinegar and oregano.",
    price: "$10.25",
    image: "/images/DSC0305.jpg",
    imageAlt: "Italian hero sub",
  },
  {
    name: "Chicken Parmigiana",
    description: "A hot hero classic — crispy chicken with marinara and melted mozzarella.",
    price: "$12.00",
    image: "/images/chicken_parm_sub.jpeg",
    imageAlt: "Hot hero sub with melted cheese",
  },
];
