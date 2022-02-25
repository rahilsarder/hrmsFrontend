import axios from "axios";
import { AlertApiDown, AlertError } from "../../Components/Alert/Alert";
import { getToken, removeUserSession } from "../LoginData/loginDetails";

///////////////////////////////
//     Global HTTP Client
///////////////////////////////
export const httpGeneral = axios.create({
	baseURL: "http://localhost:8000/",
	// baseURL: "http://192.168.7.117:8888/",
});

//Interceptor Request
httpGeneral.interceptors.request.use(
	(config) => {
		config.headers["Authorization"] = "Bearer " + getToken();
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
//Interceptor Response
httpGeneral.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (!error.response) {
			console.log("Please Check Your Internet Connection");
			AlertApiDown("Server down, Please try again later");
		}
		return Promise.reject(error);
	}
);

///////////////////////////////
//    LOG IN HTTP Client
///////////////////////////////
export const httpLogin = axios.create({
	// baseURL: "http://192.168.7.117:8888/",
	baseURL: "http://localhost:8000/",
});

//Handling Error
httpLogin.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (!error.response) {
			console.log("Please Check Your Internet Connection");
			AlertError("Server down, Please try again later");
			removeUserSession();
		}

		return Promise.reject(error);
	}
);

// Base url for signatory img preview
export const img_url = "http://localhost:8000";
