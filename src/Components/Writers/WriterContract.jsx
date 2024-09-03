import { useEffect, useState } from "react";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { Loader } from "../../UI/Loader";
import { DateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
// import { useParams } from "react-router-dom";

function WriterContract() {
  const [writerDetails, setWriterDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { writerId, writer, title, user, amount, currency, status, createdAt } =
    writerDetails;

  useEffect(() => {
    async function getWriterDetails() {
      try {
        setLoading(true);
        const data = await apiCall(`${BaseUrl}/contracts/${writerId}`);
        console.log(data, "datatatatatat");
        if (data.data.data) {
          setWriterDetails(data.data.data);
        } else {
          throw new Error("Something went wrong while trying to fetch data");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getWriterDetails();
  }, [writerId]);

  return (
    <div className="contain">
      <div className="">
        {loading ? (
          <div className="spinner">
            <Loader />
          </div>
        ) : (
          <>
            <div className="">
              <nav className="main-nav user-nav">
                <ul className="main-ul main--ul activities">
                  <li className="main-li nam">Date</li>
                  <li className="main-li">Title</li>
                  <li className="main-li"> Clients</li>
                  <li className="main-li">Writer</li>
                  <li className="main-li">Amount</li>
                  <li className="main-li">Status</li>
                </ul>
              </nav>
            </div>
            <div className="">
              <nav className="main-nav user-nav">
                <ul className="main-ul main--ul">
                  <li className="main-li ">
                    <DateFormatter createdAt={createdAt} />
                  </li>
                  <li className="main-li">{title} NA</li>
                  <li className="main-li">
                    {user ? `${user.firstName} ${user.lastName}` : "N/A"}
                  </li>
                  <li className="main-li">
                    {writer ? `${writer.firstName} ${writer.lastName}` : "N/A"}
                  </li>
                  <li className="main-li">
                    {currency}
                    {convertKoboToNaira(amount)}
                  </li>

                  <li className="main-li">{status} NA</li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WriterContract;
