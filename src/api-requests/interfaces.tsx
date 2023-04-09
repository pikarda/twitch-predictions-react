import { empty } from "../components/status/Status.styles";

export interface OutcomeData {
  channel_points: number;
  color: string;
  id: string;
  title: string;
  top_predictors: [];
  users: number;
}
interface Outcomes {
  channel_points: number;
  color: string;
  id: string;
  title: string;
  top_predictors: [];
  users: number;
}

export interface FetchData {
  title: string;
  winning_outcome_id: string;
  status: string;
  remainingTime: string;
  outcomes: Outcomes[];
  createdAt: string;
}

export interface UseSwitch {
  component: string;
  title: typeof empty;
  status: string;
  data: FetchData;
  divT: typeof empty;
  divT2?: typeof empty;
  lockedAnimation?: typeof empty;
  resolvedFadeout?: typeof empty;
  animationLength: number;
  switchLocked: (bool: boolean) => void;
  switchResolved: (bool: boolean) => void;
  switchCanceled: (bool: boolean) => void;
  switchActive: (bool: boolean) => void;
}

export interface Data {
  data: FetchData;
  status: string;
  switchActive: (bool: boolean) => void;
  switchLocked: (bool: boolean) => void;
  switchCanceled: (bool: boolean) => void;
  switchResolved: (bool: boolean) => void;
}
