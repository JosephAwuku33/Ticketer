import { BEARER_TOKEN } from "@env";
import { COOKIE_VALUE } from "@env";

export const useAPI = async (phoneNumber: string, amount: number, selectedNetwork: string ) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      BEARER_TOKEN
    );
    myHeaders.append(
      "Cookie",
      COOKIE_VALUE
    );

    var formdata = new FormData();
    formdata.append("order_id", Math.random().toString(36).substring(7));
    formdata.append("currency", "GHS");
    formdata.append("amount", "1.00");
    formdata.append("mode", "Mobile Money");
    formdata.append("mobile_network", selectedNetwork);
    formdata.append("mobile_number", phoneNumber);

    var requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://paybox.com.co/pay", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
