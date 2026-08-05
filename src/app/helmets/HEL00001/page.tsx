// app/helmets/HEL00001/page.tsx
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
          <h2 className="text-2xl font-semibold mt-1 text-[#0360AE]">หมวกเกราะป้องกันกระสุน</h2>
        </div>

        {/* Main product image – placeholder, awaiting product photography */}
        <div className="relative w-full max-w-3xl mx-auto aspect-4/3 rounded-xl overflow-hidden mb-8 border border-gray-200 bg-gray-100 flex items-center justify-center text-center text-sm text-gray-500 p-4">
          🖼️ ภาพหมวกเกราะป้องกันกระสุน มุมด้านข้างเต็มใบ พื้นหลังเรียบ
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
              2. ตรวจสอบ<strong>ระดับและขอบเขตการป้องกัน</strong>ของหมวกก่อนใช้งาน
              หมวกนิรภัยกันกระสุนได้รับการออกแบบและทดสอบเพื่อป้องกันภัยคุกคามตามระดับและมาตรฐานที่ระบุบนฉลากผลิตภัณฑ์เท่านั้น
            </li>
            <li>
              3. ตรวจสอบสภาพหมวกก่อนใช้งานทุกครั้ง ตรวจสอบเปลือกหมวก แผ่นรอง สายรัดคาง หัวเข็มขัด น็อตยึด รางติดตั้งอุปกรณ์ และระบบปรับกระชับ
              หากพบชิ้นส่วนชำรุด หลวม สูญหาย หรือทำงานผิดปกติ <strong>ห้ามนำหมวกไปใช้งาน</strong>จนกว่าจะซ่อมหรือเปลี่ยนชิ้นส่วนเรียบร้อย
            </li>
            <li>
              4. <strong>ห้ามใช้งานต่อหลังถูกยิงหรือได้รับความเสียหายรุนแรง</strong> หมวกที่ถูกยิงหรือถูกสะเก็ดต้องหยุดใช้งานและเปลี่ยนใหม่ทันที
              หากหมวกตกกระแทกรุนแรง มีรอยร้าว บวม โก่งตัว ชั้นวัสดุแยกออกจากกัน หรือระบบยึดตรึงชำรุด
              ให้แยกหมวกออกจากการใช้งานและส่งตรวจสอบโดยบริษัทหรือผู้ที่ได้รับอนุญาต
            </li>
          </ul>
        </section>

        {/* 1. Protection capability */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">1. ขีดความสามารถในการป้องกัน</h3>
          <div className="border rounded-lg p-4 bg-[#F5F9FF] border-[#0360AE] max-w-xl mx-auto">
            <h4 className="text-xl font-semibold text-[#23425D]">ระดับการป้องกัน</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>คงทนต่อสะเก็ดระเบิด ตามมาตรฐาน MIL-STD-662F : V50 gr FSP 670 m/s</li>
              <li>ความคงทนต่อกระสุนระดับ IIIA ตามมาตรฐาน NIJ STD 0108.01</li>
            </ul>
            <p className="text-lg font-mono text-[#0360AE] mt-4">ภัยคุกคามที่รองรับ</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>9 mm FMJ FN</li>
              <li>.44 Magnum (Lead SWC)</li>
            </ul>
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
                <p className="text-gray-600 text-sm">สายรัดด้านหน้า 2 เส้น และด้านหลัง 2 เส้น ยึดหมวกให้อยู่ในตำแหน่งที่มั่นคง ปรับความยาวให้พอดีได้</p>
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
          <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 mb-4 flex items-center justify-center text-center text-sm text-gray-500 p-4">
            🖼️ ภาพหมวกพร้อม callout ชี้แต่ละส่วนประกอบ — เปลือก, แผ่นรอง, สายรัด, จานหมุน, ราง
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
            <StepCard number="1" desc="ปลดตัวล็อกปลดเร็วของสายรัดคางออกก่อนสวมใส่" imgPlaceholder="ภาพ: ปลดตัวล็อกปลดเร็วของสายรัดคาง" />
            <StepCard number="2" desc="ปรับความยาวสายรัดคางให้พอดี ไม่ตึงหรือหย่อนเกินไป" imgPlaceholder="ภาพ: ปรับความยาวสายรัดคาง" />
            <StepCard number="3" desc="สวมหมวกลงบนศีรษะ จัดตำแหน่งให้ตรง" imgPlaceholder="ภาพ: สวมหมวกลงบนศีรษะ จัดให้ตรง" />
            <StepCard number="4" desc="ล็อกตัวปลดเร็วของสายรัดคางให้เรียบร้อย" imgPlaceholder="ภาพ: ล็อกหัวเข็มขัดปลดเร็วใต้คาง" />
            <StepCard number="5" desc="ปรับความกระชับที่จานหมุนด้านหลัง จนแนบมั่นคงแต่ไม่อึดอัด" imgPlaceholder="ภาพ: ปรับจานหมุนด้านหลังให้กระชับ" />
          </div>
          <div className="p-3 rounded-lg mb-6 bg-[#EFF6FF] text-[#23425D]">
            <strong>วิธีถอด:</strong> คลายจานหมุนด้านหลังเล็กน้อย → ปลดตัวล็อกปลดเร็วของสายรัดคาง → ถอดหมวกออกจากศีรษะอย่างระมัดระวัง
          </div>

          {/* 3.3 Sizing/fit adjustment */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.3 วิธีปรับขนาดให้พอดีกับผู้สวมใส่</h4>
          <div className="space-y-3 mb-4">
            <AdjustItem
              title="1. เลือกขนาดที่เหมาะสม"
              desc="เลือกขนาดหมวกให้เหมาะสมกับรอบศีรษะของผู้ใช้งาน (Size M หรือ Size L)"
              img="ภาพ: เลือกขนาดหมวกตามรอบศีรษะ"
            />
            <AdjustItem
              title="2. ปรับตำแหน่งแผ่นรองหมวก"
              desc="ปรับแผ่นรองหมวกให้รองรับศีรษะอย่างสมดุล หากแน่นเกินไป สามารถปรับตำแหน่งหรือถอดบางชิ้นออกได้"
              img="ภาพ: ปรับ/ถอดแผ่นรองหมวก"
            />
            <AdjustItem
              title="3. ปรับสายรัดคางให้สมดุล"
              desc="ปรับสายรัดคางทั้ง 2 ด้านให้สมดุลกัน แนบกับใบหน้าและใต้คางอย่างพอดี ไม่รัดแน่นหรือหลวมเกินไป"
              img="ภาพ: ปรับสายรัดคางทั้งสองด้านให้สมดุล"
            />
            <AdjustItem
              title="4. จัดตำแหน่งหมวก"
              desc="จัดขอบด้านหน้าให้อยู่เหนือคิ้วประมาณ 1–2 ซม. และครอบศีรษะอย่างสมดุลทั้งด้านหน้า ด้านหลัง และด้านข้าง"
              img="ภาพ: จัดขอบหมวกเหนือคิ้ว 1–2 ซม."
            />
            <AdjustItem
              title="5. ปรับจานหมุนด้านหลัง"
              desc="ปรับจานหมุนด้านหลังตามเข็มนาฬิกาเพื่อเพิ่มความกระชับ จนหมวกไม่โยกหรือเลื่อนง่ายขณะเคลื่อนไหว และสามารถคลายออกโดยการดึงปุ่มจานหมุนออกมาจากตัวฐาน"
              img="ภาพ: หมุนจานปรับกระชับด้านหลัง"
            />
          </div>
          <WarningCard
            title="ข้อควรระวัง"
            desc="ไม่ควรถอดแผ่นรองหมวกออกทั้งหมดจนศีรษะแนบกับเปลือกหมวกโดยตรง เพราะอาจทำให้สวมใส่ไม่มั่นคง รู้สึกเจ็บ และลดประสิทธิภาพในการรองรับแรงกระแทก"
          />

          {/* 3.4 Chin strap adjustment */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.4 วิธีปรับสายรัดคาง</h4>
          <p className="text-gray-700 mb-1">ปรับสายรัด 4 เส้นให้ตึงสมดุลกัน หมวกไม่โยกขณะเคลื่อนไหว</p>
          <p className="text-gray-700 mb-4">สายรัดด้านหน้า 2 เส้น + สายรัดด้านหลัง 2 เส้น ควรปรับให้แนบไปตามแนวผิวอย่างเป็นธรรมชาติ</p>
          <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 mb-4 flex items-center justify-center text-center text-sm text-gray-500 p-4">
            🖼️ Diagram สายรัดคาง 4 จุด แสดงทิศทางของสายแต่ละเส้นและจุดที่มาบรรจบใต้คาง
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <StepCard number="1" desc="ปรับสายรัดด้านหน้า 2 เส้นแนบกับด้านข้างใบหน้า ไม่บิด ไม่พับ" imgPlaceholder="ภาพ: สายรัดด้านหน้า 2 เส้นแนบข้างใบหน้า" />
            <StepCard number="2" desc="ปรับสายรัดด้านหลัง 2 เส้นให้ประคองท้ายทอยอย่างสมดุล" imgPlaceholder="ภาพ: สายรัดด้านหลัง 2 เส้นประคองท้ายทอย" />
            <StepCard number="3" desc="ตรวจสอบสายทั้ง 4 เส้นให้ตึงสมดุลกัน ไม่มีด้านใดตึงหรือหย่อนชัดเจน" imgPlaceholder="ภาพ: สายรัดใต้คางพอดี" />
            <StepCard number="4" desc="ลองก้ม เงย และส่ายศีรษะเบา ๆ หมวกควรอยู่กับที่ ไม่เลื่อนหลุด" imgPlaceholder="ภาพ: ทดสอบโดยก้ม เงย ส่ายศีรษะ" />
          </div>
          <div className="p-3 rounded-lg text-sm mb-6 bg-[#FEFCE8] text-[#23425D]">
            <strong>หมายเหตุ:</strong> สายรัดที่เหมาะสมควรแนบกับผู้สวมใส่ แต่ไม่ควรบาดผิว กดหน้า รัดคาง หรือทำให้รู้สึกอึดอัดระหว่างใช้งาน
          </div>

          {/* 3.5 Position check */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.5 ตรวจสอบตำแหน่งก่อนใช้งาน</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="relative bg-gray-100 h-48 rounded flex items-center justify-center text-xs text-gray-500 p-3 text-center">
                🖼️ Diagram ด้านหน้า — ขอบหมวกเหนือคิ้ว 1–2 ซม.
              </div>
              <p className="mt-2 font-bold text-[#23425D]">ด้านหน้า</p>
              <p className="text-sm">ขอบด้านหน้าของหมวกอยู่เหนือคิ้วประมาณ 1–2 ซม. ไม่เปิดหน้าผากมากเกินไป</p>
            </div>
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="relative bg-gray-100 h-48 rounded flex items-center justify-center text-xs text-gray-500 p-3 text-center">
                🖼️ Diagram ด้านข้าง — หมวกตรง ไม่เอียง
              </div>
              <p className="mt-2 font-bold text-[#23425D]">ด้านข้าง</p>
              <p className="text-sm">หมวกอยู่ในตำแหน่งสมดุลทั้งสองข้าง ไม่เอียงซ้ายหรือขวา สายรัดแนบไปตามแนวใบหน้า</p>
            </div>
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="relative bg-gray-100 h-48 rounded flex items-center justify-center text-xs text-gray-500 p-3 text-center">
                🖼️ Diagram ด้านหลัง — ครอบท้ายทอย จานหมุนกระชับ
              </div>
              <p className="mt-2 font-bold text-[#23425D]">ด้านหลัง</p>
              <p className="text-sm">ด้านหลังของหมวกครอบคลุมบริเวณท้ายทอยตามรูปทรง และจานหมุนปรับกระชับพอดี</p>
            </div>
            <div className="border rounded-lg p-3 text-center border-[#0360AE]">
              <div className="relative bg-gray-100 h-48 rounded flex items-center justify-center text-xs text-gray-500 p-3 text-center">
                🖼️ Diagram ภายใน — แผ่นรองครบรอบศีรษะ
              </div>
              <p className="mt-2 font-bold text-[#23425D]">แผ่นรองภายใน</p>
              <p className="text-sm">แผ่นรองหมวกอยู่รอบศีรษะอย่างสมดุล ไม่กดจุดใดจุดหนึ่งมากเกินไป ไม่มีจุดที่ทำให้เจ็บ</p>
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

          {/* 3.6 Accessory mounting */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-[#0360AE]">3.6 การติดตั้งอุปกรณ์เสริม</h4>
          <p className="text-gray-700 mb-1">ติดตั้งเฉพาะอุปกรณ์ที่เหมาะกับรุ่น และล็อกแน่นก่อนใช้งาน</p>
          <p className="text-gray-700 mb-4">ตรวจสอบทุกครั้งก่อนนำออกใช้งาน ว่าอุปกรณ์ยึดติดแน่นและไม่รบกวนการสวมใส่</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-[#EFF6FF] text-[#23425D]">
              <strong>อุปกรณ์ด้านหน้า</strong> เช่น กล้องมองกลางคืน ตรวจสอบสมดุลน้ำหนักของหมวก
              หากมีน้ำหนักด้านหน้ามาก อาจต้องใช้อุปกรณ์ถ่วงน้ำหนักด้านหลัง
            </div>
            <div className="p-3 rounded-lg bg-[#EFF6FF] text-[#23425D]">
              <strong>อุปกรณ์บนรางข้าง</strong> ตรวจสอบว่าตัวยึดอุปกรณ์ล็อกแน่นและไม่หลุดง่าย
              และควรติดอุปกรณ์ให้น้ำหนักทั้งสองฝั่งมีความสมดุลกัน
            </div>
          </div>
        </section>

        {/* 4. Maintenance & warnings */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-2xl font-bold border-b pb-2 mb-4 text-[#23425D] border-b-[#FBCC11]">4. การดูแลรักษาและข้อควรระวัง</h3>

          <h4 className="text-xl font-semibold mt-2 text-[#0360AE]">4.1 ข้อห้าม</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <WarningCard
              title="ระมัดระวังการทำตกและถูกกระแทก"
              desc="อาจทำให้โครงสร้างภายในเสียหาย แม้ภายนอกจะดูปกติ"
            />
            <WarningCard
              title="เก็บให้ห่างจากความร้อนและแสงแดด"
              desc="ห้ามตากแดดโดยตรง หรือทิ้งในรถที่จอดกลางแดดเป็นเวลานาน"
            />
            <WarningCard
              title="เก็บให้ห่างจากสารเคมี"
              desc="ห้ามสัมผัสน้ำมัน ตัวทำละลาย น้ำยาฟอกขาว สารกัดกร่อน หรือสารเคมีรุนแรง"
            />
            <WarningCard
              title="ห้ามดัดแปลงอุปกรณ์"
              desc="ห้ามเจาะ ตัด แต่ง เปลี่ยนรูปทรง ทาสีด้วยสารเคมีรุนแรง หรือดัดแปลงส่วนประกอบ"
            />
            <WarningCard
              title="ห้ามใช้งานโดยไม่มีแผ่นรองหมวก"
              desc="ทำให้หมวกไม่กระชับ สวมใส่ไม่ปลอดภัย และลดความสามารถในการรองรับแรงกระแทก"
            />
            <WarningCard
              title="ตรวจสอบสภาพก่อนใช้งาน"
              desc="หากพบรอยร้าว สายรัดชำรุด หัวเข็มขัดเสีย จานหมุนผิดปกติ ให้หยุดใช้และเปลี่ยนใหม่ทันที"
            />
          </div>

          <h4 className="text-xl font-semibold mt-6 text-[#0360AE]">4.2 การทำความสะอาด</h4>
          <div className="space-y-3 my-4">
            <div className="border rounded-lg p-3 border-[#0360AE]">
              <strong className="text-[#23425D]">ส่วนที่ 1 เปลือกหมวก</strong>
              <p className="text-sm mt-1">
                เช็ดด้วยผ้าชุบน้ำหมาด หรือผ้าชุบน้ำสบู่อ่อน ๆ เช็ดให้สะอาดแล้วผึ่งในที่ร่ม
                ห้ามใช้น้ำยาฟอกขาว แอลกอฮอล์ ตัวทำละลาย น้ำมัน หรือสารเคมีรุนแรง
              </p>
            </div>
            <div className="border rounded-lg p-3 border-[#0360AE]">
              <strong className="text-[#23425D]">ส่วนที่ 2 แผ่นรองหมวกและสายรัดคาง</strong>
              <p className="text-sm mt-1">
                ถอดออกทำความสะอาดตามความเหมาะสม เช็ดหรือซักด้วยมืออย่างอ่อนโยน ผึ่งให้แห้งสนิทในที่ร่มก่อนติดตั้งกลับ
                ห้ามอบแห้ง รีด ตากแดดจัด หรือใช้ความร้อนโดยตรง
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
