// app/helmets/HEL00001/page.tsx
import Img000 from "@/app/helmets/HEL00001/_assets/hel00001-0-0.jpg";
import Img001 from "@/app/helmets/HEL00001/_assets/hel00001-0-1.jpg";
import Img00311 from "@/app/helmets/HEL00001/_assets/hel00001-3.1-1.jpg";
import Img00321 from "@/app/helmets/HEL00001/_assets/hel00001-3.2-1.jpg";
import Img00322 from "@/app/helmets/HEL00001/_assets/hel00001-3.2-2.jpg";
import Img00324 from "@/app/helmets/HEL00001/_assets/hel00001-3.2-4.jpg";
import Img00331 from "@/app/helmets/HEL00001/_assets/hel00001-3.3-1.jpg";
import Img00332 from "@/app/helmets/HEL00001/_assets/hel00001-3.3-2.jpg";
import Img00333 from "@/app/helmets/HEL00001/_assets/hel00001-3.3-3.jpg";
import Img00334 from "@/app/helmets/HEL00001/_assets/hel00001-3.3-4.jpg";
import Img00341 from "@/app/helmets/HEL00001/_assets/hel00001-3.4-1.jpg";
import Img00342 from "@/app/helmets/HEL00001/_assets/hel00001-3.4-2.jpg";
import Image from "next/image";
import StepCard from "@/components/StepCard";
import AdjustItem from "@/components/AdjustItem";
import WarningCard from "@/components/WarningCard";

