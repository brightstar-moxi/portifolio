import ClientAboutView from '@/components/client-view/about'
import ClientContactView from '@/components/client-view/contact'
import ClientEducationView from '@/components/client-view/education'
import ClientexprienceView from '@/components/client-view/experience'
import ClientHomeView from '@/components/client-view/home'
import ClientProjectView from '@/components/client-view/project'

async function extractAllDatas(currentSection) {
  try {
    const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
      method: "GET",
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data && data.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null; // Handle error gracefully, return null or an empty array/object
  }
}

export default async function Home() {
  const homeSectionData = await extractAllDatas('home');
  const aboutSectionData = await extractAllDatas('about');
  const experienceSectionData = await extractAllDatas('experience');
  const educationSectionData = await extractAllDatas('education');
  const projectSectionData = await extractAllDatas('project');
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
