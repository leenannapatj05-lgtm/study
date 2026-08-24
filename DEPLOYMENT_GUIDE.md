# 🚀 คู่มือการติดตั้งระบบ (Deployment Guide)

เอกสารนี้จะอธิบายวิธีการนำโค้ดในโปรเจกต์ไปเปิดใช้งานจริง (Deploy) ทั้งฝั่ง Google Apps Script และ GitHub Pages

## 1️⃣ การติดตั้งฝั่ง Backend (Google Apps Script)

1. ไปที่ [Google Drive](https://drive.google.com/) ของคุณ
2. สร้างไฟล์ **Google Sheets** ใหม่ ตั้งชื่อว่า "StudySync_Database" (หรือชื่อใดก็ได้)
3. คัดลอก **ID ของ Google Sheet** จาก URL (ส่วนที่อยู่ระหว่าง `/d/` และ `/edit`)
   - *ตัวอย่าง:* `https://docs.google.com/spreadsheets/d/`**`1ABCDEFG...`**`/edit`
4. บนหน้า Google Sheets ไปที่เมนู **ส่วนขยาย (Extensions) > Apps Script**
5. จะมีแท็บใหม่เปิดขึ้นมา ให้ลบโค้ดเดิมทิ้ง และนำโค้ดทั้งหมดจากไฟล์ `backend/Code.gs` ไปวาง
6. ในโค้ดบรรทัดที่ 8 ให้แก้ค่า `SHEET_ID` เป็น ID ที่ก็อปปี้มาในข้อ 3
7. ในหน้าต่าง Apps Script ให้รันฟังก์ชันชื่อ `setupDatabase` (กดปุ่ม ▶️ Run) ระบบจะขออนุญาตเข้าถึง ให้กดยอมรับให้เรียบร้อย (ฟังก์ชันนี้จะสร้างตารางฐานข้อมูลให้คุณอัตโนมัติ)
8. การนำไปใช้งานเป็น API:
   - มุมขวาบน กดปุ่ม **การทำให้ใช้งานได้ (Deploy) > การทำให้ใช้งานได้รายการใหม่ (New deployment)**
   - กดรูปฟันเฟือง ⚙️ เลือก **เว็บแอป (Web app)**
   - ช่อง *ผู้มีสิทธิ์เข้าถึง (Who has access)* ให้เลือก **ทุกคน (Anyone)** 
   - กดปุ่ม **การทำให้ใช้งานได้ (Deploy)**
   - คัดลอก **URL ของเว็บแอป (Web app URL)** เก็บไว้ (หน้าตาคล้ายๆ `https://script.google.com/macros/s/.../exec`)

## 2️⃣ การติดตั้งฝั่ง Frontend (GitHub Pages)

1. นำ **URL ของเว็บแอป** ที่ได้จากฝั่ง Backend มาตั้งค่าในไฟล์ JavaScript ฝั่ง Frontend (หากเราสร้างไฟล์สำหรับตั้งค่า API ไว้) เพื่อให้หน้าเว็บยิงข้อมูลไปหา Google Apps Script ได้
2. สร้าง Repository ใหม่บน [GitHub](https://github.com/)
3. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์ `frontend/` (ประกอบด้วยหน้า HTML และโฟลเดอร์ `lumina_enterprise`) ขึ้นไปยัง Repository
4. ไปที่เมนู **Settings** ของ Repository นั้น บน GitHub
5. เลือกเมนู **Pages** ทางแถบด้านซ้าย
6. ตรงส่วน *Build and deployment* ใต้เมนู *Branch* ให้เลือก **main** (หรือ master) แล้วกด **Save**
7. รอประมาณ 1-2 นาที GitHub จะสร้าง URL สำหรับหน้าเว็บของคุณให้ (เช่น `https://ชื่อคุณ.github.io/ชื่อrepo/login.html`)
8. นำ URL นั้นไปเปิดใช้งานบนมือถือหรือคอมพิวเตอร์ได้เลย!
