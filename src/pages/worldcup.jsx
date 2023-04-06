import { useEffect , useState } from "react";
import animalData from "../animalData.json";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);

  const onClickChoice = (v) => () => {
    setChoice(choice + 2);

    //[기존에 선택된 요소들, 새로 추가한 동물(v), ... a ? 기존 요소들을 펼치는 것]
    // react에서는 a.push를 이렇게 쓴다
    setNextRound([...nextRound, v]);
  };

   useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
    });

    setShuffleAnimal(shuffleAnimalData);
  }, []);
  useEffect(() => console.log(nextRound), [nextRound]);
  useEffect(() => {
    if (choice === end) {
      setShuffleAnimal(nextRound);
      setNextRound([]);
      setEnd(end / 2);
      setChoice(0);
    }
  }, [choice]);
      //넥스트 라운드에 담긴 동물들을 셔플 애니멀로 옮긴다.
      //넥스트 라운드 초기화 []
      //16강 to 8강
      //초이스는 0

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice}
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mx-8 font-bold">
              <div>{`${end === 2 ? "결승" : end + " 강"}`}</div>
                <div>VS</div>           
            </div>
            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
};

export default Worldcup;
      // 로딩중 삼항연산자로 표현 했을 때 but 지금은 랜덤 사진이 천천히 돌아가야헤서 안씀 
      // {shuffleAnimal ? <AnimalCard animal={shuffleAnimal[0]} /> : "값이없음"