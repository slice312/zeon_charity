import React from "react";
import Chart from "react-apexcharts";

export const DonutChart = ({need, done}) => {

    const options = {
        colors: ["#000", "#4B5FA5"],
        dataLabels: {

        },
        tooltip: {
            y: {
                formatter: val => `${val}$`
            }
        },
        legend: {
            show: false
        },
        labels: ["Осталось собрать", "Собрано"],
        plotOptions: {
            pie: {
                expandOnClick: false
            },
        },
        fill: {

        }

    }
    const series = [need, done]

    return (
        <div className={'charts'}>
            <Chart
                options={options}
                series={series}
                type="donut"
            />
        </div>
    );
};