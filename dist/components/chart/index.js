import { jsx as _jsx } from "react/jsx-runtime";
import { Line } from 'react-chartjs-2';
import { Container } from './styles';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const data = {
    labels: ['07.29', '07.30', '08.01', '08.02', '08.03', '08.04', '08.05'],
    datasets: [
        {
            label: '최저가 추이',
            data: [18900, 19000, 19200, 19300, 19400, 19500, 18900],
            borderColor: '#1565C0',
            backgroundColor: 'rgba(21, 101, 192, 0.5)',
            tension: 0.3,
            pointBackgroundColor: '#1565C0',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7
        }
    ]
};
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                font: {
                    size: 14,
                    weight: 'bold'
                },
                color: '#333'
            }
        },
        title: {
            display: true,
            text: '최저가 추이',
            font: {
                size: 18,
                weight: 'bold'
            },
            color: '#333',
            padding: {
                top: 20,
                bottom: 10
            }
        }
    },
    scales: {
        x: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                color: '#666',
                font: {
                    size: 12,
                    weight: 'normal'
                }
            }
        },
        y: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                color: '#666',
                font: {
                    size: 12,
                    weight: 'normal'
                },
                beginAtZero: false,
                padding: 10
            },
            suggestedMin: 18000,
            suggestedMax: 20000
        }
    }
};
const ChartView = () => {
    return (_jsx(Container, { style: { height: '300px', width: '100%' }, children: _jsx(Line, { data: data, options: options }) }));
};
export default ChartView;
