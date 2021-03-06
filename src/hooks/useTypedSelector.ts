import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IHoursDefaultState } from 'types/hours.types';
import { ITicketsDefaultState, IProductsDefaultState, ITareasDefaultState, IResourcesDefaultState, IClientsDefaultState } from 'types/tickets.types';

interface IRootState {
  proyects: any;
  hours: IHoursDefaultState;
  tickets: ITicketsDefaultState;
  tareas: ITareasDefaultState;
  products: IProductsDefaultState;
  resources: IResourcesDefaultState;
  clients: IClientsDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
