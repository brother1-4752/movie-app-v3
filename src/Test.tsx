// import { atom, useRecoilValue, useSetRecoilState } from "recoil";
// import { useState } from "react";
// /*
// Atoms는 어플리케이션 상태의 source of truth를 갖는다. todo 리스트에서 source of truth는 todo아이템을
// 나타내는 객체로 이루어진 배열이 될 것이다. 우리는 atom 리스트를 todoListState라고 하고 이것을
// atom() 함수를 이용해 생성할 것이다.

// */

// /*
// 우리는 atom에 고유한 key를 주고 비어있는 배열 값을 default로 설정할 것이다. 이 atom의 항목을
// 읽기 위해, 우리는 useRecoilValue() 훅을 우리의 TodoList 컴포넌트에서 사용할 수 있다.
// atom을 사용하고자 하는 컴포넌트에서 useRecoilvalue() 훅을 사용하여 끌어오자.
// */

// interface ItoDo {
//   todo: string;
//   state: "Pending" | "Done" | "ToDo";
// }
// const todosAtom = atom<ItoDo[]>({
//   key: "todos",
//   default: [],
// });

// function TodoList() {
//   const todoList = useRecoilValue(todosAtom);
//   return (
//     <>
//       {/* <TodoListStats /> */}
//       {/* <TodoListFilters /> */}
//       <TodoItemCreator />

//       {todoList.map((todoItem) => (
//         <TodoItem key={todoItem.id} item={todoItem} />
//       ))}
//     </>
//   );
// }

// /* 새로운 todo 아이템을 생성하기 위해 우리는 todoListState 내용을 업데이트하는 setter함수에 접근해야 한다.
// 우리는 TodoItemCreator 컴포넌트의 setter함수를 얻기 위해 useSetRecoilState() 훅을 사용할 수 있다. */

// function TodoItemCreator() {
//   const [inputValue, setInputValue] = useState("");
//   const setTodoList = useSetRecoilState(todosAtom);

//   return <></>;
// }

// // 고유한 Id 생성을 위한 유틸리티
// let id = 0;
// function getId() {
//   return id++;
// }
