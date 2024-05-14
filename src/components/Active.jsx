export default function Active({ todos, onComplete }) {
  return (
    <>
      <h1 className="font-bold text-lg text-center">AKTİF</h1>
      <div className=" flex items-center justify-center my-10 ">
        <ul>
          {todos.map((todo) => (
            <li className="flex font-semibold" key={todo.id}>
              🚀 {todo.title}
              <button className="mx-10" onClick={() => onComplete(todo.id)}>
                ✅
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
