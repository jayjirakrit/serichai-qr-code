// app/vests/VES00001/page.tsx
import Img001 from "@/app/vests/VES00001/_assets/ves00001-0-0.jpg";
import Img00311 from "@/app/vests/VES00001/_assets/ves00001-3.1-1.jpg";
import Img00312 from "@/app/vests/VES00001/_assets/ves00001-3.1-2.jpg";
import Img00313 from "@/app/vests/VES00001/_assets/ves00001-3.1-3.jpg";
import Img00314 from "@/app/vests/VES00001/_assets/ves00001-3.1-4.jpg";
import Img00321 from "@/app/vests/VES00001/_assets/ves00001-3.2-1.jpg";
import Img00322 from "@/app/vests/VES00001/_assets/ves00001-3.2-2.jpg";
import Img00323 from "@/app/vests/VES00001/_assets/ves00001-3.2-3.jpg";
import Img00324 from "@/app/vests/VES00001/_assets/ves00001-3.2-4.jpg";
import Img00331 from "@/app/vests/VES00001/_assets/ves00001-3.3-1.jpg";
import Img00332 from "@/app/vests/VES00001/_assets/ves00001-3.3-2.jpg";
import Img003511 from "@/app/vests/VES00001/_assets/ves00001-3.5-1.1.jpg";
import Image from "next/image";
import StepCard from "@/components/StepCard";
import AdjustItem from "@/components/AdjustItem";
import WarningCard from "@/components/WarningCard";

