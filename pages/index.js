import { Inter } from "@next/font/google";
import { Parallax } from "react-parallax";
import Imager from "@/components/Imager";
import SidebarSm from "@/components/SidebarSm";
import SidebarLg from "@/components/SidebarLg";
import Main from "@/components/Main";
import Allen from "@/components/Allen";
import Myself from "@/assets/Myself.json";
import chandelier from "@/assets/chandelier.jpg";
import Head from "next/head";

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
