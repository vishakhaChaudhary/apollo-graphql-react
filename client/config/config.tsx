/* Configuration file to config common details */
const config = {
    rootURL: process.env.REACT_APP_ROOT_URL || "http://localhost:8080",
    apiURL: process.env.REACT_APP_GQL_URL || "http://localhost:8080/graphql",
}

export default config;
