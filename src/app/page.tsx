import Image from "next/image";
import styles from "./page.module.css";
import logo from "./assets/logo.png";
import landing from "./assets/landing.png";
import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiCrown } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="./style.css" /> */}
        <title>Summarist Home Page</title>
      </head>
      <body>
        <nav className={styles.nav}>
          <div className={styles.nav__wrapper}>
            <figure className={styles.nav__img_mask}>
              <Image
                src={logo}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
              />
            </figure>
            <ul className={styles.nav__list_wrapper}>
              <li className={styles.nav__list + " " + styles.nav__list_login}>
                Login
              </li>
              <li className={styles.nav__list + " " + styles.nav__list_mobile}>
                About
              </li>
              <li className={styles.nav__list + " " + styles.nav__list_mobile}>
                Contact
              </li>
              <li className={styles.nav__list + " " + styles.nav__list_mobile}>
                Help
              </li>
            </ul>
          </div>
        </nav>
        <section id={styles.landing}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.landing__wrapper}>
                <div className={styles.landing__content}>
                  <div className={styles.landing__content__title}>
                    Gain more knowledge <br className={styles.remove_tablet} />
                    in less time
                  </div>
                  <div className={styles.landing__content__subtitle}>
                    Great summaries for busy people,
                    <br className={styles.remove_tablet} />
                    individuals who barely have time to read,
                    <br className={styles.remove_tablet} />
                    and even people who don’t like to read.
                  </div>
                  <button className={styles.btn + " " + styles.home__cta_btn}>
                    Login
                  </button>
                </div>
                <figure className={styles.landing__image_mask}>
                  <Image
                    src={landing}
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.features}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.section__title}>
                Understand books in few minutes
              </div>
              <div className={styles.features__wrapper}>
                <div className={styles.features}>
                  <div className={styles.features__icon}>
                    <AiFillFileText />
                  </div>
                  <div className={styles.features__title}>Read or listen</div>
                  <div className={styles.features__sub_title}>
                    Save time by getting the core ideas from the best books.
                  </div>
                </div>
                <div className={styles.features}>
                  <div className={styles.features__icon}>
                    <AiFillBulb />
                  </div>
                  <div className={styles.features__title}>
                    Find your next read
                  </div>
                  <div className={styles.features__sub_title}>
                    Explore book lists and personalized recommendations.
                  </div>
                </div>
                <div className={styles.features}>
                  <div className={styles.features__icon}>
                    <AiFillAudio />
                  </div>
                  <div className={styles.features__title}>Briefcasts</div>
                  <div className={styles.features__sub_title}>
                    Gain valuable insights from briefcasts
                  </div>
                </div>
              </div>
              <div className={styles.statistics__wrapper}>
                <div className={styles.statistics__content_header}>
                  <div className={styles.statistics__heading}>
                    Enhance your knowledge
                  </div>
                  <div className={styles.statistics__heading}>
                    Achieve greater success
                  </div>
                  <div className={styles.statistics__heading}>
                    Improve your health
                  </div>
                  <div className={styles.statistics__heading}>
                    Develop better parenting skills
                  </div>
                  <div className={styles.statistics__heading}>
                    Increase happiness
                  </div>
                  <div className={styles.statistics__heading}>
                    Be the best version of yourself!
                  </div>
                </div>
                <div className={styles.statistics__content_details}>
                  <div className={styles.statistics__data}>
                    <div className={styles.statistics__data_number}>93%</div>
                    <div className={styles.statistics__data_title}>
                      of Summarist members <b>significantly increase</b> reading
                      frequency.
                    </div>
                  </div>
                  <div className={styles.statistics__data}>
                    <div className={styles.statistics__data_number}>96%</div>
                    <div className={styles.statistics__data_title}>
                      of Summarist members <b>establish better</b> habits.
                    </div>
                  </div>
                  <div className={styles.statistics__data}>
                    <div className={styles.statistics__data_number}>90%</div>
                    <div className={styles.statistics__data_title}>
                      have made <b>significant positive</b> change to their
                      lives.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.statistics__wrapper}>
                <div
                  className={
                    styles.statistics__content_details +
                    " " +
                    styles.statistics__content_details_second
                  }
                >
                  <div className={styles.statistics__data}>
                    <div className={styles.statistics__data_number}>91%</div>
                    <div className={styles.statistics__data_title}>
                      of Summarist members <b>report feeling more productive</b>
                      {""} after incorporating the service into their daily
                      routine.
                    </div>
                  </div>
                  <div className={styles.statistics__data}>
                    <div className={styles.statistics__data_number}>94%</div>
                    <div className={styles.statistics__data_title}>
                      of Summarist members have <b>noticed an improvement</b> in
                      their overall comprehension and retention of information.
                    </div>
                  </div>
                  <div className={styles.statistics__data}>
                    <div className={styles.statistics__data_number}>88%</div>
                    <div className={styles.statistics__data_title}>
                      of Summarist members <b>feel more informed</b> about
                      current events and industry trends since using the
                      platform.
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles.statistics__content_header +
                    " " +
                    styles.statistics__content_header_second
                  }
                >
                  <div className={styles.statistics__heading}>
                    Expand your learning
                  </div>
                  <div className={styles.statistics__heading}>
                    Accomplish your goals
                  </div>
                  <div className={styles.statistics__heading}>
                    Strengthen your vitality
                  </div>
                  <div className={styles.statistics__heading}>
                    Become a better caregiver
                  </div>
                  <div className={styles.statistics__heading}>
                    Improve your mood
                  </div>
                  <div className={styles.statistics__heading}>
                    Maximize your abilities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.reviews}>
          <div className={styles.row}>
            <div className={styles.container}>
              <div className={styles.section__title}> What our members say</div>
              <div className={styles.reviews__wrapper}>
                <div className={styles.review}>
                  <div className={styles.review__header}>
                    <div className={styles.review__name}>Hanna M.</div>
                    <div className={styles.review__stars}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                  <div className={styles.review__body}>
                    This app has been a <b>game-changer</b> for me! It's saved
                    me so much time and effort in reading and comprehending
                    books. Highly recommend it to all book lovers.
                  </div>
                </div>
                <div className={styles.review}>
                  <div className={styles.review__header}>
                    <div className={styles.review__name}>David B.</div>
                    <div className={styles.review__stars}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                  <div className={styles.review__body}>
                    I love this app! It provides
                    <b> concise and accurate summaries</b> of books in a way
                    that is easy to understand. It's also very user-friendly and
                    intuitive.
                  </div>
                </div>
                <div className={styles.review}>
                  <div className={styles.review__header}>
                    <div className={styles.review__name}>Nathan S.</div>
                    <div className={styles.review__stars}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                  <div className={styles.review__body}>
                    This app is a great way to get the main takeaways from a
                    book without having to read the entire thing.
                    <b> The summaries are well-written and informative. </b>
                    Definitely worth downloading.
                  </div>
                </div>
                <div className={styles.review}>
                  <div className={styles.review__header}>
                    <div className={styles.review__name}>Ryan R.</div>
                    <div className={styles.review__stars}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                  <div className={styles.review__body}>
                    If you're a busy person who
                    <b> loves reading but doesn't have the time</b> to read
                    every book in full, this app is for you! The summaries are
                    thorough and provide a great overview of the book's content.
                  </div>
                </div>
              </div>
              <div className={styles.reviews__btn_wrapper}>
                <button className={styles.btn + " " + styles.home__cta_btn}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.numbers}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.section__title}>
                Start growing with Summarist now
              </div>
              <div className={styles.numbers__wrapper}>
                <div className={styles.numbers}>
                  <div className={styles.numbers__icon}>
                    <BiCrown />
                  </div>
                  <div className={styles.numbers__title}>3 Million</div>
                  <div className={styles.numbers__sub_title}>
                    Downloads on all platforms
                  </div>
                </div>
                <div className={styles.numbers}>
                  <div
                    className={
                      styles.numbers__icon + " " + styles.numbers__star_icon
                    }
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <div className={styles.numbers__title}>4.5 Stars</div>
                  <div className={styles.numbers__sub_title}>
                    Average ratings on iOS and Google Play
                  </div>
                </div>
                <div className={styles.numbers}>
                  <div className={styles.numbers__icon}>
                    <RiLeafLine />
                  </div>
                  <div className={styles.numbers__title}>97%</div>
                  <div className={styles.numbers__sub_title}>
                    Of Summarist members create a better reading habit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={styles.footer}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.footer__top_wrapper}>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Actions</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Summarist Magazine</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Cancel Subscription</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Help</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Contact us</a>
                    </div>
                  </div>
                </div>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Useful Links</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Pricing</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Summarist Business</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Gift Cards</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>
                        Authors & Publishers
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Company</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>About</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Careers</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Partners</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Code of Conduct</a>
                    </div>
                  </div>
                </div>
                <div className={styles.footer__block}>
                  <div className={styles.footer__link_title}>Other</div>
                  <div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Sitemap</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Legal Notice</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Terms of Service</a>
                    </div>
                    <div className={styles.footer__link_wrapper}>
                      <a className={styles.footer__link}>Privacy Policies</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer__copyright_wrapper}>
                <div className={styles.footer__copyright}>
                  Copyright &copy; 2023 Summarist.
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
