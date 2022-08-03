import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class HttpserviceService {
  constructor() {}

  axiosGet(api: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(api)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}
