import StepCard from "@/components/StepCard";
import QRCodeImg01 from "@/assets/qr_vest_01.png";
import QRCodeImg02 from "@/assets/qr_vest_02.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#23425D]">คำแนะนำ Ch.Paisarn</h1>
        </div>

        {/* Welcome / General Info */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#0360AE]/20">
          <p className="text-lg text-gray-700 mb-4">
            ยินดีต้อนรับสู่หน้าคำแนะนำของ Ch.Paisarn ที่นี่คุณจะพบกับแนวทางและขั้นตอนโดยละเอียดเพื่อให้มั่นใจว่าคุณใช้และบำรุงรักษาผลิตภัณฑ์
            Ch.Paisarn ได้อย่างถูกต้อง กรุณาปฏิบัติตามคำแนะนำอย่างเคร่งครัดเพื่อประสิทธิภาพสูงสุดและอายุการใช้งานที่ยาวนานของอุปกรณ์ของคุณ
          </p>
          <p className="text-lg text-gray-700">
            หากมีข้อสงสัยหรือต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมสนับสนุนของเราได้เลย เราพร้อมช่วยให้คุณได้รับประสบการณ์ที่ดีที่สุดกับผลิตภัณฑ์
            Ch.Paisarn
          </p>
        </div>

        {/* QR Code Scanning Instructions Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-[#23425D]">📲 วิธีการสแกน QR Code</h2>
            <span className="bg-[#FBCC11] text-[#23425D] text-xs font-bold px-3 py-1 rounded-full">คู่มือฉบับย่อ</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              number="1"
              desc="เปิดแอปกล้องหรือโปรแกรมสแกน QR บนสมาร์ทโฟนของคุณ"
              imgPlaceholder={QRCodeImg01}
            />
            <StepCard
              number="2"
              desc="เล็งกล้องไปที่ QR Code ที่แสดงบนผลิตภัณฑ์หรือหน้าจอ"
              imgPlaceholder={QRCodeImg02}
            />
          </div>
          <div className="mt-6 p-4 bg-[#F5F9FF] border-l-4 border-[#0360AE] rounded-r-lg">
            <p className="text-sm text-[#23425D]">
              💡 <span className="font-semibold">เคล็ดลับ:</span> ตรวจสอบให้มีแสงสว่างเพียงพอ และถือกล้องให้นิ่งเพื่อการสแกนที่รวดเร็ว
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>© Ch.Paisarn - สงวนลิขสิทธิ์</p>
        </div>
      </div>
    </main>
  );
}
