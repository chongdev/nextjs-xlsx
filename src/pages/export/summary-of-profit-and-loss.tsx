import React from 'react'
import SummaryOfProfitAndLossTemplate from '../../../components/ExportView/SummaryOfProfitAndLossTemplate'
import { ExportHelper } from '../../../helpers/ExportHelper'

type Props = {}

const SummaryOfProfitAndLoss = (props: Props) => {
    const [tableId] = React.useState('summary-of-profit-and-loss')

    const exportHandler = async () => {
        const table: HTMLElement | null = document.getElementById(tableId);

        if (table) {
            const exportHelper = new ExportHelper();
            exportHelper.generateSummaryOfProfitAndLossSLSXFormTable(table);
        }
    }

    return (
        <div>
            <div>
                <button type='button' onClick={exportHandler}>Export</button>
            </div>

            <SummaryOfProfitAndLossTemplate tableId={tableId} />
        </div>
    )
}

export default SummaryOfProfitAndLoss