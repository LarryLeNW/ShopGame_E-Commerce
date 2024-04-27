import ImgLoading from "../../Images/loading.gif";

function Loading() {
  return (
    <div style={{ display: "flex " }}>
      <div style={{ margin: "0 auto" }}>
        <img src={ImgLoading} alt="loading"></img>
      </div>
    </div>
  );
}

export default Loading;
