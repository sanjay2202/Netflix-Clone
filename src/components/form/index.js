import { Container, Sub , TitleSmall , TextSmall1 , InputGender , Base , Base1 , Error , Title, Text, TextSmall, Link, Input, Submit } from "./styles/form";

export default function Form({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps}) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Text = function FormText({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

Form.Link = function FormLink({ children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps}) {
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps}) {
    return <Submit {...restProps}>{children}</Submit>;
};

Form.InputGender = function FormInputGender({ children, ...restProps}) {
    return <InputGender {...restProps}>{children}</InputGender>;
};

Form.TitleSmall = function FormTitleSmall({ children, ...restProps}) {
    return <TitleSmall {...restProps}>{children}</TitleSmall>;
};

Form.Sub = function FormSub({ children, ...restProps}) {
    return <Sub {...restProps}>{children}</Sub>;
};

Form.TextSmall1 = function FormTextSmall1({ children, ...restProps}) {
    return <TextSmall1 {...restProps}>{children}</TextSmall1>;
};

Form.Base1 = function FormBase1({ children, ...restProps}) {
    return <Base1 {...restProps}>{children}</Base1>;
};
