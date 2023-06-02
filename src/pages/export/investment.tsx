import React from 'react'
import InvestmentTemplate from '../../../components/ExportView/InvestmentTemplate'
import { ExportHelper } from '../../../helpers/ExportHelper'
import XLSTYLE from 'xlsx-js-style';

type Props = {}

const investment = (props: Props) => {
    const [investmentId] = React.useState('investment')

    const exportInvestmentHandler = async () => {
        const tableInvestment: HTMLElement | null = document.getElementById(investmentId);
        const exportHelper = new ExportHelper();
        let workbookInvestment: XLSTYLE.WorkBook | null = null;


        if (tableInvestment) {
            exportHelper.exportInvestment(tableInvestment);
        }

        // /* Create workbook */
        // const wb = XLSTYLE.utils.book_new();
        // if (workbookInvestment) {
        //     const sheetInvestment = workbookInvestment.Sheets[investmentId];
        //     XLSTYLE.utils.book_append_sheet(wb, sheetInvestment, investmentId);
        // }

        // // XLSTYLE.utils.book_append_sheet(wb, ws2, "Sheet 2");

        // /* Write to file */
        // const time = new Date().getTime();
        // XLSTYLE.writeFileXLSX(wb, `Export ${investmentId} - ${time}.xlsx`);
    }

    return (
        <div>
            <div>
                <button type='button' onClick={exportInvestmentHandler}>Export</button>
            </div>

            <div id='exportInvestment'>
                <InvestmentTemplate tableId={investmentId} />
            </div>
        </div>
    )
}

export default investment