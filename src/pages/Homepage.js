import Header from "../components/common/Header";
import Slider from "../components/slider/Slider";
import Cards from "../components/card/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import BlogCards from "../components/blog/BlogCards";
import { Container } from "react-bootstrap";
import Tab from "../components/tab/Tab";
import Footer from "../components/common/Footer";

const cardDatas = [
  {
    id: 1,
    title: "Itineraries",
    subtitle:
      "Build Itineraries in minutes and communicate them to your clients",
    imgsrc: "./images/map.png",
  },
  {
    id: 2,
    title: "Higher commissions",
    subtitle:
      "Net rates mean bigger commissions. You decide how much to markup",
    imgsrc: "./images/Star.png",
  },
  {
    id: 3,
    title: "Manage operations",
    subtitle:
      "Track & maintain records of bookings, payments, and customer journey",
    imgsrc: "./images/setting.png",
  },
  {
    id: 4,
    title: "Marketing campaigns",
    subtitle:
      "Manage leads, build custom packages, distribute coupons, view analytics",
    imgsrc: "./images/pplane.png",
  },
  {
    id: 5,
    title: "Customer portal",
    subtitle: "Your customers can book, track and approve right on your site",
    imgsrc: "./images/portal.png",
  },
];

const blogCardDatas = [
  {
    id: 1,
    title: "Book Air Travels",
    subtitle: "Get there by air! Fly private or commercial",
    imgsrc: "./images/fly.png",
  },
  {
    id: 2,
    title: "Book Hotels",
    subtitle: "The best places to stay! From luxury resorts to rustic campgrounds",
    imgsrc: "./images/room.png",
  },
  {
    id: 3,
    title: "Book Ground Transport",
    subtitle: "Hit the road! Rent a car, an RV, or arrange for a pick-up",
    imgsrc: "./images/car.png",
  },
  {
    id: 4,
    title: "Book Packages",
    subtitle: "Discover special destinations! Experience our curated adventures",
    imgsrc: "./images/paris.png",
  },
  {
    id: 5,
    title: "Book Sea Travel",
    subtitle: "Ride the waves! Book a cruise, a private yacht or a boat",
    imgsrc: "./images/cruise.png",
  },
  {
    id: 6,
    title: "Book Activities",
    subtitle: "Find local activities for everything from adventure to cultural enrichment",
    imgsrc: "./images/skydive.png",
  },
];

function Homepage() {
  return (
    <div>
      <Header />
      <Slider />
      <Cards cardDatas={cardDatas} />

      <Container className="text-center my-5">
        <h2 className="title1">One booking engine for everything</h2>
        <p className="detailes px-5">
          Your Xeniapp login grants you access to a full portfolio of bookable
          travel. Book everything <br /> from villas to cruises to private jet
          travel and much more, at the best prices on the market.
        </p>
      </Container>

      <BlogCards blogCardDatas={blogCardDatas} />


      <Tab/>
      <Footer/>
    </div>
  );
}

export default Homepage;
