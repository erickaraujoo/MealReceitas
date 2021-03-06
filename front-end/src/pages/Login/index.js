import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CircleSpinner } from "react-spinners-kit";

import { InputWithBorderLeft } from "../../components/Elements/Input";
import { validationInputForms } from "./../../utils/validations";
import { SectionLogin, ModalLogin } from "./styles";
import { getUserByLogin } from "../../store/modules/user/actions";

import ImageArrowBack from "../../assets/arrow_back.png";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {},
  });
  const user = useSelector((state) => state.user);

  const onSubmit = ({ email, password }) => {
    dispatch(
      getUserByLogin({
        email,
        password,
      })
    );
  };

  if (user.success) {
    const authenticatedUser = {
      idUsuario: user.data.data.idUsuario,
      nome: user.data.data.nome,
      email: user.data.data.email,
      image: user.data.data.imagem,
    };

    localStorage.setItem(
      "authenticated_user",
      JSON.stringify(authenticatedUser)
    );
    history.push("/");
  }

  return (
    <SectionLogin>
      <ModalLogin>
        <div className="modal_welcome">
          <div className="companyName">
            <Link to={{ pathname: "/" }}>
              <img src={ImageArrowBack} alt="" />
            </Link>
            <p className="companyName">MEAL RECEITAS</p>
          </div>

          <h4>Prazer em vê-lo novamente</h4>
          <h2>SEJA BEM-VINDO</h2>
          <hr />
          <p>
            Lorem ipsum fames etiam dapibus convallis nullam commodo dictum
            donec bibendum, luctus felis malesuada duis ac at cras dui bibendum.
            a lorem pharetra sodales venenatis volutpat commodo habitant sit,
            sem vivamus arcu enim aliquam suspendisse leo non, cursus
          </p>
        </div>
        <div className="modal_form">
          <h4>Conta de Login</h4>
          <p>
            Lorem ipsum fames etiam dapibus convallis nullam commodo dictum
            donec bibendum, luctus felis malesuada duis ac at cras dui bibendum.
            a lorem pharetra sodales venenatis volutpat commodo habitant sit,
            sem vivamus arcu enim aliquam suspendisse leo non, cursus
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {user.error && user.data && (
              <p className="error"> {user.data.data} </p>
            )}
            {user.error && !user.data && (
              <p className="error"> Erro ao tentar se conectar com o banco! </p>
            )}
            <InputWithBorderLeft
              name={"email"}
              width={"100%"}
              height={"50px"}
              type={"email"}
              autoComplete={"username"}
              background={"#F7F7F7"}
              borderLeft={"solid 7px #5E1B44"}
              placeholder={"Seu E-mail"}
              forwardRef={register({ required: true })}
            />
            {validationInputForms(errors.email, "E-mail")}
            <InputWithBorderLeft
              name={"password"}
              width={"100%"}
              height={"50px"}
              type={"password"}
              autoComplete={"new-password"}
              background={"#F7F7F7"}
              borderLeft={"solid 7px #5E1B44"}
              placeholder={"Sua Senha"}
              forwardRef={register({
                required: true,
                minLength: {
                  value: 8,
                  message: "Senha deve ter no mínimo 8 caracteres",
                },
              })}
            />
            {validationInputForms(errors.password, "Senha")}

            <p className="forgot_password">
              <Link to={{ pathname: `/` }}>Esqueci minha senha</Link>
            </p>

            <button type="submit">
              LOGIN
              {user.loading && <CircleSpinner size={20} color={"#fff"} />}
            </button>

            <p className="register">
              Não tem uma conta?
              <Link to={{ pathname: `/cadastrar` }}>
                <span className="color_marsala"> Registre-se</span>
              </Link>
            </p>
          </form>
        </div>
      </ModalLogin>
    </SectionLogin>
  );
}
