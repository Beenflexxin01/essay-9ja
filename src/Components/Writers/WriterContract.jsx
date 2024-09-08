import { useEffect, useState } from "react";
import { BaseUrl } from "../../Utils/BaseUrl";
import apiCall from "../../hooks/apiCall";
import { Loader } from "../../UI/Loader";
import { DateFormatter } from "../../Utils/DateFormatter";
import { convertKoboToNaira } from "../../Utils/NairaConverter";
import { useParams } from "react-router-dom";

function WriterContract({ firstName, lastName }) {
  const [writerDetails, setWriterDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getWriterDetails() {
      try {
        setLoading(true);
        const response = await apiCall(`${BaseUrl}/contracts?writerId=${id}`);

        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.data)
        ) {
          setWriterDetails(response.data.data.data);
        } else {
          setWriterDetails([]);
        }
      } catch (err) {
        console.error("Error fetching writer details:", err);
      } finally {
        setLoading(false);
      }
    }
    getWriterDetails();
  }, [id]);

  return (
    <div className="contain">
      <div>
        {loading ? (
          <div className="spinner">
            <Loader />
          </div>
        ) : (
          <>
            <div>
              <nav className="main-nav user-nav">
                <ul className="main-ul main--ul activities">
                  <li className="main-li nam">Date</li>
                  <li className="main-li">Title</li>
                  <li className="main-li">Clients</li>
                  <li className="main-li">Writer</li>
                  <li className="main-li">Amount</li>
                  <li className="main-li">Status</li>
                </ul>
              </nav>
            </div>
            {writerDetails.length > 0 ? (
              writerDetails.map((detail) => (
                <div key={detail._id}>
                  <nav className="main-nav user-nav">
                    <ul className="main-ul main--ul">
                      <li className="main-li ">
                        <DateFormatter createdAt={detail.createdAt} />
                      </li>
                      <li className="main-li">{detail.title}</li>
                      <li className="main-li">
                        {detail.user
                          ? `${detail.user.firstName} ${detail.user.lastName}`
                          : "N/A"}
                      </li>
                      <li className="main-li">
                        {detail.writer
                          ? `${detail.writer.firstName} ${detail.writer.lastName}`
                          : "N/A"}
                      </li>
                      <li className="main-li">
                        {detail.currency}
                        {convertKoboToNaira(detail.amount)}
                      </li>
                      <li className="main-li">{detail.status || "N/A"}</li>
                    </ul>
                  </nav>
                </div>
              ))
            ) : (
              <p className="info">
                No contracts available for {firstName} {lastName}.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default WriterContract;
