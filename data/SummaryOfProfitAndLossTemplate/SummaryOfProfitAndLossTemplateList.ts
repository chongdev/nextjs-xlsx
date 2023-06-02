/**
 * 
 * รายการ สรุป P&L
 */

const items: any[] = [];

const green = '#c6e0b4';

items.push({ name: `TA`, value: `0`, });
items.push({ name: `TC/เดือน/วัน`, value: `0`, });
items.push({ name: `ยอดขาย`, value: `0` });
items.push({ name: ` - ร้านค้า`, value: `0`, isSub: true });
items.push({ name: ` - เครื่องดื่ม`, value: `0`, isSub: true, });
items.push({ name: `ต้นทุนขาย`, value: `0`, });
items.push({ name: `Food cost ร้านค้า 70%`, value: `0`, });
items.push({ name: `เครื่องดื่ม 50%`, value: `0`, style: { borderBottom: `1px solid #000` } });
items.push({ name: `กำไรขั้นต้น`, value: `0`, style: { borderBottom: `1px solid #000` } });
items.push({ name: `รายได้อื่น`, value: `0`, });
items.push({ name: ` - รายได้ค่าเช่าร้าน Take Home`, value: `0`, isSub: true, });
items.push({ name: ` - รายได้ค่าน้ำ ไฟ แก๊ส`, value: `0`, isSub: true, style: { borderBottom: `1px solid #000` } });
items.push({ name: ``, value: `0`, isSub: true, style: { fontWeight: `bold`, borderBottom: `1px solid #000`, backgroundColor: `#dce6f1` } });


items.push({ name: `ค่าใช้จ่ายขาย`, value: `0`, style: { fontStyle: `italic` } });
items.push({ name: `ค่าใช้จ่ายพนักงาน`, value: `0` });

items.push({ name: `ค่าใช้จ่ายผันแปร`, value: `0` });
items.push({ name: ` - ค่าไฟฟ้า, น้ำ และไอเย็น`, value: `0`, isSub: true, });
items.push({ name: ` - ค่าแก๊ส`, value: `0`, isSub: true, });
items.push({ name: ` - ค่าวัสดุสิ้นเปลือง`, value: `0`, isSub: true, });
items.push({ name: ` - ค่าบำรุงรักษาเครื่องจักรอุปกรณ์`, value: `0`, isSub: true, });
items.push({ name: ` - ค่าใช้จ่ายอื่น ๆ`, value: `0`, isSub: true, style: { borderBottom: `1px solid #000` } });

items.push({ name: `ค่าใช้จ่ายคงที่`, value: `0`, style: { fontWeight: `bold` } });
items.push({ name: ` - ค่าบริการทำความสะอาด`, value: `0`, isSub: true, });
items.push({ name: ` - ค่าเช่าและค่าบริการพื้นที่`, value: `0`, isSub: true, });
items.push({ name: ` - ค่าบริการอื่นๆ `, value: `0`, isSub: true, });
items.push({ name: ` - ค่าเสื่อมราคา `, value: `0`, isSub: true, style: { borderBottom: `1px solid #000` } });

items.push({ name: `กำไร(ขาดทุน)ระดับร้าน`, value: `0`, style: { fontWeight: `bold` } });
items.push({ name: `ค่าใช้จ่ายขายส่วนกลาง`, value: `0` });
items.push({ name: `ค่าใช้จ่ายบริหาร`, value: `0`, style: { borderBottom: `1px solid #000` } });

items.push({ name: `กำไรจากการดำเนินงาน`, value: `0`, style: { fontWeight: `bold` } });
items.push({ name: `ดอกเบี้ยจ่าย`, value: `0`, style: { borderBottom: `1px solid #000` } });
items.push({ name: `กำไรสุทธิก่อนภาษี`, value: `0`, style: { fontWeight: `bold` } });
items.push({ name: `ภาษี 20%`, value: `0`, style: { borderBottom: `1px solid #000` } });
items.push({ name: `กำไรสุทธิระดับบริษัท`, value: `0`, style: { fontWeight: `bold`, backgroundColor: `#ffff00`, borderBottom: `1px solid #000` } });

export const SummaryOfProfitAndLossTemplateList = items;