### รายการคำสั่ง Git และความหมาย

#### 1. คำสั่งพื้นฐาน
- `git clone <repository_url>` - ใช้โคลนโปรเจกต์จาก remote repository (บังคับใช้เมื่อต้องการดึงโค้ดลงมาใหม่)
- `git init` - สร้าง Git repository ใหม่ในโฟลเดอร์ปัจจุบัน (ไม่บังคับ เว้นแต่จะสร้างโปรเจกต์ใหม่)

#### 2. การจัดการ branch
- `git branch` - แสดงรายการ branch ที่มีอยู่ใน local (ไม่บังคับ แต่ใช้เพื่อดูสถานะของ branch)
- `git branch <new_branch>` - สร้าง branch ใหม่ (ไม่บังคับ ขึ้นอยู่กับการจัดการโปรเจกต์)
- `git branch -d <branch_name>` - ลบ branch ใน local (ไม่บังคับ เว้นแต่ต้องการจัดระเบียบ branch)
- `git branch -m <old_name> <new_name>` - เปลี่ยนชื่อ branch ใน local (ไม่บังคับ แต่ใช้เมื่อจำเป็นต้องเปลี่ยนชื่อ branch)
- `git push origin --delete <branch_name>` - ลบ branch ออกจาก remote (ไม่บังคับ แต่ใช้เมื่อ branch ไม่จำเป็นแล้ว)
- `git branch -M <new_name>` - เปลี่ยนชื่อ branch ปัจจุบันและบังคับใช้ (ไม่บังคับ แต่ใช้ในกรณีที่ต้องการเปลี่ยนชื่อ branch ทันที)

#### 3. การเปลี่ยน branch
- `git checkout <branch_name>` - เปลี่ยนไปยัง branch ที่ระบุ (ไม่บังคับ แต่จำเป็นหากต้องการทำงานบน branch อื่น)
- `git switch <branch_name>` - อีกวิธีในการเปลี่ยน branch (ทางเลือกใหม่ของ `checkout`)
- `git checkout -b <new_branch>` - สร้าง branch ใหม่และสลับไปใช้ branch นั้น (ไม่บังคับ แต่สะดวกหากต้องการสร้าง branch ใหม่)
- `git checkout -f <branch_name>` - บังคับเปลี่ยน branch และละทิ้งการเปลี่ยนแปลงที่ยังไม่ได้ commit (ไม่บังคับ แต่ต้องใช้ด้วยความระมัดระวัง)
- `git checkout <branch_name>` - เปลี่ยนไปยัง branch ที่ระบุ (ไม่บังคับ แต่จำเป็นหากต้องการทำงานบน branch อื่น)
- `git switch <branch_name>` - อีกวิธีในการเปลี่ยน branch (ทางเลือกใหม่ของ `checkout`)
- `git checkout -b <new_branch>` - สร้าง branch ใหม่และสลับไปใช้ branch นั้น (ไม่บังคับ แต่สะดวกหากต้องการสร้าง branch ใหม่)


#### 4. การอัปเดตโค้ด
- `git pull origin <branch_name>` - ดึงโค้ดล่าสุดจาก remote และ merge เข้ากับ local (บังคับใช้หากต้องการอัปเดตโค้ด)
- `git fetch` - ดึงข้อมูลการอัปเดตจาก remote แต่ไม่ merge (ไม่บังคับ แต่ใช้เพื่อตรวจสอบว่ามีการเปลี่ยนแปลงหรือไม่)

#### 5. การเปลี่น branch ทับ main
- `git checkout main` - ดึงโค้ดล่าสุดจาก remote และ merge เข้ากับ local (บังคับใช้หากต้องการอัปเดตโค้ด)
- `git switch main` - ดึงโค้ดล่าสุดจาก remote และ merge เข้ากับ local (บังคับใช้หากต้องการอัปเดตโค้ด)
- `git merge your-branch` - คัดลอกโค้ดจา github มาแทนที่โค้ดบน local. Merge branch ย่อยเข้า main
- `git push origin main` - Push การเปลี่ยนแปลงไปยัง remote