const Vest00001Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 text-center border-b-4 border-b-[#0360AE]">
          <p className="text-sm uppercase tracking-wide text-gray-500">CH.PAISARN · HIGH QUALITY MILITARY EQUIPMENT</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[#23425D]">คู่มือการใช้งาน</h1>
          <h2 className="text-2xl font-semibold mt-1 text-[#0360AE]">เสื้อเกราะป้องกันกระสุน แบบปลดเร็ว</h2>
        </div>

        {/* Main product image – FIXED: aspect-ratio container, object-contain */}
        <div className="relative w-full max-w-3xl mx-auto aspect-4/3 rounded-xl overflow-hidden mb-8 border border-gray-200 bg-white">
          <Image
            src={Img001}
            alt="เสื้อเกราะป้องกันกระสุน แบบปลดเร็ว"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Important warnings */}
        <section className="rounded-xl p-6 mb-8 bg-[#EFF6FF] border-l-8 border-l-[#0360AE]">
          <h3 className="text-xl font-bold flex items-center gap-2 text-[#23425D]">
            <span>⏱</span> สิ่งสำคัญที่ต้องรู้ก่อนใช้งาน
          </h3>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li>
              1. <strong>ต้องใช้แผ่นเกราะอ่อนและแผ่นเกราะแข็งร่วมกันทุกครั้ง</strong> เพื่อให้ได้ระดับการป้องกันตามที่กำหนด
            </li>
            <li>
              2. หัน <strong>ด้านป้องกันกระสุน</strong> ของแผ่นเกราะแข็งออกจากร่างกายเสมอ หากใส่กลับด้าน ระดับการป้องกันอาจลดลง
            </li>
            <li>
              3. ก่อนใช้งานทุกครั้ง ต้องเลือกขนาดเสื้อเกราะให้เหมาะกับสรีระของผู้สวมใส่ และปรับเสื้อเกราะให้พอดี
              เพื่อให้แผ่นเกราะอยู่ในตำแหน่งที่ถูกต้องและครอบคลุมอวัยวะสำคัญ
            </li>
            <li>
              4. หากแผ่นเกราะถูกยิง ตกกระแทกรุนแรง ชำรุด หรือหมดอายุ <strong>ต้องหยุดใช้งานทันที</strong> และเปลี่ยนแผ่นเกราะใหม่
            </li>
          </ul>
        </section>

        {/* 1. Protection capability */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">1. ขีดความสามารถในการป้องกัน</h3>
          <p className="text-gray-700 mb-4">
            เสื้อเกราะป้องกันกระสุน แบบปลดเร็ว เป็นเสื้อเกราะรูปแบบ <strong>ICW (In Conjunction With)</strong> ซึ่งต้องใช้งานแผ่นเกราะอ่อน (Soft
            Armor) ร่วมกับแผ่นเกราะแข็ง (Hard Plate) ตามที่กำหนด เพื่อให้ได้ระดับการป้องกันตามที่ระบุ การใช้งานเพียงส่วนใดส่วนหนึ่ง
            อาจทำให้ระดับการป้องกันลดลง
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4 bg-[#F5F9FF] border-[#0360AE]">
              <h4 className="text-xl font-semibold text-[#23425D]">แผ่นเกราะอ่อน</h4>
              <p className="text-lg font-mono text-[#0360AE]">NIJ Level IIIA</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>9 mm</li>
                <li>.44 Magnum</li>
                <li>สะเก็ดระเบิด</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-[#F5F9FF] border-[#0360AE]">
              <h4 className="text-xl font-semibold text-[#23425D]">แผ่นเกราะแข็ง</h4>
              <p className="text-lg font-mono text-[#0360AE]">NIJ Level III++</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>7.62 x 51 mm FMJ</li>
                <li>7.62 x 39 mm MSC (AK)</li>
                <li>5.56 x 45 mm M193</li>
                <li>5.56 x 45 mm M855 / SS109</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">*มาตรฐาน NIJ STD 0101.04 / 0101.06</p>
        </section>

        {/* 2. Key features */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">2. คุณสมบัติหลัก</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-3xl">⚡</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">พื้นที่ป้องกันครอบคลุมรอบลำตัว</h4>
                <p className="text-gray-600 text-sm">แผ่นเกราะอ่อนออกแบบให้ช่วยปกป้องบริเวณด้านหน้า ด้านหลัง และด้านข้างของลำตัว</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">⚡</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">มีระบบปลดเร็ว</h4>
                <p className="text-gray-600 text-sm">ช่วยให้สวมใส่และถอดเสื้อเกราะได้สะดวก และถอดออกได้อย่างรวดเร็วในสถานการณ์ฉุกเฉิน</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">↔</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">ปรับขนาดเข้ากับสรีระผู้ใช้</h4>
                <p className="text-gray-600 text-sm">ปรับความสูงบริเวณไหล่และความกระชับช่วงลำตัว พร้อมช่วยให้เคลื่อนไหวได้คล่องตัว</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">▦</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">รองรับการติดตั้งอุปกรณ์เสริม</h4>
                <p className="text-gray-600 text-sm">รองรับการติดตั้งกระเป๋าและอุปกรณ์เสริมผ่านระบบ MOLLE</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Usage instructions */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">3. วิธีการใช้งาน</h3>

          {/* 3.1 How to wear/remove */}
          <h4 className="text-xl font-semibold mt-4 mb-2 text-[#0360AE]">3.1 วิธีสวมใส่และถอด</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <StepCard
              number="1"
              desc="ถือเสื้อเกราะหันด้านหน้าเข้าหาตัว เปิดสายรัดไหล่ทั้งสองข้าง"
              imgPlaceholder={Img00311}
            />
            <StepCard
              number="2"
              desc="สวมผ่านศีรษะ ให้แผ่นเกราะด้านหน้าอยู่บนหน้าอก"
              imgPlaceholder={Img00312}
            />
            <StepCard
              number="3"
              desc="ปิดหัวเข็มขัดปลดเร็วที่ไหล่ให้ได้ยินเสียงคลิก"
              imgPlaceholder={Img00313}
            />
            <StepCard
              number="4"
              desc="ปิดแถบตีนตุ๊กแกด้านข้างทั้งสองข้างให้แน่น"
              imgPlaceholder={Img00314}
            />
          </div>
          <div className="p-3 rounded-lg mb-6 bg-[#EFF6FF] text-[#23425D]">
            <strong>วิธีถอด:</strong> เปิดแถบตีนตุ๊กแกด้านข้างก่อน จากนั้นเปิดหัวเข็มขัดไหล่ แล้วถอดเสื้อออกทางศีรษะ
          </div>

          {/* 3.2 How to insert plates */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.2 วิธีใส่แผ่นเกราะ</h4>
          <WarningCard
            title="สำคัญมาก"
            desc="ดูแลไม่ให้แผ่นเกราะแข็งตกกระแทกพื้นโดยตรงอาจทำให้แผ่นเกราะแข็งเสียหายได้ โดยหันด้านที่มีตัวหนังสือบอกระดับการป้องกันออกจากตัว"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <StepCard
              number="1"
              desc="เปิดแถบตีนตุ๊กแกด้านบนของช่องใส่แผ่นเกราะ"
              imgPlaceholder={Img00321}
            />
            <StepCard
              number="2"
              desc="ใส่แผ่นเกราะแข็ง โดยหัน ด้านป้องกันกระสุน ออกจากร่างกาย"
              imgPlaceholder={Img00322}
            />
            <StepCard
              number="3"
              desc="ใส่แผ่นเกราะอ่อนก่อน ให้ด้านที่ระบุไว้หันเข้าหาร่างกาย"
              imgPlaceholder={Img00323}
            />
            <StepCard
              number="4"
              desc="ปิดแถบตีนตุ๊กแกให้แน่น จากนั้นทำซ้ำกับแผ่นเกราะด้านหลัง"
              imgPlaceholder={Img00324}
            />
          </div>

          {/* 3.3 Adjustment */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.3 วิธีปรับขนาดให้พอดีกับผู้สวมใส่</h4>
          <div className="space-y-3 mb-6">
            <AdjustItem
              title="ปรับระดับความสูง"
              desc="ปรับสายรัดที่หัวขัดพลาสติกบริเวณไหล่ทั้งสองข้าง เพื่อให้แผ่นเกราะอยู่ในตำแหน่งที่ถูกต้อง"
              img={Img00331}
            />
            <AdjustItem
              title="ปรับความกระชับด้านข้าง"
              desc="ปรับแถบตีนตุ๊กแกที่อยู่ใต้กระเป๋าใส่ซองกระสุนด้านหน้า"
              img={Img00332}
            />
            <AdjustItem
              title="ปรับสายยางยืดด้านหลัง"
              desc="ผูกสั้นลง = กระชับขึ้น, ผูกยาวขึ้น = หลวมลง ควรปรับทั้งสองข้างให้สมดุล"
              img=""
            />
            <AdjustItem
              title="สลับด้านตัวปลดเร็วไหล่"
              desc="ถอดออกและสลับข้างได้ตามความถนัดของผู้ใช้"
              img=""
            />
          </div>

          {/* 3.4 Position check */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.4 ตรวจสอบตำแหน่งก่อนใช้งาน</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="bg-gray-100 h-32 rounded flex items-center justify-center text-xs">
                📐 [ภาพ: ด้านหน้า ขอบบนของแผ่นเกราะอยู่ที่แอ่งคอระหว่างไหปลาร้า]
              </div>
              <p className="mt-2 font-bold text-[#23425D]">Front Fitting</p>
              <p className="text-sm">ขอบบนของแผ่นเกราะอยู่ที่แอ่งคอระหว่างไหปลาร้า</p>
            </div>
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="bg-gray-100 h-32 rounded flex items-center justify-center text-xs">
                📐 [ภาพ: ด้านหลัง แผ่นเกราะอยู่ในระดับเดียวกับด้านหน้า]
              </div>
              <p className="mt-2 font-bold text-[#23425D]">Rear Fitting</p>
              <p className="text-sm">ระดับเดียวกับแผ่นเกราะด้านหน้า ครอบคลุมกระดูกสันหลัง</p>
            </div>
          </div>
          <div className="p-4 rounded-lg space-y-1 bg-[#F5F9FF] text-[#23425D]">
            <p className="font-bold">✅ ก่อนใช้งาน ตรวจสอบให้ครบ:</p>
            <ul className="list-disc pl-5">
              <li>แผ่นเกราะอยู่ในตำแหน่งที่ถูกต้อง ไม่สูงหรือต่ำเกินไป</li>
              <li>ด้าน ด้านป้องกันกระสุน ของแผ่นเกราะแข็ง หันออกจากร่างกาย</li>
              <li>สายรัดและแถบตีนตุ๊กแกทุกจุดปิดแน่น ไม่หลวม</li>
              <li>ระบบปลดเร็วพร้อมใช้งาน สายไม่พันหรือติดขัด</li>
            </ul>
          </div>

          {/* 3.5 Quick release */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.5 วิธีใช้ระบบปลดเร็ว (Quick Release)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <StepCard
              number="1"
              desc="ดึงสายปลดเร็วอย่างแรงและต่อเนื่อง"
              imgPlaceholder={Img003511}
            />
            <StepCard
              number="2"
              desc="เสื้อเกราะจะคลายออกจากร่างกายทันที ยกออกไปด้านข้างได้เลย"
              imgPlaceholder="เสื้อเกราะเปิดออกจากร่างกายทันที"
            />
          </div>
          <div className="p-3 rounded-lg text-sm bg-[#FEFCE8] text-[#23425D]">
            <strong>หมายเหตุ:</strong> หากตัวปลดเร็วชำรุด สามารถใช้ <strong>แถบตีนตุ๊กแกสำรอง</strong> บริเวณคาดเอวมาติดที่ด้านหน้าแทนได้
          </div>
        </section>

        {/* 4. Maintenance & warnings */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">4. การดูแลรักษาและข้อควรระวัง</h3>

          <h4 className="text-xl font-semibold mt-2 text-[#0360AE]">4.1 ข้อห้าม</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <WarningCard
              title="ระมัดระวังการทำตกและถูกกระแทก"
              desc="ไม่ควรทำแผ่นเกราะแข็งตกหล่นหรือได้รับแรงกระแทกรุนแรง เพราะอาจทำให้โครงสร้างภายในเสียหาย"
            />
            <WarningCard
              title="เก็บให้ห่างจากความร้อนและแสงแดด"
              desc="ควรเก็บเสื้อเกราะไว้ในที่ร่มและอากาศถ่ายเทสะดวก ไม่ควรตากแดดโดยตรง หรือทิ้งไว้ในรถที่จอดกลางแดด"
            />
            <WarningCard
              title="เก็บให้ห่างจากสารเคมี"
              desc="ไม่ควรให้อุปกรณ์สัมผัสสารเคมี น้ำมัน ตัวทำละลาย หรือสารกัดกร่อน เพราะอาจทำให้วัสดุเสื่อมสภาพ"
            />
            <WarningCard
              title="จัดเก็บอย่างเหมาะสม"
              desc="ไม่ควรวางของหนักทับ พับงอ หรือบิดรูปอุปกรณ์เป็นเวลานาน"
            />
            <WarningCard
              title="ไม่ดัดแปลงอุปกรณ์"
              desc="ไม่ควรตัดแต่ง ดัดแปลง เปลี่ยนรูปทรง หรือแกะแผ่นเกราะอ่อนออกจากซองป้องกัน"
            />
            <WarningCard
              title="ตรวจสอบสภาพก่อนใช้งาน"
              desc="ควรตรวจสอบอุปกรณ์ทุกครั้งก่อนใช้งาน หากพบความเสียหายผิดปกติ ควรหยุดใช้งานและเปลี่ยนใหม่ทันที"
            />
          </div>

          <h4 className="text-xl font-semibold mt-6 text-[#0360AE]">4.2 การทำความสะอาด</h4>
          <div className="space-y-3 my-4">
            <div className="border rounded-lg p-3 border-[#0360AE]">
              <strong className="text-[#23425D]">ส่วนที่ 1 ตัวเสื้อ (Carrier)</strong>
              <p className="text-sm mt-1">
                ทำความสะอาดด้วยผ้าชุบน้ำหมาด หรือซักด้วยวิธีที่อ่อนโยน แล้วผึ่งให้แห้งในที่ร่ม หลีกเลี่ยงน้ำยาฟอกขาว สารเคมีรุนแรง และความร้อนโดยตรง
              </p>
            </div>
            <div className="border rounded-lg p-3 border-[#0360AE]">
              <strong className="text-[#23425D]">ส่วนที่ 2 แผ่นเกราะอ่อน (Soft Armor) และแผ่นเกราะแข็ง (Hard Plate)</strong>
              <p className="text-sm mt-1">
                เช็ดทำความสะอาดด้วยผ้าชุบน้ำหมาดเท่านั้น แล้วผึ่งให้แห้งในที่ร่มจนแห้งสนิท ไม่ควรแช่น้ำ ซัก หรือใช้สารเคมี
              </p>
            </div>
          </div>

          <h4 className="text-xl font-semibold mt-6 text-[#0360AE]">4.3 การเก็บรักษา</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>✓ หลังใช้งาน ควรทำความสะอาดอุปกรณ์ก่อนจัดเก็บ</li>
            <li>✓ หากอุปกรณ์เปียกน้ำหรือมีความชื้น ควรผึ่งในที่ร่มจนแห้งสนิทก่อนเก็บ</li>
            <li>✓ จัดเก็บโดยวางราบ และไม่วางสิ่งของทับบนเสื้อเกราะหรือแผ่นเกราะ</li>
            <li>✓ ขณะจัดเก็บ ตรวจสอบไม่ให้เสื้อเกราะพับงอ บิดงอ หรือกดทับ</li>
            <li>✓ เก็บในที่ร่ม แห้ง อากาศถ่ายเทสะดวก หลีกเลี่ยงพื้นที่อับชื้น อุณหภูมิสูง และแสงแดด</li>
          </ul>

          <div className="mt-6 text-center text-sm border-t pt-4 text-[#0360AE] border-t-[#FBCC11]">
            📅 ตรวจสอบวันที่ผลิตและวันหมดอายุจากป้ายสินค้าของคุณ
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm border-t pt-6 mt-4 text-[#23425D] border-t-[#0360AE]">
          <p>บริษัท ช.ไพศาล จำกัด</p>
          <p>179 หมู่ 11 ต.บ้านเชี่ยน อ.หันคา จ.ชัยนาท 17130</p>
          <p>โทรศัพท์ (056) 451982-6 · โทรสาร (056) 451987</p>
        </footer>
      </div>
    </main>
  );
};

export default Vest00001Page;
