import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const AdjustItem = ({ title, desc, img }: { title: string; desc: string; img: string | StaticImport }) => {
  return (
    <div className="flex gap-3 items-start border-b pb-2 border-b-[#E2E8F0]">
      <div className="relative w-40 h-40 rounded overflow-hidden shrink-0 bg-gray-100">
        {typeof img !== "string" ? (
          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="100px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">{img || "?"}</div>
        )}
      </div>
      <div>
        <p className="font-semibold text-[#23425D]">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default AdjustItem;
