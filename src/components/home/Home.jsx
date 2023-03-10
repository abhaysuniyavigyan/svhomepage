import React from "react";
import maincont from "../../assets/maincont.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row my-3 p-5">
        <div className="basis-1/2 my-auto p-5">
          <div className="text-4xl text-[#157D9E] mb-4">
            शुनिया विज्ञान, हिंदी और अंग्रेजी में कोडिंग सीखें
          </div>
          <div className="text-xl">
            शून्यविज्ञान नामक एक कंपनी है जो कोडिंग सीखाने के लिए हिंदी माध्यम
            का प्रयोग करती है। यह कंपनी भारत की एक नई युवा पीढ़ी को कोडिंग की
            जटिलताओं को समझने और उन्हें इस फील्ड में अधिक रूचि उत्पन्न करने में
            मदद करने का लक्ष्य रखती है | शून्यविज्ञान द्वारा प्रदान किए जाने
            वाले पाठ्यक्रमों में प्रोग्रामिंग भाषाओं की एक विस्तृत श्रृंखला
            शामिल है, जिनमें Python, Java, C++, और बहुत कुछ शामिल हैं। कंपनी
            विभिन्न प्रकार की शिक्षण विधियों का उपयोग करती है, जिसमें छात्रों को
            कुशल कोडर बनने के लिए आवश्यक कौशल सीखने और मास्टर करने में मदद करने
            के लिए व्याख्यान, व्यावहारिक अभ्यास और परियोजनाएं शामिल हैं
          </div>
        </div>
        <div className="basis-1/2 ">
          <img className="rounded rounded-full" src={maincont} alt="" />
        </div>
      </div>
    </>
  );
}
