import React, { useEffect } from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "../../redux/actions/movieAction";

function Search() {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searching = searchParams.get(`p`);

  const results = useSelector((state) => state.result.search.results);

  useEffect(() => {
    dispatch(getSearch(searching));
  }, []);

  return (
    <div id="search-id">
      <br />
      <br />
      <Container className="mt-5">
        <br />
        <br />
        <div className="text-white text-center mt-2">
          <h1>Search results "{searching}"</h1>
        </div>
        <br />
        <Row>
          {results &&
            results.map((item, index) => {
              return (
                <>
                  <Col md={3} className="movieList" key={index}>
                    <Card className="text-white movieImages">
                      <Image
                        src={`${process.env.REACT_APP_IMG_URL}/${item.poster_path}`}
                        className="ImgTrending"
                      />
                      <div className="bg">
                        <div className="p-2 m-1 text-white cardTrending">
                          <Card.Title className="text-center control-title-search">
                            {item.original_title}
                          </Card.Title>
                          <Card.Text className="text-center">
                            {item.overview}
                            <p>
                              <i className="fa fa-star text-warning"></i>{" "}
                              {item.vote_average}/{item.vote_count}
                            </p>
                            <p className="bg-danger">
                              realease : {item.release_date}
                            </p>
                          </Card.Text>
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
  );
}

export default Search;
