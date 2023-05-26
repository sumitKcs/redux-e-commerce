"use client";

import useOrderData from "@/lib/useOrderData";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Account = () => {
  const { data: session } = useSession();
  const userFullName = session?.user?.name;
  const userFirstName = userFullName?.split(" ")[0];
  const orders = useOrderData();

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-screen px-5 md:w-[80%] lg:w-[50%]">
        <div className="font-bold mt-5 mb-5 flex justify-center items-center">{`Hello ${userFirstName}`}</div>
        <div className="flex justify-center items-center bg-[#e6e6e6] font-bold text-sm py-3 rounded-md">
          <p>My Orders</p>
        </div>
        {orders?.map((order) => (
          <div className="border border-gray-200 h-32 flex justify-between items-center p-6">
            <div>
              {order.images.map((image: string) => (
                <Image src={image} width={100} height={100} alt={order.id} />
              ))}
            </div>
            <div className="">
              <div>Amount: ₹{order.amount}</div>
              <div>Shipping Charges: ₹{order.amount_shipping}</div>
              <div>
                Orderd at: {order.timestamp.toDate().toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Account;
