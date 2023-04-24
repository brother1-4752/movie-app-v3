import styled from "styled-components";
import { useForm } from "react-hook-form";

// 인터페이스 안에 특정 값들 중 하나로 만들어놓은것 활용하기
// 1번 방법
interface IToDo {
  category: "A" | "B" | "C";
}
// const onClick = (newPage: IToDo["category"]) => {};
// <button onClick={()=>onClick("B")}>B</button>

// 2번 방법
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const {
    currentTarget: { name },
  } = e;
  console.log("i wanna go ", name);
};
<button name="B" onClick={handleClick}>
  B
</button>;

export default function Home() {
  const HomeContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  `;
  // register는 onChange, useState, handleOnChange 콜백함수들을 모두 한번에 관리해준다.
  // watch form안에서 벌어지는 모든 사건들을 주시한다.
  // react-hook-form을 사용하면, 각각의 input마다 따로 state들을 만들어줄 필요가 없어.
  // 사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 form이다.
  // required로 유효성 검사하기 => submit이 진행되는데, 오류가 있으면, 해당 원소로 마우스 커서가 이동
  // 어느 필드가 비어있는지 알려준다. (순서대로..!)

  interface IForm {
    keyword: string;
    username: string;
    password: string;
    password1: string;
    extraError?: string;
  }

  const { register, handleSubmit, formState, setError } = useForm<IForm>({
    defaultValues: {
      username: "NEMO",
    },
  });
  //handleSubmit
  //  form onSubmit에 handleSubmit을 등록해야 한다.인자로 onValid를 받는다. onValid에서는 Form data를 인자로 받아,
  // 비밀번호 컨펌을 검증하거나, setError useForm의 setError를 이용해 errorMsg를 넣고, 틀린 부분이 있다면,
  // 자동 포커스가 가도록, souldFocus:true를 설정해줄 수도 있다.

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
        // 내 password1에 오류가 있다면, 그 오류가 이 특정한 에러라면, shouldFocus를 강제로 시키자. 그러면 틀린 부분에 대해 유저가 더 쉽게 인식할 수 있고, 이것은 UX를 높이는 것으로 연결된다.
        // form의 커서가 password1에 옮겨진다.
      );
    }
    setError("extraError", { message: "Server offline" });
    // setError에서 또 유용한 건, form에서 너가 고른 input항목에 강제로 focus시킬 수 있어.
  };
  console.log(formState.errors);
  // formState.errors : 필수항목은 type:required, minLength도 알려준다.
  // 단순히 에러가 있다는 사실만 아니라, 어떤 종류의 에러가 생겼는지도 알 수 있다.
  return (
    <>
      <HomeContainer>Home</HomeContainer>
      <form onSubmit={handleSubmit(onValid)}>
        {/* 모든 validation이 우리가 handleSubmit을 호출하면 수행될 거야! */}
        <input
          {...register("keyword", {
            required: true,
            validate: {
              noAwesome: (value) =>
                value.toLowerCase().includes("awesome")
                  ? "no Awesome keyword is allowed"
                  : true,
              noGood: (value) =>
                value.toLowerCase().includes("good")
                  ? " no Good keyword is allowed"
                  : true,
            },
          })}
          // validate는 다양한 데이터(벨류)들에 대해서 검증하는게 필요할 수도 있다. 예를 들어, keyword로 awesome, good이라는 두 단어를 금지하도록 하고 싶을 수 있다. 그럴 경우, 리터럴 객체를 만든다.
          // *** validate는 async로 비동기로 만들어서 서버에다가 확인하고 응답을 받을 수도 있다.
          placeholder="Type Keyword..."
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
          //  if(username.length < 10){return setToDoError("blabla...")}
        />
        <input
          {...register("password", {
            // 필수항목을 입력하지 않으면, 'password가 필요합니다'라는 message가 들어간다.
            // minLength는 ValidationRule로 문자열이나 숫자 아니면 다른 것도 보낼 수 있다.
            // export declare type ValidationRule<TValidationValue extends ValidationValue =
            required: "password가 필요합니다.",
            minLength: {
              value: 5,
              message: "최소 5글자 이상으로 정해주세요.",
              // 이렇게 메세지 형태로 표현하면, 유저에게 보여줄 화면에 나올 에러 객체에 들어가는거야
            },
          })}
          placeholder="Password..."
        />
        <input
          {...register("password1", {
            // 필수항목을 입력하지 않으면, 'password가 필요합니다'라는 message가 들어간다.
            // minLength는 ValidationRule로 문자열이나 숫자 아니면 다른 것도 보낼 수 있다.
            // export declare type ValidationRule<TValidationValue extends ValidationValue =
            required: "password1가 필요합니다.",
            minLength: {
              value: 5,
              message: "최소 5글자 이상으로 정해주세요.",
              // 이렇게 메세지 형태로 표현하면, 유저에게 보여줄 화면에 나올 에러 객체에 들어가는거야
            },
          })}
          placeholder="Password 확인..."
        />
      </form>
    </>
  );
}
