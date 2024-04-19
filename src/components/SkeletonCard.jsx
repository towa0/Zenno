const SkeletonCard = () => {
  return (
    <div className="bg-background/30 backdrop-blur-md flex flex-col justify-between p-6 rounded-xl border-2 border-gray-300 shadow-lg animate-pulse">
      <div>
        <div className="h-6 bg-gray-300 rounded my-3 mx-auto w-3/4"></div>
        <div className="w-auto h-40 bg-gray-300 rounded-lg mb-4 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto mb-2"></div>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between items-center py-1">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-mainBlue rounded w-1/5"></div>
          </li>
          <li className="flex justify-between items-center py-1">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-mainBlue rounded w-1/5"></div>
          </li>
          <li className="flex justify-between items-center py-1">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-mainBlue rounded w-1/5"></div>
          </li>
          <li className="flex justify-between items-center py-1">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-mainBlue rounded w-1/5"></div>
          </li>
        </ul>
      </div>
      <div className="pt-8">
        <div className="h-10 bg-mainBlue rounded w-3/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
