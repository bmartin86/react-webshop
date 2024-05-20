// import handleFetchError from "../functions/handleFetchError";

// const FetchProductById = async (id) => {
//   setLoading(true);
//   setError(null);
//   try {
//     const res = await axios.get(
//       `${import.meta.env.VITE_API_URL}/products/${id}`
//     );
//     setProduct(res.data);
//   } catch (error) {
//     handleFetchError(error, setError);
//   } finally {
//     setLoading(false);
//   }
// };
// export default FetchProductById;

// const fetchProductById = async (id) => {
//   setLoading(true);
//   setError(null);
//   try {
//     const response = await axios.get(
//       `${import.meta.env.VITE_API_URL}/products/${id}`
//     );
//     setProduct(response.data);
//   } catch (error) {
//     handleFetchError(error, setError);
//   } finally {
//     setLoading(false);
//   }
// };
// if (!isNaN(idx)) {
//   fetchProductById(idx);
// } else {
//   setError(new Error("Invalid product ID"));
//   setLoading(false);
// }
