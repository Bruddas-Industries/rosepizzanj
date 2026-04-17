export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  description?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "pizza",
    label: "Pizza",
    description: "Small · Large · Sicilian",
    items: [
      {
        name: "Cheese",
        price: "$12.00 / $13.00 / $17.00",
        note: "Add your favorite topping for only $1.75 / $2.00 / $2.50",
      },
      {
        name: "Toppings",
        description:
          "Anchovies, fresh garlic, meatball, mushroom, onion, pepperoni, peppers, sausage, black olives.",
        price: "$1.75 / $2.00 / $2.50",
      },
      {
        name: "Special Toppings",
        description:
          "Chicken, Broccoli, Eggplant, Ricotta & Mozzarella.",
        price: "$2.00 / $3.00 / $4.00",
      },
      {
        name: "Rose's Special",
        price: "$20.00 / $21.00 / $25.00",
      },
    ],
  },
  {
    id: "slices",
    label: "Pizza by the Slice",
    items: [
      {
        name: "Regular Slice",
        price: "$2.00",
      },
      {
        name: "Sicilian Slice",
        price: "$2.00",
      },
      {
        name: "Manhattan Slice",
        price: "$4.00",
      },
    ],
  },
  {
    id: "calzones",
    label: "Calzones",
    items: [
      {
        name: "Regular – Ham, Mozzarella & Ricotta Cheese",
        price: "$7.00",
      },
      {
        name: "Jumbo – Ham, Mozzarella & Ricotta Cheese",
        price: "$15.00",
      },
      {
        name: "Sausage Roll",
        price: "$4.25",
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
    label: "Hot Heroes",
    items: [
      { name: "Meatball", price: "$6.50" },
      { name: "Meatball Parmigiana", price: "$7.00" },
      { name: "Sausage", price: "$6.50" },
      { name: "Sausage Parmigiana", price: "$7.00" },
      { name: "Sausage & Peppers", price: "$7.00" },
      { name: "Eggs & Peppers", price: "$6.50" },
      { name: "Eggs & Pepperoni", price: "$6.50" },
      { name: "Eggs & Sausage", price: "$6.50" },
      { name: "Eggplant Parmigiana", price: "$7.50" },
      { name: "Chicken Parmigiana", price: "$8.25" },
      { name: "Veal Parmigiana", price: "$9.25" },
      { name: "Veal Peppers", price: "$9.25" },
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
    id: "dinners",
    label: "Dinners",
    items: [
      { name: "Lasagna", price: "$8.00" },
      { name: "Manicotti", price: "$7.00" },
      { name: "Baked Ziti", price: "$8.00" },
      { name: "Baked Ziti w/ Chicken", price: "$10.00" },
      { name: "Baked Ziti w/ Meatball", price: "$9.00" },
      { name: "Baked Ziti w/ Veal", price: "$10.25" },
      { name: "Baked Ziti w/ Sausage", price: "$9.00" },
      { name: "Stuffed Shells", price: "$8.00" },
      { name: "Cheese or Meat Ravioli", price: "$8.50" },
      { name: "Spaghetti w/ Sauce", price: "$7.00" },
      { name: "Spaghetti w/ Garlic & Oil", price: "$7.00" },
      { name: "Spaghetti w/ Meatball", price: "$8.50" },
      { name: "Spaghetti w/ Red Clam Sauce", price: "$9.00" },
      { name: "Mussels", price: "$7.25" },
      { name: "Pasta w/ Vodka Sauce", price: "$8.50" },
      { name: "Garlic Bread", price: "$2.75" },
      { name: "Garlic Bread w/ Mozzarella", price: "$3.25" },
      { name: "Side of Meatballs", price: "$1.50 each" },
    ],
  },
];

/** Items to feature on the homepage — pulled from the real menu. */
export const FEATURED_ITEMS = [
  {
    name: "Cheese Pizza",
    description: "A classic favorite, loaded with melted cheese.",
    price: "From $12.00",
    image: "/images/cheese_pizza.jpeg",
    imageAlt: "Fresh cheese pizza at Rose's Pizza",
  },
  {
    name: "Rose's Special",
    description: "Sicilian square pizza with mozzarella, tomato sauce, pepperoni, onions, mushrooms, green peppers, and black olives.",
    price: "From $20.00",
    image: "/images/sicilian_rose_special.jpeg",
    imageAlt: "Rose's Special pizza",
  },
  {
    name: "Italian Hero",
    description: "Toasted bread, ham, cheese, salami, and capicola. Subs Prepared with lettuce, tomato, onion, banana hot peppers, oil, vinegar and oregano.",
    price: "$7.00",
    image: "/images/DSC0305.jpg",
    imageAlt: "Italian hero sub",
  },
  {
    name: "Chicken Parmigiana",
    description: "A hot hero classic — crispy chicken with marinara and melted mozzarella.",
    price: "$8.25",
    image: "/images/chicken_parm_sub.jpeg",
    imageAlt: "Hot hero sub with melted cheese",
  },
];
