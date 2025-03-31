const button = document.querySelector("button");
const input = document.querySelector("input");

button.onclick = async () => {
    const api = "http://localhost:3000/file/upload";
    const file = input.files[0];
    if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const req = await fetch(api, {
            method: "POST",
            body: formData
        });
        const res = await req.json();
        console.log(res);
    } else {
        console.error("\n[!] Please Select A File\n");
    }
};
