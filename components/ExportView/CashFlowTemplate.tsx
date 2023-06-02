import React from 'react'
import { CashFlowStatementData } from '../../data/CashFlow/CashFlowStatementData'
import { CashFlowData } from '../../data/CashFlow/CashFlowData'

type Props = {
    tableId: string,
}

const CashFlowTemplate = ({ tableId }: Props) => {
    const projectName = `ศูนย์อาหาร ส.ธ. จุฬา`

    /** set styles */
    const styles = {}

    const headerStyle = {
        backgroundColor: `#003366`, color: `#fff`
    }
    const infoStyle = {
        backgroundColor: `#ccffff`, color: `#000`
    }
    const inputStyle = {
        border: `1px dashed black`,
    }


    /** table options */
    const yaers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const maxYaer = 3;
    const maxRow = 2 + 6 + yaers.length;



    return (
        <table id={tableId} style={{ width: `100%`, borderSpacing: 0, borderCollapse: `collapse` }}>
            <tbody>
                <tr>
                    {[...Array(maxRow)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td colSpan={maxRow - 2} style={{ fontWeight: `bold` }}>{projectName}</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    {[...Array(maxRow)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>


            {CashFlowData.map((topic, topicIndex) => <tbody key={topicIndex}>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan={6} style={{ ...headerStyle }}>{topic.name}</td>
                    {yaers.map((yaer, y) => <td key={y} style={{ ...headerStyle, width: 60, textAlign: `center` }}>ปีที่ {yaer}</td>)}
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan={6} style={{ ...infoStyle }}>&nbsp;</td>
                    {yaers.map((yaer, y) => <td key={y} style={{ ...infoStyle, width: 60, textAlign: `center` }}>{yaer}</td>)}
                    <td>&nbsp;</td>
                </tr>
                {/* <tr>
                    {[...Array(maxRow)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr> */}

                {topic.items && topic.items.map((item: any, index: number) => <tr key={index}>
                    <td>&nbsp;</td>
                    {item.colSpan == 1 && <><td style={{ width: 10 }}>&nbsp;</td><td style={{ width: 10 }}>&nbsp;</td></>}
                    {item.colSpan == 2 && <td style={{ width: 10 }}>&nbsp;</td>}
                    <td colSpan={item.colSpan || 3} style={{}}>{item.name}</td>

                    <td style={{ width: 20 }}>{item.unitPrice}&nbsp;</td>
                    <td style={{ width: 20 }}>{item.unitText} &nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>

                    {yaers.map((yaer, y) => <td key={y} style={item.isVal ? inputStyle : { textAlign: `right` }}>
                        {item.isVal ? item.value : ''} &nbsp;
                    </td>)}
                    <td>&nbsp;</td>
                </tr>)}

                <tr>
                    {[...Array(maxRow)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>

            </tbody>)}
        </table>
    )
}

export default CashFlowTemplate