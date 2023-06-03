import Image from "next/image";

const OrdersList = ({orders}: {orders: any}) => {
  
  return (
    <div className="flex flex-col">
      {orders?.map((order: any) => {
        let orderedAt = new Date(order.createdAt).toDateString();
        return (
          <div className="border border-gray-200 h-auto flex flex-col p-6 gap-4">
            {order.items.map((item: any) => (
              <div className="flex justify-between">
                <div>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={order.id}
                  />
                </div>
                <div className="">
                  <div>Quantity: {item.quantity}</div>
                  <div>Shipping Charges: ₹{order.shipping_cost / 100}</div>
                  <div>Amount: ₹{order.total_amount / 100}</div>
                  <div>Orderd at: {orderedAt}</div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
