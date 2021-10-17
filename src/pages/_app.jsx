import '../styles/index.scss';
import '../styles/section.scss';
import '../styles/nav.scss';
import '../styles/hero.scss';
import '../styles/work.scss';
import '../styles/education.scss';
import '../styles/skills.scss';
import '../styles/projects.scss';
import '../styles/footer.scss';

// https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t/59429852
import '@fortawesome/fontawesome-svg-core/styles.css'; 

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
