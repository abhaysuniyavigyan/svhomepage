import React from "react";

export default function Products() {
  return (
    <>
      <div className=" bg-[#CCEDFF] text-center text-3xl p-3 mt-4">
        Products
      </div>
      <div className="w-full bg-[#CCEDFF] flex flex-col md:flex-row justify-center p-3 mb-8">
        <div className="bg-white flex flex-col items-center m-2 shadow rounded rounded-5  p-3 hover:shadow-md hover:scale-105 transition-all">
          <div className="flex justify-between w-full">
            <div className="text-2xl text-[#157D9E] my-3">कोड.com</div>
            <div className="text-md text-[#157D9E] my-3"> App Link &rarr;</div>
          </div>
          <div className="text-center text-sm mt-1 text-gray-600 w-[20rem]">
          कोड.com एक वेबसाइट है जो हिंदी में कोडिंग सीखने और लिखने के लिए बनाई गई है। यह एक ऑनलाइन कोड एडिटर है जो एक नवीनतम और उपयोगी सुविधा प्रदान करता है। इसकी मदद से आप अपनी पसंद के अनुसार कोडिंग भाषा का चयन कर सकते हैं।
          </div>
        </div>    
        
           <div className="bg-white flex flex-col items-center m-2 shadow rounded rounded-5  p-3 hover:shadow-md hover:scale-105 transition-all">
          <div className="flex justify-between w-full">
            <div className="text-2xl text-[#157D9E] my-3">Bholu App</div>
            <div className="text-md text-[#157D9E] my-3"> App Link &rarr;</div>
          </div>
          <div className="text-center text-sm mt-1 text-gray-600 w-[20rem]">
            भोलू ऐप एक ऐसा एप है जिसमें आप हिंदी और अंग्रेजी भाषा में
            प्रोग्रामिंग भाषाओं के कोर्स प्राप्त कर सकते हैं। इस ऐप में बहुत से
            कोर्स शामिल हैं जो आपको प्रोग्रामिंग बेसिक से लेकर एडवांस्ड स्तर तक
            सिखाते हैं। ये कोर्स हिंदी और अंग्रेजी भाषा में उपलब्ध हैं।
          </div>
        </div>


        <div className="bg-white flex flex-col items-center m-2 shadow rounded rounded-5  p-3 hover:shadow-md hover:scale-105 transition-all">
          <div className="flex justify-between w-full">
            <div className="text-2xl text-[#157D9E] my-3"> Physical Centre</div>
            <div className="text-md text-[#157D9E] my-3"> App Link &rarr;</div>
          </div>
          <div className="text-center text-sm mt-1 text-gray-600 w-[20rem]">
            शून्या विज्ञान फिजिकल सेंटर एक ऐसी जगह है जहां आपको हिंदी और
            अंग्रेजी भाषा में प्रोग्रामिंग सिखाई जाती है और आपको लाइब्रेरी और
            मुफ्त लैपटॉप भी प्रदान किए जाते हैं। यह सेंटर बिहार के पटना शहर में
            स्थित है। संस्थान उन्हें एक सही मार्गदर्शन प्रदान करता है
          </div>
        </div>
      </div>
    </>
  );
}
