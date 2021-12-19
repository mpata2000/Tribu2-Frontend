import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IHoursDefaultState } from 'types/hours.types';
import { ITicketsDefaultState, IProductsDefaultState, ITareasDefaultState, IResourcesDefaultState } from 'types/tickets.types';

interface IRootState {
  hours: IHoursDefaultState;
  tickets: ITicketsDefaultState;
  products: IProductsDefaultState;
  tareas: ITareasDefaultState;
  resources: IResourcesDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
