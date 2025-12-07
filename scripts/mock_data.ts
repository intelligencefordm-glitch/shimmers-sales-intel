import fs from "fs";
import path from "path";

type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  firstVisit: string;
};

type Item = {
  id: string;
  name: string;
  category: "food" | "alcohol";
  price: number;
};

type Transaction = {
  id: string;
  date: string;
  customerId: string;
  outlet: "club" | "restaurant";
  billAmount: number;
  alcoholAmount: number;
  foodAmount: number;
  numGuests: number;
};

const customers: Customer[] = [];
const items: Item[] = [
  { id: "itm1", name: "Whisky - Premium", category: "alcohol", price: 4500 },
  { id: "itm2", name: "Cocktail - Shimmers Special", category: "alcohol", price: 600 },
  { id: "itm3", name: "Paneer Tikka", category: "food", price: 350 },
  { id: "itm4", name: "Prawns", category: "food", price: 550 },
];

for (let i = 1; i <= 120; i++) {
  customers.push({
    id: `cust_${i}`,
    name: `Customer ${i}`,
    phone: `9000000${String(100 + i).slice(-3)}`,
    email: `cust${i}@example.com`,
    firstVisit: new Date(
      Date.now() - Math.floor(Math.random() * 1000) * 86400000
    ).toISOString(),
  });
}

const transactions: Transaction[] = [];

for (let i = 0; i < 800; i++) {
  const cust = customers[Math.floor(Math.random() * customers.length)];
  const date = new Date(
    Date.now() - Math.floor(Math.random() * 120) * 86400000
  );

  const numItems = 1 + Math.floor(Math.random() * 6);
  let billAmount = 0;
  let alcoholAmount = 0;
  let foodAmount = 0;

  for (let j = 0; j < numItems; j++) {
    const it = items[Math.floor(Math.random() * items.length)];
    billAmount += it.price;
    if (it.category === "alcohol") alcoholAmount += it.price;
    else foodAmount += it.price;
  }

  const outlet: "club" | "restaurant" =
    Math.random() < 0.7 ? "club" : "restaurant";

  transactions.push({
    id: `txn_${i}`,
    date: date.toISOString(),
    customerId: cust.id,
    outlet,
    billAmount,
    alcoholAmount,
    foodAmount,
    numGuests: 1 + Math.floor(Math.random() * 6),
  });
}

fs.writeFileSync(
  path.join(process.cwd(), "mock_customers.json"),
  JSON.stringify(customers, null, 2)
);

fs.writeFileSync(
  path.join(process.cwd(), "mock_transactions.json"),
  JSON.stringify(transactions, null, 2)
);

fs.writeFileSync(
  path.join(process.cwd(), "mock_items.json"),
  JSON.stringify(items, null, 2)
);

console.log("Mock data generated successfully.");
