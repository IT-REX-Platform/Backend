import { Moment } from 'moment';
import { OperationType } from 'app/shared/model/enumerations/operation-type.model';

export interface IPosition {
  id?: number;
  asset?: string;
  buyAt?: string;
  sellAt?: string;
  entryValue?: number;
  exitValue?: number;
  operationType?: OperationType;
}

export const defaultValue: Readonly<IPosition> = {};
