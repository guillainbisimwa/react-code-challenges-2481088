import axios from "axios";
import { useState } from "react";

export default function DogPics() {
  const [img, setImage] = useState("");

  const callDog = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log(response.data.message);

      setImage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dog-pics">
      <img src={img} alt="Dog" />
      <button onClick={callDog}>🐶</button>
    </div>
  );
}
