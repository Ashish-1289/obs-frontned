
const handleLogin = async (payload)=>{
    const response = await fetch('https://localhost:8090/obs/api/login', {
        method: "POST",
        body: JSON.stringify(payload),
    });
    if(!response.ok){
        throw new Error("Invalid credentials");
    }
    return response.json();
}

export default handleLogin