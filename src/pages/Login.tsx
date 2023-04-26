import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPasDeCompteClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.leftSideRectangle} />
      <div className={styles.santConnect}>Santé Connect © 2023</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.form}>
        <div
          className={styles.pasDeCompteContainer}
          onClick={onPasDeCompteClick}
        >
          <span>Pas de compte ?</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.inscrivezVous}>Inscrivez-vous !</span>
        </div>
        <button className={styles.submit}>
          <img
            className={styles.submitChild}
            alt=""
            src="/rectangle-1048.svg"
          />
          <button className={styles.connectezVousParent}>
            <div className={styles.connectezVous}>Connectez-vous</div>
            <img
              className={styles.antDesignswapLeftOutlinedIcon}
              alt=""
              src="/antdesignswapleftoutlined.svg"
            />
          </button>
        </button>
        <div className={styles.password}>
          <input
            className={styles.passwordRectangle}
            type="password"
            maxLength={20}
            minLength={6}
          />
          <div className={styles.motDePasse}>Mot de passe</div>
          <a
            className={styles.motDePasse1}
            href="http://localhost:3000/forgotten-pwd"
            target="_blank"
          >
            Mot de passe oublié ?
          </a>
        </div>
        <div className={styles.connexion}>Connexion</div>
        <div className={styles.raviDeVous}>Ravi de vous revoir !</div>
        <div className={styles.country}>
          <div className={styles.email}>
            <p className={styles.email1}>Email</p>
          </div>
          <input className={styles.countryRectangle} type="email" required />
        </div>
      </div>
      <div className={styles.santConnect1}>{`Santé Connect  `}</div>
      <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      <img
        className={styles.backgroundConnexionIcon}
        alt=""
        src="/background-connexion1@2x.png"
      />
    </div>
  );
};

export default Login;
