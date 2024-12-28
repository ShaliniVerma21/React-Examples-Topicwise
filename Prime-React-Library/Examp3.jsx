import React from 'react';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const Examp3 = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Votes',
                data: [200, 50, 100],
                backgroundColor: [
                    'Red',
                    'Blue',
                    'Green',
                ],
                borderColor: [
                    'Pink',
                    'white',
                    'black',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pie Chart Example',
            },
        },
    };

    return (
        <div>
            <h2>Pie Chart</h2>
            <Chart type="pie" data={data} options={options} width='30%' height='30%' />
        </div>
    );
};

export default Examp3;