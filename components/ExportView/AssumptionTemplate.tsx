import React from 'react'
import { AssumptionData } from '../../data/Assumptions/AssumptionsData';

type Props = {
    tableId: string,
}

const AssumptionTemplate = ({ tableId }: Props) => {
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
    const yaers = [1, 2, 3];
    const maxYaer = yaers.length;
    const contentColSpan = 7;
    const paddingCol = 2;
    const maxCol = paddingCol + contentColSpan + maxYaer;

    const contentColTextSpan = 4;

    return (
        <table id={tableId} style={{ width: `100%`, borderSpacing: 0, borderCollapse: `collapse` }}>

            <tbody>
                <tr>
                    {[...Array(maxCol)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td colSpan={maxCol - 2} style={{ fontWeight: `bold` }}>{projectName}</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    {[...Array(maxCol)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>

            {AssumptionData.map((topic, tIndex) => {

                return <tbody key={tIndex}>
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan={contentColSpan} style={{ ...headerStyle }}>{topic.name}</td>
                        {yaers.map((yaer, y) => <td key={y} style={{ ...headerStyle, width: 60, textAlign: `center` }}>ปีที่ {yaer}</td>)}
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan={contentColSpan} style={{ ...infoStyle }}>&nbsp;</td>
                        {yaers.map((yaer, y) => <td key={y} style={{ ...infoStyle, width: 60, textAlign: `center` }}>{yaer}</td>)}
                        <td>&nbsp;</td>
                    </tr>

                    {topic.items && topic.items.map((item: any, index: number) => <tr key={index}>
                        <td>&nbsp;</td>

                        {item.lavel
                            ? <>
                                {[...Array(item.lavel - 1)].map((i, k) => <td style={{ width: 10 }} key={k}>&nbsp;</td>)}
                                <td colSpan={contentColTextSpan - (item.lavel - 1)} style={{}}>{item.name}</td>
                            </>
                            : <td colSpan={contentColTextSpan} style={{}}>{item.name}</td>
                        }

                        {/* <td colSpan={maxCol - (5 + yaers.length)} style={{}}>{item.name}</td> */}

                        <td style={{ width: 100, textAlign: `right` }}>{item.unitPrice}&nbsp;</td>
                        <td style={{ width: 100 }}>{item.unitText} &nbsp;</td>
                        <td style={{ width: 10 }}>&nbsp;</td>

                        {yaers.map((yaer, y) => <td key={y} style={item.isVal ? inputStyle : { textAlign: `right` }}>
                            {item.isVal ? item.value : ''} &nbsp;
                        </td>)}
                        <td>&nbsp;</td>
                    </tr>)}

                    <tr>
                        {[...Array(maxCol)].map((i, k) => <td key={k}>&nbsp;</td>)}
                    </tr>
                </tbody>
            })}


        </table>
    )
}

export default AssumptionTemplate