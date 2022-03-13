import { Navigation } from "../../components/navigation";
import { Input } from "../../components/input";
import { FormEvent, useState } from "react";
import { MinMaxTimeForm } from "./measurements-by-time.types";
import { measurementsService } from "../../services/measurements.service";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { MinMaxTemperature } from "../../interface/measurements.interface";
import { Button } from "../../components/button";

export const MeasurementsByTime = () => {
  const [minMax, setMinMax] = useState<MinMaxTemperature>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { min_time, max_time } = event.target as MinMaxTimeForm;
    if (!min_time.value || !max_time.value) {
      return;
    }
    setLoading(true);
    measurementsService
      .getMinMaxMeasurements(min_time.value, max_time.value)
      .then(({ resp }) => setMinMax(resp))
      .finally(() => setLoading(false));
  };

  return (
    <main>
      <Navigation />
      <h1>measurements by time</h1>
      <form onSubmit={handleSubmit}>
        <Input name="min_time" type="time" step="1" label="Min time" required />
        <Input name="max_time" type="time" step="1" label="Max time" required />
        <Button type="submit">Get</Button>
      </form>
      <div style={{ display: "flex" }}>
        <div>{/* <p>{minMax.min}</p> */}</div>
        {minMax && (
          <ResponsiveContainer width={400} height={300}>
            <BarChart
              data={[
                { title: "Min", temperature: minMax.min },
                { title: "Max", temperature: minMax.max },
              ]}
            >
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
