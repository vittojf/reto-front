export class EndpointConfig {
  AUTH_API = "http://bloomcker.com:7171/api/rmc/grupo";

  header() {
    let headersList = {
      Accept: "*/*"
    };
    return headersList;
  }

  headerToken() {
    const token = JSON.parse(
      window.localStorage.getItem("loggerUserCredential")
    )?.token;
    let headersList = {
      Accept: "*/*",
      Authorization: `Bearer ${token}`
    };
    return headersList;
  }
}
