import React from 'react'
import { ProfitAndLossSalesList } from '../../data/ProfitAndLoss/ProfitAndLoss_SalesList'
import { ProfitAndLoss_CostsAndExpenses } from '../../data/ProfitAndLoss/ProfitAndLoss_CostsAndExpenses'
import { ProfitAndLoss_IncomeTax } from '../../data/ProfitAndLoss/ProfitAndLoss_IncomeTax'

type Props = {
    tableId: string,
}

const ProfitAndLossTemplate = ({ tableId }: Props) => {
    const projectName = `ศูนย์อาหาร ส.ธ. จุฬา`

    const tdStyle = {}

    const valueStyle = {
        border: `1px dashed black`,
        width: 70,
    }
    const headerStyle = {
        backgroundColor: `#003366`, color: `#fff`
    }
    const infoStyle = {
        backgroundColor: `#ccffff`, color: `#000`
    }

    return (
        <table id={tableId} style={{ width: `100%`, borderSpacing: 0, borderCollapse: `collapse` }}>
            <tbody>
                <tr>
                    {[...Array(8)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td colSpan={6} style={{ fontWeight: `bold` }}>{projectName}</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    {[...Array(8)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <td style={{ ...headerStyle, width: 10 }}>&nbsp;</td>
                    <td style={{ ...headerStyle, textAlign: `left`, width: 200 }} colSpan={2}>งบกำไรขาดทุน</td>
                    <td style={{ ...headerStyle, width: 70 }}>&nbsp;</td>

                    <td style={{ ...headerStyle, width: 70 }}>ปีที่ 1</td>
                    <td style={{ ...headerStyle, width: 70 }}>ปีที่ 2</td>
                    <td style={{ ...headerStyle, width: 70 }}>ปีที่ 3</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    <td style={infoStyle}>&nbsp;</td>
                    <td style={{ ...infoStyle, textAlign: `left` }} colSpan={2}>พันบาท</td>
                    <td style={infoStyle}>ต่อเดือน</td>

                    <td style={infoStyle}>1</td>
                    <td style={infoStyle}>2</td>
                    <td style={infoStyle}>3</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle }} colSpan={2}>ยอดขาย</td>
                    <td style={{ ...valueStyle, backgroundColor: `#ffff00` }}> 539 </td>

                    <td style={{ ...valueStyle }}> 6,465 </td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>

                {/* <tr>
                    {[...Array(8)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr> */}

                {ProfitAndLossSalesList.map((item: any, index: number) => <tr key={index}>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle }}>{item.name}</td>
                    <td style={{ ...valueStyle }}>{item.value}</td>

                    <td style={{ ...valueStyle }}>{item.valuePreYear}</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>)}

                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, fontWeight: `bold` }} colSpan={2}>รวมรายได้</td>
                    <td style={{ ...valueStyle, backgroundColor: `#ffff00` }}>  572  </td>

                    <td style={{ ...valueStyle }}> 6,465 </td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>

                <tr>
                    {[...Array(8)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle }} colSpan={2}>ต้นทุน & ค่าใช้จ่าย</td>
                    <td style={{}}>&nbsp;</td>

                    <td style={{}}>&nbsp;</td>
                    <td style={{}}>&nbsp;</td>
                    <td style={{}}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>

                {ProfitAndLoss_CostsAndExpenses.map((item: any, index: number) => <tr key={index}>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle }}>{item.name}</td>
                    <td style={{ ...valueStyle }}>{item.value}</td>

                    <td style={{ ...valueStyle }}>{item.valuePreYear}</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>)}

                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, fontWeight: `bold` }} colSpan={2}>รวมต้นทุน & ค่าใช้จ่าย</td>
                    <td style={{ ...valueStyle, backgroundColor: `#ccffff` }}>  572  </td>

                    <td style={{ ...valueStyle }}>885</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>

                <tr>
                    {[...Array(8)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, fontWeight: `bold` }} colSpan={2}>กำไรจากการดำเนินงานระดับสาขา</td>
                    <td style={{ ...valueStyle, backgroundColor: `#ccffff` }}>  572  </td>

                    <td style={{ ...valueStyle }}>885</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle }} colSpan={2}>ดอกเบี้ยจ่าย</td>
                    <td style={{ ...valueStyle, backgroundColor: `#ccffff` }}>  572  </td>

                    <td style={{ ...valueStyle }}>885</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, fontWeight: `bold` }} colSpan={2}>ค่าใช้จ่ายระดับบริษัท 13%</td>
                    <td style={{ ...valueStyle, backgroundColor: `#ccffff` }}>  572  </td>

                    <td style={{ ...valueStyle }}>885</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle }}>ภาษี </td>
                    <td style={{ ...valueStyle, backgroundColor: `#ccffff` }}>  572  </td>

                    <td style={{ ...valueStyle }}>885</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle, fontWeight: `bold` }} colSpan={2}>กำไรสุทธิระดับบริษัท</td>
                    <td style={{ ...valueStyle, backgroundColor: `#ccffff` }}>  572  </td>

                    <td style={{ ...valueStyle }}>885</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>

                <tr>
                    {[...Array(8)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <td style={{ ...headerStyle, width: 10 }}>&nbsp;</td>
                    <td style={{ ...headerStyle, textAlign: `left`, width: 200 }} colSpan={2}>ภาษีรายได้</td>
                    <td style={{ ...headerStyle, width: 70 }}>&nbsp;</td>

                    <td style={{ ...headerStyle, width: 70, textAlign: `center` }}>ปีที่ 1</td>
                    <td style={{ ...headerStyle, width: 70, textAlign: `center` }}>ปีที่ 2</td>
                    <td style={{ ...headerStyle, width: 70, textAlign: `center` }}>ปีที่ 3</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
                <tr>
                    <td style={infoStyle}>&nbsp;</td>
                    <td style={{ ...infoStyle, textAlign: `left` }} colSpan={2}>ล้านบาท</td>
                    <td style={infoStyle}>&nbsp;</td>

                    <td style={{ ...infoStyle, textAlign: `center` }}>1</td>
                    <td style={{ ...infoStyle, textAlign: `center` }}>2</td>
                    <td style={{ ...infoStyle, textAlign: `center` }}>3</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
            </tbody>

            <tbody>
                {ProfitAndLoss_IncomeTax.map((item: any, index: number) => <tr key={index}>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...tdStyle }} colSpan={2}>{item.name}</td>
                    <td style={{}}>&nbsp;</td>

                    <td style={{ ...valueStyle }}>{item.valuePreYear}</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ ...valueStyle }}>&nbsp;</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>)}
            </tbody>

            <tbody>
                <tr>
                    {[...Array(8)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>
        </table>
    )
}

export default ProfitAndLossTemplate