import React, { Component } from "react";

import { ComponentPreview, DocToc, Property, ExperimentalComponentAlert } from "#";
import Chart from "@/Chart";

const LineChart = () => (
        <>
            <h2 id="line-chart">Line chart</h2>
            <p className="lead">If Johnny Cash could, then you too should be able to...</p>
            <p>To add a simple line chart.</p>
            <ComponentPreview language="html" showCasePanel codeFigure >
                <Chart id="simple-line-chart" options={{
                    type: "line",
                    data: {
                        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
                        datasets: [
                            {
                                label: "Peak",
                                data: [261, 673, 962, 1067, 1007, 779]
                            }
                        ]
                    }
                }} />
            </ComponentPreview>
            <ComponentPreview language="javascript" codeFigure >
                {`
px.chart("simple-line-chart", {
    type: "line",
    data: {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "Peak",
                data: [261, 673, 962, 1067, 1007, 779]
            }
        ]
    }
});
                `}
            </ComponentPreview>

            <h3>Stepped and dashed line</h3>
            <ComponentPreview language="html" showCasePanel codeFigure >
                <Chart id="stepped-dashed-line-chart" options={{
                    type: "line",
                    data: {
                        labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
                        datasets: [
                            {
                                label: "Active users",
                                data: [1815, 1958, 2080, 2210, 2341, 2471, 2600, 2725],
                                steppedLine: true
                            },
                            {
                                label: "Registered users",
                                data: [2196, 2327, 2421, 2573, 2644, 2767, 2913, 3004],
                                borderDash: [15, 5]
                            }
                        ]
                    }
                }} />
            </ComponentPreview>
            <ComponentPreview language="javascript" codeFigure >
                {`
px.chart("stepped-dashed-line-chart", {
    type: "line",
    data: {
        labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
            {
                label: "Active users",
                data: [1815, 1958, 2080, 2210, 2341, 2471, 2600, 2725],
                steppedLine: true
            },
            {
                label: "Registered users",
                data: [2196, 2327, 2421, 2573, 2644, 2767, 2913, 3004],
                borderDash: [15, 5]
            }
        ]
    }
});
                `}
            </ComponentPreview>

            <h3>Advanced options</h3>
            <ComponentPreview language="html" showCasePanel codeFigure >
                <Chart id="advanced-line-chart" options={{
                    type: "line",
                    data: {
                        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
                        datasets: [
                            {
                                label: "DotA2 TI Prize Pool",
                                data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53],
                                fill: false
                            },
                            {
                                label: "LoL World Championship Prize Pool",
                                data: [0.1, 2, 2.05, 2.13, 2.13, 5.07, 4.94, 2.25],
                                fill: false
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: "In millions"
                                },
                                ticks: {
                                    callback: value => `$${value}`
                                }
                            }]
                        }
                    }
                }} />
            </ComponentPreview>
            <ComponentPreview language="javascript" codeFigure >
                {`
px.chart("advanced-line-chart", {
    type: "line",
    data: {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
            {
                label: "DotA2 TI Prize Pool",
                data: [1.6, 1.6, 2.87, 10.92, 18.42, 20.77, 24.78, 25.53],
                fill: false
            },
            {
                label: "LoL World Championship Prize Pool",
                data: [0.1, 2, 2.05, 2.13, 2.13, 5.07, 4.94, 2.25],
                fill: false
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "In millions"
                },
                ticks: {
                    callback: value => \`$\${value}\`
                }
            }]
        }
    }
});
                `}
            </ComponentPreview>
        </>
);

