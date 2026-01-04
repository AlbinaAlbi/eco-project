import { Message } from "../../components/Message/Message";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearError } from "../../store/slices/errorSlice";

export const AppErrorHandler: React.FC = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.error.message);

  return (
    <>
      {error && <Message message={error} onClose={() => dispatch(clearError())} />}
    </>
  );
};
