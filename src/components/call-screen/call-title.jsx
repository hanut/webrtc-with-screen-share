import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCallTitle, setCallTitle } from "../../store/call.slice";

const CallTitle = () => {
  const title = useSelector(selectCallTitle);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const onEditBlur = useCallback((e) => {
    const { value } = e.target;
    dispatch(setCallTitle(value));
    setEdit(false);
  }, []);

  const onEditEnable = useCallback(() => {
    setEdit(true);
  }, []);

  if (edit) {
    return (
      <input
        className="tracking-wide w-full text-3xl font-thin z-10 pl-4 pt-4 text-shadow"
        type="text"
        maxLength="64"
        value={title}
        onBlur={onEditBlur}
      />
    );
  }

  return (
    <h1
      className="tracking-wide w-full text-3xl font-thin z-10 pl-4 pt-4 text-shadow"
      onClick={onEditEnable}
    >
      {title}
    </h1>
  );
};

export default CallTitle;
