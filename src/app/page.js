import ClientAboutView from '@/components/client-view/about'
import ClientContactView from '@/components/client-view/contact'
// import ClientEducationView from '@/components/client-view/education'
import ClientexprienceView from '@/components/client-view/experience'
import ClientHomeView from '@/components/client-view/home'
import ClientProjectView from '@/components/client-view/project'
// import * as dotenv from 'dotenv'
import { fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";

// async function extractAllDatas(currentSection) {
//    const apiUrl =  process.env.NEXT_PUBLIC_API_URL ;
//    console.log('API_URL:',  apiUrl);

//   try {
//     const res = await fetch(`${apiUrl}/api/${currentSection}/get`, {
//       method: "GET",
//       cache: 'no-store'
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json();
//     return data && data.data;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return null; // Handle error gracefully, return null or an empty array/object
//   }
// }

// async function extractAllDatas(currentSection) {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/${currentSection}/get`,
//       {
//         method: "GET",
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json();
//     return data?.data;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return null;
//   }
// }

export default async function Home() {
  // const homeSectionData = await extractAllDatas('home');
  const homeSectionData =
  await fetchQuery(api.home.get);
  // const aboutSectionData = await extractAllDatas('about');
  const aboutSectionData =
  await fetchQuery(api.about.get);
  // const experienceSectionData = await extractAllDatas('experience');
  const experienceSectionData =
  await fetchQuery(api.experience.get);
  // const educationSectionData = await extractAllDatas('education');
  const educationSectionData =
  await fetchQuery(api.education.get);
  // const projectSectionData = await extractAllDatas('project');
  const projectSectionData =
  await fetchQuery(api.projects.get);
  // const contactSectionData = await extractAllDatas('contact');

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView data={aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : null} />
      <ClientexprienceView educationData={educationSectionData} experienceData={experienceSectionData} />
      {/* <ClientEducationView/> */}
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
