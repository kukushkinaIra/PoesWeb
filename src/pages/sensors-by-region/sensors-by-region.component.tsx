import { FormEvent, useEffect, useState } from "react";
import { Navigation } from "../../components/navigation";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RegionForm } from "./sensors-by-region.types";
import { regionsService } from "../../services/regions.service";
import { Button } from "../../components/button";

export function SensorsByRegion() {
  const [regions, setRegions] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    regionsService.getAllRegions().then(({ resp }) => setRegions(resp));
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { region_name } = event.target as RegionForm;
    if (!region_name.value) {
      return;
    }
    regionsService
      .getSensorsByRegion(region_name.value)
      .then(({ resp }) => setSensors(resp));
  };

  return (
    <main>
      <Navigation />
      <h1>Available sensors</h1>
      <form onSubmit={handleSubmit}>
        <select name="region_name">
          {regions.map(({ id, title }) => (
            <option key={id} value={title}>
              {title}
            </option>
          ))}
        </select>
        <Button type="submit">Get</Button>
      </form>

      {
        <div style={{ display: "flex" }}>
          <table style={{ width: "40vw" }}>
            <thead>
              <tr>
                <th>id #</th>
                <th>Lattitude</th>
                <th>longtitude</th>
                <th>Region id</th>
                <th>Region title</th>
              </tr>
            </thead>
            <tbody>
              {sensors.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.lattitude}</td>
                  <td>{item.longitude}</td>
                  <td>{item.region_id}</td>
                  <td>{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {sensors.length > 0 && (
            <ResponsiveContainer width={400} height={300}>
              <BarChart data={sensors}>
                <XAxis dataKey="title" />
                <YAxis />
                <Bar dataKey="lattitude" fill="#8884d8" />
                <Bar dataKey="longitude" fill="#82ca9d" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      }
    </main>
  );
}
