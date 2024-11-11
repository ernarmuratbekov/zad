const Petropavl = document.getElementById("Petropavl")
const Tucson = document.getElementById("Tucson")
const Almaty = document.getElementById("Almaty")
const Barcelona = document.getElementById("Barcelona")

async function Api() {
    const respons_Petropavl = await fetch("https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&hourly=temperature_2m");
    const respons_Tucson = await fetch("https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&hourly=temperature_2m");
    const respons_Almaty = await fetch("https://api.open-meteo.com/v1/forecast?latitude=43.2567&longitude=76.9286&hourly=temperature_2m");
    const respons_Barcelona = await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&hourly=temperature_2m");

    const data_Petropavl = await respons_Petropavl.json();
    const data_Tucson = await respons_Tucson.json();
    const data_Almaty = await respons_Almaty.json();
    const data_Barcelona = await respons_Barcelona.json();

    return [data_Petropavl, data_Tucson, data_Almaty, data_Barcelona];
}

async function output() {
    try {
        let out = await Api();

        Petropavl.textContent = `Air temperature: ${out[0].hourly.temperature_2m[0]} \u00B0C`;
        Tucson.textContent = `Air temperature: ${out[1].hourly.temperature_2m[0]} \u00B0C`;
        Almaty.textContent = `Air temperature: ${out[2].hourly.temperature_2m[0]} \u00B0C`;
        Barcelona.textContent = `Air temperature: ${out[3].hourly.temperature_2m[0]} \u00B0C`;
    }
    catch(error) {
        console.log(error);
    }
    finally {
        setTimeout(output, 10000);
    }
}

output();
