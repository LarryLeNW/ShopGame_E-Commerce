import { useEffect, useState } from "react";
import axios from "axios";
import {
    CategoryScale,
    Chart,
    LineController,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js/auto";

import { Bar, Line, Pie } from "react-chartjs-2";
import { Card, Space, Statistic } from "antd";
import * as S from "./style";
import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
} from "@ant-design/icons";

Chart.register(
    CategoryScale,
    LineController,
    LinearScale,
    PointElement,
    LineElement
);

function Dashboard() {
    const [orders, setOrders] = useState(0);
    const [inventory, setInventory] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [dataChart, setDataChart] = useState([]);
    console.log("🚀 ~ file: index.jsx:36 ~ Dashboard ~ dataChart:", dataChart);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let result = await axios.get("http://localhost:6789/common");
            setCustomers(result.data.users);
            setInventory(result.data.products);
            setOrders(result.data.orders);
            setRevenue(result.data.revenue || 0);
            setDataChart(result.data.monthlyOrderCounts);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const lineChartData = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        datasets: [
            {
                label: "Order list by month",
                data: dataChart.map((item) => item.orderCount),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    "rgba(255, 205, 86, 0.5)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                ],
                borderWidth: 1,
            },
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Month",
                    },
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: "Sales",
                    },
                },
            },
        },
    };

    return (
        <S.Wrapper>
            <S.ContainerCard>
                <DashboardCard
                    icon={
                        <ShoppingCartOutlined
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0,255,0,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Orders"}
                    value={orders}
                />
                <DashboardCard
                    icon={
                        <ShoppingOutlined
                            style={{
                                color: "blue",
                                backgroundColor: "rgba(0,0,255,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Inventory"}
                    value={inventory}
                />
                <DashboardCard
                    icon={
                        <UserOutlined
                            style={{
                                color: "purple",
                                backgroundColor: "rgba(0,255,255,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Customer"}
                    value={customers}
                />
                <DashboardCard
                    icon={
                        <DollarCircleOutlined
                            style={{
                                color: "red",
                                backgroundColor: "rgba(255,0,0,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Revenue"}
                    value={revenue + " USD"}
                />
            </S.ContainerCard>
            <div
                style={{
                    width: "100%",
                    maxHeight: "500px",
                    background: "black",
                    marginTop: "10px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Bar data={lineChartData} />
            </div>
        </S.Wrapper>
    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <S.WrapperCard>
            <Card style={{ background: "#a6a6e2" }}>
                <Space direction="horizontal">
                    {icon}
                    <Statistic title={title} value={value} />
                </Space>
            </Card>
        </S.WrapperCard>
    );
}
export default Dashboard;
