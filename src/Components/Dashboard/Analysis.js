import React, { useEffect, useState } from 'react';
import {
    Bar,
    BarChart,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    Scatter,
    Cell,
    Area,
    ComposedChart,
    CartesianGrid,
    ScatterChart,
    PieChart,
    Pie,
    AreaChart,
    Legend,
} from "recharts";
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Footer from './Footer';
const colors = scaleOrdinal(schemeCategory10).range();

const Analysis = () => {
    const [analysisData, setAnalysisData] = useState([])


    console.log(analysisData);
    useEffect(() => {
        fetch('https://serene-headland-23680.herokuapp.com/analysis')
            .then(res => res.json())
            // .then(data => setAnalysisData(data.slice(0,50))
            .then(data => {
                
                setAnalysisData(data.slice(0,50))
               
            })


    }, [])
    // console.log(analysisData);
   
    return (
        <div>
            <h1 className='mt-5 fw-bold text-center'>Analysis</h1>
            

            <div className='grid lg:grid-cols-2 md:grid-cols-1 '>
                <div className='bg-base-100 m-2 rounded-2xl'>
                    <LineChart width={500} height={400} data={analysisData}>
                        <Line dataKey={"intensity"} stroke="#8884d8" />
                        <XAxis dataKey="topic" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Legend />
                        <Bar dataKey="likelihood" fill="#8884d8" />
                        <Line dataKey="topic" fill="#82ca9d" />
                    </LineChart>
                </div>
                <div className='bg-base-100 m-2 rounded-2xl'>

                    <ScatterChart
                        width={400}
                        height={400}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="intensity" name="Population" />
                        <YAxis type="number" dataKey="relevance" name="Intensity" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="intensity" data={analysisData} fill="#8884d8">
                            {analysisData.map((region, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Scatter>
                        <Legend />

                        <Bar dataKey="Intensity" fill="#82ca9d" />
                    </ScatterChart>

                </div>

            </div>
            <div className='bg-base-100 m-2 rounded-2xl p-2 flex justify-center'>

                <BarChart
                    width={700}
                    height={400}
                    data={analysisData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="country" />
                    <XAxis dataKey="likelihood" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="likelihood" fill="#8884d8" />
                    <Bar dataKey="country" fill="#82ca9d" />
                </BarChart>

            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1'>

                <div className='bg-base-100 p-2 m-2 rounded-2xl'>
                    <h1 className='text-center fw-bold text-primary'>PieChart</h1>
                    <PieChart width={400} height={400}>
                        <Pie data={analysisData} dataKey="end_year" cx="50%" cy="50%" outerRadius={70} fill="#43EA46" />
                        <Pie data={analysisData} dataKey="Intensity" cx="50%" cy="50%" innerRadius={60} outerRadius={90} fill="#8884d8" label />
                        <Tooltip />
                        <Legend />
                        <Line dataKey="End_Year" fill="#8884d8" />
                        <Line dataKey="Intensity" fill="#82ca9d" />
                    </PieChart>
                </div>
                <div className='bg-base-100 p-2 m-2 rounded-2xl'>
                    {/* <ComposedChart
                        width={500}
                        height={400}
                        data={analysisData}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="relevance" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="intensity" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="relevance" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="likelihood" stroke="#ff7300" />
                        <Scatter dataKey="start_year" fill="red" />
                    </ComposedChart> */}
                    <AreaChart
                        width={500}
                        height={400}
                        data={analysisData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="source" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="intensity" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="relevance" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="likelihood" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Analysis;