import React from 'react'
import { InvestmentDetail1 } from '../../data/investment/InvestmentDetail1';
import { InvestmentDetail2 } from '../../data/investment/InvestmentDetail2';
import { InvestmentTopic } from '../../data/investment/investmentTopic';

type Props = {
    tableId: string,
}

const InvestmentTemplate = ({ tableId }: Props) => {

    const projectName = `ศูนย์อาหาร ส.ธ. จุฬา`

    const tdStyle = {
        border: `1px solid black`,
    }

    const expenditureStyle = {
        border: `1px dashed black`,
        width: 100,
    }
    const expenditureHeaderStyle = {
        border: `1px solid #000`, backgroundColor: `red`, color: `#fff`
    }

    return (
        <table id={tableId} style={{ width: `100%`, borderSpacing: 0, borderCollapse: `collapse` }}>

            <tbody>
                <tr>
                    {[...Array(10)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
                <tr>
                    <td colSpan={9} style={{ ...tdStyle, backgroundColor: `red` }}>{projectName}</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <td style={{ ...tdStyle, width: 200 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, width: 70 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, width: 70 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, width: 70 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, width: 70 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, width: 70 }}>&nbsp;</td>

                    <td style={{ width: 30 }}>&nbsp;</td>
                    <td colSpan={2}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
            </tbody>
            <tbody>
                {InvestmentTopic.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.name || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.value || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.unit || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>

                            <td>&nbsp;</td>

                            {item.expenditureType ?
                                (item.expenditureType == `HEADER`
                                    ? <td colSpan={2} style={expenditureHeaderStyle}>CAPITAL EXPENDITURE</td>
                                    : <>
                                        <td style={expenditureStyle}>{item.expenditureLavel} &nbsp;</td>
                                        <td style={expenditureStyle}>{item.expenditureValue} &nbsp;</td>
                                    </>)
                                : <><td>&nbsp;</td><td>&nbsp;</td></>
                            }
                            <td>&nbsp;</td>
                        </tr>
                    )
                })}
            </tbody>

            <tbody>
                <tr>
                    {[...Array(10)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
                <tr>
                    <td style={{ ...tdStyle, ...{ fontWeight: `bold` } }} colSpan={6}>{`รายละเอียดการลงทุน`}</td>

                    {[...Array(4)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
                {InvestmentDetail1.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.name || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.value || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.unit || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>

                            {[...Array(4)].map((i, k) => <td key={k}>&nbsp;</td>)}
                        </tr>
                    )
                })}
            </tbody>
            <tbody>
                <tr>
                    {[...Array(10)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
                {InvestmentDetail2.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.name || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.value || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>{item.unit || ``} &nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>
                            <td style={{ ...tdStyle, ...item.styles || {} }}>&nbsp;</td>

                            {[...Array(4)].map((i, k) => <td key={k}>&nbsp;</td>)}
                        </tr>
                    )
                })}
            </tbody>

            <tbody>
                <tr>
                    {[...Array(10)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>
        </table>
    )
}

export default InvestmentTemplate