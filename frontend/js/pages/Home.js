import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import DjangoImgSrc from "../../assets/images/django-logo-negative.png";
import { fetchRestCheck } from "../store/rest_check";

import { useHistory } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const restCheck = useSelector((state) => state.restCheck);
  useEffect(() => {
    const action = fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  const [showBugComponent, setShowBugComponent] = useState(false);

  const history = useHistory();

  return (
    <>
      <h2>Static assets</h2>
      <div id="django-background">
        If you are seeing the green Django logo on a white background and this
        text color is #092e20, frontend static files serving is working:
      </div>
      <div id="django-logo-wrapper">
        <div>
          Below this text, you should see an img tag with the white Django logo
          on a green background:
        </div>
        <img alt="Django Negative Logo" src={DjangoImgSrc} />
      </div>
      <h2>Rest API</h2>
      <p>{restCheck?.data?.payload?.result}</p>

      <Button variant="outline-dark" onClick={() => history.push("/equipment")}>
        Go to Equipment List
      </Button>

     
    </>
  );
};

export default Home;
