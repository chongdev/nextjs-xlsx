
const items: any[] = [];
items.push({
    name: `OPEN DATE`, value: 'Hospital',
    expenditureType: `HEADER`,
})
items.push({
    name: `TYPE OF STORE`, value: 'Hospital', unit: ``,
    expenditureType: `DETAIL`,
    expenditureValue: `หน่วย : พันบาท`
})
items.push({
    name: `AREA`, value: '912', unit: `Sq.m`,
    expenditureType: `DETAIL`, expenditureLavel: `Design Fee`, expenditureValue: `0`
})
items.push({
    name: `FOOD COURT (11)`, value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Construction, Decoration & Renovation`, expenditureValue: `0`
})
items.push({
    name: `ห้องล้างจาน`, value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Signage & Graphic Work`, expenditureValue: `0`
})
items.push({
    name: `TAKE HOME (4)`, value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Mechanical & Engineering System`, expenditureValue: `0`
})
items.push({
    name: 'SERVICE AREA/ SEATING', value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Maintenance`
})
items.push({
    name: `SEATING`, value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Furniture & Office Equipment`
})
items.push({
    name: `TARGETED SALES/MONTH`, value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Equipment`
})
items.push({
    name: `TICKET AVERAGE`, value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Food Equipment`
})
items.push({
    name: `RENTAL RATE`, value: '500', unit: `Sq.m`, styles: {},
    expenditureType: `DETAIL`, expenditureLavel: `Air-condition & Ventilation System`
})
items.push({
    name: `1-3 th yrs rental+Service`, value: '500',
    expenditureType: `DETAIL`, expenditureLavel: `Cash Register, POS & Computer`
})
items.push({
    name: `4-6 th yrs rental+Service`, value: '500',
    expenditureType: `DETAIL`, expenditureLavel: `TOTAL`
})
items.push({ name: `7-9 th yrs rental+Service`, value: '500' })

items.push({})
items.push({
    name: `PROJECT LIFE`, value: '500',
    expenditureType: `HEADER`
})
items.push({
    name: `Rental Deposit`, value: '500',
    expenditureType: `DETAIL`, expenditureLavel: `งานโครงการ`
})
items.push({
    name: `Electrical Meter Deposit`, value: '500',
    expenditureType: `DETAIL`, expenditureLavel: `ทรัพย์สินพร้อมใช้`
})
items.push({
    name: `Telecom Deposit`, value: '500',
    expenditureType: `DETAIL`, expenditureLavel: `TOTAL`
})

export const InvestmentTopic = items;