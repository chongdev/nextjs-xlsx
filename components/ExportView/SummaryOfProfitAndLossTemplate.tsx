import React from 'react'
import { SummaryOfProfitAndLossTemplateList } from '../../data/SummaryOfProfitAndLossTemplate/SummaryOfProfitAndLossTemplateList'

type Props = {
    tableId: string,
}

const SummaryOfProfitAndLossTemplate = ({ tableId }: Props) => {
    const projectName = `ศูนย์อาหาร ส.ธ. จุฬา`

    /** set styles */
    const styles = {}
    const valueStyle = {
        border: `1px dashed black`,
        width: 70,
    }
    const headerStyle = {
        border: `1px solid black`,
    }
    const infoStyle = {
        backgroundColor: `#ccffff`, color: `#000`
    }

    const maxRow = 9;

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

            {/* header */}
            <tbody>
                <tr>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...headerStyle, width: 200, textAlign: `center` }}>รายการ</td>
                    <td style={{ ...headerStyle, width: 120, textAlign: `center` }} colSpan={2}>ต่อเดือน	</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                    <td style={{ ...headerStyle, width: 100, textAlign: `center` }}>ปีที่ 1</td>
                    <td style={{ ...headerStyle, width: 100, textAlign: `center` }}>ปีที่ 2</td>
                    <td style={{ ...headerStyle, width: 100, textAlign: `center` }}>ปีที่ 3</td>
                    <td style={{ width: 10 }}>&nbsp;</td>
                </tr>
            </tbody>

            <tbody>
                {SummaryOfProfitAndLossTemplateList.map((item, index) => {

                    const styleBorderLeft = { borderLeft: `1px solid #000` }
                    const styleBorderRight = { borderRight: `1px solid #000` }

                    let colStyle = { ...styles, ...item.style || {} }

                    if ([1, 5, 8, 12, 13].indexOf(index) > -1) {
                        colStyle = { ...colStyle, fontWeight: `bold` }
                    }

                    let colCStyles = { ...colStyle }
                    let colFStyles = { ...colStyle }

                    if (index > 0 && index < 11) {
                        colCStyles = { ...colCStyles, backgroundColor: `#c6e0b4`, color: `#000` }
                        colFStyles = { ...colFStyles, backgroundColor: `#c6e0b4`, color: `#000` }
                    }

                    // SummaryOfProfitAndLossTemplateList.length - 1

                    return <tr key={index}>
                        <td style={{}}>&nbsp;</td>
                        <td style={{ ...colStyle, ...styleBorderLeft, ...styleBorderRight }}>{item.name} &nbsp;</td>
                        <td style={{ ...colCStyles, width: 60, textAlign: `right` }}>123 &nbsp;</td>
                        <td style={{ ...colStyle, width: 60, textAlign: `right`, ...styleBorderRight }}>123 &nbsp;</td>
                        <td style={{}}>&nbsp;</td>
                        <td style={{ ...colFStyles, textAlign: `right`, ...styleBorderLeft }}>123 &nbsp;</td>
                        <td style={{ ...colStyle, textAlign: `right`, ...styleBorderLeft }}>&nbsp;</td>
                        <td style={{ ...colStyle, textAlign: `right`, ...styleBorderLeft, ...styleBorderRight }}>&nbsp;</td>
                        <td style={{}}>&nbsp;</td>
                    </tr>
                })}
            </tbody>

            <tbody>
                <tr>
                    {[...Array(maxRow)].map((i, k) => <td key={k}>&nbsp;</td>)}
                </tr>
            </tbody>
        </table>
    )
}

export default SummaryOfProfitAndLossTemplate