const WinAnimalCard = ({ animal }) => {
    return (
      <div className="flex flex-col justify-normal items-center">
        <div className="text-2xl mb-4 font-bold">
          🎉🎉🎉 Conglaturations 🎉🎉🎉
        </div>
        <img
          className="border-8 border-white shadow-lg shadow-white w-96"
          src={`${process.env.PUBLIC_URL}/images/${animal}.jpeg`}
        />
        <div className="text-2xl mt-4 font-bold">
          💕💕💕 Winner is {animal} 💕💕💕
        </div>
      </div>
    );
  };
  
  export default WinAnimalCard;