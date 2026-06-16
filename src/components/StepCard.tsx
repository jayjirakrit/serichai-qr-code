import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const StepCard = ({ number, desc, imgPlaceholder }: { number: string; desc: string; imgPlaceholder: string | StaticImport }) => {
  return (
    <div className="border rounded-lg p-3 bg-[#F5F9FF] border-[#0360AE]">
      <div className="relative h-80 rounded overflow-hidden bg-gray-200 mb-2">
        {typeof imgPlaceholder !== "string" ? (
          <Image
            src={imgPlaceholder}
            alt={`ขั้นตอนที่ ${number}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">{imgPlaceholder || "No image"}</div>
        )}
      </div>
      <div>
        <span className="font-bold text-lg inline-block px-2 rounded mr-2 bg-[#FBCC11] text-[#23425D]">{number}</span>
        <span className="text-sm">{desc}</span>
      </div>
    </div>
  );
};

export default StepCard;
