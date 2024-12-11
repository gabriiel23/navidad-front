import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    AOS.init();
    return (

        <div >
            <div className="bg-cover bg-no-repeat bg-[url('https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469364007_2046047522523243_4524021938894814686_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEwkf9LfZUCPBh5l4I3r3vaaJufUUXB8V1om59RRcHxXYj_VM_Mox0qQiwTlJz7tbFlXFAgNXq3_LZwkw4XS6Es&_nc_ohc=KdvIliDyJ_YQ7kNvgHp83DL&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A1HdVxk5vjJeTafqOtfN2_-&oh=00_AYANKs1Zhir7MJKpShLw_J0mHqXPdD0O7rV2V2QFdOCGOQ&oe=675AFC49')] bg-gray-300 bg-blend-multiply sm:p-12 p-4 sm:py-14 py-24 text-center text-[#ffd99c]">
                <div className='flex justify-center sm:h-28 h-12 sm:mb-10 mb-6'>
                    <img data-aos="fade-down" data-aos-delay="100" src="https://usagif.com/wp-content/uploads/2021/4fh5wi/christmas-lights-acegif-44.gif" alt="" />
                </div>
                <div className="pb-8">
                    <p data-aos="fade-right" data-aos-delay="100" className="sm:text-9xl text-6xl font-bold pb-8 text-shadow-red">Navidad 2024</p>
                    <p data-aos="fade-right" data-aos-delay="100" className="sm:text-7xl text-3xl font-bold text-shadow-red">Familia DÍAZ</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className='flex flex-row justify-center sm:space-x-16 space-x-2 pb-4 pt-8'>
                    <img className='sm:h-64 h-16' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhioIDDFAjxe82NNBYQxXhGSV4jpndhS96ewS4uscjxklCKtNroMMq-qcog00VO6DMpYG2BREzugvCFqDL51VboVALcBCLD9sLhK7HFQJ5XQLipDBElVSxGCxP3dHubWRwS3nphjC9Y0aVUEwwTjEFtFVdcFWyjfr26eOl-2P_wmRzQokKu4t162aAp/s16000/Christmas_Stocking_with_Candy_Cane_PNG_Picture.png" alt="" />
                    <img className='sm:h-64 h-16' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg_iO9L_1MKqRcGyVaCT53EffDhu9eV49nJ9ToMZvKUDdp4yp5zfLyAGlp3s6GLsxRnxnnLDD8XB91rIbv4ZWKtMfHDvCo3f2-IODpvd2DDsFrtER6pRqOTZoeAIi5bX4LsJ01-PPWaDz5qjQFmsuH2s2OJZptt-bYaQabBbxRbmUyIZp23FOh2Fmr/s16000/Christmas_Stocking_with_Gold_Bow_PNG_Picture.png" alt="" />
                    <img className='sm:h-64 h-16' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXkQhTceLJII4NHyA9rDaUD8kjL743keBKXkUtktWzSOTQiCMR-qMPOIzDMRPX_ppukT5h5aTC80wVr3c7lCkFSur1pVVa8cdMdStVXUl9tMoGw9M9TItmng9VAJdwL5kGIvYAyD6mUaz3IYrNstwvVmZm0f08_k2oPwLypjISnKyAB924aui9ERXU/s16000/Christmas_Green_Stocking_with_Candy_Canes_PNG_Clipart_Image.png" alt="" />
                    <img className='sm:h-64 h-16' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggVwZVdfZpncR32Slp9UlL3g1xuW_sxEl_q1CVqZ42OsWi-89UqJSscRjqK8Pm8ibWweq2xXBVLzJLzlRdQF7SRtlkGAnNAQSNBn7DrILyyBtwhvlsZOynMSUx964T5GoG850wsb9yK4LvJN3lxYrc-ndBTgVu-cNG_urrUfTTtoI-qs5VNGYBZGG4/s16000/74eadd49a44f4ef45f61044b6342000b.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