#### 6. การ commit และ push
- `git add .` - เพิ่มไฟล์ทั้งหมดที่เปลี่ยนแปลงเข้าสู่ staging area (บังคับใช้ก่อน commit)
- `git add -u` - เฉพาะไฟล์ที่ถูกแก้ไขหรือลบ แต่ไม่รวมไฟล์ที่เพิ่มใหม่ (บังคับใช้ก่อน commit)
- `git add -A` - รวมทุกอย่าง เทียบเท่ากับ `git add .` แต่ครอบคลุมทุกกรณีใน repo (บังคับใช้ก่อน commit)
- `git add $(git diff --name-only)` - เฉพาะไฟล์ที่แก้ไขเท่านั้น (บังคับใช้ก่อน commit)
- `git add filename1 filename2` - เฉพาะไฟล์ที่ต้องการ (บังคับใช้ก่อน commit)
- `git commit -m "message"` - บันทึกการเปลี่ยนแปลง (บังคับใช้ก่อน push ขึ้น remote)
- `git commit -am "message"` - เพิ่มไฟล์ที่ถูกแก้ไขและ commit ในคำสั่งเดียว (ไม่บังคับ แต่สะดวกสำหรับการ commit ไฟล์ที่ถูก track แล้ว)
- `git push origin <branch_name>` - ส่ง commit ขึ้นไปยัง remote repository (บังคับใช้หากต้องการอัปโหลดโค้ด)
- `git push --force` - บังคับ push เมื่อมีการเปลี่ยนแปลง branch history (ไม่บังคับ ควรใช้อย่างระมัดระวัง)

#### 7. การตรวจสอบสถานะ
- `git status` - แสดงสถานะของไฟล์ที่เปลี่ยนแปลง (ไม่บังคับ แต่มีประโยชน์สำหรับการตรวจสอบ)
- `git log --oneline -5` - ดู commit ล่าสุด 5 รายการ (ไม่บังคับ แต่ช่วยให้ติดตามการเปลี่ยนแปลงได้ง่ายขึ้น)
- `git diff` - แสดงความแตกต่างระหว่างไฟล์ก่อน commit (ไม่บังคับ แต่ช่วยให้ดูว่ามีการเปลี่ยนแปลงอะไรบ้าง)

#### 8. การจัดการไฟล์
- `git rm --cached <file>` - ลบไฟล์ออกจาก staging area โดยไม่ลบไฟล์จริง (ไม่บังคับ ใช้เมื่อ commit ไฟล์ผิดพลาด)
- `git reset HEAD <file>` - ยกเลิกการ `git add` (ไม่บังคับ แต่ช่วยแก้ไขข้อผิดพลาดได้)
- `git reset --hard` - รีเซ็ตโค้ดกลับไปที่ commit ล่าสุด (ไม่บังคับ ควรใช้อย่างระมัดระวัง)

#### 9. การแก้ไขข้อผิดพลาด
- `git revert <commit_id>` - ย้อนกลับ commit โดยสร้าง commit ใหม่ที่แก้ไขการเปลี่ยนแปลง (ไม่บังคับ แต่แนะนำให้ใช้แทน reset หากต้องการย้อนการเปลี่ยนแปลงโดยไม่ลบ history)
- `git stash` - เก็บการเปลี่ยนแปลงชั่วคราวโดยไม่ต้อง commit (ไม่บังคับ แต่มีประโยชน์หากต้องการสลับ branch โดยไม่ commit)
- `git stash pop` - นำการเปลี่ยนแปลงที่ stash ไว้ออกมาใช้ (ไม่บังคับ แต่จำเป็นเมื่อเรียกคืนการเปลี่ยนแปลงจาก stash)

#### 10. ปัญหาการเปลี่ยน branch และการแก้ไข
- หากได้รับ error เช่น:
  ```
  error: Your local changes to the following files would be overwritten by checkout:
  README.md
  Please commit your changes or stash them before you switch branches.
  Aborting
  ```
  นั่นหมายความว่ามีการเปลี่ยนแปลงในไฟล์ที่ยังไม่ได้ commit หรือ stash ซึ่งอาจถูกเขียนทับเมื่อเปลี่ยน branch

  **วิธีแก้ไข:**
  - **Commit การเปลี่ยนแปลงก่อน:**
    ```sh
    git add .
    git commit -m "บันทึกการเปลี่ยนแปลงก่อนเปลี่ยน branch"
    ```
  - **Stash การเปลี่ยนแปลงไว้ชั่วคราว:**
    ```sh
    git stash
    git switch <branch_name>
    git stash pop  # นำการเปลี่ยนแปลงกลับมา
    ```
  - **บังคับเปลี่ยน branch และละทิ้งการเปลี่ยนแปลง:** *(ใช้ระวังเพราะจะลบการเปลี่ยนแปลงทั้งหมดที่ยังไม่ได้ commit)*
    ```sh
    git checkout -f <branch_name>
    ```

### หมายเหตุ:
- คำสั่งที่ **บังคับใช้** คือคำสั่งที่จำเป็นต้องใช้ใน workflow ทั่วไป เช่น `git add .`, `git commit`, `git push`, `git pull`
- คำสั่งที่ **ไม่บังคับ** เป็นคำสั่งที่ใช้ในบางกรณี เช่น `git stash`, `git revert`, `git reset --hard`, `git commit -am`

