const Splash = () => {
  return (
    <div className="bg-[#5801c2] z-[9999] h-[100vh] w-full overflow-hidden absolute top-0">
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <img
          src="https://www.cadburymybirthdaysong.com/images/logo.png"
          alt="Cadbury Birthday rap"
          className="h-[20rem]"
        />
        <div className="grid gap-[12px]">
          <h1 className="text-white text-[20px] font-bold text_with_cadbury_font">
            A unique Birthday song for everyone.
          </h1>
          <p className="text-white font-bold text_with_cadbury_font">
            इस Birthday, कुछ अच्छा हो जाए, कुछ मीठा हो जाए
          </p>
        </div>
      </div>

      {/* blobs */}
      <div className="h-[40vh] w-[40vh] rounded-full bg-[#6d00e750] absolute top-[-5%] left-[-40%] z-[-1] animate-bounce"></div>
      <div className="h-[20vh] w-[20vh] rounded-full bg-[#6d00e750] absolute bottom-5 left-2 z-[-1] animate-bounce"></div>
      <div className="h-[30vh] w-[30vh] rounded-full bg-[#6d00e750] absolute bottom-[10%] right-[-30%] z-[-1] animate-bounce"></div>
    </div>
  );
};

export default Splash;
