import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCallTitle } from "../../store/call.slice";

const CallTitle = () => {
  const title = useSelector(selectCallTitle);
  const [edit, setEdit] = useState(false);

  if (!edit) {
    return (
      <h1 className="tracking-wide w-full text-3xl font-thin z-10 pl-4 pt-4 text-shadow">
        {title}
      </h1>
    );
  }

  return (
    <h1 className="tracking-wide w-full text-3xl font-thin z-10 pl-4 pt-4 text-shadow">
      {title}
    </h1>
  );
};

export default CallTitle;
