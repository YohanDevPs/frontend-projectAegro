import { Farm } from 'src/app/model/farm-model';

export class Plot {
  idPlot!: number;
  plotProductivity!: number;
  namePlot!: string;
  plotAreaInHectare!: number;
  farm!: Farm;
}
