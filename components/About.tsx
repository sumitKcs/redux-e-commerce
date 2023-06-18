import Link from "next/link";

const About = () => {
  return (
    <main className="w-screen h-full flex justify-center text-center">
      <div className="flex flex-col justify-start items-center p-10 lg:p-28 gap-5">
        <div className="text-2xl">Hey! Glad to See You Here.</div>
        <div className="flex flex-col text-lg tracking-wider">
          <p>This E-commerce project is made for educational purpose only. </p>
          <p>
            Any user activities or orders made here is only demonstrating the
            general flow of an E-commerce platforms.
          </p>
          <p>
            The payment gateway used here is running in a test environment and
            will not debit any actual money.
          </p>
        </div>
        <div className="font-bold text-lg"> Connect with Me:</div>
        <div className="flex justify-start gap-2 text-blue-700 underline ">
          <Link
            href="https://linkedin.com/in/sumitssr"
            className="hover:text-purple-700"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/risesumit"
            className="hover:text-purple-700"
          >
            Twitter
          </Link>
          <Link
            href="https://github.com/sumitkcs"
            className="hover:text-purple-700"
          >
            Github
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
