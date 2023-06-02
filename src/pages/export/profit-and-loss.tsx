import React from 'react'
import { ExportHelper } from '../../../helpers/ExportHelper'
import ProfitAndLossTemplate from '../../../components/ExportView/ProfitAndLossTemplate';

type Props = {}

const investment = (props: Props) => {
    const [tableId] = React.useState('profit-and-loss')

    const exportHandler = async () => {
        const table: HTMLElement | null = document.getElementById(tableId);


        if (table) {
            const exportHelper = new ExportHelper();
            exportHelper.generateProfitAndLossSLSXFormTable(table);
        }
    }

    return (
        <div>
            <div>
                <button type='button' onClick={exportHandler}>Export</button>
            </div>

            <div id='profit-and-loss'>
                <ProfitAndLossTemplate tableId={tableId} />
            </div>
        </div>
    )
}

export default investment