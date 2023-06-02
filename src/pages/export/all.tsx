import React from 'react'

type Props = {}

const all = (props: Props) => {
    const [exportList] = React.useState([])
    const repostList = [
        {
            id: `investment`,
            name: 'รายงานการลงทุน',
            url: '/export/investment',

        },
        {
            id: `profit-and-loss`,
            name: 'รายงานกำไรขาดทุน',
            url: '/export/profit-and-loss',
        },
    ];

    return (
        <div>all</div>
    )
}

export default all