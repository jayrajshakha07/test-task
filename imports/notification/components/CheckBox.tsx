const ChecKBox = () => {
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600" />
        <div className="absolute top-0.5 left-1 w-[18px] h-[19px] bg-white rounded-full transition-transform peer-checked:translate-x-full" />
      </label>
    </div>
  );
};
export default ChecKBox;
