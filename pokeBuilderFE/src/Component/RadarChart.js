import {Radar} from "react-chartjs-2";

const RadarChart = ({chartData}) => {
    const options = {
        maintainAspectRatio: true,
        responsive: true,
        layout: {
            padding: "1rem",
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                caretSize: 15,
                borderColor: "white",
                borderWidth: 2,
                bodyAlign: "center",
                backgroundColor: "black",
            },
        },
        elements: {
            line: {
                borderWidth: 1,
                borderColor: "white",
            },
            point: {
                radius: 2,
                backgroundColor: "#508484",
            },
        },
        scale: {
            min: 0,
            max: 200,
        },
        scales: {
            r: {
                ticks: {
                    display: false,
                    stepSize: 40,
                },
                pointLabels: {
                    color: "white",
                    font: {
                        size: 12,
                        weight: "bold",
                    },
                },
                backgroundColor: "white",
                grid: {
                    color: "black",
                },
                angleLines: {
                    color: "black",
                },
            },
        },
    };

    return (
        <div>
            <Radar type={"radar"} data={chartData} options={options}/>
        </div>
    );
}

export default RadarChart;