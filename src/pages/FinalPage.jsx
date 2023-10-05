import { AbsoluteImages, ProgressIndicator, Button } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

const FinalPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="height_of_pages home_page_gradient relative overflow-x-hidden z-[1] flex flex-col gap-[12px] pt-10 items-center justify-start">
      <div className="flex flex-col gap-[12px] pt-10">
        <div className="flex justify-center">
          <ProgressIndicator filled_value={5} />
        </div>
        <div className="flex justify-center items-center text-center">
          <h1 className=" text-[22px] text-white font-bold">
            Your Birthday Song is ready
          </h1>
        </div>
        <div className="flex flex-col items-center border-[3px] border-[#e1a0c9] rounded-[32px] overflow-hidden">
          <div className="p-6 relative flex items-center justify-center">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b9d95649193709.5ec79d32ba53e.jpg"
              alt="Cadbury Birthday rap"
              className="h-[18rem] rounded-[24px]"
            />
            <div className="h-[90px] w-[90px] rounded-full bg-[#3e014d] absolute flex items-center justify-center">
              <IconPlayerPlayFilled size={32} />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <Button
              disabled={name !== "" ? false : true}
              text="Share"
              className="h-[45px] bg-[#e7b463] text-[#3e014d] w-[140px] font-[900] text-[16px] border-r-2 border-[#380178]"
            />
            <Button
              disabled={name !== "" ? false : true}
              text="Download"
              className="h-[45px] bg-[#e7b463] text-[#3e014d] w-[140px] font-[900] text-[16px] border-l-2 border-[#380178]"
            />
          </div>
        </div>
        <div className="flex gap-[6px]">
          <Button
            text="Redeem Gift"
            className="h-[45px] bg-[#e7b463] text-[#3e014d] w-[140px] font-[900] text-[16px] rounded-[12px]"
          />
          <Button
            onClick={() => navigate("/loved-one-info/basic-details")}
            text="Create Again"
            className="h-[45px] bg-[#e7b463] text-[#3e014d] w-[140px] font-[900] text-[16px] rounded-[12px]"
          />
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

export default FinalPage;
