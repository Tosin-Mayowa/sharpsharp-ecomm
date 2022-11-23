import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NavBar} from '../Component/NavBar/NavBar'
import Footer from '../Component/Footer/Footer'
function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
  
}

export default MyApp












// import { datadogRum } from '@datadog/browser-rum';
// import { Provider, useToast } from '@indicina1/components-library';
// import type { AppProps } from 'next/app';
// import Head from 'next/head';
// import { NextRouter, useRouter } from 'next/router';
// import { loadIntercom } from 'next-intercom';
// import { useCallback, useEffect, useState } from 'react';
// import { hotjar } from 'react-hotjar';

// import { getClientInfo } from '../apis/client';
// import { Layout } from '../components';
// import config from '../config/config';
// import useAuth, { AuthProvider } from '../hooks/useAuth';
// import * as ga from '../lib/ga';
// import { handleResponseError } from '../lib/utils';

// const GetClientInfo = ({
//   setClientId,
//   setClientEmail,
//   setUserEmail,
//   setUserId,
//   setUserName,
//   setClientSlug,
// }) => {
//   const { setClientInfo, user } = useAuth();
//   const toast = useToast();

//   const getClientInformation = useCallback(async () => {
//     const response = await getClientInfo();
//     const responseError = handleResponseError(response);

//     if ((response && !response.data) || !response || responseError) {
//       toast({
//         description: `${responseError ?? 'Error Loading Merchant Account.'}`,
//         status: 'error',
//         duration: null,
//         position: 'top',
//       });
//       return;
//     }
//     setClientInfo(response?.data?.data);
//     setClientId(response?.data?.data?.client_id);
//     setClientEmail(response?.data?.data?.email);
//     setClientSlug(response?.data?.data?.slug);
//     setUserEmail(user?.emailAddress);
//     setUserName(user?.fullName || user?.firstName || user?.lastName);
//     setUserId(user?.id);
//   }, [
//     setClientEmail,
//     setClientId,
//     setClientInfo,
//     setClientSlug,
//     setUserEmail,
//     setUserId,
//     setUserName,
//     toast,
//     user,
//   ]);

//   useEffect(() => {
//     getClientInformation();
//   }, []);

//   return <></>;
// };

// // end of old login

// function MyApp({ Component, pageProps }: AppProps) {
//   const { customLayout }: { customLayout: boolean } = pageProps;
//   const router: NextRouter = useRouter();

//   useEffect(() => {
//     if (config.app_env === 'live') {
//       hotjar.initialize(2834182, 1);
//       datadogRum.init({
//         applicationId: config.datadog.appId,
//         clientToken: config.datadog.clientToken,
//         site: 'datadoghq.eu',
//         service: 'decide-mp',
//         version: '1.0.0',
//         env: `${config.app_env}`,
//         sampleRate: 20,
//         replaySampleRate: 20,
//         trackInteractions: true,
//         defaultPrivacyLevel: 'mask-user-input',
//       });
//       datadogRum.startSessionReplayRecording();
//     }
//   }, []);

//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       ga.pageview(url);
//     };
//     //When the component is mounted, subscribe to router changes
//     //and log those page views
//     router.events.on('routeChangeComplete', handleRouteChange);

//     // If the component is unmounted, unsubscribe
//     // from the event with the `off` method
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);

//   // for old login
//   const [clientId, setClientId] = useState('');
//   const [clientEmail, setClientEmail] = useState('');
//   const [clientSlug, setClientSlug] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [userId, setUserId] = useState('');
//   const [userName, setUserName] = useState('');

//   loadIntercom({
//     appId: 'zwmby8ly',
//     email: 'support@indicina.co',
//     name: 'Indicina Support',
//     ssr: false,
//     initWindow: false,
//     delay: 0,
//   });

//   return (
//     <Provider
//       isRoot
//       colorTheme={{
//         50: '#dcf5ff',
//         100: '#aedbff',
//         200: '#7ec1ff',
//         300: '#005bb0',
//         400: '#1e8ffa',
//         500: '#057BEB',
//         600: '#4da8fc',
//         700: '#00417f',
//         800: '#00274f',
//         900: '#000e20',
//       }}
//     >
//       <AuthProvider>
//         <GetClientInfo
//           setClientId={setClientId}
//           setClientEmail={setClientEmail}
//           setClientSlug={setClientSlug}
//           setUserEmail={setUserEmail}
//           setUserId={setUserId}
//           setUserName={setUserName}
//         />
//         <Head>
//           <title>Decide Merchant Portal</title>

//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=5.0"
//           />

//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//                   (function(apiKey){
//                   (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
//                   v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
//                   o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
//                   y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
//                   z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

//                   pendo.initialize({
//                     visitor: {
//                       id:'${userId}', 
//                       email:'${userEmail}',
//                       name:'${userName}',
//                     },
              
//                     account: {
//                       id: '${clientId}', 
//                       email: '${clientEmail}',
//                      slug:'${clientSlug}',
//                     },
//                   });
                  
//                   })('${config?.pendo_api_key}');
//               `,
//             }}
//           ></script>
//         </Head>

//         {/* end of old login */}

//         {customLayout ? (
//           <Component {...pageProps} clientId={clientId} />
//         ) : (
//           <Layout clientId={clientId}>
//             <Component {...pageProps} />
//           </Layout>
//         )}
//       </AuthProvider>
//     </Provider>
//   );
// }
// export default MyApp;
