import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Container } from './styles';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import api from '@/axiosInstance';
import Select, { SingleValue } from 'react-select';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  productName: string;
}

interface PriceHistory {
  date: string;
  lowestPrice: number;
}

interface OptionType {
  value: string;
  label: string;
}

const dateOptions: OptionType[] = [
  { value: 'week', label: '1주일' },
  { value: 'month', label: '1달' }
];

const ChartView: React.FC<Props> = ({ productName }) => {
  const [dateLimit, setDateLimit] = useState<string>('week');
  const [priceHistory, setPriceHistory] = useState<PriceHistory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        const response = await api.get('/v1/price-compare', {
          params: { productName, dateLimit }
        });
        setPriceHistory(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(
          error.response?.data?.message || 'Failed to fetch price history'
        );
        setLoading(false);
      }
    };

    fetchPriceHistory();
  }, [productName, dateLimit]);

  const labels = priceHistory.map((item) =>
    new Date(item.date)
      .toLocaleDateString('ko-KR', {
        month: '2-digit',
        day: '2-digit'
      })
      .replace('. ', '/')
      .replace('.', '')
  );

  const handleDateLimitChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) setDateLimit(selectedOption.value);
  };

  const prices = priceHistory.map((item) => item.lowestPrice);

  const data = {
    labels,
    datasets: [
      {
        label: '가격',
        data: prices,
        borderColor: '#ffdba1',
        backgroundColor: 'rgba(255, 199, 120, 0.5)',
        tension: 0.1,
        pointBackgroundColor: '#eda5ff',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
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
          bottom: 20
        }
      },
      tooltip: {
        enabled: true,
        displayColors: false,
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        bodyColor: '#585858',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        titleColor: '#585858'
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
          padding: 5
        },
        suggestedMin: prices.length > 0 ? Math.min(...prices) - 50 : 0,
        suggestedMax: prices.length > 0 ? Math.max(...prices) + 50 : 1000
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container style={{ height: 'auto', width: '100%' }}>
      <Select
        options={dateOptions}
        defaultValue={dateOptions[0]}
        onChange={handleDateLimitChange}
        isSearchable={false}
      />
      <Line data={data} options={options} />
    </Container>
  );
};

export default ChartView;
