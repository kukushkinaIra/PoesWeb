import { FormEvent, useState } from "react";
import { Navigation } from "../../components/navigation";
import { measurementsService } from "../../services/measurements.service";
import { Input } from "../../components/input";
import { MinMaxDateForm } from "./measurements-by-date.types";
import { Measurements } from "../../interface/measurements.interface";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "../../components/button";

export const MeasurementsByDate = () => {
  const [measurements, setMeasurements] = useState<Measurements>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { min_date, max_date } = event.target as MinMaxDateForm;
    if (!min_date.value || !max_date.value) {
      return;
    }
    setLoading(true);
    measurementsService
      .getMeasurementsBetweenDates(min_date.value, max_date.value)
      .then(({ resp }) => setMeasurements(resp))
      .finally(() => setLoading(false));
  };

  return (
    <main>
      <Navigation />
      <h1>Measurements by date</h1>
      <form onSubmit={handleSubmit}>
        <Input name="min_date" type="date" label="Min date" required />
        <Input name="max_date" type="date" label="Max date" required />
        <Button type="submit">Get</Button>
      </form>

      <div style={{ display: "flex" }}>
        <table style={{ width: "40vw" }}>
          <thead>
            <tr>
              <th>id #</th>
              <th>Sensor title</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {measurements.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.temperature}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {measurements.length > 0 && (
          <ResponsiveContainer width={400} height={300}>
            <BarChart data={measurements}>
              <XAxis dataKey="title" />
              <YAxis />
              <Bar dataKey="temperature" fill="#8884d8" />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </main>
  );
};
