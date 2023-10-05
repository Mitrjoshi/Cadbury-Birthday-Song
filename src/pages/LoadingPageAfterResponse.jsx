import { useEffect } from "react";
import { AbsoluteImages } from "../components";
import { useNavigate } from "react-router-dom";

const LoadingPageAfterResponse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/final-page");
    }, 3000);
  }, []);

  return (
    <div className="height_of_pages home_page_gradient relative overflow-x-hidden z-[1]">
      <div className="h-[80vh] flex items-center justify-center flex-col gap-[12px]">
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b9d95649193709.5ec79d32ba53e.jpg"
            alt="Cadbury Birthday rap"
            className="h-[18rem] rounded-[24px]"
          />
        </div>
        <div className="flex justify-center">
          <h1 className=" text-[24px] grid text-center text-white font-bold">
            Please wait
            <span className="text-[18px]">while we compose your song</span>
          </h1>
        </div>
      </div>
      {/* blobs */}
      <div className="h-[40vh] w-[40vh] rounded-full bg-[#6d00e750] absolute top-[-5%] left-[-40%] z-[-1] animate-bounce"></div>
      <div className="h-[20vh] w-[20vh] rounded-full bg-[#6d00e750] absolute bottom-5 left-2 z-[-1] animate-bounce"></div>
      <div className="h-[30vh] w-[30vh] rounded-full bg-[#6d00e750] absolute bottom-[10%] right-[-30%] z-[-1] animate-bounce"></div>
      {/* images */}
      <AbsoluteImages
        image="https://images.ctfassets.net/pmzhtobns06n/3xctc4IWO7B0ibLFI1yybi/0efe4a75fd57b5ad2cba33dbf9ab5f10/Cameos__6_.png?fm=webp&q=80"
        style=" bottom-3 h-[120px] right-0"
      />
      <AbsoluteImages
        image="https://images.ctfassets.net/pmzhtobns06n/2wC68NLrrsMn6Ze5WPiqvr/46780c41ee6f84a090d8481714bab145/Hazelnut.png?fm=webp&q=80"
        style=" bottom-[50%] h-[120px] left-0 rotate-[20deg]"
      />
    </div>
  );
};

export default LoadingPageAfterResponse;
