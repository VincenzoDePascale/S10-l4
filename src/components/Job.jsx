import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToFavourites } from "../redux/actions/DispatchDef";

const Job = ({ data }) => {
  const Dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={5}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={5}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <Button
          /* onClick={() => Dispatch({ type: "ADD", payload: data })} */
          onClick={() => Dispatch(AddToFavourites(data))}
        >
          Add this Job
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
