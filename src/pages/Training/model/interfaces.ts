export type TTrainingTExercise = {
  id: string;
  /** сделать блокноушеновое описание */
  description: string;
};

export type TTrainingSet = {
  id: string;
  /** ссылка на упражнение */
  exerciseId: string;
  /** Количество повторений */
  count: number;
};

/** Row of training sets */
export type TTrainingCluster = {
  id: string;
  /** Если все упражнения одинаковы */
  isMonocluster: boolean;
  sets: TTrainingSet[];
};

export type TTrainingSession = {
  id: string;
  name: string;
  isCompleted: boolean;
  clusters: TTrainingCluster[];
};
