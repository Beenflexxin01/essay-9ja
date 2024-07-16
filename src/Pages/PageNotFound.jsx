import pnf from "../../public/images/pnf.jpg";
function PageNotFound() {
  return (
    <>
      <div className="page">
        <div className="pnf-img">
          <img src={pnf} alt={"Page Not Found"} className="pnf" />
        </div>
        <h1 className="page-header">
          Page Not Found. Kindly check to confirm if the url is correctly spelt
          😢.
        </h1>
      </div>
    </>
  );
}

export default PageNotFound;
