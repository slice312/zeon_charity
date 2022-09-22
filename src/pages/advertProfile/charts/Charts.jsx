import React from 'react';
import './charts.scss'
import Chart from "react-apexcharts";
import {DonutChart} from "./DonutChart";

const Charts = ({done, need}) => {
    return (
        <div className={'charts'}>
            <DonutChart done={done} need={need}/>
        </div>
    );
};

export default Charts;