import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <meta name="profile" content="Portfolio Website" />
            <meta name="keywords" content="Priyansh Vyas NextJS Porfile" />
            <meta name="author" content="Priyansh Vyas" />
            <link rel="icon" href="favicon.ico" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="true"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Kaisei+Decol&family=Nunito&family=Ubuntu+Mono&family=Balthazar&family=Didact+Gothic&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
