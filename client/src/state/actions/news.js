import { setError, setSuccess, startLoading, stopLoading } from ".";
import apiClient from "../../query/api";

export const addNews = (data) => ({
  type: "ADD_NEWS",
  data,
});

export const clearNews = () => ({
  type: "CLEAR_NEWS",
});

export const fetchNewsData = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    try {
      const { data } = await apiClient.get("/api/news/fetch_news");
      dispatch(addNews(data.news));
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
