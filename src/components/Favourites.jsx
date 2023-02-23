import { useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
  const selectedJobs = useSelector((state) => state.list.content);
  console.log("selectedJobs", selectedJobs);

  return (
    <>
      <ul>
        <li xs={10} className="mx-auto mb-5">
          {selectedJobs?.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </li>
      </ul>
    </>
  );
};
export default Favourites;
