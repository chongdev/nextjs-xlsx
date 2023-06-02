import React from 'react'
import { ExportHelper } from '../../../helpers/ExportHelper'
import AssumptionTemplate from '../../../components/ExportView/AssumptionTemplate'

type Props = {}

const assumptions = (props: Props) => {
    const [tableId] = React.useState('assumptions')

    const exportHandler = async () => {
        const table: HTMLElement | null = document.getElementById(tableId);

        if (table) {
            const exportHelper = new ExportHelper();
            exportHelper.generateAssumptionSLSXFormTable(table);
        }
    }

    return (
        <div>
            <div>
                <button type='button' onClick={exportHandler}>Export</button>
            </div>

            <AssumptionTemplate tableId={tableId} />
        </div>
    )
}

export default assumptions