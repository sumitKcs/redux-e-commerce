const getPriceFormat = (price: number, currency: string) => {
  const priceArray = price?.toString().split("");
  let result;
  let currencySymbol = "₹";
  if (priceArray?.length === 4) {
    priceArray[0] = priceArray[0] + ",";
    result = priceArray?.join("");
  }
  if (priceArray?.length === 5) {
    priceArray[1] = priceArray[1] + ",";
    result = priceArray?.join("");
  }

  if (priceArray?.length === 6) {
    priceArray[0] = priceArray[0] + ",";
    priceArray[2] = priceArray[2] + ",";

    result = priceArray?.join("");
  }

  //currency symbol
  if (currency === "INR" || currency === "inr") currencySymbol = "₹";
  if (currency === "USD" || currency === "usd") currencySymbol = "$";
  if (currency === "EUR" || currency === "eur") currencySymbol = "€";

  return currencySymbol + " " + result;
};

export default getPriceFormat;

// 1, 699;
// 16, 699;
// 1, 66, 699;
