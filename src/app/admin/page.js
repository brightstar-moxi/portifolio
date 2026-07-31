"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import AdminLayout from "@/components/admin-view/layout";
import Dashboard from "@/components/admin-view/dashboard";


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
    // const [collapsed, setCollapsed] = useState(false);
    
    const homeData = useQuery(api.home.get);
    const aboutData = useQuery(api.about.get);
    const experienceData = useQuery(api.experience.get);
    const educationData = useQuery(api.education.get);
    const projectData = useQuery(api.projects.get);
    const contactData = useQuery(api.contact.get);

    const deleteProject = useMutation(api.projects.remove);
    const deleteExperience = useMutation(api.experience.remove);
    const deleteEducation = useMutation(api.education.remove);
    const deleteAbout = useMutation(api.about.remove);
    const deleteHome = useMutation(api.home.remove);
    const deleteContact = useMutation(api.contact.remove);

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

    const [currentSelectedTab, setCurrentSelectedTab] =
        useState("dashboard");
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
            id: "dashboard",
            label: "Dashboard",
            component: (
                <Dashboard
                    setCurrentSelectedTab={setCurrentSelectedTab}
                />)
        },
        {
            id: "home",
            label: "Home",
            component: (
                <AdminHomeView
                    formData={homeViewFormData}
                    setFormData={setHomeViewFormData}
                    handleSaveData={handleSaveData}
                    data={allData?.home}
                    handleEdit={handleEditHome}
                    handleDelete={handleDeleteHome}
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
                    data={allData?.about}
                    handleEdit={handleEditAbout}
                    handleDelete={handleDeleteAbout}
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
                    handleEdit={handleEditExperience}
                    handleDelete={handleDeleteExperience}
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
                    handleEdit={handleEditEducation}
                    handleDelete={handleDeleteEducation}
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
                    handleEdit={handleEditProject}
                    handleDelete={handleDeleteProject}
                />

            ),
        },
        {
            id: "contact",
            label: "Contact",
            component: <AdminContactView
                data={allData?.contact}
                handleDelete={handleDeleteContact}
            />
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

    //Contact Delete
    async function handleDeleteContact(id) {
        await deleteContact({ id });
    }

    //

    //Home Delete
    async function handleDeleteHome(id) {
        try {
            await deleteHome({ id });
        } catch (error) {
            console.error(error);
        }
    }
    //Home Edit
    function handleEditHome(item) {
        setHomeViewFormData({
            _id: item._id,
            heading: item.heading,
            summary: item.summary,
        });

        setUpdate(true);
    }

    //About delete
    async function handleDeleteAbout(id) {
        try {
            await deleteAbout({ id });
        } catch (error) {
            console.error(error);
        }
    }

    //About Edit
    function handleEditAbout(item) {
        console.log(item);

        setAboutViewFormData({
            id: item._id,
            aboutme: item.aboutme,
            noofprojects: item.noofprojects,
            yearofexperience: item.yearofexperience,
            noofclients: item.noofclients,
            skills: item.skills,
        });

        setUpdate(true);
    }

    //education delete
    async function handleDeleteEducation(id) {
        try {
            await deleteEducation({ id });
        } catch (error) {
            console.error(error);
        }
    }
    //education edit
    function handleEditEducation(item) {
        setEducationViewFormData({
            _id: item._id,
            degree: item.degree,
            year: item.year,
            college: item.college,
        });

        setUpdate(true);
    }

    //experience delete
    async function handleDeleteExperience(id) {
        try {
            await deleteExperience({ id });
        } catch (error) {
            console.error(error);
        }
    }

    //experience edit
    function handleEditExperience(item) {
        setExperienceViewFormData({
            _id: item._id,
            position: item.position,
            company: item.company,
            duration: item.duration,
            location: item.location,
            jobprofile: item.jobprofile,
        });

        setUpdate(true);
    }

    //project delete

    async function handleDeleteProject(id) {
        try {
            await deleteProject({ id });
        } catch (error) {
            console.error(error);
        }
    }

    //project edit
    function handleEditProject(item) {
        setProjectViewFormData({
            _id: item._id,
            name: item.name,
            website: item.website,
            technologies: item.technologies,
            github: item.github,
        });

        setUpdate(true);
    }

    //
    async function handleSaveData() {
        // console.log("Form Data:", formData);
        try {
            switch (currentSelectedTab) {
                case "home":
                    update
                        ? await updateHome({
                            id: homeViewFormData._id,
                            heading: homeViewFormData.heading,
                            summary: homeViewFormData.summary,
                        })
                        : await createHome({
                            heading: homeViewFormData.heading,
                            summary: homeViewFormData.summary,
                        });
                    break;

                case "about":
                case "about":
                    console.log("aboutViewFormData", aboutViewFormData);

                    update
                        ? await updateAbout(aboutViewFormData)
                        : await createAbout(aboutViewFormData);
                    break;
                case "experience":
                    update
                        ? await updateExperience({
                            id: experienceViewFormData._id,
                            position: experienceViewFormData.position,
                            company: experienceViewFormData.company,
                            duration: experienceViewFormData.duration,
                            location: experienceViewFormData.location,
                            jobprofile: experienceViewFormData.jobprofile,
                        })
                        : await createExperience({
                            position: experienceViewFormData.position,
                            company: experienceViewFormData.company,
                            duration: experienceViewFormData.duration,
                            location: experienceViewFormData.location,
                            jobprofile: experienceViewFormData.jobprofile,
                        });
                    break;
                case "education":
                    update
                        ? await updateEducation({
                            id: educationViewFormData._id,
                            degree: educationViewFormData.degree,
                            year: educationViewFormData.year,
                            college: educationViewFormData.college,
                        })
                        : await createEducation({
                            degree: educationViewFormData.degree,
                            year: educationViewFormData.year,
                            college: educationViewFormData.college,
                        });
                    break;

                case "project":
                    update
                        ? await updateProject({
                            id: projectViewFormData._id,
                            name: projectViewFormData.name,
                            website: projectViewFormData.website,
                            technologies: projectViewFormData.technologies,
                            github: projectViewFormData.github,
                             image: projectViewFormData.image,
                        })
                        : await createProject({
                            name: projectViewFormData.name,
                            website: projectViewFormData.website,
                            technologies: projectViewFormData.technologies,
                            github: projectViewFormData.github,
                              image: projectViewFormData.image,
                        });
                    break;
            }

            setUpdate(false);
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
        <>
           

            <AdminLayout
                currentSelectedTab={currentSelectedTab}
                setCurrentSelectedTab={setCurrentSelectedTab}
                resetFormDatas={resetFormDatas}
                setUpdate={setUpdate}
                setAuthUser={setAuthUser}
            >
                <div className="p-8">
                    {/* {menuItems.map(
                        (item) =>
                            item.id === currentSelectedTab &&
                            item.component
                    )} */}
                    {menuItems.map((item) =>
  item.id === currentSelectedTab ? (
    <div key={item.id}>
      {item.component}
    </div>
  ) : null
)}
                </div>
            </AdminLayout>
        </>
    );

}