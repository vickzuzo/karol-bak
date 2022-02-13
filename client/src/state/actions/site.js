import apiClient from "../../query/api";

export const setError = (error) => ({
  type: "SET_ERROR",
  error,
});

export const setSuccess = (success) => ({
  type: "SET_SUCCESS",
  success,
});

export const startLoading = () => ({
  type: "START_LOADING",
});

export const stopLoading = () => ({
  type: "STOP_LOADING",
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  theme,
});

export const updateSite = (update) => ({
  type: "UPDATE_SITE",
  update,
});

export const fetchSiteData = () => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    try {
      const { data } = await apiClient.get("/api/site/fetch_site_details");

      const obj = {
        loading: false,
        error: "",
        success: "",
      };
      const details = { ...data.site, ...obj };
      dispatch(updateSite(details));
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
