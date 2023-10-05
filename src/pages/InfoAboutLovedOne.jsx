import { AbsoluteImages, ProgressIndicator } from "../components";
import { Outlet, useLocation } from "react-router-dom";

const InfoAboutLovedOne = () => {
  const location = useLocation();

  return (
    <div className="height_of_pages home_page_gradient relative overflow-x-hidden z-[1]">
      <div className="flex flex-col gap-[12px] pt-10 items-center justify-center">
        <div className="flex justify-center">
          <ProgressIndicator
            filled_value={
              location.pathname.includes("/loved-one-info/basic-details")
                ? 1
                : location.pathname.includes("/loved-one-info/mood-details")
                ? 2
                : location.pathname.includes(
                    "/loved-one-info/additonal-details"
                  )
                ? 3
                : null
            }
          />
        </div>
        <div className="flex justify-center w-[80%] text-center">
          {location.pathname.includes("/loved-one-info/basic-details") ? (
            <h1 className=" text-[22px] text-white font-bold">
              Tell us About your loved ones.
            </h1>
          ) : location.pathname.includes("/loved-one-info/mood-details") ? (
            <h1 className=" text-[22px] text-white font-bold">
              What would you like their song's vibe be like?
            </h1>
          ) : location.pathname.includes(
              "/loved-one-info/additonal-details"
            ) ? (
            <h1 className=" text-[22px] text-white font-bold">
              Tell us a little bit more them...
            </h1>
          ) : null}
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b9d95649193709.5ec79d32ba53e.jpg"
            alt="Cadbury Birthday rap"
            className="h-[18rem] rounded-[24px]"
          />
        </div>
        {location.pathname.includes("//loved-one-info/basic-details") && (
          <div className="flex justify-center">
            <h1 className=" text-[22px] text-white font-bold">Their name</h1>
          </div>
        )}
      </div>
      <Outlet />

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

export default InfoAboutLovedOne;
