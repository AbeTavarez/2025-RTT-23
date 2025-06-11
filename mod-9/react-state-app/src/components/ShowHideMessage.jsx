import { useState } from "react";

function ShowHideMessage() {
  const [show, setShow] = useState(false);
  return (
    <div className="border p-5 w-[500px] h-[250px] rounded">
      <div className="text-2xl font-semibold mb-5">
        Toggle Visibility Example
      </div>

      <button
        onClick={() => setShow(!show)}
        className="p-2 bg-blue-500 text-white rounded"
      >
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && (
        <p className="mt-5 text-xl bg-blue-100 p-5 rounded">
          Secret message revealed! 🎉
        </p>
      )}
    </div>
  );
}

export default ShowHideMessage;
