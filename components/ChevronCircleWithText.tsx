import Link from "next/link";

const ChevronCircleWithText = ({ text }: { text: string }) => {
  return (
    <div>
      <div
        className={`flex justify-start lg:justify-end items-center gap-5 py-5`}
      >
        <div className={`group w-fit h-7 flex items-center gap-2`}>
          {text && (
            <Link href="/view-all">
              <span className="text-sm group-hover:underline">{text}</span>
            </Link>
          )}
          <span className="group-hover:bg-black group-hover:text-white rounded-full text-black bg-gray-200">
            <svg
              role="presentation"
              focusable="false"
              width="5"
              height="8"
              className="w-6 h-6  p-2 "
              viewBox="0 0 5 8"
            >
              <path
                d="m.75 7 3-3-3-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChevronCircleWithText;
