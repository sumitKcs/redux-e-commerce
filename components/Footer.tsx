import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className="w-full bg-[#F9F9F9] grid grid-cols-2 lg:grid-cols-4 px-4 py-12 gap-y-10 text-sm">
      <div className="flex flex-col gap-4">
        <div className="font-bold mb-2">Let Us Help</div>
        <Link href="">Help Center</Link>
        <Link href="">Track My Order</Link>
        <Link href="">Cancel My Order</Link>
        <Link href="">Return My Order</Link>
        <Link href="">Request a Product</Link>
        <Link href="">Report a Bug</Link>
        <Link href="">Contact Us</Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold mb-2">Our Policies</div>
        <Link href="">Shipping & Delivery</Link>
        <Link href="">Returns, Refunds & Cancellations</Link>
        <Link href="">Terms & Conditions</Link>
        <Link href="">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 col-span-2 md:col-span-1 ">
        <div className="font-bold">Community</div>
        <Link href="/">Headphone Zone Merchandise</Link>
        <Link href="/">Trade-Up Program</Link>
        <Link href="/">The Insider</Link>
      </div>
      <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
        <div className="font-bold ">Beware Of Fakes</div>
        <div>
          Don't get fooled. Look out for smuggled & refurbished headphones while
          shopping online. Headphone Zone is a professionally run business &
          deals only in 100% genuine headphones. <br />
          <Link href="/" className=" underline">
            Learn More
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 col-span-2">
        <div className="flex gap-8 text-2xl">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaYoutube />
          </div>
        </div>
        <div className="w-full">
          © {year}, Headphone Zone. Owned, Operated & Funded by Proud Indians
          Everything on this website has been made with a lot of love and hard
          work. If you copy anything we will hunt you down. We mean it.
        </div>
      </div>
    </section>
  );
};

export default Footer;
