import XLSTYLE from 'xlsx-js-style';
import { CashFlowData } from '../data/CashFlow/CashFlowData';
// https://github.com/gitbrent/xlsx-js-style/blob/master/README.md

export class ExportHelper {

    /**
     * Investment
     */
    exportInvestment = async (table: HTMLElement) => {
        const sheetName = "Investment";

        /* Create workbook */
        const workbook: XLSTYLE.WorkBook = XLSTYLE.utils.table_to_book(table, {
            sheet: sheetName,
            raw: true,
            cellStyles: true,
            cellDates: true,
        });

        /** setup template */
        const ws = workbook.Sheets[sheetName];
        this.setCellStyleToInvestment(ws);

        /* Write to file */
        const time = new Date().getTime();
        XLSTYLE.writeFile(workbook, `Export ${sheetName} - ${time}.xlsx`);

        // return workbook;
    }

    setCellStyleToInvestment = (ws: XLSTYLE.WorkSheet) => {

        const headerStyle = {
            fill: {
                fgColor: { rgb: "FFFF0000" }
            },
            // border all  solid #000

            // fort color white
            font: {
                color: { rgb: "FFFFFF" }
            }
        }
        const headerStyleBgGreen = {
            fill: {
                // #87e74d
                fgColor: { rgb: "FF87e74d" }
            },
            font: {
                // #000000
                color: { rgb: "FF000000" }
            }
        }

        const borderStyle = {
            border: {
                top: { style: 'thin', color: { rgb: "000000" } },
                right: { style: 'thin', color: { rgb: "000000" } },
                bottom: { style: 'thin', color: { rgb: "000000" } },
                left: { style: 'thin', color: { rgb: "000000" } }
            }
        }


        ws['!cols'] = [
            { wpx: 300 },
        ];


        // col H, I : width 120
        ws['!cols'][7] = { wpx: 120 };
        ws['!cols'][8] = { wpx: 120 };

        // set border
        ['A', 'B', 'C', 'D', 'E', 'F'].forEach((col) => {
            for (let index = 4; index <= 106; index++) {
                const cell = `${col}${index}`;
                if (ws[cell]) {
                    ws[cell].s = {
                        ...borderStyle,
                        fill: {
                            // #FFF
                            fgColor: { rgb: "FFFFFF" },
                            bgColor: { rgb: "FFFFFF" },
                        },
                    };
                }
            };
        });

        // set header: bg red
        ['A', 'B', 'C', 'D', 'E', 'F'].forEach((col) => {
            ['2', '24'].forEach((row) => {
                const cell = `${col}${row}`;
                if (ws[cell]) {
                    ws[cell].s = headerStyle;
                }
            });
        });

        // set EXPENDITURE: style
        ['H', 'I'].forEach((col) => {
            ['4', '19'].forEach((row) => {
                const cell = `${col}${row}`;
                if (ws[cell]) {
                    ws[cell].s = {
                        ...headerStyle, alignment: {
                            vertical: "center",
                            horizontal: "center",
                            wrapText: '1',
                        },
                    };
                }
            });

            for (let index = 5; index <= 16; index++) {
                const cell = `${col}${index}`;
                if (ws[cell]) {
                    ws[cell].s = {
                        border: {
                            top: { style: `dotted`, color: { rgb: "000000" } },
                            right: { style: `dotted`, color: { rgb: "000000" } },
                            bottom: { style: `dotted`, color: { rgb: "000000" } },
                            left: { style: `dotted`, color: { rgb: "000000" } }
                        }
                    }
                }
            }

            for (let index = 20; index <= 22; index++) {
                const cell = `${col}${index}`;
                if (ws[cell]) {
                    ws[cell].s = {
                        border: {
                            top: { style: `dotted`, color: { rgb: "000000" } },
                            right: { style: `dotted`, color: { rgb: "000000" } },
                            bottom: { style: `dotted`, color: { rgb: "000000" } },
                            left: { style: `dotted`, color: { rgb: "000000" } }
                        }
                    }
                }
            }
        });

        // set header: bg green
        ['A', 'B', 'C', 'D', 'E', 'F'].forEach((col) => {

            ['25', '30', '38', '44', '57', '59', '66', '74', '84', '92', '105', '106'].forEach((row) => {
                const cell = `${col}${row}`;
                if (ws[cell]) {
                    ws[cell].s = {
                        ...headerStyleBgGreen,
                        border: {
                            // border solid #000
                            top: { style: `thin`, color: { rgb: "000000" } },
                            right: { style: `thin`, color: { rgb: "000000" } },
                            bottom: { style: `thin`, color: { rgb: "000000" } },
                            left: { style: `thin`, color: { rgb: "000000" } }
                        }
                    };
                }
            });
        });


    }


