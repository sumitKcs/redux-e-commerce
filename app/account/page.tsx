"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Account = () => {
  const { data: session } = useSession();
  const userFullName = session?.user?.name;
  const userFirstName = userFullName?.split(" ")[0];
  const { data: orders, error, isLoading } = useSWR("/api/orders", fetcher);
  console.log("orders data: ", orders);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-screen px-5 md:w-[80%] lg:w-[50%]">
        <div className="font-bold mt-5 mb-5 flex justify-center items-center">{`Hello ${userFirstName}`}</div>
        <div className="flex justify-center items-center bg-[#e6e6e6] font-bold text-sm py-3 rounded-md">
          <p>My Orders</p>
        </div>
        {orders?.map((order: any) => {
          let orderedAt = new Date(order.createdAt).toDateString();
          return (
            <div className="border border-gray-200 h-32 flex justify-between items-center p-6">
              {order.items.map((item: any) => (
                <>
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
                </>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Account;
