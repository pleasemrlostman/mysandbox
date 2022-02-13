import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ReactHookFormPractice = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            inputText: "후지페브릭",
            inputSelect: "5",
            inputRadio: "햄버거",
        },
    });
    
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText label="inputText" register={register} required />
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(watch().inputText);
                    }}
                >
                    닉네임중복검사용
                </button>
                <ErrorMessage
                    message="텍스트를 입력하세요"
                    errors={errors}
                    name="inputText"
                    render={({ message }) => (
                        <StyledErrorMessage>{message}</StyledErrorMessage>
                    )}
                />
            </div>
            <div>
                <InputSelect
                    label="inputSelect"
                    register={register}
                    required
                    option={[1, 2, 3, 4, 5]}
                />
                <ErrorMessage
                    message="셀렉트를 선택하세요"
                    errors={errors}
                    name="inputSelect"
                    render={({ message }) => (
                        <StyledErrorMessage>{message}</StyledErrorMessage>
                    )}
                />
            </div>
            <div>
                {["피자", "햄버거", "녹차"].map((value, id) => {
                    return (
                        <InputRadio
                            key={`radio${value}`}
                            radioName={value}
                            label="inputRadio"
                            register={register}
                            required
                            text={value}
                        />
                    );
                })}
            </div>
            <div>
                {["서울", "경기", "강원", "충북", "충남"].map((value, id) => {
                    return (
                        <span key={value}>
                            <CheckBox
                                label={`${value}`}
                                register={register}
                                text={value}
                            />
                        </span>
                    );
                })}
            </div>
            <div>
                <button type="submit">전송하기</button>
            </div>
        </form>
    );
};

export default ReactHookFormPractice;

const InputText = ({ label, register, required }) => {
    return <StyledInput type="text" {...register(label, { required })} />;
};
const StyledInput = styled.input``;

const InputSelect = ({ label, register, required, option }) => {
    return (
        <StyledSelect type="select" {...register(label, { required })}>
            <option value="">보기</option>
            {option?.map((value, key) => {
                return (
                    <option key={key} value={value}>
                        {value}
                    </option>
                );
            })}
        </StyledSelect>
    );
};
const StyledSelect = styled.select``;

const InputRadio = ({ label, register, required, text, radioName }) => {
    return (
        <>
            <StyledRadio
                type="radio"
                name={label}
                id={radioName}
                value={radioName}
                {...register(label, { required })}
            />
            <label htmlFor={radioName}>{text}</label>
        </>
    );
};
const StyledRadio = styled.input`
    border: 1px solid blue;
`;
const StyledErrorMessage = styled.p`
    color: red;
`;

const CheckBox = ({ label, register, required, text }) => {
    return (
        <>
            <StyledCheckBox
                type="checkbox"
                id={`${label}-${text}`}
                {...register(label, { required })}
            />
            <label htmlFor={label + text}>{text}</label>
        </>
    );
};

const StyledCheckBox = styled.input`
    border: 1px solid green;
`;