    /**
     * P&L (profit and loss)
     */
    generateProfitAndLossSLSXFormTable = (table: HTMLElement) => {
        const sheetName = "P&L";

        /* Create workbook */
        const workbook: XLSTYLE.WorkBook = XLSTYLE.utils.table_to_book(table, {
            sheet: sheetName,
            raw: true,
            cellStyles: true,
            cellDates: true,
        });

        /** setup template */
        const ws = workbook.Sheets[sheetName];
        this.setCellStylesToProfitAndLoss(ws);

        /* Write to file */
        const time = new Date().getTime();
        XLSTYLE.writeFile(workbook, `Export Profit and Loss - ${time}.xlsx`);
    }

    setCellStylesToProfitAndLoss = (ws: XLSTYLE.WorkSheet) => {

        ws['!cols'] = [
            { wpx: 15 },
            { wpx: 15 },
            { wpx: 200 },
        ];

        ws['B2'].s = {
            font: {
                sz: 18,
                bold: true,
            }
        };

        const titleStyle: any = {
            fill: {
                fgColor: { rgb: "003366" }
            },
            font: {
                color: { rgb: "FFFFFF" }
            }
        };

        const subTitleStyle: any = {
            fill: {
                fgColor: { rgb: "ccffff" }
            },
            font: {
                color: { rgb: "000000" }
            }
        };


        // set title
        ['B', 'C'].forEach((col) => {
            [4, 35].forEach((row) => {
                const cell = `${col}${row}`;
                if (ws[cell]) {
                    ws[cell].s = titleStyle;
                }
            });
        });


        // set subtitle
        ['B', 'C'].forEach((col) => {
            [5, 36].forEach((row) => {
                const cell = `${col}${row}`;
                if (ws[cell]) {
                    ws[cell].s = subTitleStyle;
                }
            });
        });


        // เส้นประ
        ['E', 'F', 'G'].forEach((col) => {
            [
                { start: 6, end: 13 },
                { start: 16, end: 27 },
                { start: 29, end: 33 },
                { start: 37, end: 43 },
            ].forEach((n) => {
                for (let row = n.start; row <= n.end; row++) {
                    const cell = `${col}${row}`;
                    if (ws[cell]) {
                        ws[cell].s = {
                            border: {
                                top: { style: 'dotted', color: { rgb: "000000" } },
                                right: { style: 'dotted', color: { rgb: "000000" } },
                                bottom: { style: 'dotted', color: { rgb: "000000" } },
                                left: { style: 'dotted', color: { rgb: "000000" } }
                            },
                            alignment: {
                                vertical: "center",
                                horizontal: "right",
                                wrapText: '1',
                            }
                        };
                    }
                }
            });
        });

        // เส้นประ + สี
        ['D'].forEach((col) => {
            [
                { start: 6, end: 13 },
                { start: 16, end: 27 },
                { start: 29, end: 33 },
                // { start: 37, end: 43 },
            ].forEach((n) => {

                for (let row = n.start; row <= n.end; row++) {
                    const cell = `${col}${row}`;
                    if (ws[cell]) {
                        const bold = [13, 27, 29, 31, 33].indexOf(row) > -1 ? true : false;
                        const bgColor = [6, 7, 8, 9].indexOf(row) > -1 ? "ffff00" : "dce6f1";

                        ws[cell].s = {
                            fill: {
                                fgColor: { rgb: bgColor }
                            },
                            border: {
                                top: { style: 'dotted', color: { rgb: "000000" } },
                                right: { style: 'dotted', color: { rgb: "000000" } },
                                bottom: { style: 'dotted', color: { rgb: "000000" } },
                                left: { style: 'dotted', color: { rgb: "000000" } }
                            },
                            alignment: {
                                vertical: "center",
                                horizontal: "right",
                                wrapText: '1',
                            },
                            font: {
                                bold: bold,
                            }
                        };
                    }
                }
            });
        });

        // vertical center
        ['D', 'E', 'F', 'G'].forEach((col) => {
            [4, 5, 35, 36].forEach((row) => {
                const cell = `${col}${row}`;
                if (ws[cell]) {

                    let styles = {
                        ...titleStyle,
                        alignment: {
                            vertical: "center",
                            horizontal: "center",
                            wrapText: '1',
                        },
                    }

                    if (row === 5 || row === 36) {
                        styles = { ...styles, ...subTitleStyle }
                    }

                    ws[cell].s = styles;
                }
            });
        });

        // font bold
        ['B13', 'B27', 'B29', 'B31', 'B33'].forEach((cell) => {
            const styles = {
                font: {
                    bold: true,
                }
            }

            if (ws[cell]) {
                ws[cell].s = styles;
            }
        });
    }


