import React, { useEffect } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailMovie } from "../../redux/actions/movieAction";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const results = useSelector((state) => state.result.detail);
  console.log(results);
  useEffect(() => {
    dispatch(getDetailMovie(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container-fluid foto">
        <div className="container text-center">
          <img
            src={`https://image.tmdb.org/t/p/original/${results?.backdrop_path}`}
            alt=""
            className="img-tub"
          />
        </div>
        <Row>
          <Col md={6} className="movieWrapper" id="trending">
            <Card className="img-detail-id">
              <Image
                src={`${process.env.REACT_APP_IMG_URL}/${results?.poster_path}`}
                alt="Dune Movies"
                className="imgss"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center text-bg-danger">
                    {results?.status}
                  </Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6} className="movieWrapper" id="trending">
            <div className="control-detail">
              <h1 className="text-center py-2 bg-danger">
                {results?.original_title}
              </h1>
              <p>{results?.overview}</p>
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    Release date <i className="fa fa-calendar"></i>
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>{results?.release_date}</p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Rating <i className="fa fa-star text-warning"></i>
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    {results?.vote_average}/{results?.vote_count}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Tagline <i className="fa fa-tags"></i>
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>{results?.tagline}</p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Run Time <i className="fa fa-clock-o"></i>
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>{results?.runtime} minutes</p>
                </div>
                <div className="text-center bg-danger">
                  <p>{results?.status}</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                className="register back-btn mb-5"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                Back
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Detail;
