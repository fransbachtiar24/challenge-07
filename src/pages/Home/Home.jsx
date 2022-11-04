import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../redux/actions/movieAction";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../assets/css/styleku.css";
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { results } = useSelector((state) => state.result.results);
  console.log(results);

  const items = results?.map((item) => (
    <div
      key={item.id}
      className="caraousel"
      style={{
        backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path})`,
      }}
    >
      <div className="control-caraousel">
        <h3>{item.title || item.name}</h3>
        <p>{item.overview}</p>
        <p></p>
        <div className="watching-btn">
          <button onClick={""}>
            {" "}
            <i className="fa fa-play"></i> Watch Trailer
          </button>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  return (
    <>
      <AliceCarousel
        infinite
        autoPlay
        disableButtonsControls
        mouseTracking
        autoPlayInterval={2000}
        items={items}
      />
      <div id="populer">
        <Container>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <div className="text-white text-popular">
                <h1>Popular Movie</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end btnMovie">
                <button>See All Movie</button>
              </div>
            </div>
          </div>
          <Row>
            {results &&
              results.map((item, index) => {
                return (
                  <>
                    <Col md={3} className="movieList" key={index.id}>
                      <Card className="text-white movieImages mt-5">
                        <Image
                          src={`${process.env.REACT_APP_IMG_URL}/${item.poster_path}`}
                          className="ImgTrending"
                        />
                        <div className="bg">
                          <div className="p-2 m-1 text-white cardTrending">
                            <Card.Title className="text-center">
                              {item.original_title}
                              <p className="py-2">{item.release_date}</p>
                            </Card.Title>
                            <button
                              className="btnTrending"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/detail/${item.id}`);
                              }}
                            >
                              Detail
                            </button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </>
                );
              })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
