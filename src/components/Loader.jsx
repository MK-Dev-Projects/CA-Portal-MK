import { MutatingDots } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #434343 0%, black 100%)",
      }}
    >
      <MutatingDots
        height="100"
        width="100"
        color="var(--secondaryColor)"
        secondaryColor="var(--secondaryColor)"
        radius="15px"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
