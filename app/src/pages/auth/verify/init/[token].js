import BlankLayout from "@/layout/BlankLayout";
import { getLoading, getStatus, verifyUser } from "@/store/api/verify";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";

const Error = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="swal2-icon swal2-error swal2-animate-error-icon"
        style={{ display: "flex" }}
      >
        <span className="swal2-x-mark">
          <span className="swal2-x-mark-line-left"></span>
          <span className="swal2-x-mark-line-right"></span>
        </span>
      </div>
      <h3
        style={{
          color: "red",
        }}
      >
        Verification Failed
      </h3>
      <h2
        style={{
          marginTop: "40px",
        }}
      >
        Please Contact Un-Defined Support
      </h2>
    </div>
  );
};

const Success = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="swal2-icon swal2-success swal2-animate-success-icon"
        style={{ display: "flex" }}
      >
        <div
          className="swal2-success-circular-line-left"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        ></div>
        <span className="swal2-success-line-tip"></span>
        <span className="swal2-success-line-long"></span>
        <div className="swal2-success-ring"></div>
        <div
          className="swal2-success-fix"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        ></div>
        <div
          className="swal2-success-circular-line-right"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        ></div>
      </div>
      <h3
        style={{
          color: "green",
        }}
      >
        Verification Successful
      </h3>
    </div>
  );
};
const Loading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
      <h3>Please Wait</h3>
    </div>
  );
};

const Token = () => {
    const router = useRouter();
    const dispatch = useDispatch();
   
    const status = useSelector(getStatus);
    const loading = useSelector(getLoading);
    const [noToken, setNoToken] = useState(false);

    useEffect(() => {
      const { token } = router.query || null;
  
      if (token) dispatch(verifyUser(token));
  
      setInterval(() => {
        if (!status && !token) {
          setNoToken(true);
        }
      }, 6000);
    }, [router.isReady]);

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      border: "1px solid black",
      borderRadius: "10px",
      margin: "auto",
      width: "50%",
      height: "500px",
      marginTop: "100px",
      backgroundColor: "rgb(255, 255, 255)",
    }}
  >
    {loading ? (
      <Loading />
    ) : status == 200 ? (
      <Success />
    ) : status == 400 ? (
      <Error />
    ) : noToken ? (
      <div style={{ textAlign: "center" }}>No token found</div>
    ) : (
      <Loading />
    )}
  </div>
  )
}


Token.guestGuard = true;
Token.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;




export default Token

