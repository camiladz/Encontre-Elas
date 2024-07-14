import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundImage from "../../assets/login-background-image.svg";
import "./index.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const validEmail = "exemplo@gmail.com";
    return email === validEmail;
  };

  const validatePassword = (password: string) => {
    const validPassword = "Senha123@";
    return password === validPassword;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Por favor, insira o e-mail correto.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Por favor, insira a senha correta.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      setIsSubmitted(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };

  return (
    <div className="login-container">
      {isSubmitted ? (
        <Link to="/home" />
      ) : (
        <div className="loginContent">
          <img className="login-background" src={BackgroundImage} />
          <div className="formMainContent">
            <div className="formContainer">
              <div className="formContent">
                <span className="formContent__title">Login</span>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>E-mail:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <span className="error">{emailError}</span>}
                  </div>
                  <div className="form-group">
                    <label>Senha:</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && (
                      <span className="error">{passwordError}</span>
                    )}
                  </div>
                  <div className="submit__button--content">
                    <button className="submit__button" type="submit">
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="creatAccount__button">
              <span>Não tem conta?</span>
              <Link to="/create-account">Criar Conta</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
