const items: any[] = [];


/** ยอดขาย Food Court */
items.push({ name: `ยอดขาย Food Court` });
items.push({ name: `อัตราการเติบโตของรายได้จาก Food Court`, isVal: true, unitText: `% ต่อปี`, lavel: 2 });
items.push({ name: `อัตราการเติบโตของ TA`, isVal: true, unitText: `% ต่อปี`, lavel: 2 });
items.push({ name: `TA ลูกค้าภายนอก`, isVal: true, unitText: `บาท/ใบเสร็จ`, unitPrice: 52.0, lavel: 3 });
items.push({ name: `TA บุคลากร รพ. ส่วนลด 10%`, isVal: true, unitText: `บาท/ใบเสร็จ`, unitPrice: 47.0, lavel: 3 });
items.push({ name: `ลูกค้าต่อวัน`, isVal: true, unitText: `Rate`, unitPrice: `จำนวนคน`, lavel: 3 });
items.push({ name: `ลูกค้าภายนอก`, isVal: true, unitText: `Rate`, unitPrice: `จำนวนคน`, lavel: 4 });
items.push({ name: `บุคลากร รพ.`, isVal: true, unitText: `Rate`, unitPrice: `จำนวนคน`, lavel: 4 });
items.push({ name: ``, isVal: true, unitText: `0.0%`, unitPrice: ` -   `, lavel: 4 });


items.push({ name: `TC (จำนวนใบเสร็จ/วัน)`, isVal: true, unitText: ` (Turn Over ต่อวัน)`, unitPrice: ` 8.1 `, lavel: 3 });
items.push({ name: `จำนวนวันที่ขายลูกค้าภายนอก`, isVal: true, unitText: `วัน/ปี`, lavel: 3 });
items.push({ name: `จำนวนวันที่ขายบุคลากร รพ. `, isVal: true, unitText: `วัน/ปี`, lavel: 3 });
items.push({ name: `ยอดขายของ ลูกค้าภายนอก`, isVal: true, unitText: `พันบาท/ปี`, lavel: 3 });
items.push({ name: `ยอดขายของ บุคลากร รพ.`, isVal: true, unitText: `พันบาท/ปี`, lavel: 3 });
items.push({ name: `รวมยอดขายของ  Food Court`, isVal: true, unitText: `พันบาท/ปี`, lavel: 3 });
items.push({ name: `` });

items.push({ name: `Foodcourt`, isVal: true, unitPrice: `จำนวนจุด`, unitText: `ค่าเช่า`, lavel: 3 });
items.push({ name: `รายได้จากห้องเช่า`, isVal: true, unitPrice: `0`, unitText: `0`, lavel: 3 });
items.push({ name: `รายได้ร้าน `, isVal: true, unitPrice: `0`, unitText: `0`, lavel: 3 });
items.push({ name: `รายได้จาก Foodcourt 1 ร้าน `, isVal: true, unitText: `พันบาท/ปี`, lavel: 3 });
items.push({ name: `` });

items.push({ name: `รายได้ GP`, isVal: true, unitPrice: `Ratio`, unitText: `GP`, lavel: 3 });
items.push({ name: ``, isVal: true, unitPrice: `100%`, unitText: `30%`, lavel: 3 });
items.push({ name: ``, isVal: true, unitPrice: ``, unitText: ``, lavel: 3 });
items.push({ name: ``, isVal: true, unitPrice: ``, unitText: `พันบาท/ปี`, lavel: 3 });
items.push({ name: `` });

/** ยอดขายร้านบาร์น้ำเครื่องดื่ม */
items.push({ name: `ยอดขายร้านบาร์น้ำเครื่องดื่ม` });
items.push({ name: `TC (จำนวนลูกค้า)`, isVal: true, unitPrice: `20%`, unitText: `Ratio จาก TC `, lavel: 2 });
items.push({ name: `TA`, isVal: true, unitPrice: ` 12 `, unitText: `บาท/ใบเสร็จ`, lavel: 2 });
items.push({ name: `จำนวนวันที่ขาย`, isVal: true, unitText: `วัน/ปี`, lavel: 2 });
items.push({ name: `รวมยอดขายร้านบาร์น้ำเครื่องดื่ม`, isVal: true, unitText: `พันบาท/ปี`, lavel: 2 });
items.push({ name: `ต้นทุนร้านบาร์น้ำเครื่องดื่ม`, isVal: true, unitPrice: ` 50%`, unitText: `ของยอดขาย`, lavel: 2 });
items.push({ name: `รายได้จากร้านบาร์น้ำเครื่องดื่ม`, isVal: true, lavel: 2 });
items.push({ name: `` });


