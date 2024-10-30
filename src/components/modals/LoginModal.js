import { Modal } from "@mui/material";
import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
//import styles from "./page.module.css";
import styles from "../../app/page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className={styles.btn + " " + styles.home__cta_btn}
        onClick={() => dispatch(openLoginModal())}
      >
        Login
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className={styles.loginModal}
      >
        <div className={styles.auth}>
          <div className={styles.auth__content}>
            <div className={styles.auth__title}>Log in to Summarist</div>
            <button className={styles.btn + " " + styles.guest__btn__wrapper}>
              <figure className={styles.fontawesome__icon__mask}>
                <FontAwesomeIcon icon={faUser} />
              </figure>
              <div>Login as a Guest</div>
            </button>
            <div className={styles.auth__separator}>
              <span className={styles.auth__separator__text}>or</span>
            </div>
            <button className={styles.btn + " " + styles.google__btn__wrapper}>
              <figure className={styles.google__icon__mask}>
                <img
                  className={styles.google__img}
                  alt=""
                  src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.864494ce.png&w=128&q=75"
                ></img>
              </figure>
              <div>Login with Google</div>
            </button>
            <div className={styles.auth__separator}>
              <span className={styles.auth__separator__text}>or</span>
            </div>
            <form className={styles.auth__main__form}>
              <input
                className={styles.auth__main__input}
                type="text"
                placeholder="Email Address"
              ></input>
              <input
                className={styles.auth__main__input}
                type="password"
                placeholder="Password"
              ></input>
              <button
                className={styles.btn + " " + styles.modal__home__cta_btn}
              >
                Login
              </button>
            </form>
          </div>
          <div className={styles.auth__forgot__password}>
            Forgot your password?
          </div>
          <button className={styles.auth__switch__btn}>
            Don't have an account"
          </button>
        </div>
      </Modal>
    </>
  );
}
