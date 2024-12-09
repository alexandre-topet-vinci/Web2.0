import { useEffect, useState } from "react";

const RandomDog = () => {
  const [dog, setDog] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDog();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchDog = async () => {
    try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
        if (!response.ok)
          throw new Error(
            `fetch error: ${response.status} : ${response.statusText}`
          );
        const dog = await response.json();
        setDog(dog);

      } catch (err) {
        console.error("HomePage::error: ", err)
      }
    };

  return (
    <div>
      {dog ? <img src={dog.message} style={{width: '450px', height: '450px'}} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
};

export default RandomDog;