/** รายได้จากร้านค้าเช่า */
const shopList = [];
shopList.push({ name: `ร้านซาลาเปาทับหลี`, quantity: 1, unitPrice: `15,000`, unitText: `บาท/เดือน` });
shopList.push({ name: `ร้าน Fuku Matcha`, quantity: 1, unitPrice: `28,000`, unitText: `บาท/เดือน` });
shopList.push({ name: `ร้าน Star Coffee`, quantity: 1, unitPrice: `15,000`, unitText: `บาท/เดือน` });
shopList.push({ name: `ร้าน Salad Roll`, quantity: 1, unitPrice: `15,000`, unitText: `บาท/เดือน` });
shopList.push({ name: `ร้านค้าเช่ารถ Cart`, quantity: 0, unitPrice: `10,800`, unitText: `บาท/เดือน` });
shopList.push({ name: `รายได้ POS`, quantity: 12, unitPrice: `2,140`, unitText: `บาท/เดือน` });
// shopList.push({ name: `รายได้จากค่าเช่า`, quantity: 1, unitPrice: `100000`, unitText: `บาท/เดือน` });


items.push({ name: `รายได้จากร้านค้าเช่า (Fixed Rent)`, unitPrice: `จำนวนจุด`, unitText: `ค่าเช่า(บาท)` });
items.push({ name: `อัตราการขึ้นค่าเช่า`, isVal: true, lavel: 2 });
shopList.forEach((shop, index) => {
    items.push({ name: shop.name, isVal: true, unitPrice: shop.quantity, unitText: shop.unitPrice, lavel: 2 });
})

items.push({ name: `รายได้จากค่าเช่า`, isVal: true, unitText: `พันบาท/ปี`, lavel: 2 });


/** รวมรายได้จากยอดขาย */
items.push({ name: `` });
items.push({ name: `รวมยอดขายทั้งหมด`, isVal: true, unitText: `พันบาท/ปี`, lavel: 2 });
items.push({ name: `` });


/** รายได้ค่าไฟฟ้า */
items.push({ name: `รายได้ค่าไฟฟ้า` });
items.push({ name: `อัตราการขึ้นค่าไฟฟ้า`, isVal: true, lavel: 2, unitText: `% ต่อปี` });
items.push({ name: `ค่าไฟที่เรียกเก็บจากผู้เช่า`, isVal: true, lavel: 2, unitText: `บาท/หน่วย` });
items.push({ name: `ปริมาณไฟฟ้าที่ใช้ - ผู้เช่า`, isVal: true, lavel: 2, unitText: `หน่วย/เดือน` });
items.push({ name: `- ศูนย์อาหาร`, isVal: true, lavel: 3, unitText: `หน่วย/เดือน` });
items.push({ name: `- Take Home`, isVal: true, lavel: 3, unitText: `หน่วย/เดือน` });
items.push({ name: ``, isVal: true, lavel: 3, unitText: `หน่วย/เดือน` });
items.push({ name: `รวมรายได้ค่าไฟฟ้า`, isVal: true, lavel: 2, unitText: `พันบาท/ปี` });
items.push({ name: `` });


/** รายได้ค่าน้ำ */
items.push({ name: `รายได้ค่าน้ำ` });
items.push({ name: `อัตราการขึ้นค่าน้ำ`, isVal: true, lavel: 2, unitText: `% ต่อปี` });
items.push({ name: `ค่าน้ำที่เรียกเก็บจากผู้เช่า`, isVal: true, lavel: 2, unitText: `บาท/หน่วย` });
items.push({ name: `ปริมาณน้ำที่ใช้ - ผู้เช่า`, isVal: true, lavel: 2, unitText: `หน่วย/เดือน` });
items.push({ name: `- ศูนย์อาหาร`, isVal: true, lavel: 3, unitText: `หน่วย/เดือน` });
items.push({ name: `- Take Home`, isVal: true, lavel: 3, unitText: `หน่วย/เดือน` });
items.push({ name: ``, isVal: true, lavel: 3, unitText: `หน่วย/เดือน` });
items.push({ name: `รวมรายได้ค่าน้ำ`, isVal: true, lavel: 2, unitText: `พันบาท/ปี` });
items.push({ name: `` });


/** รายได้ค่าแก๊ส */
items.push({ name: `รายได้ค่าแก๊ส` });
items.push({ name: `อัตราการขึ้นค่าแก๊ส`, isVal: true, lavel: 2, unitText: `% ต่อปี` });
items.push({ name: `ค่าแก๊สที่เรียกเก็บจากผู้เช่า`, isVal: true, lavel: 2, unitText: `บาท/หน่วย` });
items.push({ name: `ปริมาณแก๊สที่ใช้ - ผู้เช่า`, isVal: true, lavel: 2, unitText: `หน่วย/เดือน` });
items.push({ name: `รวมรายได้ค่าแก๊ส`, isVal: true, lavel: 2, unitText: `พันบาท/ปี` });
items.push({ name: `` });


export const AssumptionIncomeData = items;