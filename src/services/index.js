export async function addData(currentTab, formData){
    try {
        const response = await fetch(`/api/${currentTab}/add`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
        });
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}


// to retrieve Data

export async function addData(currentTab){
    try {
        const response = await fetch(`/api/${currentTab}/get`,{
            method: "GET",
          
        });
        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}