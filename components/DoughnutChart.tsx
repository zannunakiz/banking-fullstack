"use client"

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);




const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Banks",
                data: [1250, 2500, 3750],
                backgroundColor: ['#0747B6', '#2265D8', '#2f91fa']
            }

        ],
        labels: ['Bank1', 'Bank2', 'Bank 3']
    }

    return (
        <Doughnut data={data}
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }} />
    )
}

export default DoughnutChart