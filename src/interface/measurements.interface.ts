export interface Measurement {
  id: number
  measure_date?: Date
  measure_time?: string
  temperature: number
  sensor_id?: number
  title?: string
}

export type Measurements = Measurement[]

export interface MinMaxTemperature {
  min: number
  max: number
}
