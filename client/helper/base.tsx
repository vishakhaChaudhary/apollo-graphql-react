import QueryString from "query-string";

class BaseHelper { 

    /**
   * @desc To return data from the key object
   * @param res Object
   * @param key String/Array of String
   * @return data/false
   *
   */
  getResponseData = (res = false, key = "") => {
    if (!(res && key)) {
      return false;
    }

    if (Array.isArray(key)) {
      const result = {};
      key.forEach((item) => {
        let data = false;
        if (res[item] && res[item].status === "ok") {
          data = { ...res[item].data };
        }
        result[item] = data;
      });
      return result;
    }
    if (typeof key === "string" && res[key].status === "ok") {
      return res[key].data;
    }
    return false;
  };

  /**
   * @desc To get error message
   * @param err error object
   * @param res response object
   *
   * @return error
   *
   */
   getResponseError = (res, key) => {
    if (!(res && key && res[key] && res[key].status === "error")) {
      return false;
    }
    return res[key].error;
  };

  /**
   * @desc To parse the query params of the url
   * @param url
   * @returns url
   */

  getQueryParams = (url) => QueryString.parse(url);
}

export default new BaseHelper();