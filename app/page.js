export default function Home() {
  return (
    <div className="w-[1769px] h-[1151px] relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      {/* Click Button */}
      <div className="w-[150px] h-[52px] left-[1567px] top-[58px] absolute">
        <div className="w-[150px] h-[52px] left-[6px] top-[10px] absolute bg-[#75241e] rounded-[49px] absolute z-10" />
        <div className="w-[150px] h-[52px] left-0 top-0 absolute bg-[#eaecd7] rounded-[49px] absolute z-20" />
        
        <div className="left-[55px] top-4 absolute text-[#db4439] text-base font-black font-['Inknut_Antiqua'] absolute z-30">Click</div>
      </div>

      {/* Coffee Image */}
      <div className="origin-top-left rotate-[8.64deg] w-[543px] h-[590.40px] left-[1068.69px] top-[226px] absolute">
        <img className="w-[880.99px] h-[565.71px] left-[50px] top-[100px] absolute" src="/coffee-image.jpg" alt="Coffee Image" />
      </div>

      {/* Main Text */}
      <div className="w-[680px] left-[143px] top-[313px] absolute text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">
        Bla Bla Coffee!
      </div>
      <div className="w-[680px] left-[148px] top-[740px] absolute text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">
        Your NO.1 Choice
      </div>

      {/* Navigation Links */}
      <div className="left-[270px] top-[46px] absolute text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Menu</div>
      <div className="left-[64px] top-[46px] absolute text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Home</div>
      <div className="left-[891px] top-[46px] absolute text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Login</div>
      <div className="left-[716px] top-[46px] absolute text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Front Page</div>

      {/* Footer Section */}
      <div className="w-[1804px] h-[102px] left-[-35px] top-[1049px] absolute bg-white flex justify-between items-center px-10">
        <div className="text-left text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px] pl-4">
          Contact Information
        </div>
        <div className="text-center text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">
          Company Policy
        </div>
        <div className="text-right text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px] pr-4">
          Be our partner today
        </div>
      </div>
    </div>
  );
}