    /**
     * Summary of Profit and Loss
     */
    generateSummaryOfProfitAndLossSLSXFormTable = (table: HTMLElement) => {
        const sheetName = "สรุป P&L";

        /* Create workbook */
        const workbook: XLSTYLE.WorkBook = XLSTYLE.utils.table_to_book(table, {
            sheet: sheetName,
            raw: true,
            cellStyles: true,
            cellDates: true,
        });

        /** setup template */
        const ws = workbook.Sheets[sheetName];
        this.setCellStylesToSummaryOfProfitAndLoss(ws);

        /* Write to file */
        const time = new Date().getTime();
        XLSTYLE.writeFile(workbook, `Export สรุป P&L - ${time}.xlsx`);
    }

    setCellStylesToSummaryOfProfitAndLoss = (ws: XLSTYLE.WorkSheet) => {

        ws['!cols'] = [
            { wpx: 20 },
            { wpx: 200 },
            { wpx: 50 },
            { wpx: 50 },
            { wpx: 10 },
            { wpx: 50 },
            { wpx: 50 },
            { wpx: 50 },
        ];

        ws['B2'].s = {
            font: {
                sz: 18,
                bold: true,
            }
        };

        // set title
        ['B', 'C', 'D', 'F', 'G', 'H'].forEach((col) => {
            [4].forEach((row) => {
                const cell = `${col}${row}`;
                if (ws[cell]) {
                    ws[cell].s = {
                        border: {
                            top: { style: 'thin', color: { rgb: "000000" } },
                            right: { style: 'thin', color: { rgb: "000000" } },
                            bottom: { style: 'thin', color: { rgb: "000000" } },
                            left: { style: 'thin', color: { rgb: "000000" } }
                        },
                        alignment: {
                            vertical: "center",
                            horizontal: "center",
                            wrapText: '1',
                        }
                    };
                }
            });
        });

        ws['D3'].s = {
            border: {
                bottom: { style: 'thin', color: { rgb: "000000" } },
            },
        };

        ws['E4'].s = {
            border: {
                left: { style: 'thin', color: { rgb: "000000" } },
            },
        };

        ['B', 'C', 'D', 'F', 'G', 'H'].forEach((col) => {

            for (let row = 5; row <= 38; row++) {
                const cell = `${col}${row}`;
                const styles: any = {
                    alignment: {
                        vertical: "center",
                        horizontal: "right",
                        wrapText: '1',
                    },
                    border: {
                        left: { style: 'thin', color: { rgb: "000000" } },
                        right: { style: 'thin', color: { rgb: "000000" } },
                    }
                };

                if (col == 'B') {
                    styles.alignment = {
                        horizontal: "left",
                    }
                }

                if (col == 'C') {
                    styles.border = {
                        left: { style: 'thin', color: { rgb: "000000" } },
                    }
                }

                if (col == 'D') {
                    styles.border = {
                        right: { style: 'thin', color: { rgb: "000000" } },
                    }

                    styles.font = {
                        sz: 9,
                        italic: true,
                    }
                }

                // top border 
                if ([5, 13, 14, 17, 18, 26, 31, 32, 34, 36].indexOf(row) > -1) {
                    if (col == 'C') {
                        styles.border = {
                            left: { style: 'thin', color: { rgb: "000000" } },
                            top: { style: 'thin', color: { rgb: "000000" } },
                        }
                    }
                    else if (col == 'D') {
                        styles.border = {
                            right: { style: 'thin', color: { rgb: "000000" } },
                            top: { style: 'thin', color: { rgb: "000000" } },
                        }
                    }
                    else {
                        styles.border = {
                            left: { style: 'thin', color: { rgb: "000000" } },
                            right: { style: 'thin', color: { rgb: "000000" } },
                            top: { style: 'thin', color: { rgb: "000000" } },
                        }
                    }
                }

                // fill
                if ((col == 'C' || col == 'F') && ((row >= 6 && row <= 16) || (row >= 18 && row <= 25))) {
                    styles.fill = {
                        fgColor: { rgb: "c6e0b4" }
                    };
                }

                if (row == 38) {
                    styles.fill = {
                        fgColor: { rgb: "ffff00" }
                    };

                    styles.border = {
                        ...styles.border,
                        top: { style: 'thin', color: { rgb: "000000" } },
                        bottom: { style: 'thin', color: { rgb: "000000" } },
                    }
                }

                if (row == 17) {
                    styles.fill = {
                        fgColor: { rgb: "dce6f1" }
                    };

                    styles.font = {
                        bold: true,
                    };
                }

                if ((row == 11 || row == 12) && col == 'B') {
                    styles.fill = {
                        fgColor: { rgb: "c5d9f1" }
                    };
                }


                if ([7, 17, 18, 31, 34, 36, 38].indexOf(row) > -1 || col == 'B' && [10, 13].indexOf(row) > -1) {
                    styles.font = {
                        bold: true,
                    };
                }

                if (row == 18 || ([19, 20, 26].indexOf(row) > -1 && col == 'B')) {
                    styles.font = {
                        bold: true,
                        italic: true,
                    }
                }

                if (ws[cell]) {
                    ws[cell].s = styles;
                }
            }
        });
    }

