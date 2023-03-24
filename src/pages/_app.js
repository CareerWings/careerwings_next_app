import '@/styles/globals.css'
import {useEffect} from "react";
import {useRouter} from "next/router";
import * as gtag from "../lib/gtag";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <>
    {/*Todo: Remove Environments from here*/}
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-S4GBR3KHVJ"/>
    <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-S4GBR3KHVJ', {
                        page_path: window.location.pathname,
                    });
                    `,
        }}
    />
    <Component {...pageProps} />
  </>
}
