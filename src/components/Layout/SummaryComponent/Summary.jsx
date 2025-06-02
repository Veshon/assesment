import { Box } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Summary = () => {
    const data = {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
            {
                label: 'Actions',
                data: [500, 700, 450, 600, 300, 780, 550],
                borderRadius: 50,
                barThickness: 7,
                backgroundColor: [
                    'black', // Sunday
                    'black', // Monday
                    'black', // Tuesday
                    'black', // Wednesday
                    'black', // Thursday
                    '#FFD85F', // Friday
                    'black'  // Saturday
                ],
            },
            {
                label: 'Today Actions',
                backgroundColor: '#FFD85F',
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 7,
                    boxHeight: 7,
                    padding: 5,
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 800,
                ticks: {

                    stepSize: 200,
                    callback: function(value) {
                        return value;
                    },
                    font: {
                        family: 'Mulish',
                        size: 12,
                        color: 'black',
                    }
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(29, 78, 216, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 13,
                        family: 'Mulish',
                        weight: 'bold',
                    },

                }
            }
        }
    };

    return (
        <Box
            width="482px"
            height="261px"
            position="absolute"
            top="827px"
            left="554px"
            borderRadius="50px"
            bg="rgba(248, 248, 239, 0.6)"
            p={5}
        >
            <Bar data={data} options={options} />
        </Box>
    );
};

export default Summary;