import { useLocation } from "react-router-dom";
import arrow from "../../assets/images/icons/arrow.png";
import logo from "../../assets/images/logo.png";
import Article from "../../components/Article/Article";
import bgArticle from "../../assets/images/bgArticle.png";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";

export default function Header() {
  const location = useLocation();
  return (
    <>
      <Banner text="Admission is Open, Grab your seat now" icon={arrow} />
      <Navbar
        text="Little Learners"
        logo={logo}
        listItems={[
          "Home",
          "About Us",
          "Academics",
          "Admissions",
          "Student Life",
          "Contact",
        ]}
      />
      {location.pathname !== "/" && (
        <Article
          bgArticle={bgArticle}
          articleTitle="Nurturing Young Minds for Success"
          articleDescription="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        />
      )}
    </>
  );
}
