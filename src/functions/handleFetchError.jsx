const handleFetchError = (error, setError) => {
  if (error.response) {
    console.error("Server Error:", error.response.data);
  } else if (error.request) {
    console.error("Network Error:", error.request);
  } else {
    console.error("Error:", error.message);
  }
  setError(error);
};
export default handleFetchError;
