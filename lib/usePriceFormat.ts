const usePriceFormat = ({price, currency}: {price: number, currency: string}) => {

  const priceArray = price.toString().split("");
  let result;
  if (priceArray.length === 4) {
    priceArray[0] = priceArray[0] + ",";
    result = priceArray.join("");
  }
  if (priceArray.length === 5) {
    priceArray[1] = priceArray[1] + ",";
    result = priceArray.join("");
  }

  if (priceArray.length === 6) {
    priceArray[0] = priceArray[0] + ",";
    priceArray[2] = priceArray[2] + ",";

    result = priceArray.join("");
  }

  return currency + result;
};

export default usePriceFormat;

// 1, 699;
// 16, 699;
// 1, 66, 699;
