import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IHoursDefaultState } from 'types/hours.types';
import { ITicketsDefaultState } from 'types/tickets.types';

interface IRootState {
  hours: IHoursDefaultState;
  tickets: ITicketsDefaultState;
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
