import React from 'react'
import { ExportHelper } from '../../../helpers/ExportHelper'
import CashFlowTemplate from '../../../components/ExportView/CashFlowTemplate'

type Props = {}

const CashFlow = (props: Props) => {
    const [tableId] = React.useState('cash-flow')

    const exportHandler = async () => {
        const table: HTMLElement | null = document.getElementById(tableId);

        if (table) {
            const exportHelper = new ExportHelper();
            exportHelper.generateCashFlowSLSXFormTable(table);
        }
    }

    return (
        <div>
            <div>
                <button type='button' onClick={exportHandler}>Export</button>
            </div>

            <CashFlowTemplate tableId={tableId} />
        </div>
    )
}

export default CashFlow