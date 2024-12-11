import React, { useState } from 'react';
import Axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    AOS.init();
    const [name, setName] = useState("");
    const [isAttending, setIsAttending] = useState("");
    const [isBringingSomeone, setIsBringingSomeone] = useState(false);
    const [guestNames, setGuestNames] = useState([""]);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAttendingChange = (e) => {
        setIsAttending(e.target.value);
    };

    const handleBringingSomeoneChange = (e) => {
        setIsBringingSomeone(e.target.value === "yes");
        if (e.target.value !== "yes") {
            setGuestNames([""]);
        }
    };

    const addGuestField = () => {
        setGuestNames([...guestNames, ""]);
    };

    const removeGuestField = (index) => {
        setGuestNames(guestNames.filter((_, i) => i !== index));
    };

    const handleGuestNameChange = (index, value) => {
        const updatedGuestNames = [...guestNames];
        updatedGuestNames[index] = value;
        setGuestNames(updatedGuestNames);
    };

    const sendData = (e) => {
        e.preventDefault();
        const filteredGuestNames = guestNames.filter((name) => name.trim() !== "");

        const payload = {
            firstName: name.split(" ")[0] || "",
            lastName: name.split(" ")[1] || "",
            attendance: isAttending,
            attendees: filteredGuestNames.length,
            createdAt: new Date().toISOString(),
        };

        Axios.post("http://localhost:3000/api/eventos", payload)
            .then(() => {
                setAlertMessage("Asistencia confirmada correctamente, te esperamos!");
                setAlertType("success");
                setName("");
                setIsAttending("");
                setIsBringingSomeone(false);
                setGuestNames([""]);
            })
            .catch((err) => {
                console.error(err);
                setAlertMessage("Error al enviar los datos, intente de nuevo más tarde.");
                setAlertType("error");
            });
    };

    return (
        <div className="bg-cover bg-no-repeat bg-[url('https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469599611_2046606009134061_4216948803356831478_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFltgIm1bppPWjL9RHTIVkGmQVmkbV33qOZBWaRtXfeo3bqN3fEOz4TKQ09DYHPfX_GzTOprTmmcFnljhQDP0vZ&_nc_ohc=iTWi3OZTEZUQ7kNvgG9hdGX&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=Ae9FeIpofNyPfE8_lWnrZK0&oh=00_AYBW52OU78csjGIiAaxRTQYq-LLhnrXmdaXMc2zqQhgKrw&oe=675D4162')] bg-gray-300 bg-blend-multiply sm:p-20 p-8 flex justify-center">
            <div className='max-w-4xl w-full sm:w-6/12'>
                <form className="form" onSubmit={sendData}>
                    <div className="title">
                        <p data-aos="fade-down-right" className="text-black sm:text-8xl text-[42px] font-[900] mb-3 drop-shadow-[1px_1px_2px_rgb(0,148,69)] pt-4">
                            Asistencia
                        </p>
                    </div>
                    <input
                        data-aos="fade-down-right"
                        type="text"
                        required={true}
                        placeholder="Nombre"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        className="input mb-4"
                    />

                    <div data-aos="fade-down-right" className="dropdown mb-4">
                        <label htmlFor="dinner">¿Vas a asistir a la cena navideña?</label>
                        <select
                            id="dinner"
                            name="dinner"
                            required={true}
                            className="input"
                            value={isAttending}
                            onChange={handleAttendingChange}
                        >
                            <option value="" disabled>
                                Elija
                            </option>
                            <option value="yes">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div data-aos="fade-down-right" className="dropdown mb-4">
                        <label htmlFor="bringing-someone">¿Vas a asistir con alguien más?</label>
                        <select
                            required={true}
                            id="bringing-someone"
                            name="bringingSomeone"
                            className="input"
                            onChange={handleBringingSomeoneChange}
                            value={isBringingSomeone ? "yes" : "no"}
                        >
                            <option value="" disabled>
                                Elija
                            </option>
                            <option value="yes">Sí</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    {isBringingSomeone && (
                        <div data-aos="fade-down-right" className="guest-names">
                            {guestNames.map((guest, index) => (
                                <div key={index} className="flex items-center gap-2 mb-2">
                                    <input
                                        type="text"
                                        placeholder={`Nombre ${index + 1}`}
                                        value={guest}
                                        onChange={(e) => handleGuestNameChange(index, e.target.value)}
                                        className="input flex-1"
                                        required={true}
                                    />
                                    <button
                                        type="button"
                                        className="button-log text-red-600"
                                        onClick={() => removeGuestField(index)}
                                    >
                                        x
                                    </button>
                                </div>
                            ))}
                            <button type="button" className="button-confirm mt-2" onClick={addGuestField}>
                                +
                            </button>
                        </div>
                    )}

                    <button data-aos="fade-down-right" type="submit" className="button-confirm mt-4">
                        Enviar →
                    </button>
                </form>

                {alertMessage && (
                    <div className={`alert mt-4 p-4 ${alertType === "success" ? "bg-green-200" : "bg-red-200"}`}>
                        <p className={alertType === "success" ? "text-green-700" : "text-red-700"}>
                            {alertMessage}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Form;
