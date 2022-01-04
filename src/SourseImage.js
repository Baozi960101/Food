import randomFood02 from "./images/randomFood02.jpg";
import randomFood06 from "./images/randomFood06.jpg";
import randomFood07 from "./images/randomFood07.jpg";
import randomFood09 from "./images/randomFood09.jpg";
import foodFbLogo from "./images/foodFbLogo.jpeg";
import foodNewsLogo from "./images/foodNewsLogo.jpeg";
import foodPttLogo from "./images/foodPttLogo.jpeg";

export function judgmentSourseShowImage(
  crawler_No,
  crawler_Web,
  originalImage
) {
  //算NO 雙偶
  if (crawler_Web === "facebook") {
    return foodFbLogo;
  } else if (crawler_Web === "dcard") {
    if (crawler_No % 2 === 0) {
      return randomFood02;
    } else {
      return randomFood07;
    }
  } else if (crawler_Web === "ptt") {
    return foodPttLogo;
  } else if (crawler_Web === "ctee") {
    return foodNewsLogo;
  } else if (originalImage === "") {
    if (crawler_No % 2 === 0) {
      return randomFood06;
    } else {
      return randomFood09;
    }
  } else {
    return originalImage;
  }
}
