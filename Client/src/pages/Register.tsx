import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
const Register: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVousAvezDjClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.register}>
      <div className={styles.santConnect}>Santé Connect © 2023</div>
      <input className={styles.leftSideRectangle} type="text" />
      <div className={styles.santConnect1}>Santé Connect © 2023</div>
      <img className={styles.vectorIcon} alt="" />
      <div className={styles.form}>
        <div className={styles.vousAvezDjContainer} onClick={onVousAvezDjClick}>
          <span>{`Vous avez déjà un compte ? `}</span>
          <span className={styles.connectezVous}>Connectez-vous !</span>
        </div>
        <button className={styles.submit}>
          <img
            className={styles.submitChild}
            alt=""
            src="/rectangle-10481.svg"
          />
          <button className={styles.inscrivezVousParent}>
            <div className={styles.inscrivezVous}>Inscrivez-vous</div>
            <img
              className={styles.antDesignswapLeftOutlinedIcon}
              alt=""
              src="/antdesignswapleftoutlined.svg"
            />
          </button>
        </button>
        <div className={styles.country}>
          <div className={styles.pays}>
            <p className={styles.pays1}>Pays</p>
          </div>
          <input className={styles.countryRectangle} type="text" />
        </div>
        <div className={styles.age}>
          <div className={styles.ge}>Âge*</div>
          <input
            className={styles.ageRectangle}
            type="number"
            placeholder="Vous devez avoir 15 ans ou plus pour vous inscrire !"
            min={15}
          />
        </div>
        <div className={styles.confirmpassword}>
          <div className={styles.ge}>Confirmez votre mot de passe*</div>
          <input
            className={styles.ageRectangle}
            type="password"
            maxLength={20}
            minLength={6}
            required
          />
        </div>
        <div className={styles.password}>
          <div className={styles.ge}>Mot de passe*</div>
          <input
            className={styles.ageRectangle}
            type="password"
            placeholder="Entrez un mot de passe entre 6 et 20 caractères"
            maxLength={20}
            minLength={6}
          />
        </div>
        <div className={styles.email}>
          <div className={styles.ge}>Email*</div>
          <input
            className={styles.ageRectangle}
            type="email"
            placeholder="Entrez votre adresse email"
            maxLength={40}
            minLength={5}
            required
          />
        </div>
        <div className={styles.username}>
          <div className={styles.identifiant}>Identifiant*</div>
          <input className={styles.usernameRectangle} type="text" required />
        </div>
        <div className={styles.inscription}>Inscription</div>
        <div className={styles.inscrivezVousEtDcouvrez}>
          Inscrivez-vous et découvrez ce qui vous attends chez
        </div>
      </div>
      <div className={styles.santeConnectBrand}>{`Santé Connect  `}</div>
      <img className={styles.logoScIcon} alt="" src="/logo@2x.png" />
      <img
        className={styles.backgroundConnexionIcon}
        alt=""
        src="/background-connexion@2x.png"
      />
    </div>
  );
};

export default Register;
