function Skeleton() {
  return (
    <div className="w-full h-[30rem] border border-gray-300 rounded-lg px-2 py-2 object-contain flex flex-col justify-between items-center gap-2 bg-white animate-pulse">
      <div className="w-full h-full flex justify-center items-center ">
        <div className=" w-80 h-80 p-2 bg-gray-300"></div>
      </div>

      <div className="w-full flex flex-col justify-center items-center text-center gap-2">
        <h4 className="text-xs w-full h-4 bg-gray-300 "></h4>
        <h5 className="text-xs w-[30%] h-4 bg-gray-300"></h5>
        <button className="w-full h-10 bg-gray-300 py-2 rounded-lg"></button>
      </div>
    </div>
  );
}

export default Skeleton;
