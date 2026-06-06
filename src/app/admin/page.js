"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";


import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminProjectView from "@/components/admin-view/project";
// import { addData, getData, login, updateData } from "@/services";
import { useEffect, useState } from "react";

const initialHomeFormData = {
    id: "",
    heading: "",
    summary: "",
};

const initialAboutFormData = {
    id: "",
    aboutme: "",
    noofprojects: "",
    yearofexperience: "",
    noofclients: "",
    skills: "",
};

const initialExperienceFormData = {
    id: "",
    position: "",
    company: "",
    duration: "",
    location: "",
    jobprofile: "",
};

const initialEducationFormData = {
    id: "",
    degree: "",
    year: "",
    college: "",
};

const initialProjectFormData = {
    id: "",
    name: "",
    website: "",
    technologies: "",
    github: "",
};

const initialLoginFormData = {

    username: "",
    password: "",
};

export default function AdminView() {
    const homeData = useQuery(api.home.get);
    const aboutData = useQuery(api.about.get);
    const experienceData = useQuery(api.experience.get);
    const educationData = useQuery(api.education.get);
    const projectData = useQuery(api.projects.get);
    const contactData = useQuery(api.contact.get);


    const loginUser = useMutation(api.user.login);
    const createHome = useMutation(api.home.create);
    const updateHome = useMutation(api.home.update);

    const createAbout = useMutation(api.about.create);
    const updateAbout = useMutation(api.about.update);

    const createExperience = useMutation(api.experience.create);
    const updateExperience = useMutation(api.experience.update);

    const createEducation = useMutation(api.education.create);
    const updateEducation = useMutation(api.education.update);

    const createProject = useMutation(api.projects.create);
    const updateProject = useMutation(api.projects.update);

    const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
    const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
    const [aboutViewFormData, setAboutViewFormData] =
        useState(initialAboutFormData);
    const [experienceViewFormData, setExperienceViewFormData] = useState(
        initialExperienceFormData
    );
    const [educationViewFormData, setEducationViewFormData] = useState(
        initialEducationFormData
    );
    const [projectViewFormData, setProjectViewFormData] = useState(
        initialProjectFormData
    );
    // const [contacts, setContacts] = useState([])


    // const [allData, setAllData] = useState({});
    const allData = {
        home: homeData || [],
        about: aboutData || [],
        experience: experienceData || [],
        education: educationData || [],
        project: projectData || [],
        contact: contactData || [],
    };
    const [update, setUpdate] = useState(false);
    const [authUser, setAuthUser] = useState(false);
    const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

    const menuItems = [
        {
            id: "home",
            label: "Home",
            component: (
                <AdminHomeView
                    formData={homeViewFormData}
                    setFormData={setHomeViewFormData}
                    handleSaveData={handleSaveData}
                />
            ),
        },
        {
            id: "about",
            label: "About",
            component: (
                <AdminAboutView
                    formData={aboutViewFormData}
                    setFormData={setAboutViewFormData}
                    handleSaveData={handleSaveData}
                />
            ),
        },
        {
            id: "experience",
            label: "Experience",
            component: (
                <AdminExperienceView
                    formData={experienceViewFormData}
                    handleSaveData={handleSaveData}
                    setFormData={setExperienceViewFormData}
                    data={allData?.experience}
                />
            ),
        },
        {
            id: "education",
            label: "Education",
            component: (
                <AdminEducationView
                    formData={educationViewFormData}
                    handleSaveData={handleSaveData}
                    setFormData={setEducationViewFormData}
                    data={allData?.education}
                />
            ),
        },
        {
            id: "project",
            label: "Project",
            component: (
                <AdminProjectView
                    formData={projectViewFormData}
                    handleSaveData={handleSaveData}
                    setFormData={setProjectViewFormData}
                    data={allData?.project}
                />
            ),
        },
        {
            id: "contact",
            label: "Contact",
            component: <AdminContactView
                data={allData && allData?.contact}
            />,
        },
    ];

    // async function extractAllDatas() {
    //     const response = await getData(currentSelectedTab);

    //     if (
    //         currentSelectedTab === "home" &&
    //         response &&
    //         response.data &&
    //         response.data.length
    //     ) {
    //         setHomeViewFormData(response && response.data[0]);
    //         setUpdate(true);
    //     }

    //     if (
    //         currentSelectedTab === "about" &&
    //         response &&
    //         response.data &&
    //         response.data.length
    //     ) {
    //         setAboutViewFormData(response && response.data[0]);
    //         setUpdate(true);
    //     }

    //     if (response?.success) {
    //         setAllData({
    //             ...allData,
    //             [currentSelectedTab]: response && response.data,
    //         });
    //     }
    // }

    // console.log(allData, 'allData');


    // async function handleSaveData() {
    //     const dataMap = {
    //         home: homeViewFormData,
    //         about: aboutViewFormData,
    //         education: educationViewFormData,
    //         experience: experienceViewFormData,
    //         project: projectViewFormData,
    //     };

    //     const response = update
    //         ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
    //         : await addData(currentSelectedTab, dataMap[currentSelectedTab]);
    //     console.log(response, "response");

    //     if (response.success) {
    //         resetFormDatas();
    //         extractAllDatas();
    //     }
    // }

    async function handleSaveData() {
        try {
            switch (currentSelectedTab) {
                case "home":
                    if (update) {
                        await updateHome(homeViewFormData);
                    } else {
                        const { id, ...homeData } = homeViewFormData;
                        await createHome(homeData);
                    }
                    break;

                case "about":
                    if (update) {
                        await updateHome(aboutViewFormData);
                    } else {
                        const { id, ...aboutData } = aboutViewFormData;
                        await createAbout(aboutData);
                    }
                    break;

                case "experience":
                    if (update) {
                        await updateHome(experienceViewFormData);
                    } else {
                        const { id, ...experienceData } = experienceViewFormData;
                        await createExperience(experienceData);
                    }
                    break;
                case "education":
                    if (update) {
                        await updateHome(educationViewFormData);
                    } else {
                        const { id, ...educationData } = educationViewFormData;
                        await createEducation(educationData);
                    }
                    break;

                case "project":
                    if (update) {
                        await updateHome(projectViewFormData);
                    } else {
                        const { id, ...projectData } = projectViewFormData;
                        await createProject(projectData);
                    }
                    break;

                default:
                    break;
            }

            resetFormDatas();
        } catch (error) {
            console.error(error);
        }
    }
    //For home
    useEffect(() => {
        if (homeData?.length) {
            setHomeViewFormData({
                id: homeData[0]._id,
                heading: homeData[0].heading,
                summary: homeData[0].summary,
            });

            setUpdate(true);
        }
    }, [homeData]);
    //For about
    useEffect(() => {
        if (aboutData?.length) {
            setAboutViewFormData({
                id: aboutData[0]._id,
                aboutme: aboutData[0].aboutme,
                noofprojects: aboutData[0].noofprojects,
                yearofexperience: aboutData[0].yearofexperience,
                noofclients: aboutData[0].noofclients,
                skills: aboutData[0].skills,
            });

            setUpdate(true);
        }
    }, [aboutData]);
    //For about
    // useEffect(() => {
    //   if (aboutData?.length) {
    //     setAboutViewFormData({
    //       id: aboutData[0]._id,
    //       aboutme: aboutData[0].aboutme,
    //       noofprojects: aboutData[0].noofprojects,
    //       yearofexperience: aboutData[0].yearofexperience,
    //       noofclients: aboutData[0].noofclients,
    //       skills: aboutData[0].skills,
    //     });

    //     setUpdate(true);
    //   }
    // }, [aboutData]);
    //Experience
    useEffect(() => {
        if (experienceData?.length) {
            setExperienceViewFormData({
                id: experienceData[0]._id,
                position: experienceData[0].position,
                company: experienceData[0].company,
                duration: experienceData[0].duration,
                location: experienceData[0].location,
                jobprofile: experienceData[0].jobprofile,
            });

            setUpdate(true);
        }
    }, [experienceData]);

    //Education
    useEffect(() => {
        if (educationData?.length) {
            setEducationViewFormData({
                id: educationData[0]._id,
                degree: educationData[0].degree,
                year: educationData[0].year,
                college: educationData[0].college,
                //   noofclients: educationData[0].noofclients,
                //   skills: educationData[0].skills,
            });

            setUpdate(true);
        }
    }, [educationData]);
    //Project
    useEffect(() => {
        if (projectData?.length) {
            setProjectViewFormData({
                id: projectData[0]._id,
                name: projectData[0].name,
                website: projectData[0].website,
                technologies: projectData[0].technologies,
                github: projectData[0].github,
                //   skills: projectData[0].skills,
            });

            setUpdate(true);
        }
    }, [projectData]);
    // useEffect(() => {
    //     extractAllDatas();
    // }, [currentSelectedTab]);

    function resetFormDatas() {
        setHomeViewFormData(initialHomeFormData);
        setAboutViewFormData(initialAboutFormData);
        setExperienceViewFormData(initialExperienceFormData);
        setEducationViewFormData(initialEducationFormData);
        setProjectViewFormData(initialProjectFormData);
    }

    console.log(allData, homeViewFormData, "homeViewFormData");

    useEffect(() => {
        setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
    }, []);

    // async function handleLogin() {
    //     const res = await login(loginFormData);

    //     console.log(res, "login");

    //     if (res?.success) {
    //         setAuthUser(true);
    //         sessionStorage.setItem("authUser", JSON.stringify(true));
    //     }
    // }

    async function handleLogin() {
        try {
            const user = await loginUser({
                username: loginFormData.username,
                password: loginFormData.password,
            });

            if (user) {
                setAuthUser(true);
                sessionStorage.setItem("authUser", JSON.stringify(true));
            } else {
                alert("Invalid username or password");
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (!authUser)
        return (
            <Login
                formData={loginFormData}
                handleLogin={handleLogin}
                setFormData={setLoginFormData}
            />
        );

    return (
        <div className="border-b border-[#fff]">
            <nav className="-mb-0.5 flex justify-center spcae-x-6" role="tablist">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className="p-4 font-bold text-xl text-[#fff]"
                        onClick={() => {
                            setCurrentSelectedTab(item.id);
                            resetFormDatas();
                            setUpdate(false);
                        }}
                    >
                        {item.label}
                    </button>
                ))}
                <button
                    onClick={() => {
                        setAuthUser(false);
                        sessionStorage.removeItem("authUser");
                    }}
                    className="p-4 font-bold text-xl text-[#fff]"
                >
                    Logout
                </button>
            </nav>
            <div className="mt-10 p-10 text-[#000]">
                {menuItems.map(
                    (item) => (item.id === currentSelectedTab && item.component
                    ))}
            </div>
        </div>
    );
}