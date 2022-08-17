import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



function SummarySection({ arrayData, type }) {

    const options1 = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Complete vs Incomplete Todo Activities',
            },
        },
    };

    const options2 = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Post per UserID',
            },
        },
    };

    if(type === "complete") {
        console.log("dari summary section complete")
        console.log( arrayData )
        
        const labels = Object.keys(arrayData)
        console.log( Object.keys(arrayData))

        const data = {
            labels,
            datasets: [
                {   
                    data: arrayData,
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.8)',
                        'rgba(0, 255, 255, 0.8)',
                    ],
                }
            ]
        }

        return (
            <div>
                {/* <h1>summary section complete</h1> */}
                <Bar options={options1} data={data} />
            </div>
        )
    } else if(type === "postPerID") {
        console.log("dari summary section postPerID")
        console.log(arrayData)
        
        const labels = Object.keys(arrayData)
        console.log( Object.keys(arrayData))

        const data = {
            labels,
            datasets: [
                {
                    data: arrayData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(0, 99, 132, 0.8)',
                        'rgba(255, 0, 132, 0.8)',
                        'rgba(255, 99, 0, 0.8)',
                        'rgba(50, 99, 132, 0.8)',
                        'rgba(255, 50, 132, 0.8)',
                        'rgba(255, 99, 50, 0.8)',
                        'rgba(125, 99, 132, 0.8)',
                        'rgba(255, 152, 132, 0.8)',
                        'rgba(255, 99, 125, 0.5)',
                    ],
                }
            ]
        }

        return (
            <div>
                {/* <h1>summary section postPerID</h1> */}
                <Bar options={options2} data={data} />
            </div>
        )
    }
}

export default SummarySection