'use client'

import AdminAboutView from "@/components/admin-view/about"
import AdminContactView from "@/components/admin-view/contact"
import AdminEducationView from "@/components/admin-view/education"
import AdminExperienceView from "@/components/admin-view/experience"
import AdminHomeView from "@/components/admin-view/home"
import AdminProjectView from "@/components/admin-view/project"
import { addData, getData } from "@/services"
import { useEffect, useState } from "react"

const initialHomeFormData = {
    heading: "",
    summary: ""
}
const initialAboutFormData = {
    aboutme: "",
    noofprojects: "",
    yearofexperience: "",
    noofclients: "",
    skills: "",
}
const initialExperienceFormData = {
    position: "",
    company: "",
    duration: "",
    location: "",
    jobprofile: "",
}
const initialEducationFormData = {
    degree: "",
    year: "",
    college: "",
}
const initialProjectFormData = {
    name: "",
    technologies: "",
    website: "",
    github: "",
}


export default function AdminView() {

    const [currentSelectedTab, setCurrentSelectedTab] = useState('home');

    const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
    const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutFormData);
    const [experienceViewFormData, setExperienceViewFormData] = useState(initialExperienceFormData);
    const [educationViewFormData, setEducationViewFormData] = useState(initialEducationFormData);
    const [projectViewFormData, setProjectViewFormData] = useState(initialProjectFormData);
    const [allData, setAllData] = useState({});

    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHomeView formData={homeViewFormData} setFormData={setHomeViewFormData} handleSaveData={handleSaveData}/>
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAboutView formData={aboutViewFormData} setFormData={setAboutViewFormData} handleSaveData={handleSaveData}/>
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView formData={experienceViewFormData} setFormData={setExperienceViewFormData} handleSaveData={handleSaveData}/>
        },
        {
            id: 'education',
            label: 'Education',
            component: <AdminEducationView formData={educationViewFormData} setFormData={setEducationViewFormData} handleSaveData={handleSaveData}/>
        },
        {
            id: 'project',
            label: 'Project',
            component: <AdminProjectView formData={projectViewFormData} setFormData={setProjectViewFormData} handleSaveData={handleSaveData}/>
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContactView />
        },
    ]



    async function extractAllData(){
        const response = await getData(currentSelectedTab);
        if(currentSelectedTab === 'home'&& response && response.data && response.data.length){
            setHomeViewFormData(response && response.data[0])
        }

        if(response?.success){
            setAllData({
                ...allData, [currentSelectedTab] : response && response.data
            })
        }
    }

    async function handleSaveData(){

        const dataMap = {
            home : homeViewFormData,
            about : aboutViewFormData,
            experience : experienceViewFormData,
            project : projectViewFormData,
            education : educationViewFormData
        }



        const response = await addData(currentSelectedTab, dataMap[currentSelectedTab])
        console.log(response);
        if(currentSelectedTab === 'home'&& response && response.data && response.data.length){
            setHomeViewFormData(response && response.data[0])
        }
        if(response.success){
            resetFormData();
            extractAllData();
        }
        
    }
useEffect(()=>{
extractAllData()
},[currentSelectedTab])

    function resetFormData(){
        setHomeViewFormData(initialHomeFormData);
        setAboutViewFormData(initialAboutFormData);
        setExperienceViewFormData(initialExperienceFormData);
        setEducationViewFormData(initialEducationFormData);
        setProjectViewFormData(initialProjectFormData);
    }

    return (
        <div className="border-b border-gray-200 ">
            <nav className="-mb-0.5 flex justify-center space-x-6 mt-8"
                role="tablist"
            >

                {
                    menuItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className="p4 front-bold text-xl text-black"
                            onClick={() => {
                                setCurrentSelectedTab(item.id)
                                resetFormData()
                               
                            }}
                        >
                            {item.label}
                        </button>
                    ))
                }
            </nav>
            <div className="mt-10 p-10">
                {
                    menuItems.map((item) => item.id === currentSelectedTab && item.component)
                }
            </div>
        </div>
    )
}