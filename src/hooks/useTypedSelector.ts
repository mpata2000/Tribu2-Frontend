import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IHoursDefaultState } from 'types/hours.types';
import { ITicketsDefaultState } from 'types/tickets.types';
import { ITareasDefaultState } from 'types/tareas.types';

interface IRootState {
  proyects: any;
  hours: IHoursDefaultState;
  tickets: ITicketsDefaultState;
  tareas: ITareasDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
