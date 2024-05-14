export default function Completed({ completedTodos }) {
  return (
    <>
      <h1 className="font-bold text-lg text-center">TAMAMLANAN</h1>
      <div className=" flex items-center justify-center my-10 ">
        <ul>
          {completedTodos.map((todo) => (
            <li className="flex font-semibold" key={todo.id}>
              🎉 {todo.title}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
