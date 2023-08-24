import Head from "next/head";
import chandelier from "@/assets/chandelier.jpg";
import Myself from "@/assets/Myself.json";
import { Inter } from "@next/font/google";
import { Parallax } from "react-parallax";
import Allen from "@/components/Allen";
import Imager from "@/components/Imager";
import Main from "@/components/Main";
import SidebarLg from "@/components/SidebarLg";
import SidebarSm from "@/components/SidebarSm";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Priyansh Vyas</title>
         </Head>
         <Imager />

         <Parallax
            bgImage={chandelier.src}
            bgImageAlt="chandelier"
            strength={300}
         >
            <SidebarSm />
            <SidebarLg />

            {Object.getOwnPropertyNames(Myself).map((key) => {
               return <Main key={key} title={key} />;
            })}

            <Allen />
         </Parallax>
      </div>
   );
}
