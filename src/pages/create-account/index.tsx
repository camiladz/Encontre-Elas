import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();



  const handleNextClick = () => {
    setStep(step + 1);
  };

  const handleCreateAccount = () => {
    navigate("/home");
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmitEmail = (e: any) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Por favor, insira um e-mail válido.");
    } else {
      setEmailError("");
      setStep(step + 1);
    }
  };

  return (
    <div className="createAccount__container">
      {step === 1 && (
        <div className="createAccount__content">
          <h1>Sign Up</h1>
          <>
            <form onSubmit={handleSubmitEmail}>
              <div className="form__group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>
              <button className="form__group--button" type="submit">
                Próximo
              </button>
            </form>
          </>
        </div>
      )}
      {step === 2 && (
        <div className="createAccount__content">
          <h1>Sign Up</h1>
          <>
            <form onSubmit={handleNextClick}>
              <div className="form-group">
                <label>Código de Email:</label>
                <input type="text" />
              </div>
              <button className="form__group--button" type="submit">
                Next
              </button>
            </form>
          </>
        </div>
      )}
      {step === 3 && (
        <div className="createAccount__content">
          <h1>Sign Up</h1>
          <>
            <form onSubmit={handleCreateAccount}>
              <div className="form-group">
                <label>Criar Senha:</label>
                <input type="password" />
              </div>
              <div className="passwordCondition">
                <span>6 dígitos</span>
                <span>4 números</span>
                <span>1 letra maiúscula</span>
                <span>1 caractere especial</span>
              </div>
              <button className="form__group--button" type="submit">Criar Conta</button>
            </form>
          </>
        </div>
      )}
    </div>
  );
};