const Helmet00001Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 text-center border-b-4 border-b-[#0360AE]">
          <p className="text-sm uppercase tracking-wide text-gray-500">CH.PAISARN · HIGH QUALITY MILITARY EQUIPMENT</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-[#23425D]">คู่มือการใช้งาน</h1>
          <h2 className="text-2xl font-semibold mt-1 text-[#0360AE]">หมวกสนาม แบบ 2</h2>
        </div>

        {/* Main product image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-gray-200 bg-white">
            <Image
              src={Img000}
              alt="หมวกสนาม แบบ 2 มุมด้านข้างเต็มใบ พื้นหลังเรียบ"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-gray-200 bg-white">
            <Image
              src={Img001}
              alt="หมวกสนาม แบบ 2 พร้อมรางติดตั้งอุปกรณ์"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Important warnings */}
        <section className="rounded-xl p-6 mb-8 bg-[#EFF6FF] border-l-8 border-l-[#0360AE]">
          <h3 className="text-xl font-bold flex items-center gap-2 text-[#23425D]">
            <span>⏱</span> สิ่งสำคัญที่ต้องรู้ก่อนใช้งาน
          </h3>
          <ul className="mt-4 space-y-3 text-gray-800">
            <li>
              1. <strong>ปรับหมวกให้กระชับและอยู่ในตำแหน่งที่ถูกต้องก่อนใช้งานทุกครั้ง</strong> ปรับแผ่นรองภายใน สายรัดคาง
              และระบบปรับกระชับด้านหลังให้พอดีกับศีรษะ หมวกต้องไม่หลวม เลื่อน หมุน บดบังทัศนวิสัย หรือขยับออกจากตำแหน่งขณะเคลื่อนไหว
            </li>
            <li>
              2. ตรวจสอบ<strong>ระดับการป้องกันและสภาพหมวก</strong>ก่อนใช้งานทุกครั้ง ใช้หมวกให้ตรงตามระดับการป้องกันที่ระบุบนฉลากผลิตภัณฑ์เท่านั้น
              และตรวจสอบเปลือกหมวก แผ่นรอง สายรัดคาง หัวเข็มขัด น็อตยึด รางติดตั้งอุปกรณ์ และระบบปรับกระชับ หากพบชิ้นส่วนชำรุด หลวม สูญหาย
              หรือทำงานผิดปกติ <strong>ห้ามนำหมวกไปใช้งาน</strong>จนกว่าจะซ่อมหรือเปลี่ยนชิ้นส่วนเรียบร้อย
            </li>
            <li>
              3. <strong>ห้ามใช้งานต่อหลังถูกยิงหรือได้รับความเสียหายรุนแรง</strong> หมวกที่ถูกยิงหรือถูกสะเก็ดต้องหยุดใช้งานและเปลี่ยนใหม่ทันที
              หากหมวกตกกระแทกรุนแรง มีรอยร้าว บวม โก่งตัว ชั้นวัสดุแยกออกจากกัน หรือระบบยึดตรึงชำรุด
              ให้แยกหมวกออกจากการใช้งานและส่งตรวจสอบโดยบริษัทหรือผู้ที่ได้รับอนุญาต
            </li>
          </ul>
        </section>

        {/* 1. Protection capability */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">1. ขีดความสามารถในการป้องกัน</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-[#F5F9FF] border-[#0360AE]">
              <h4 className="text-xl font-semibold text-[#23425D]">การป้องกันสะเก็ด</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>ทดสอบตามมาตรฐาน MIL-STD-662F</li>
                <li>ค่า V50: 670 m/s</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-[#F5F9FF] border-[#0360AE]">
              <h4 className="text-xl font-semibold text-[#23425D]">การป้องกันกระสุน</h4>
              <p className="text-lg font-mono text-[#0360AE] mt-1">ผลการทดสอบระดับ IIIA</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>ตามมาตรฐาน NIJ STD 0108.01</li>
                <li>9 mm FMJ</li>
                <li>.44 Magnum Lead SWC</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">*มาตรฐาน MIL-STD-662F / NIJ STD 0108.01</p>
        </section>

        {/* 2. Key features */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">2. คุณสมบัติหลัก</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-3xl">🛡</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">พื้นที่ป้องกันศีรษะ</h4>
                <p className="text-gray-600 text-sm">ออกแบบให้ครอบคลุมพื้นที่สำคัญของศีรษะ พร้อมรักษาความคล่องตัวในการเคลื่อนไหวและการปฏิบัติงาน</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">🧽</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">ระบบแผ่นรองหมวก</h4>
                <p className="text-gray-600 text-sm">รองรับศีรษะ เพิ่มความกระชับ และช่วยลดแรงกระแทก ปรับตำแหน่งหรือถอดบางชิ้นออกได้ตามขนาดศีรษะ</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">🪢</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">ระบบสายรัดคาง 4 จุด</h4>
                <p className="text-gray-600 text-sm">
                  สายรัดด้านหน้า 2 เส้น และด้านหลัง 2 เส้น ยึดหมวกให้อยู่ในตำแหน่งที่มั่นคง ปรับความยาวให้พอดีได้
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-3xl">⚙</span>
              <div>
                <h4 className="font-bold text-[#0360AE]">ระบบปรับกระชับด้านหลัง</h4>
                <p className="text-gray-600 text-sm">จานหมุนด้านหลังช่วยปรับความกระชับของหมวกให้พอดีกับศีรษะ มั่นคงระหว่างการเคลื่อนไหว</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Usage instructions */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">3. วิธีการใช้งาน</h3>

          {/* 3.1 Components */}
          <h4 className="text-xl font-semibold mt-4 mb-2 text-[#0360AE]">3.1 ส่วนประกอบของหมวก</h4>
          <p className="text-gray-700 mb-4">ส่วนประกอบหลักของหมวกเกราะอาจแตกต่างกันตามรุ่น โดยทั่วไปประกอบด้วย</p>
          <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 mb-4">
            <Image src={Img00311} alt="ภาพส่วนประกอบภายในของหมวก — แผ่นรอง สายรัด จานหมุนปรับกระชับ" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6 text-gray-700">
            <p>• เปลือกหมวกเกราะ</p>
            <p>• แผ่นรองหมวก</p>
            <p>• สายรัดคางด้านหน้า 2 เส้น</p>
            <p>• สายรัดคางด้านหลัง 2 เส้น</p>
            <p>• ตัวล็อกหรือหัวเข็มขัดปลดเร็ว</p>
            <p>• จานหมุนปรับกระชับด้านหลัง</p>
            <p>• รางข้างสำหรับติดตั้งอุปกรณ์เสริม</p>
            <p>• ฐานติดตั้งอุปกรณ์ด้านหน้า</p>
            <p>• แถบตีนตุ๊กแกสำหรับติดเครื่องหมายหรืออุปกรณ์เสริม</p>
          </div>

          {/* 3.2 How to wear/remove */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.2 วิธีสวมใส่และถอด</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <StepCard number="1" desc="ปลดตัวล็อกปลดเร็วของสายรัดคางออกก่อนสวมใส่" imgPlaceholder={Img00321} />
            <StepCard number="2" desc="สวมหมวกลงบนศีรษะ และล็อกตัวปลดเร็วของสายรัดคาง" imgPlaceholder={Img00322} />
            <StepCard
              number="3"
              desc="ปรับความยาวสายรัดคางด้านข้างให้พอดี ไม่ตึงหรือหย่อนเกินไป ล๊อคตัวปลดเร็วสายรัดคางให้เรียบร้อย"
              imgPlaceholder={Img00324}
            />
          </div>
          <div className="p-3 rounded-lg mb-6 bg-[#EFF6FF] text-[#23425D]">
            <strong>วิธีถอด:</strong> คลายจานหมุนด้านหลังเล็กน้อย → ปลดตัวล็อกปลดเร็วของสายรัดคาง → ถอดหมวกออกจากศีรษะอย่างระมัดระวัง
          </div>

          {/* 3.3 Sizing/fit adjustment */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.3 วิธีปรับขนาดให้พอดีกับผู้สวมใส่</h4>
          <div className="space-y-3 mb-4">
            <AdjustItem title="1. เลือกขนาดที่เหมาะสม" desc="เลือกขนาดหมวกให้เหมาะสมกับรอบศีรษะของผู้ใช้งาน (Size M หรือ Size L)" img={Img00331} />
            <AdjustItem
              title="2. ปรับตำแหน่งแผ่นรองหมวก"
              desc="ปรับแผ่นรองหมวกให้รองรับศีรษะอย่างสมดุล หากแน่นเกินไป สามารถปรับตำแหน่งหรือถอดบางชิ้นออกได้"
              img={Img00332}
            />
            <AdjustItem
              title="3. จัดตำแหน่งหมวกและปรับสายรัดคาง"
              desc="จัดขอบด้านหน้าของหมวกให้อยู่เหนือคิ้วประมาณ 1–2 ซม. และให้หมวกครอบศีรษะอย่างสมดุล จากนั้นปรับสายรัดคางทั้ง 2 ด้านให้แนบกับใบหน้าและใต้คางอย่างพอดี ไม่แน่นหรือหลวมเกินไป"
              img={Img00333}
            />
            <AdjustItem
              title="4. ปรับจานหมุนด้านหลัง"
              desc="ปรับจานหมุนด้านหลังตามเข็มนาฬิกาเพื่อเพิ่มความกระชับ จนหมวกไม่โยกหรือเลื่อนง่ายขณะเคลื่อนไหว และสามารถคลายออกโดยการดึงปุ่มจานหมุนออกมาจากตัวฐาน"
              img={Img00334}
            />
          </div>
          <WarningCard
            title="ข้อควรระวัง"
            desc="ไม่ควรถอดแผ่นรองหมวกออกทั้งหมดจนศีรษะแนบกับเปลือกหมวกโดยตรง เพราะอาจทำให้สวมใส่ไม่มั่นคง รู้สึกเจ็บ และลดประสิทธิภาพในการรองรับแรงกระแทก"
          />

          {/* 3.4 Position check */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.4 ตรวจสอบตำแหน่งก่อนใช้งาน</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="relative bg-gray-100 h-48 rounded flex items-center justify-center text-xs">
                <Image src={Img00341} alt="ภาพ: สมดุลด้านหน้า–ด้านหลัง ขอบหมวกเหนือคิ้ว 1–2 ซม." fill style={{ objectFit: "contain" }} />
              </div>
              <p className="mt-2 font-bold text-[#23425D]">สมดุลด้านหน้า–ด้านหลัง</p>
              <p className="text-sm">
                ขอบหมวกด้านหน้าอยู่เหนือคิ้วประมาณ 1–2 ซม. ไม่เปิดหน้าผากมากเกินไป และด้านหลังครอบบริเวณท้ายทอยอย่างเหมาะสม
                ปรับจานหมุนให้หมวกกระชับโดยไม่กดเจ็บ
              </p>
            </div>
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="relative bg-gray-100 h-48 rounded flex items-center justify-center text-xs">
                <Image src={Img00342} alt="ภาพ: สมดุลด้านซ้าย–ขวา หมวกอยู่กึ่งกลางศีรษะ ไม่เอียง" fill style={{ objectFit: "contain" }} />
              </div>
              <p className="mt-2 font-bold text-[#23425D]">สมดุลด้านซ้าย–ขวา</p>
              <p className="text-sm">
                หมวกต้องอยู่กึ่งกลางศีรษะ ไม่เอียงซ้ายหรือขวา สายรัดทั้งสองด้านแนบไปตามใบหน้า และแผ่นรองภายในสัมผัสศีรษะอย่างสม่ำเสมอ
                ไม่มีจุดกดทับหรือทำให้เจ็บ
              </p>
            </div>
          </div>
          <div className="p-4 rounded-lg space-y-1 bg-[#F5F9FF] text-[#23425D]">
            <p className="font-bold">✅ ก่อนใช้งาน ตรวจสอบให้ครบ:</p>
            <ul className="list-disc pl-5">
              <li>หมวกอยู่ในตำแหน่งที่ถูกต้อง ไม่สูงหรือต่ำเกินไป</li>
              <li>แผ่นรองหมวกอยู่ในตำแหน่งที่เหมาะสม ไม่กดศีรษะเฉพาะจุดมากเกินไป</li>
              <li>สายรัดคางทั้ง 4 เส้นแนบกับผู้สวมใส่อย่างพอดี</li>
              <li>ตัวล็อกปลดเร็วล็อกแน่นเรียบร้อย จานหมุนด้านหลังปรับกระชับแล้ว</li>
              <li>หมวกไม่โยกหรือเลื่อนเมื่อก้ม เงย หรือส่ายศีรษะ</li>
              <li>ไม่มีรอยร้าว รอยแตก หรือความเสียหายผิดปกติ</li>
            </ul>
          </div>

          {/* 3.5 Accessory mounting */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.5 การติดตั้งอุปกรณ์เสริม</h4>
          <p className="text-gray-700 mb-1">ติดตั้งเฉพาะอุปกรณ์ที่เหมาะกับรุ่น และล็อกแน่นก่อนใช้งาน</p>
          <p className="text-gray-700 mb-4">
            รางติดตั้งอุปกรณ์เหล่านี้อยู่บนรุ่น <strong>&ldquo;หมวกสนาม แบบ 2 พร้อมรางติดตั้งอุปกรณ์&rdquo;</strong> ตรวจสอบทุกครั้งก่อนนำออกใช้งาน
            ว่าอุปกรณ์ยึดติดแน่นและไม่รบกวนการสวมใส่
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="p-3 rounded-lg bg-[#EFF6FF] text-[#23425D]">
              <strong>อุปกรณ์ด้านหน้า</strong> เช่น กล้องมองกลางคืน ตรวจสอบสมดุลน้ำหนักของหมวก หากมีน้ำหนักด้านหน้ามาก
              อาจต้องใช้อุปกรณ์ถ่วงน้ำหนักด้านหลัง
            </div>
            <div className="p-3 rounded-lg bg-[#EFF6FF] text-[#23425D]">
              <strong>อุปกรณ์บนรางข้าง</strong> ตรวจสอบว่าตัวยึดอุปกรณ์ล็อกแน่นและไม่หลุดง่าย และควรติดอุปกรณ์ให้น้ำหนักทั้งสองฝั่งมีความสมดุลกัน
            </div>
          </div>
        </section>

        {/* 4. Maintenance & warnings */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">4. การดูแลรักษาและข้อควรระวัง</h3>

          <h4 className="text-xl font-semibold mt-2 text-[#0360AE]">4.1 ข้อห้าม</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <WarningCard title="ระมัดระวังการทำตกและถูกกระแทก" desc="อาจทำให้โครงสร้างภายในเสียหาย แม้ภายนอกจะดูปกติ" />
            <WarningCard title="เก็บให้ห่างจากความร้อนและแสงแดด" desc="ห้ามตากแดดโดยตรง หรือทิ้งในรถที่จอดกลางแดดเป็นเวลานาน" />
            <WarningCard title="เก็บให้ห่างจากสารเคมี" desc="ห้ามสัมผัสน้ำมัน ตัวทำละลาย น้ำยาฟอกขาว สารกัดกร่อน หรือสารเคมีรุนแรง" />
            <WarningCard title="ห้ามดัดแปลงอุปกรณ์" desc="ห้ามเจาะ ตัด แต่ง เปลี่ยนรูปทรง ทาสีด้วยสารเคมีรุนแรง หรือดัดแปลงส่วนประกอบ" />
            <WarningCard title="ห้ามใช้งานโดยไม่มีแผ่นรองหมวก" desc="ทำให้หมวกไม่กระชับ สวมใส่ไม่ปลอดภัย และลดความสามารถในการรองรับแรงกระแทก" />
            <WarningCard title="ตรวจสอบสภาพก่อนใช้งาน" desc="หากพบรอยร้าว สายรัดชำรุด หัวเข็มขัดเสีย จานหมุนผิดปกติ ให้หยุดใช้และเปลี่ยนใหม่ทันที" />
          </div>

          <h4 className="text-xl font-semibold mt-6 text-[#0360AE]">4.2 การทำความสะอาด</h4>
          <div className="space-y-3 my-4">
            <div className="border rounded-lg p-3 border-[#0360AE]">
              <strong className="text-[#23425D]">ส่วนที่ 1 เปลือกหมวก</strong>
              <p className="text-sm mt-1">
                เช็ดด้วยผ้าชุบน้ำหมาด หรือผ้าชุบน้ำสบู่อ่อน ๆ เช็ดให้สะอาดแล้วผึ่งในที่ร่ม ห้ามใช้น้ำยาฟอกขาว แอลกอฮอล์ ตัวทำละลาย น้ำมัน
                หรือสารเคมีรุนแรง
              </p>
            </div>
            <div className="border rounded-lg p-3 border-[#0360AE]">
              <strong className="text-[#23425D]">ส่วนที่ 2 แผ่นรองหมวกและสายรัดคาง</strong>
              <p className="text-sm mt-1">
                ถอดออกทำความสะอาดตามความเหมาะสม เช็ดหรือซักด้วยมืออย่างอ่อนโยน ผึ่งให้แห้งสนิทในที่ร่มก่อนติดตั้งกลับ ห้ามอบแห้ง รีด ตากแดดจัด
                หรือใช้ความร้อนโดยตรง
              </p>
            </div>
          </div>

          <h4 className="text-xl font-semibold mt-6 text-[#0360AE]">4.3 การเก็บรักษา</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>✓ หลังใช้งาน ทำความสะอาดหมวกก่อนจัดเก็บ</li>
            <li>✓ หากหมวกเปียกน้ำหรือมีความชื้น ผึ่งให้แห้งสนิทในที่ร่มก่อนเก็บ</li>
            <li>✓ จัดเก็บในที่ร่ม แห้ง และอากาศถ่ายเทสะดวก</li>
            <li>✓ ห้ามวางของหนักทับหมวก หรือจัดเก็บในลักษณะที่ทำให้หมวกเสียรูป</li>
            <li>✓ หลีกเลี่ยงพื้นที่อับชื้น อุณหภูมิสูง แสงแดดโดยตรง และสารเคมี</li>
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

export default Helmet00001Page;
