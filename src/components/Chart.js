import React, { useState } from 'react'
// import { Chart } from 'react-charts'
import Chart2 from './Chart2';
import TopNav from './TopNav';

function MyChart() {
    //   const data = React.useMemo(
    //     () => [
    //       {
    //         label: 'Series 1',
    //         data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    //       }
    //     ],
    //     []
    //   )
    const timestamp = [1620653400,
        1620739800,
        1620826200,
        1620912600,
        1620999000,
        1621258200,
        1621344600,
        1621431000,
        1621517400,
        1621603800,
        1621863000,
        1621949400,
        1622035800,
        1622122200,
        1622208600,
        1622554200,
        1622640600,
        1622727000,
        1622813400,
        1623072600,
        1623182403
    ];
    const lowprice = [
        126.80999755859375,
                122.7699966430664,
                122.25,
                124.26000213623047,
                125.8499984741211,
                125.16999816894531,
                124.77999877929688,
                122.86000061035156,
                125.0999984741211,
                125.20999908447266,
                125.94000244140625,
                126.31999969482422,
                126.41999816894531,
                125.08000183105469,
                124.55000305175781,
                123.94000244140625,
                124.05000305175781,
                123.12999725341797,
                123.8499984741211,
                124.83000183105469,
                126.21009826660156
    ];
    const highprice = [
        129.5399932861328,
                126.2699966430664,
                124.63999938964844,
                126.1500015258789,
                127.88999938964844,
                126.93000030517578,
                126.98999786376953,
                124.91999816894531,
                127.72000122070312,
                128,
                127.94000244140625,
                128.32000732421875,
                127.38999938964844,
                127.63999938964844,
                125.80000305175781,
                125.3499984741211,
                125.23999786376953,
                124.8499984741211,
                126.16000366210938,
                126.31999969482422,
                128.4600067138672
    ]
    const data = [];
    for(const x in timestamp){
        data.push({date:timestamp[x],value:lowprice[x]/2+highprice[x]/2})
    }
    // const series = React.useMemo(
    //     () => ({
    //         showPoints: false
    //     }),
    //     []
    // );

    // const axes = React.useMemo(
    //     () => [
    //         { primary: true, type: 'linear', position: 'bottom' },
    //         { type: 'linear', position: 'left' }
    //     ],
    //     []
    // )
    const [selected, setSelected] = useState("1D");
    const [company, setCurrCompany] = useState("RELIANCE");

    const callback = (selectedNow) => {
        if (selectedNow !== selected) {
            setSelected(selectedNow)
        }
    }

    const ChangeCompany = (code) => {
        setCurrCompany(code);
    }

    return (

        <>
            <TopNav selected={selected} callback={callback} ChangeCompany={ChangeCompany} />
            <div
                className="chart-parent"
            >
                {/* <Chart data={data} series={series} axes={axes} tooltip dark /> */}
                <Chart2 data={data} />
            </div>
        </>
    )

}

export default MyChart;