const BarChart = () => (
    <>
        <h2 id="bar-chart">Bar chart</h2>
        <p className="lead">A priest and a rabbi walked into a bar...</p>
        <p>A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="simple-bar-chart" options={{
                type: "bar",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Hours of daylight",
                            data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }} />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
px.chart("simple-bar-chart", {
    type: "bar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Hours of daylight",
                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
        `}
        </ComponentPreview>

        <h3>Multiple datasets</h3>
        <p>You can add multiple datasets</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="multi-bar-chart" options={{
                type: "bar",
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: "Hours of daylight",
                            data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
                        },
                        {
                            label: "Total rain (in cm)",
                            data: [4.9, 3.6, 4.7, 4.1, 5.3, 6.5, 8.1, 8.9, 9, 8.4, 7.3, 5.5]
                        },
                        {
                            label: "Average temperature (in celcius)",
                            data: [-1.7, -4.1, -2.3, 6.5, 16.1, 17.9, 22.2, 16.3, 12.5, 7.4, 1.6, -1.5]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }} />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
px.chart("multi-bar-chart", {
    type: "bar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Hours of daylight",
                data: [6.75, 9.25, 11.75, 14.5, 17, 18.75, 18, 15.5, 13, 10.25, 7.5, 6]
            },
            {
                label: "Total rain (in cm)",
                data: [4.9, 3.6, 4.7, 4.1, 5.3, 6.5, 8.1, 8.9, 9, 8.4, 7.3, 5.5]
            },
            {
                label: "Average temperature (in celcius)",
                data: [-1.7, -4.1, -2.3, 6.5, 16.1, 17.9, 22.2, 16.3, 12.5, 7.4, 1.6, -1.5]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
            `}
        </ComponentPreview>

        <h3>Stacked bar</h3>
            <p className="lead">You can stack, because a stacked bar is almost as good as a stocked one</p>
            <ComponentPreview language="html" showCasePanel codeFigure >
                <Chart id="stacked-multi-bar-chart" options={{
                    type: "bar",
                    data: {
                        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        datasets: [
                            {
                                label: "Paid with cash",
                                data: [19, 23, 29, 24, 28, 33, 21, 24, 20, 17, 23, 24]
                            },
                            {
                                label: "Paid with credit card",
                                data: [31, 29, 32, 17, 25, 32, 28, 30, 24, 22, 20, 37]
                            },
                            {
                                label: "Paid with Vipps",
                                data: [11, 9, 7, 12, 4, 13, 8, 10, 4, 1, 13, 16]
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                stacked: true,
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                stacked: true
                            }]
                        }
                    }
                }} />
            </ComponentPreview>
            <ComponentPreview language="javascript" codeFigure >
                {`
px.chart("stacked-multi-bar-chart", {
    type: "bar",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Paid with cash",
                data: [19, 23, 29, 24, 28, 33, 21, 24, 20, 17, 23, 24]
            },
            {
                label: "Paid with credit card",
                data: [31, 29, 32, 17, 25, 32, 28, 30, 24, 22, 20, 37]
            },
            {
                label: "Paid with Vipps",
                data: [11, 9, 7, 12, 4, 13, 8, 10, 4, 1, 13, 16]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                stacked: true
            }]
        }
    }
});
                `}
            </ComponentPreview>
    </>
);

const PieChart = () => (
    <>
        <h2 id="pie-chart">Pie chart</h2>
        <p className="lead">Stress cannot exist in the presence of pie...</p>
        <p>To add a simple pie chart.</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="simple-pie-chart" options={{
                type: "pie",
                data: {
                    labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
                    datasets: [
                        {
                            data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
                        }
                    ]
                }
            }} />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
px.chart("simple-pie-chart", {
    type: "pie",
    data: {
        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
        datasets: [
            {
                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
            }
        ]
    }
});
            `}
        </ComponentPreview>

        <h2>Doughnut</h2>
        <p className="lead">Did anyone say <code className="token string">doughnut</code>?</p>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="doughnut-chart" options={{
                type: "doughnut",
                data: {
                    labels: ["PC and Mac", "Smartphones and Tablets", "PS4/PRO", "VR Headsets", "Xbox one/Scorpio", "Web Browsers", "Linux", "Nintendo Switch", "Other"],
                    datasets: [
                        {
                            data: [53, 38, 27, 24, 22, 13, 7, 3, 9]
                        }
                    ]
                }
            }} />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
px.chart("doughnut-chart", {
    type: "doughnut",
    data: {
        labels: ["Chrome", "Internet Explorer", "Firefox", "Edge", "Safari", "Opera", "Other"],
        datasets: [
            {
                data: [63.14, 11.43, 10.23, 4.34, 3.83, 1.56, 4.19]
            }
        ]
    }
});
        `}
        </ComponentPreview>
    </>
);

const MixingTypes = () => (
    <>
        <h2 id="mixing-types">Mixing types</h2>
        <ComponentPreview language="html" showCasePanel codeFigure >
            <Chart id="mixed-chart" options={{
                type: "bar",
                data: {
                    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
                    datasets: [
                        {
                            label: "Growth",
                            data: [20, 25, 30]
                        },
                        {
                            label: "Expected Growth",
                            data: [20, 25, 30, 35, 40, 45],
                            type: "line",
                            fill: false
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            }} />
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure >
            {`
px.chart("mixed-chart", {
    type: "bar",
    data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
        datasets: [
            {
                label: "Growth",
                data: [20, 25, 30]
            },
            {
                label: "Expected Growth",
                data: [20, 25, 30, 35, 40, 45],
                type: "line", // Changes this dataset to become a line
                fill: false
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
        `}
        </ComponentPreview>
    </>
);

const ChartsText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead"> We are using <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">chart.js</a></p>
        <LineChart />
        <BarChart />
        <PieChart />
        <MixingTypes />
    </div>
);

class Charts extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ChartsText />
                    <DocToc component={ChartsText} />
                </div>
            </div>
        );
    }
}

export default Charts;

/* For testing */
export { LineChart, BarChart, PieChart, MixingTypes, ChartsText };

