import { Link } from 'react-router-dom';

import scss from './Hero.module.scss';
import Container from 'components/Container/Container';
const Hero = () => {
    return (
        <section className={scss.hero}>
            <Container>
                <h1 className={scss.title}>
                    CamperFree: is a brand that offers luxury and freedom for
                    your next journey. We specialize in camper rentals so you
                    can embark on your travels with comfort and style.
                </h1>
                <Link className={scss.link} to="/catalog">
                    Try now
                </Link>
            </Container>
        </section>
    );
};

export default Hero;
