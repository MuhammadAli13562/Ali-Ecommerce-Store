"use server";

import { SanityValues } from "../sanity/sanity.config";

const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

export async function CreateStripeSession(
  CartItems: SanityValues["Product"][]
) {
  //const PriceIds = await GetAllPriceIDs(CartItems);
  const line_items = CartItems.map((Item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: Item.title,
      },
      unit_amount: Item.price && Item.price * 100,
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: [...line_items],
    mode: "payment",
    success_url: `http://localhost:3000/`,
    cancel_url: `http://localhost:3000/`,
  });
  return session;
}

export async function GetAllPriceIDs(CartItems: SanityValues["Product"][]) {
  const priceIdsPromises = CartItems.map(async (Item) => {
    const PriceObject = await stripe.prices.create({
      currency: "usd",
      unit_amount: Item.price && Item.price * 100,
      product_data: {
        name: Item.title,
      },
    });

    console.log("PriceObject : ", PriceObject);

    return PriceObject.id;
  });

  const priceIds = await Promise.all(priceIdsPromises);
  console.log("priceIds resolved :", priceIds);

  return priceIds;
}
