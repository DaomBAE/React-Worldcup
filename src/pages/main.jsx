import { Link } from "react-router-dom";

const Main = () => {
    return (
     <div className="bg-purple-200 min-h-screen flex flex-col justify-center items-center">
        <div className="text-6xl font-bold">이상형 월드컵</div>
        <Link to="/worldcup">
          <button className="bg-purple-400 text-white px-4 py-2 rounded-lg mt-8">
             Start
          </button>
        </Link>
     </div>
    );
  };
  
  export default Main;