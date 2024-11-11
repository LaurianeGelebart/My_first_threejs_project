export const getModels = async function() 
{
    const response = await fetch("./assets/data/models.json")
    if (response.status == 200) {
        let data = await response.json()
        console.log(data);
        return data
    } else {
        new Error(response.statusText)
    }
} 
