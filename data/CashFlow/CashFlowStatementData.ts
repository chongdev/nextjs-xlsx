const items: any[] = [];

items.push({ name: `กระแสเงินสดจากกิจกรรมดำเนินงาน` });
items.push({ name: `กำไรสุทธิ`, colSpan: 2, isVal: true });
items.push({ name: `ค่าเสื่อมราคา`, colSpan: 2, isVal: true });
items.push({ name: `รวมกระแสเงินสดจากกิจกรรมดำเนินงาน` });

items.push({ name: `` });

items.push({ name: `กระแสเงินสดจากกิจกรรมลงทุน` });
items.push({ name: `เงินลงทุนในสินทรัพย์ถาวร`, colSpan: 2, isVal: true });

items.push({ name: `` });

items.push({ name: `กระแสเงินสดจากกิจกรรมจัดหาเงินทุน ` });
items.push({ name: `เงินกู้ระยะยาว `, colSpan: 2, isVal: true });
items.push({ name: `- เงินกู้ระยะยาวที่เพิ่มขึ้น `, colSpan: 1, isVal: true });
items.push({ name: `- เงินคืนเงินต้นเงินกู้ `, colSpan: 1, isVal: true });
items.push({ name: `เงินกู้ระยะสั้น `, colSpan: 2, isVal: true });
items.push({ name: `- เงินกู้ระยะสั้นที่เพิ่มขึ้น `, colSpan: 1, isVal: true });
items.push({ name: `- เงินคืนเงินต้นเงินกู้ `, colSpan: 1, isVal: true });
items.push({ name: `รวมกระแสเงินสดจากกิจกรรมจัดหาเงินทุน`, isVal: true });

items.push({ name: `` });

items.push({ name: `กระแสเงินสดสุทธิระหว่างปี`, isVal: true });

export const CashFlowStatementData = items;



