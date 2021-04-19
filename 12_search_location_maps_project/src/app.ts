import axios from "axios";
const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;
const G_API_KEY: string = "AIzaSyCMxY57T_1RoU_89vqa8x7_ZmHwi35rKzs";
declare var google: any;

type G_GEOCODING_RES = {
  results: { geometry: { location: { lat: number; lon: number } } }[];
  status: "OK" | "ZERO_RESULTS" | "OVER_DAILY_LIMIT";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  // Send address to google api
  axios
    .get<G_GEOCODING_RES>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${G_API_KEY}`
    )
    .then((res) => {
      let cordinates;
      if (res.data.status != "OK") {
        // throw new Error("Could not fetch location!");
        cordinates = { lat: -34.397, lng: 150.644 };
      } else {
        cordinates = res.data.results[0].geometry.location;
      }
      const map = new google.maps.Map(document.getElementById("map"), {
        // center: { lat: -34.397, lng: 150.644 },
        center: cordinates,
        zoom: 16,
      });

      new google.maps.Marker({
        position: cordinates,
        map,
      });
    })
    .catch((e) => {
      alert(e.message);
      console.log(e);
    });
}

form.addEventListener("submit", searchAddressHandler);
