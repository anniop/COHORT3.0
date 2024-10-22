const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  margin: 10,
};

function postComponent() {
  return (
    <div style={style}>

      <img
        src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
        style={{ width: 40, height: 40, borderRadius: 40 }}
      />

    </div>
  )
}

export default postComponent;
