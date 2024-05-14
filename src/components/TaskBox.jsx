import { useState } from "react";

export default function TaskBox({ onAdd }) {
  const [text, setText] = useState("");

  function onHandlerAdd() {
    setText("");
    onAdd(text);
  }

  return (
    <div className="flex items-center justify-center h-16 my-5">
      <div className="p-4 border">
        <div className="flex">
          <label className="mx-3 my-2 font-bold">Görev:</label>
          <input
            value={text}
            type="text"
            className="mx-3 border"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={onHandlerAdd}
            className="bg-black hover:bg-gray-200 text-white hover:text-gray-800 font-bold py-2 px-4 rounded"
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
