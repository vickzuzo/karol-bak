import { setError, setSuccess, startLoading, stopLoading } from ".";
import apiClient from "../../query/api";

export const addGallery = (data) => ({
  type: "ADD_GALLERY",
  data,
});

export const fetchGalleyData = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    try {
      const { data } = await apiClient.get("/api/gallery/fetch_gallery");
      dispatch(addGallery(data.gallery));
      dispatch(setSuccess("Update successful"));
      dispatch(stopLoading());
      setTimeout(() => {
        dispatch(setSuccess(""));
      }, 3000);
    } catch (error) {
      if (error.response !== undefined) {
        dispatch(setError(error?.response.data.error));
      }
      dispatch(stopLoading());
      setTimeout(() => {
        dispatch(setError(""));
        dispatch(setSuccess(""));
      }, 5000);
    }
  };
};
