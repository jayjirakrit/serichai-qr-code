const WarningCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="border-l-4 p-3 mb-4 rounded-r bg-[#FEFCE8] border-l-[#FBCC11]">
      <p className="font-semibold text-[#23425D]">{title}</p>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
};

export default WarningCard;
