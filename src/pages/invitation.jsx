import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Invitation = () => {
    AOS.init();
    return (
        <div>
            <div className="bg-cover bg-[url('https://scontent.floh1-1.fna.fbcdn.net/v/t39.30808-6/469374655_2046046372523358_1996469022012546419_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFotjQa4LMCS6dRLAVn9Aw4hnRP6rV6F2CGdE_qtXoXYNfhGWACpBdIjwoBY6cuVnLGUIKgItnkR548sANeYyEN&_nc_ohc=_aiEatzf7vYQ7kNvgEHflN0&_nc_zt=23&_nc_ht=scontent.floh1-1.fna&_nc_gid=AGDO_fEHkI2GGL-BrUmJq2T&oh=00_AYBDrswsGm7SllAQgb433zy0bAPW11NnhNuJr0GcH7z_sw&oe=675BF0F0')] bg-gray-300 bg-blend-multiply sm:px-12 sm:py-24 py-8 ">

                <div className='text-[#e8e1db]'>
                    <div className='flex justify-center'>
                        <img  data-aos="zoom-in" className='sm:w-[500px] w-64' src="https://fondosdepantallaymuchomas.wordpress.com/wp-content/uploads/2013/11/8d748-21.png" alt="" />
                    </div>
                    <div className='sm:px-0 px-8'>
                        <div  data-aos="zoom-in" data-aos-delay="100" className='sm:py-8 py-6 text-center'>
                            <p className='sm:pb-4 pb-2 sm:text-7xl text-2xl font-bold drop-shadow-[4px_4px_8px_rgb(0,148,69)]'>Invitación</p>
                            <p className='sm:text-8xl text-[32px] font-bold drop-shadow-[4px_4px_8px_rgb(0,148,69)]'>Cena de Navidad</p>
                        </div>
                        <p  data-aos="zoom-in" data-aos-delay="150"  className='sm:text-center text-start sm:text-xl font-medium pb-6'>¡Hola familia! 🎄<br />
                            Este año queremos hacer algo especial para celebrar la Navidad juntos. 🎁✨<br />
                            Los invitamos a una cena navideña este jueves 26 de diciembre a las 19:00H. <br />
                            La idea es pasar un rato ameno, reírnos, compartir una rica comida y disfrutar de nuestra compañía ❤️ <br />
                            Confirmen quiénes vienen para organizarnos mejor. <br /> ¡Los esperamos con los brazos abiertos y mucha alegría! <br />
                            Un abrazo navideño 🎅 </p>
                        
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <iframe
                            data-aos="fade-up"
                            data-aos-delay="500"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d995.0293165281505!2d-79.19973598936198!3d-3.996304506810088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1733698871875!5m2!1ses-419!2sec"
                            className="max-w-4xl sm:h-96 h-64 sm:w-6/12 w-9/12 border-2 border-[#991722] rounded-full shadow-xl drop-shadow-[2px_2px_8px_rgb(0,148,69)]"
                            title='Ubicacion'
                            allowFullScreen=""
                            loading="lazy"
                            >
                        </iframe>
                        <p data-aos="fade-up" data-aos-duration="700" className='pt-4 sm:text-4xl text-xl font-bold drop-shadow-[4px_4px_8px_rgb(0,148,69)]'>Casa de Wiilsoonn</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Invitation
