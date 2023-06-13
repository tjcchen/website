import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <Image
          src="/assets/images/avatar.jpg"
          alt="avatar"
          width={160}
          height={160}
        />
        <div className={styles.name}>Name: Andy Chen</div>
        <div className={styles.company}>Serving Company: Baidu Inc.</div>
        <div className={styles.role}>
          Role: Senior Software Developerment Engineer
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Hi there! My name is Andy Chen. I'm an experienced full-stack software
          engineer with over 6 years of hands-on development experience. My
          working experiences include Baidu, TripAdvisor, and a successful
          startup. I write high-quality code, technical design, and
          documentation to help my company fulfill its business goal, and
          sharing development knowledge with my teammates is my favorite thing.
          Outside of work, I also embrace OSS (Open Source Software) and
          contribute my strength to the GitHub community.
        </p>
        <p>
          I found my passion in programming and the IT industry when I was a
          sophomore, and after that, I devoted most of my time to this field.
        </p>
        <p>I can be reached via the following channels:</p>
        <div className={styles.social_media}>
          <Link href="https://github.com/tjcchen">
            <Image
              src="/assets/icons/github.png"
              alt="github"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://linkedin.com/in/andy-chen-engineer/">
            <Image
              src="/assets/icons/linkedin.jpg"
              alt="linkedin"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://twitter.com/tjcchen">
            <Image
              src="/assets/icons/twitter.png"
              alt="twitter"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