    /**
     * Cash Flow
     */
    generateCashFlowSLSXFormTable = (table: HTMLElement) => {
        const sheetName = "CF";

        /* Create workbook */
        const workbook: XLSTYLE.WorkBook = XLSTYLE.utils.table_to_book(table, {
            sheet: sheetName,
            raw: true,
            cellStyles: true,
            cellDates: true,
        });

        /** setup template */
        const ws = workbook.Sheets[sheetName];
        this.setCellStylesToCashFlow(ws);

        /* Write to file */
        const time = new Date().getTime();
        XLSTYLE.writeFile(workbook, `Export ${sheetName} - ${time}.xlsx`);
    }

    setCellStylesToCashFlow = (ws: XLSTYLE.WorkSheet) => {
        ws['!cols'] = [
            { wpx: 15 },
            { wpx: 15 },
            { wpx: 15 },
            { wpx: 200 },
            { wpx: 30 },
            { wpx: 30 },
            { wpx: 15 },
        ];

        ws['B2'].s = {
            font: {
                sz: 18,
                bold: true,
            }
        };

        const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
        abc.forEach((col) => {

            for (let row = 4; row <= 53; row++) {
                const cell = `${col}${row}`;

                const styles: any = {
                    fill: {
                        fgColor: { rgb: "FFFFFF" }
                    }
                };

                if (['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'].indexOf(col) > -1) {

                    // head
                    if ([4, 25, 31, 38, 45].indexOf(row) > -1 && col != 'A') {
                        styles.fill = {
                            fgColor: { rgb: "003366" }
                        }
                        styles.font = {
                            color: { rgb: "FFFFFF" }
                        }

                        if (col != 'B') {
                            styles.alignment = {
                                vertical: "center",
                                horizontal: "center",
                                wrapText: '1',
                            }
                        }
                    };

                    if ([5, 26, 32, 39, 46].indexOf(row) > -1 && col != 'A') {
                        styles.fill = {
                            fgColor: { rgb: "ccffff" }
                        }
                        styles.alignment = {
                            vertical: "center",
                            horizontal: "center",
                            wrapText: '1',
                        }
                    };
                }

                if (['H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'].indexOf(col) > -1) {

                    if ([12, 23, 47].indexOf(row) > -1 ||
                        (row >= 7 && row <= 8) ||
                        (row >= 16 && row <= 21) ||
                        (row >= 27 && row <= 29) ||
                        (row >= 32 && row <= 36) ||
                        (row >= 40 && row <= 43)
                    ) {
                        styles.border = {
                            top: { style: 'dotted', color: { rgb: "000000" } },
                            right: { style: 'dotted', color: { rgb: "000000" } },
                            bottom: { style: 'dotted', color: { rgb: "000000" } },
                            left: { style: 'dotted', color: { rgb: "000000" } }
                        }
                    }
                }

                if (ws[cell]) {
                    ws[cell].s = styles;
                }
            }
        });
    }


    /**
     * Assumptions
     */
    generateAssumptionSLSXFormTable = (table: HTMLElement) => {
        const sheetName = "Assumptions";

        /* Create workbook */
        const workbook: XLSTYLE.WorkBook = XLSTYLE.utils.table_to_book(table, {
            sheet: sheetName,
            raw: true,
            cellStyles: true,
            cellDates: true,
        });

        /** setup template */
        const ws = workbook.Sheets[sheetName];
        this.setCellStylesToAssumptions(ws);

        /* Write to file */
        const time = new Date().getTime();
        XLSTYLE.writeFile(workbook, `Export ${sheetName} - ${time}.xlsx`);
    }

    setCellStylesToAssumptions = (ws: XLSTYLE.WorkSheet) => {

        ws['!cols'] = [
            { wpx: 15 },
            { wpx: 10 },
            { wpx: 10 },
            { wpx: 10 },
            { wpx: 220 },
            { wpx: 70 },
            { wpx: 70 },
            { wpx: 25 },
        ];

        ws['B2'].s = {
            font: {
                sz: 18,
                bold: true,
            }
        };

    }
}