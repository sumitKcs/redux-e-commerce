"use client";

import { TextField } from "@mui/material";

const Newsletter = () => {
  return (
    <div className="w-screen flex flex-col lg:flex-row justify-between items-center gap-10 bg-gray-100 lg:bg-white py-5">
      <div className="w-full">
        <img
          src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Newsletter_1600x_42f97b91-a2b6-4d94-8621-f17887f460b6.jpg?v=1677067100&amp;width=1500"
          alt="image with headphones"
          srcSet="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Newsletter_1600x_42f97b91-a2b6-4d94-8621-f17887f460b6.jpg?v=1677067100&amp;width=352 352w, https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Newsletter_1600x_42f97b91-a2b6-4d94-8621-f17887f460b6.jpg?v=1677067100&amp;width=832 832w, https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Newsletter_1600x_42f97b91-a2b6-4d94-8621-f17887f460b6.jpg?v=1677067100&amp;width=1200 1200w"
          width="1500"
          height="1000"
          loading="lazy"
          sizes="(max-width: 999px) 100vw, min(50vw, 1440px / 2)"
        ></img>
      </div>
      <div className="w-[90%]">
        <div className="w-full lg:w-[70%] flex flex-col justify-start gap-3 lg:mr-24 ">
          <div className="text-4xl lg:text-5xl font-extrabold tracking-wide opacity-90">
            Subscribe to our Newsletter
          </div>
          <p className="text-sm">
            Sign up to join 1,00,000+ audiophiles & stay in the know with hacks,
            new launches, curated playlists & once-in-a-lifetime deals.
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-5 opacity-80">
            <TextField
              className="w-full border border-gray-100 py-3 foucs"
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              placeholder="E-mail"
            />
            <button className="w-full bg-blue-600 flex justify-center items-center gap-3  py-4 rounded-full tracking-wider">
              <span>
                <svg
                  className="text-white"
                  role="presentation"
                  fill="none"
                  focusable="false"
                  strokeWidth="1.5"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M1.77 18.063a3.586 3.586 0 0 0 3.174 3.11c2.278.24 4.637.49 7.056.49 2.417 0 4.778-.252 7.056-.49a3.584 3.584 0 0 0 3.175-3.11c.243-1.96.483-3.987.483-6.063 0-2.074-.24-4.102-.483-6.063a3.586 3.586 0 0 0-3.175-3.112c-2.278-.236-4.639-.487-7.056-.487s-4.778.252-7.056.49a3.583 3.583 0 0 0-3.175 3.11c-.243 1.96-.483 3.988-.483 6.062 0 2.074.24 4.102.483 6.063Z"
                    fill="currentColor"
                    fillOpacity=".12"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="m1.817 5.493 8.06 6.356a3.428 3.428 0 0 0 4.245 0l8.06-6.356"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="text-white font-bold">subscribe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
