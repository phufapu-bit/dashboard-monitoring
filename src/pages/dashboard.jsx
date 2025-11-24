import React, { useState, useEffect } from "react";
import "../App.css";
import Stack from "@mui/material/Stack";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Chart from "react-apexcharts";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import LogoHumi from "../assets/images/humi.png";
import LogoTemp from "../assets/images/tempIcon.png";
import LogoBarometer from "../assets/images/barometer.png";
import LogoLight from "../assets/images/light.png";

export default function Dashboard() {
  const [val, setVal] = useState([]);
  const [data, setData] = useState({
    temperature: 30.5,
    humidity: 65,
    pressure: 1012,
    light: 550,
  });

  useEffect(() => {
    const generateMockData = () => {
      setData({
        temperature: (Math.random() * (35 - 28) + 28).toFixed(1),
        humidity: Math.floor(Math.random() * (80 - 50) + 50),
        pressure: Math.floor(Math.random() * (1020 - 1000) + 1000),
        light: Math.floor(Math.random() * (800 - 300) + 300),
      });
    };
    const interval = setInterval(generateMockData, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mockTableData = [
      { temp: "30.5 °C", humi: "65%", date: "2025-11-24", time: "10:15" },
      { temp: "29.8 °C", humi: "60%", date: "2025-11-24", time: "10:18" },
      { temp: "31.2 °C", humi: "70%", date: "2025-11-24", time: "10:21" },
      { temp: "28.9 °C", humi: "55%", date: "2025-11-24", time: "10:24" },
      { temp: "32.1 °C", humi: "68%", date: "2025-11-24", time: "10:27" },
      { temp: "30.0 °C", humi: "63%", date: "2025-11-24", time: "10:30" },
    ];

    setVal(mockTableData);
  }, []);

  const temp = parseFloat(data.temperature);
  const humi = parseFloat(data.humidity);
  const press = parseFloat(data.pressure);
  const light = parseFloat(data.light);

  // ----------------- COLOR FUNCTIONS -----------------
  const getColor = (value) => {
    if (value < 25) return "#007f3d";
    if (value < 35) return "#d65a00";
    return "#c9001f";
  };
  const getColorHumi = (value) => {
    if (value < 40) return "#007bff";
    if (value < 70) return "#007f3d";
    return "#c9001f";
  };
  const getColorPressure = (value) => {
    if (value < 1005) return "#c9001f";
    if (value < 1015) return "#007f3d";
    return "#007bff";
  };
  const getColorLight = (value) => {
    if (value < 400) return "#ff7f27";
    if (value < 700) return "#007f3d";
    return "#c9001f";
  };

  // ----------------- CHART 1 -----------------
  const chart1 = {
    series: [
      {
        name: "อุณหภูมิ (°C)",
        data: [27, 28, 30, 32, 33, 31, 29, 33, 31, 25, 27],
        color: "#5fca64ff",
      },
      {
        name: "อุณหภูมิสูง",
        data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        color: "#ff4d4d",
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: { show: true },
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 8,
          opacity: 0.2,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: { curve: "smooth", width: [4, 4], dashArray: [0, 8] },
      markers: { size: [6, 0], strokeWidth: [3, 0] },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
      },
      xaxis: {
        categories: [
          "ม.ค",
          "ก.พ",
          "มี.ค",
          "เม.ย",
          "พ.ค",
          "มิ.ย",
          "ก.ค",
          "ส.ค",
          "ก.ย",
          "พ.ย",
          "ธ.ค",
        ],
        labels: { style: { fontSize: "14px" } },
      },
      yaxis: {
        title: {
          text: "อุณหภูมิ (°C)",
          style: {
            fontSize: "16px",
          },
        },
        min: 20,
        max: 35,
        labels: { style: { fontSize: "14px" } },
      },
      grid: { borderColor: "#ddd", strokeDashArray: 5 },
      title: {
        text: "อุณหภูมิรายเดือน",
        align: "left",
        style: { fontSize: "18px" },
      },
    },
  };

  // ----------------- CHART 2 -----------------
  const chart2 = {
    series: [
      {
        name: "ความชื้น (%)",
        data: [55, 60, 62, 70, 68, 64, 60, 72, 80, 60, 70],
        color: "#4d9cff",
      },
      {
        name: "ความชื้นสูง",
        data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
        color: "#ff4d4d",
      },
    ],
    options: {
      chart: {
        type: "area",
        toolbar: { show: true },
        zoom: {
          enabled: false,
        },
      },
      stroke: { curve: "smooth", width: [4, 4], dashArray: [0, 8] },
      markers: { size: [6, 0], strokeWidth: [3, 0] },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.7,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        categories: [
          "ม.ค",
          "ก.พ",
          "มี.ค",
          "เม.ย",
          "พ.ค",
          "มิ.ย",
          "ก.ค",
          "ส.ค",
          "ก.ย",
          "พ.ย",
          "ธ.ค",
        ],
        labels: { style: { fontSize: "14px" } },
      },
      yaxis: {
        title: {
          text: "ความชื้น (%)",
          style: {
            fontSize: "16px",
          },
        },
        min: 50,
        max: 90,
        labels: { style: { fontSize: "14px" } },
      },
      title: {
        text: "ความชื้นรายเดือน",
        align: "left",
        style: { fontSize: "18px" },
      },
      grid: { borderColor: "#ddd", strokeDashArray: 5 },
    },
  };

  // ----------------- STYLE FOR CARD -----------------
  const cardStyle = {
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    transition: "0.3s",
    marginBottom: "10px",
  };
  const GaugesStyle = {
    borderRadius: "20px",
    background: "#ffffff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    transition: "0.3s",
    height: "150px",
    marginBottom: "10px",
  };

  return (
    <div className="container">
      {/* ---------------- ROW 1 GAUGES ---------------- */}
      <div className="row g-4">
        {/** Temperature */}
        <div className="col-3">
          <div
            className="card text-center p-2"
            style={{
              ...GaugesStyle,
              borderLeft: `8px solid ${getColor(temp)}`,
            }}
          >
            <label
              className="fw-bold"
              style={{ color: getColor(temp), fontSize: "25px" }}
            >
              <img
                src={LogoTemp}
                alt="Logo"
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              อุณหภูมิ
            </label>

            <Stack justifyContent="center" alignItems="center">
              <Gauge
                sx={(theme) => ({
                  "& .MuiGauge-valueText tspan": {
                    fill: getColor(temp),
                    fontSize: "30px",
                    fontWeight: 700,
                  },
                  [`& .${gaugeClasses.valueArc}`]: { fill: getColor(temp) },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.grey[300],
                  },
                })}
                width={200}
                height={100}
                value={temp}
                min={0}
                max={100}
                startAngle={-100}
                endAngle={100}
                text={({ value }) => `${value} °C`}
              />
            </Stack>
          </div>
        </div>

        {/** Humidity */}
        <div className="col-3">
          <div
            className="card text-center p-2"
            style={{
              ...GaugesStyle,
              borderLeft: `8px solid ${getColorHumi(humi)}`,
            }}
          >
            <label
              className="fw-bold"
              style={{ color: getColorHumi(humi), fontSize: "25px" }}
            >
              <img
                src={LogoHumi}
                alt="Logo"
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              ความชื้น
            </label>

            <Stack justifyContent="center" alignItems="center">
              <Gauge
                sx={(theme) => ({
                  "& .MuiGauge-valueText tspan": {
                    fill: getColorHumi(humi),
                    fontSize: "30px",
                    fontWeight: 700,
                  },
                  [`& .${gaugeClasses.valueArc}`]: { fill: getColorHumi(humi) },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: theme.palette.grey[300],
                  },
                })}
                width={200}
                height={100}
                value={humi}
                min={0}
                max={100}
                startAngle={-100}
                endAngle={100}
                text={({ value }) => `${value}%`}
              />
            </Stack>
          </div>
        </div>

        {/** Pressure */}
        <div className="col-3">
          <div
            className="card text-center p-2"
            style={{
              ...GaugesStyle,
              borderLeft: `8px solid ${getColorPressure(press)}`,
            }}
          >
            <label
              className="fw-bold"
              style={{ color: getColorPressure(press), fontSize: "25px" }}
            >
              <img
                src={LogoBarometer}
                alt="Logo"
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              ความกดอากาศ
            </label>
            <p
              style={{
                fontSize: "45px",
                fontWeight: 700,
                color: getColorPressure(press),
                margin: 0,
              }}
            >
              {data.pressure + " hPa"}
            </p>
          </div>
        </div>

        {/** Light */}
        <div className="col-3">
          <div
            className="card text-center p-2"
            style={{
              ...GaugesStyle,
              borderLeft: `8px solid ${getColorLight(light)}`,
            }}
          >
            <label
              className="fw-bold"
              style={{ color: getColorLight(light), fontSize: "25px" }}
            >
              <img
                src={LogoLight}
                alt="Logo"
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              ความเข้มแสง
            </label>
            <p
              style={{
                fontSize: "45px",
                fontWeight: 700,
                color: getColorLight(light),
                margin: 0,
              }}
            >
              {data.light + " lux"}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- ROW 2 CHARTS ---------------- */}
      <div className="row mt-1 g-4">
        <div className="col-6">
          <div className="card p-2" style={cardStyle}>
            <Chart
              options={chart1.options}
              series={chart1.series}
              type="line"
              height={250}
            />
          </div>
        </div>

        <div className="col-6">
          <div className="card p-2" style={cardStyle}>
            <Chart
              options={chart2.options}
              series={chart2.series}
              type="area"
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="row mt-1 g-4">
        <div className="col-12">
          <div className="card" style={cardStyle}>
            <DataTable
              value={val}
              paginator
              rows={3}
              rowsPerPageOptions={[5, 10, 20]}
              stripedRows
              tableStyle={{ minWidth: "100%", fontSize: "16px" }}
              paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
              // RowsPerPageDropdown
              className="custom-table"
            >
              <Column
                field="temp"
                header="อุณหภูมิ"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="humi"
                header="ความชื้น"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="date"
                header="วันที่"
                sortable
                style={{ width: "25%" }}
              ></Column>
              <Column
                field="time"
                header="เวลา"
                sortable
                style={{ width: "25%" }}
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}
