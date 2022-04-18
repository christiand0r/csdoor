import { Container, Row } from 'react-bootstrap';
import style from './Banner.module.css';

const Banner = ({ title, text }) => {
  return (
    <Container className={style.banner}>
      <Row fluid='md'>
        <img src='https://placeimg.com/1920/1440/any' alt='Banner' />

        <div className={style.bannerContent}>
          <h1>{title}</h1>

          {text && <p>{text}</p>}
        </div>
      </Row>
    </Container>
  );
};

export default Banner;
