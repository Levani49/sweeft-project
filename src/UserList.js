import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function UserList({ url }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((previous) => previous + 1);
      document.removeEventListener("scroll", handleScroll);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    await axios
      .get(`${url}/${page}/16`)
      .then(function (response) {
        if (response.data.list.length === 0) {
          setIsMore(false);
        } else {
          setData([...data, ...response.data.list]);
        }
      })
      .catch(function (error) {});
    setLoading(false);
  };

  useEffect(() => {
    if (isMore) {
      fetchData();
    }

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  useEffect(() => {
    axios
      .get(`${url}/${page}/16`)
      .then(function (response) {
        setData(response.data.list);
        setLoading(false);
      })
      .catch(function (error) {});
  }, [url]);

  return (
    <div>
      <div className="card-cont">
        {data.length > 0 &&
          data.map(({ id, name, imageUrl, title }) => {
            return (
              <Link key={id} to={`/user/${id}`}>
                <div className="card">
                  <img src={imageUrl + "?v=" + id} alt={name} />
                  <h2>{name}</h2>
                  <p>{title}</p>
                </div>
              </Link>
            );
          })}
      </div>
      {loading && (
        <Loader
          type="TailSpin"
          color="#00bf33"
          height={160}
          width={160}
          style={{ position: "absolute" }}
        />
      )}
    </div>
  );
}
