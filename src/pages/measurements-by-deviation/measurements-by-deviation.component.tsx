import { useEffect, useState } from "react";
import { Navigation } from "../../components/navigation";
//import { MinMaxTimeForm } from "./measurements-by-time.types";
import { deviationService } from "../../services/deviation.service";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
//import { MinMaxTemperature } from "../../interface/measurements.interface";

export const MeasurementsByDeviation = () => {
  const [deviation, setDeviation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    deviationService.getDeviation().then(({ resp }) => setDeviation(resp));
  }, []);

  return (
    <main>
      <Navigation />
      <h1>measurements by deviation</h1>

      <div style={{ display: "flex" }}>
        <table style={{ width: "40vw" }}>
          <thead>
            <tr>
              <th>id #</th>
              <th>title</th>
              <th>deviation</th>
            </tr>
          </thead>
          <tbody>
            {deviation.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.deviation}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {deviation.length > 0 && (
          <ResponsiveContainer width={600} height={400}>
            <BarChart data={deviation}>
              <XAxis dataKey="title" />
              <YAxis />
              <Bar dataKey="deviation" fill="#8884d8" />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </main>
  );
};
