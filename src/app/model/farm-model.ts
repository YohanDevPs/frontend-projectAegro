import { Plot } from "./plot-model";

export class Farm {
  id!: number;
  farmProductivity!: number;
  nameFarm!: string;
  plots!: Array<Plot>;
}
