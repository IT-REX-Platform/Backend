import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IPosition, defaultValue } from 'app/shared/model/orderbook/position.model';

export const ACTION_TYPES = {
  FETCH_POSITION_LIST: 'position/FETCH_POSITION_LIST',
  FETCH_POSITION: 'position/FETCH_POSITION',
  CREATE_POSITION: 'position/CREATE_POSITION',
  UPDATE_POSITION: 'position/UPDATE_POSITION',
  DELETE_POSITION: 'position/DELETE_POSITION',
  RESET: 'position/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IPosition>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type PositionState = Readonly<typeof initialState>;

// Reducer

export default (state: PositionState = initialState, action): PositionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_POSITION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_POSITION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_POSITION):
    case REQUEST(ACTION_TYPES.UPDATE_POSITION):
    case REQUEST(ACTION_TYPES.DELETE_POSITION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_POSITION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_POSITION):
    case FAILURE(ACTION_TYPES.CREATE_POSITION):
    case FAILURE(ACTION_TYPES.UPDATE_POSITION):
    case FAILURE(ACTION_TYPES.DELETE_POSITION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_POSITION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_POSITION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_POSITION):
    case SUCCESS(ACTION_TYPES.UPDATE_POSITION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_POSITION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'services/orderbook/api/positions';

// Actions

export const getEntities: ICrudGetAllAction<IPosition> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_POSITION_LIST,
  payload: axios.get<IPosition>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IPosition> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_POSITION,
    payload: axios.get<IPosition>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IPosition> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_POSITION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IPosition> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_POSITION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IPosition> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_POSITION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
