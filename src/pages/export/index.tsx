import React, { useState, useCallback, useEffect } from 'react'

import XLSX from 'xlsx';
import XLSTYLE from 'xlsx-js-style';

// const XLSX = require('https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js');
// import XLSX from 'https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js';

type Props = {}

const ExportPage = (props: Props) => {
    const tableId = 'my-table-id';
    const [sheet, setSheet] = useState<any>([
        { a: 1, b: 2 },
        { a: 1, b: 2 },
    ]);

    const borderStyles: any = {
        right: {
            style: "dotted", // thin, medium, thick, dashed, dotted, double, hair, mediumDashed, dashDot, mediumDashDot, dashDotDot, mediumDashDotDot, slantDashDot
            color: { rgb: "00000000" }
        },
        left: {
            style: "dotted",
            color: { rgb: "00000000" }
        },
        top: {
            style: "dotted",
            color: { rgb: "00000000" }
        },
        bottom: {
            style: "dotted",
            color: { rgb: "00000000" }
        },
    }

    // useEffect(() => {
    //     (async () => {
    //         const f = await (await fetch("https://sheetjs.com/pres.xlsx")).arrayBuffer();
    //         const wb = read(f); // parse the array buffer
    //         const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    //         const data = utils.sheet_to_json(ws); // generate objects


    //         console.log(data, pres);


    //         // setPres(data); // update state
    //     })();
    // }, []);

    // เงินลงทุน
    const costInvestmentList: any = [
        {
            label: `1. งานก่อสร้าง (Construction, Decoration & Renovation)`,
            unit: `พันบาท`,
            value: ` 1,250 `,
        },
        {
            label: `- Construction & Decoration `,
            unit: ``,
            value: ` 940 `,
            colSpan: 4,
        },
        {
            label: `- Signage & Graphic Work  `,
            unit: ``,
            value: ``,
            colSpan: 4,
        },
        {
            label: `- Mechanical & Engineering System `,
            unit: ``,
            value: `  150  `,
            colSpan: 4,
        },
        {
            label: `- Design Fee `,
            unit: ``,
            value: `  161  `,
            colSpan: 4,
        },
        {
            label: `- Meantaniance `,
            unit: ``,
            value: ``,
            colSpan: 4,
        },
        // 
        {
            label: `2. เครื่องจักรและอุปกรณ์`,
            unit: `พันบาท`,
            value: `-`,
        },
        {
            label: `- Air-condition & Ventilation System `,
            unit: ``,
            value: ``,
            colSpan: 4,
        },
        {
            label: `- Equipment `,
            unit: ``,
            value: ``,
            colSpan: 4,
        },
        {
            label: `- Office Equipment `,
            unit: ``,
            value: ``,
            colSpan: 4,
        },
        {
            label: `- Food-service Equipment (Sub Brand)`,
            unit: ``,
            value: ``,
            colSpan: 4,
        },
        {
            label: `- หมวดเครื่องเย็น`,
            unit: ``,
            value: ``,
            colSpan: 4,
        },
        //
        { label: `3. คอมพิวเตอร์`, unit: `พันบาท`, value: `-` },
        { label: `- รวมเงินลงทุน`, unit: ``, value: ``, colSpan: 4 },
    ];

    // เงินกู้
    const costLoanList: any = [
        {
            label: `1. ดอกเบี้ยเงินกู้`,
            unit: ``,
            value: `7.0%`,
        },
        {
            label: `2. ระยะเวลาการชำระคืนเงินกู้ระยะยาว`,
            unit: `ปี`,
            value: `3`,
        },
    ];


    const exportExcelHtmlHandler = () => {
        const sheetName = "Assumptions";
        const tableHTML = document.getElementById(tableId);

        const ua = window.navigator.userAgent;
        const msie = ua.indexOf("MSIE ");

        if (tableHTML) {
            window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tableHTML.outerHTML));
            // window.open('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' + encodeURIComponent(tableHTML.outerHTML), 'export');
        }

    }

    const exportExcelByTableHandler = useCallback(() => {
        console.log('exportExcelHandler ...');
        const sheetName = "Assumptions";

        const table = document.getElementById(tableId);
        const workbook = XLSTYLE.utils.table_to_book(table, {
            sheet: sheetName,
            raw: true,
            cellStyles: true,
            cellDates: true,

            password: "123",

            // cellStyles: false,
        });

        const ws = workbook.Sheets[sheetName];
        // const cell = XLSTYLE.utils.encode_cell({ c: 0, r: 0 });
        // cell.s = { fill: { fgColor: { rgb: "ff6600" } } };


        const config = {
            maxRows: 189,
        };

        ws['!cols'] = [
            { wpx: 15 },
            { wpx: 10 },
            { wpx: 10 },
            { wpx: 10 },
            { wpx: 250 },
            { wpx: 60 },
            { wpx: 100 },
            { wpx: 30 },
        ];

        // utils.book_append_sheet(wb, ws, sheetName);
        // utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });

        // set background color
        // ws["A1"].s = {
        //     fill: {
        //         fgColor: { rgb: "00dce6f1" },
        //         bgColor: { rgb: "00dce6f1" }
        //     },
        //     font: {
        //         bold: true,
        //         color: { rgb: "FFFFAA00" }
        //     },
        // };

        const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", 'J', 'K', 'L'];

        for (let index = 1; index <= config.maxRows; index++) {
            abc.forEach((key) => {
                const cell = `${key}${index}`;

                if (ws[cell]) {
                    ws[cell].s = {
                        fill: {
                            fgColor: { rgb: "FFFFFFFF" },
                            bgColor: { rgb: "FFFFFFFF" }
                        },
                    }
                }
            });
        }


        // set style: header
        ['2', '74', '170'].forEach((rowNo) => {
            ['B', 'I', 'J', 'K'].forEach((colNo) => {
                const cell = `${colNo}${rowNo}`;

                if (ws[cell]) {
                    ws[cell].s = {
                        fill: {
                            // patternType: "solid",
                            fgColor: { rgb: "003060ff" },
                            bgColor: { rgb: "003060ff" }
                        },
                        font: {
                            color: { rgb: "FFFFFFF1" }
                        },
                    };
                }
            });
        });

        // set style: subtitle
        ['3', '75', '171'].forEach((rowNo) => {
            ['B', 'I', 'J', 'K'].forEach((colNo) => {
                const cell = `${colNo}${rowNo}`;

                if (ws[cell]) {
                    ws[cell].s = {
                        fill: {
                            fgColor: { rgb: "00dce6f1" },
                            bgColor: { rgb: "00dce6f1" }
                        },
                        // alignment: {
                        //     vertical: "center",
                        //     horizontal: "center",
                        //     wrapText: '1',
                        // },
                    };
                }
            });
        });

        // set style: bg color
        ['F5', 'F6', 'F7', 'F8', 'F10', 'G10', 'F11', 'G11'].forEach((key) => {
            ws[key].s = {
                fill: {
                    fgColor: { rgb: "FFFFFFFF" },
                    bgColor: { rgb: "FFFFFFFF" }
                },
                border: borderStyles
            };
        });

        


        //  set style: ช่องสรุป เส้นประ
        ['I', 'J', 'K'].forEach((key) => {
            for (let index = 5; index <= 168; index++) {

                if ([19, 20, 24, 25, 29, 30, 37, 38, 47, 49, 50, 58, 59, 67, 68, 86, 73, 74, 75, 90, 92, 102, 113, 121, 129, 160].indexOf(index) > -1) {
                    continue;
                }
                const cell = `${key}${index}`;

                if (ws[cell]) {
                    ws[cell].s = {
                        border: borderStyles
                    };
                }
            }
        });

        //  set style: ช่องสรุป เส้นประ + สีเทา
        ['I', 'J', 'K'].forEach((key) => {
            for (let index = 5; index <= 168; index++) {
                if ([13, 16, 17, 18, 28, 34, 36, 46, 48, 57, 66, 72, 85, 91, 96, 109, 119, 127, 134, 141, 148, 152, 158, 168].indexOf(index) > -1) {
                    const cell = `${key}${index}`;

                    if (ws[cell]) {
                        ws[cell].s = {
                            fill: {
                                fgColor: { rgb: "00dce6f1" },
                                bgColor: { rgb: "00dce6f1" }
                            },
                            border: borderStyles
                        };
                    }
                }
            }
        });


        //  set format
        XLSTYLE.utils.cell_set_number_format(ws["J5"], "0%");
        // XLSTYLE.utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });


        /* Write to file */
        const time = new Date().getTime();
        XLSTYLE.writeFile(workbook, `Export ${sheetName} - ${time}.xlsx`);
    }, [sheet]);


    const exportExcelHandler = useCallback(() => {
        console.log('exportExcelHandler ...');
        const sheetName = "Assumptions";

        /* Create worksheet */
        var ws_data = [
            ["S", "h", "e", "e", "t", "J", "S"],
            [1, 2, 3, 4, 5]
        ];
        const ws = XLSX.utils.json_to_sheet(ws_data);

        /* Create workbook */
        var wb = XLSX.utils.book_new();

        // set background color
        const abc = ["A", "B", "C", "D", "E", "F", "G", "H"];

        for (let index = 1; index < 2; index++) {
            const key = `${abc[index]}1`;
            ws[key].s = {
                fill: {
                    patternType: "solid",
                    fgColor: { rgb: "b2b2b2" },
                    bgColor: { rgb: "b2b2b2" }
                },
                patternType: "solid",
                align: "center",
                valign: "center",
                font: {
                    color: "#FFFFFF",
                },
                alignment: {
                    vertical: "center",
                    horizontal: "center",
                    wrapText: '1',
                },
                border: {
                    right: {
                        style: "thin",
                        color: "000000"
                    },
                    left: {
                        style: "thin",
                        color: "000000"
                    },
                }
            };
        }

        /* Add the worksheet to the workbook */
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        XLSX.utils.book_append_sheet(wb, ws, "sheet 2");

        /* Write to file */
        const time = new Date().getTime();
        XLSX.writeFile(wb, `${sheetName} - ${time}.xlsx`, { bookType: 'xlsx', type: 'buffer', cellStyles: false, cellDates: true, });
        // XLSX.writeFileXLSX(wb, `${sheetName} - ${time}.xlsx`, { bookType: 'xlsx', type: 'buffer', cellStyles: false, cellDates: true, });
    }, [sheet]);

    return (
        <div>
            <button type='button' onClick={exportExcelByTableHandler}>Export Excel</button>
            <table id={tableId} style={{ width: `100%`, borderSpacing: 0, borderCollapse: `collapse` }}>

                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{ width: 10, backgroundColor: `#003367`, color: `#fff` }}>รายได้</td>
                        <td style={{ width: 100, backgroundColor: `#003367`, color: `#fff` }} align='center'>2022</td>
                        <td style={{ width: 100, backgroundColor: `#003367`, color: `#fff` }} align='center'>2023</td>
                        <td style={{ width: 100, backgroundColor: `#003367`, color: `#fff` }} align='center'>2024</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{ backgroundColor: `#ccffff` }}>&nbsp;</td>
                        <td style={{ backgroundColor: `#ccffff` }} align='center'>1</td>
                        <td style={{ backgroundColor: `#ccffff` }} align='center'>2</td>
                        <td style={{ backgroundColor: `#ccffff` }} align='center'>3</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
                <tbody>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7}><b>ยอดขาย Food Court</b></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 100 }}>อัตราการเติบโตของรายได้จาก Food Court</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 10 }}>อัตราการเติบโตของ TA</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 10 }}>TA ลูกค้าภายนอก</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100 }}>บาท/ใบเสร็จ</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 10 }}>TA บุคลากร รพ. ส่วนลด 10%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100 }}>บาท/ใบเสร็จ</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 10 }}>ลูกค้าต่อวัน</td>
                        <td style={{ width: 100 }}>จำนวนคน</td>
                        <td style={{ width: 100 }}>Rate</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 10 }}>ลูกค้าภายนอก</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2,000</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>52%</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,040 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,061 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,082 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>บุคลากร รพ.</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>1,000</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>32%</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 320 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 326 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 333 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0%</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>TC (จำนวนใบเสร็จ/วัน)</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 8.1 </td>
                        <td style={{ width: 130, fontWeight: `bold` }}>(Turn Over ต่อวัน)</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200 }}>จำนวนวันที่ขายลูกค้าภายนอก</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>วัน/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200 }}>จำนวนวันที่ขายบุคลากร รพ. </td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>วัน/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200 }}>ยอดขายของ ลูกค้าภายนอก</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200 }}>ยอดขายของ บุคลากร รพ.</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  3,339  </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 3,474 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 3,614 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รวมยอดขายของ  Food Court</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130, fontWeight: `bold` }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>Foodcourt</td>
                        <td style={{ width: 100 }}>จำนวนจุด</td>
                        <td style={{ width: 130 }}>ค่าเช่า</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้จากห้องเช่า</td>
                        <td style={{ width: 100 }}>0</td>
                        <td style={{ width: 130, fontWeight: `bold` }}>0</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้ร้าน </td>
                        <td style={{ width: 100 }}>0</td>
                        <td style={{ width: 130, fontWeight: `bold` }}>0</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้จาก Foodcourt 1 ร้าน </td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130, fontWeight: `bold` }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,360 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,387 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,415 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้ GP</td>
                        <td style={{ width: 100, border: `1px dotted #000`, fontWeight: `bold` }}>Ratio</td>
                        <td style={{ width: 130, border: `1px dotted #000`, fontWeight: `bold` }}>GP</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>100%</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>30%</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  4,603  </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 4,789 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 4,983 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้จาก Food Court</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 4,603 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 4,789 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 4,983 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>ยอดขายร้านบาร์น้ำเครื่องดื่ม</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>TC (จำนวนลูกค้า)</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>20%</td>
                        <td style={{ width: 130 }}>Ratio จาก TC </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  272 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 277 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 283 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>TA</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 12 </td>
                        <td style={{ width: 130 }}>บาท/ใบเสร็จ</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>11</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 11 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 12 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>จำนวนวันที่ขาย</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>วัน/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 222 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  222  </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  222  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>รวมยอดขายร้านบาร์น้ำเครื่องดื่ม</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 677 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 705 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 733 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ต้นทุนร้านบาร์น้ำเครื่องดื่ม</td>
                        <td style={{ width: 100 }}>50%</td>
                        <td style={{ width: 130 }}>ของยอดขาย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 339 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 352 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 367 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>รายได้จาก*ร้านบาร์น้ำเครื่องดื่ม</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000`, fontWeight: `bold` }}> 339 </td>
                        <td style={{ width: 100, border: `1px dotted #000`, fontWeight: `bold` }}> 352 </td>
                        <td style={{ width: 100, border: `1px dotted #000`, fontWeight: `bold` }}> 367 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้จากร้านค้าเช่า (Fixed Rent)</td>
                        <td style={{ width: 100 }}>จำนวนจุด</td>
                        <td style={{ width: 130 }}>ค่าเช่า(บาท)</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>อัตราการขึ้นค่าเช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>5.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>5.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ร้านซาลาเปาทับหลี</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>1</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>15,000</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 180 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 189 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 198 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ร้าน Fuku Matcha</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>1</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>28,000</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 336 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 353 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 370 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ร้าน Star Coffee</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>1</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>15,000</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 180 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 189 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 198 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ร้าน Salad Roll</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>1</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>15,000</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 180 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 189 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 198 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ร้านค้าเช่ารถ Cart</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>10,800</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>รายได้ POS</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>12</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}>2,140</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 308 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 324 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 340 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>รายได้จากค่าเช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,184 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,243 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,306 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>รวมยอดขายทั้งหมด</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 6,465 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 6,737 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 7,021 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้ค่าไฟฟ้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>อัตราการขึ้นค่าไฟฟ้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าไฟที่เรียกเก็บจากผู้เช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/หน่วย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 8.7 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 9.0 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 9.3 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ปริมาณไฟฟ้าที่ใช้ - ผู้เช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 2,100 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 2,163 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 2,228 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ศูนย์อาหาร</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 840 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 865 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 891 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- Take Home</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,260 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,298 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,337 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- Take Home</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> -   </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> -   </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> -   </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>รายได้ค่าไฟฟ้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 220 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 233 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 247 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้ค่าน้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>อัตราการขึ้นค่าน้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าน้ำที่เรียกเก็บจากผู้เช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/หน่วย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ปริมาณน้ำที่ใช้ - ผู้เช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}> - ศูนย์อาหาร</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}> - Take Home</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}> - Take Home</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>รายได้ค่าน้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 16 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 17 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 18 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้ค่าแก๊ส</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>อัตราการขึ้นค่าแก๊ส</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าแก๊สที่เรียกเก็บจากผู้เช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/หน่วย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ปริมาณแก๊สที่ใช้ - ผู้เช่า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3.0%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200, fontWeight: `bold` }}>รายได้ค่าแก๊ส</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 497 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 527 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 559 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{ width: 10, backgroundColor: `#003367`, color: `#fff` }}>ค่าใช้จ่าย</td>
                        <td style={{ width: 100, backgroundColor: `#003367`, color: `#fff` }} align='center'>2022</td>
                        <td style={{ width: 100, backgroundColor: `#003367`, color: `#fff` }} align='center'>2023</td>
                        <td style={{ width: 100, backgroundColor: `#003367`, color: `#fff` }} align='center'>2024</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{ backgroundColor: `#ccffff` }}>&nbsp;</td>
                        <td style={{ backgroundColor: `#ccffff` }} align='center'>1</td>
                        <td style={{ backgroundColor: `#ccffff` }} align='center'>2</td>
                        <td style={{ backgroundColor: `#ccffff` }} align='center'>3</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200 }}>ค่าเช่าพื้นที่ Food Court</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}></td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>แบบที่ 1</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}>- % ยอดขาย Food Court</td>
                        <td colSpan={2} style={{ width: 100 }}>% ของยอดขาย Food Court</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}>ค่าเช่า Fix</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}></td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}>เงินค่าธรรมเนียมแรกเข้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}></td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}>ค่าดูแลพื้นที่ส่วนกลาง 90 บาท/ตร.ม./เดือน (รวมค่าบริการกำจัดขยะ)</td>
                        <td style={{ width: 100 }}>912</td>
                        <td style={{ width: 100 }}>ตร.ม.</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>984.96</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 985 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 985 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}></td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}></td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}>- % ยอดขาย Take Home</td>
                        <td colSpan={2} style={{ width: 100 }}>% ของยอดขาย Take Home</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}></td>
                        <td colSpan={2} style={{ width: 100 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,885 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,885 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,885 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>แบบที่ 2</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}></td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}></td>
                        <td style={{ width: 100 }}></td>
                        <td style={{ width: 100 }}></td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}>- ค่าเช่าพื้นที่ แบบ Fixed Rate</td>
                        <td style={{ width: 100 }}>พันบาท/ปี</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 100 }}>รวมค่าเช่าทั้งหมด</td>
                        <td style={{ width: 100 }}>พันบาท/ปี</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,885 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,885 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 1,885 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>

                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={11} style={{ backgroundColor: `#ccffff` }}>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={3} style={{ width: 200 }}>เงินเดือน & ค่าแรง </td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>อัตราการเพิ่มขึ้นของเงินเดือน/ค่าแรง</td>
                        <td style={{ width: 100 }}>5% ต่อปี</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> - </td>
                        <td style={{ width: 100 }}>4%</td>
                        <td style={{ width: 100 }}>4%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>เงินเดือน & ค่าแรง</td>
                        <td style={{ width: 100 }}>พันบาท/ปี</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 882 </td>
                        <td style={{ width: 100 }}> 917 </td>
                        <td style={{ width: 100 }}> 954 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>Head Count</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ผู้จัดการร้าน</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>1</td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ผู้ช่วยผู้จัดการร้าน</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- พนักงานทั่วไป</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- แคชเชียร์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td style={{ width: 100 }}> 1 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={11}>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าแรง/เงินเดือน/โบนัส/สวัสดิการ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ผู้จัดการร้าน</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/เดือน/คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 35,000 </td>
                        <td style={{ width: 100 }}> 36,400 </td>
                        <td style={{ width: 100 }}> 37,856 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ผู้ช่วยผู้จัดการร้าน</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/เดือน/คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 23,333 </td>
                        <td style={{ width: 100 }}> 24,267 </td>
                        <td style={{ width: 100 }}> 25,237 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- พนักงานทั่วไป</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/เดือน/คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 15,167 </td>
                        <td style={{ width: 100 }}> 15,773 </td>
                        <td style={{ width: 100 }}> 16,404 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- แคชเชียร์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/เดือน/คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 15,167 </td>
                        <td style={{ width: 100 }}> 15,773 </td>
                        <td style={{ width: 100 }}> 16,404 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าบริการทำความสะอาด</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 540 </td>
                        <td style={{ width: 100 }}> 540 </td>
                        <td style={{ width: 100 }}> 540 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- แม่บ้าน</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td style={{ width: 100 }}> 3 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ผู้ช่วยผู้จัดการร้าน</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/เดือน/คน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 15,000 </td>
                        <td style={{ width: 100 }}> 15,000 </td>
                        <td style={{ width: 100 }}> 15,000 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าไฟฟ้า และไอเย็น</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อัตราการขึ้นค่าไฟฟ้า / ไอเย็น</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>3%</td>
                        <td style={{ width: 100 }}>3%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าไฟที่จ่ายให้การไฟฟ้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/หน่วย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  5.35  </td>
                        <td style={{ width: 100 }}>  5.51  </td>
                        <td style={{ width: 100 }}>  5.68  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าไฟ ร้านค้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  2,100  </td>
                        <td style={{ width: 100 }}>  2,163  </td>
                        <td style={{ width: 100 }}>  2,228  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าไฟ พื้นที่ส่วนกลาง ห้องล้างจาน บาร์น้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  500  </td>
                        <td style={{ width: 100 }}>  515  </td>
                        <td style={{ width: 100 }}>  530  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- รวมปริมาณไฟฟ้าที่ใช้ทั้งศูนย์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  2,600  </td>
                        <td style={{ width: 100 }}>  2,678  </td>
                        <td style={{ width: 100 }}>  2,758  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>รวมค่าไฟฟ้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  167  </td>
                        <td style={{ width: 100 }}>  177  </td>
                        <td style={{ width: 100 }}>  188  </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าน้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อัตราการขึ้นค่าน้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>3%</td>
                        <td style={{ width: 100 }}>3%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าน้ำที่จ่ายให้ศูนย์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/หน่วย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 18 </td>
                        <td style={{ width: 100 }}> 19 </td>
                        <td style={{ width: 100 }}> 19 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าน้ำ ร้านค้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 53 </td>
                        <td style={{ width: 100 }}> 55 </td>
                        <td style={{ width: 100 }}> 56 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าน้ำ ห้องล้างจาน บาร์น้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 20 </td>
                        <td style={{ width: 100 }}> 21 </td>
                        <td style={{ width: 100 }}> 21 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- รวมปริมาณค่าน้ำที่ใช้ทั้งศูนย์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 73 </td>
                        <td style={{ width: 100 }}> 75 </td>
                        <td style={{ width: 100 }}> 77 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>รวมค่าน้ำ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 16 </td>
                        <td style={{ width: 100 }}> 17 </td>
                        <td style={{ width: 100 }}> 18 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200 }}>ค่าแก๊ส</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อัตราการขึ้นค่าไฟฟ้า / ไอเย็น</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>3%</td>
                        <td style={{ width: 100 }}>3%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าแก๊ส 48 กก.</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>บาท/หน่วย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  150  </td>
                        <td style={{ width: 100 }}>  155  </td>
                        <td style={{ width: 100 }}>  159  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่า ร้านค้า</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  230  </td>
                        <td style={{ width: 100 }}>  237  </td>
                        <td style={{ width: 100 }}>  244  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- รวมปริมาณแก๊สที่ใช้ทั้งศูนย์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>หน่วย/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  230  </td>
                        <td style={{ width: 100 }}>  237  </td>
                        <td style={{ width: 100 }}>  244  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>รวมค่าแก๊ส</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>  414  </td>
                        <td style={{ width: 100 }}>  439  </td>
                        <td style={{ width: 100 }}>  466  </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>อัตราการเพิ่มขึ้นของวัสดุสิ้นเปลือง</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>2%</td>
                        <td style={{ width: 100 }}>2%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าอุปกรณ์ต่างๆ (จาน  ชาม ช้อน)</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>-</td>
                        <td style={{ width: 100 }}>-</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ถุงพลาสติก</td>
                        <td style={{ width: 100 }}>0.1%</td>
                        <td style={{ width: 130 }}>% ของยอดขาย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 17 </td>
                        <td style={{ width: 100 }}> 18 </td>
                        <td style={{ width: 100 }}> 18 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อื่นๆ (กระดาษ Pos,กระดาษเช็ดปาก)</td>
                        <td style={{ width: 100 }}>0.7%</td>
                        <td style={{ width: 130 }}>% ของยอดขาย</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 120 </td>
                        <td style={{ width: 100 }}> 123 </td>
                        <td style={{ width: 100 }}> 125 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- บัตรเงินสด</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>-</td>
                        <td style={{ width: 100 }}>-</td>
                        <td style={{ width: 100 }}>-</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200, fontWeight: `bold` }}>รวมค่าวัสดุสิ้นเปลือง</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}> 138 </td>
                        <td style={{ width: 100 }}> 140 </td>
                        <td style={{ width: 100 }}> 143 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>ค่าบริการอื่นๆ</td>
                        <td style={{ width: 100 }}>จำนวนเครื่อง</td>
                        <td style={{ width: 130 }}>บาท/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อัตราการเพิ่มขึ้นของค่าเช่าอุปกรณ์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>0%</td>
                        <td style={{ width: 100 }}>0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าเช่าเครื่องล้างจาน</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>1</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 9,500 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 114 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 114 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 114 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าเช่าเครื่องทำน้ำแข็ง</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>1</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 6,000 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  72  </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  72  </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  72  </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าเช่าเครื่องPOS</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 2,300 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>-</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200, fontWeight: `bold` }}>รวมค่าบริการอื่นๆ</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 138 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 140 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 143 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={11}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>ภาษีโรงเรือน</td>
                        <td style={{ width: 100 }}>จำนวนเครื่อง</td>
                        <td style={{ width: 130 }}>บาท/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อัตราภาษี</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>% ของค่าเช่า</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>12.5%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>12.5%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>12.5%</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200, fontWeight: `bold` }}>ค่าภาษี</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  236  </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  236  </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>  236  </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>ค่าใช้จ่ายอื่น</td>
                        <td style={{ width: 100 }}>จำนวนเครื่อง</td>
                        <td style={{ width: 130 }}>บาท/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อัตราการเพิ่มขึ้นของค่าใช้จ่ายอื่น</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>% ต่อปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.0%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าสื่อสาร อินเทอร์เน็ต</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 3,899 </td>
                        <td style={{ width: 130 }}>บาท/เดือน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 47 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 47 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 47 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- เบี้ยประกันภัย</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0.5%</td>
                        <td style={{ width: 130 }}>% ของมูลค่าทรัพย์สิน</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 20 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 20 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 20 </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200, fontWeight: `bold` }}>รวมค่าใช้จ่ายอื่น</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>   67   </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>   67   </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>   67   </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td colSpan={12}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={2} style={{ width: 200, fontWeight: `bold` }}>ค่าบำรุงรักษาเครื่องจักรอุปกรณ์</td>
                        <td style={{ width: 100 }}>ครั้ง/ปี</td>
                        <td style={{ width: 130 }}>บาท/ครั้ง</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- อัตราการเพิ่มขึ้นของค่าบำรุงรักษาเครื่องจักรอุปกรณ์</td>
                        <td style={{ width: 100 }}>&nbsp;</td>
                        <td style={{ width: 130 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3%</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>3%</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- งาน HOOD  ดูดควัน</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 80,000 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> - </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 0 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 0 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- งาน แอร์ </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>0</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 30,000 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> - </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 0 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 0 </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าซ่อม</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>12</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 10,000 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 120 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>124</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>127</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- งานทะลวงท่อ</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>2</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 20,000 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 40 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>41</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>42</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่ากำจัดแมลง</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>24</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 3,000 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 72 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>74</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>76</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200 }}>- ค่าเก็บขยะ </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>12</td>
                        <td style={{ width: 130, border: `1px dotted #000` }}> 5,000 </td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 60 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>62</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}>64</td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 200, fontWeight: `bold` }}>ค่าบำรุงรักษาเครื่องจักรอุปกรณ์</td>
                        <td style={{ width: 100 }}></td>
                        <td style={{ width: 130 }}>พันบาท/ปี</td>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 292 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 301 </td>
                        <td style={{ width: 100, border: `1px dotted #000` }}> 246 </td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>


                {/* ต้นทุน */}
                <tbody>
                    <tr>
                        <td colSpan={11}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{ width: 10, backgroundColor: `#003367`, color: `#fff` }}>ต้นทุน</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{ backgroundColor: `#ccffff` }}>สมมติฐานอื่น</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{}}>เงินลงทุน</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    {costInvestmentList.map((item: any, index: any) => {

                        const colSpan = item.colSpan || 5

                        return (
                            <tr key={index}>
                                <td style={{ width: 10 }}>&nbsp;</td>
                                {colSpan == 4 && <td style={{ width: 10 }}>&nbsp;</td>}
                                <td colSpan={colSpan}>{item.label} &nbsp;</td>
                                <td>{item.unit} &nbsp;</td>
                                <td>{item.value} &nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>)
                    })}

                </tbody>

                <tbody>
                    <tr>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={7} style={{}}>เงินกู้</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    {costLoanList.map((item: any, index: any) => <tr key={index}>
                        <td style={{ width: 10 }}>&nbsp;</td>
                        <td colSpan={5}>{item.label} &nbsp;</td>
                        <td>{item.unit} &nbsp;</td>
                        <td>{item.value} &nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default ExportPage