import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Memories = () => {
    AOS.init();

    const [selectedImage, setSelectedImage] = useState(null);

    const images1 = [
        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469594098_2046795152448480_6580242695258471648_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH1bh9MFOleitVs4C57KbBPCiitwruauK4KKK3Cu5q4rkga-f1XtDyGVRdaupB_sqTesqNQYq-VpMfxWDy-dnDg&_nc_ohc=Nv-aU2VcAK0Q7kNvgF_RA8Q&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A9U3dZflOuw6bja9L2mm-Nv&oh=00_AYB_6tlgoe8pYMYqoo1T8a0KJIZFAxJMAjunFQ4y8H6cNQ&oe=675C3305",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/468949601_2046795245781804_2201045401570899642_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFKsxLUG39Ht3tgz6JUE59xCDeCIstMLkYIN4Iiy0wuRv0dQMxYt6MlncRpJcs5iFRyIsjWdpMTwh-j7LWRF0o1&_nc_ohc=GsgleRT6EvwQ7kNvgFl_S6Z&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AeGPmoCXcQCPMyhCbm5f_bU&oh=00_AYB8vBFO17CQ9gK3FXrOabXP7t8wmTDYqJI3mDcm7yS5eQ&oe=675C4B71",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469483196_2046795322448463_3635957869739185227_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGbnn_kJJfLRDRztdDFLmyjzJOGuH0NQS_Mk4a4fQ1BL-YG-GcXeqltPj4rHsVCwFoczjOleiVQIx5f7LhVwUOL&_nc_ohc=TkpnUjFafZgQ7kNvgH7bf0s&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AncGnRoUgfhFotEzDM0xi-w&oh=00_AYBTUkow3HN9Tud0FCm969ZRQAcNjjf3TNBYhI0y8FARxQ&oe=675C3B85",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469602957_2046795325781796_4437681138132577594_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYVtgtYXO-DrZd3OkIezm8sotw6d2zxUayi3Dp3bPFRhhZMDdJT-VRj3yyx3bZBhD_S-PPiW7fybFiE6QP2gm7&_nc_ohc=zLPK9vlVALMQ7kNvgE7qB9o&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AfTSrjo9tNGd_lSjOMBjgkk&oh=00_AYDM1C4WUZA34WQtNO3DYuOS6okPJPBalubaLHVRTbFFXQ&oe=675C65AC",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469876079_2046795329115129_1980619493350967806_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFAE5JfutVcxlUI_3N__yJN6H9b-8I9XU3of1v7wj1dTXdUGw4TUvsvZA4RgrB6CNoM4lvm-bkAtNkVQBG7jK9M&_nc_ohc=qCg6v2wEba8Q7kNvgEflcai&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=ALLdWc_5G3prfhFd29Xx4nz&oh=00_AYAyd6QGP2PgYyW0zfyj_km1wZ-pMlEZcBdTrv7IK1DoUQ&oe=675C3B3B",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469552188_2046795432448452_4439633450469310478_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGVPuhg7ZIszzqtzB1ayVLxvuM09oNJ92y-4zT2g0n3bJy-SsA1LQRLdBSWIkXqH4F0Wpa-cSOzrSzGQfcUg7iC&_nc_ohc=lUK_kg0DLFcQ7kNvgHYD96C&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A_E-OQREXXl8BlgUQo1hGUZ&oh=00_AYA7A1k_ywJO5qz92xrBCQ0FDBjTeGJeeaZEhKik8bvXKA&oe=675C48A7",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469319529_2046795435781785_2207525039584271944_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGjRGDz52cMtC-mHJPMTakukhJrXbunpX6SEmtdu6elfnfX775jjFL4xX89MNXJgbpCNEuw-VTDwp-TExbKpvei&_nc_ohc=o2LUG3JFoNoQ7kNvgGQtx5P&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AZ4qFkv8ND49mRcDQyl-4vU&oh=00_AYB8Gefs9-IAZkdNyErdIv87BlVZNBoiPc3YdojRjW8ojg&oe=675C420C",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469394185_2046795509115111_6109303721491352848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEh1qhuL5l1NQsCi9GNg1dwTyUy2yJRPX1PJTLbIlE9fd6yDnwRVSmK3HIlb-wakAYe5uPSxUolx8au0FhdSPQw&_nc_ohc=31ElOPe-MJ8Q7kNvgH2n0tG&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=ArnxnwUBQ8I2TxKlCkK7ILR&oh=00_AYCG37lbg3rGCAKKKPZsViVIqAo3d_r8CX6rDRz2NC0l8A&oe=675C4E08",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469482531_2046795515781777_7927809602107339672_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHWVNj-8I_TUk0G-eXKh2Huq8Lt9_utJNqrwu33-60k2u-xr7YIidi6F2MCH0oewer0COfvZzC0XsJZKqm40inN&_nc_ohc=yxyHM90BtmoQ7kNvgEJ_QJR&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=Ah3tfWWLw_HM_JcuMkDEbFB&oh=00_AYAmd42dnrzhncy4r390f_VJnVDlmr-FbJ-CyC2pRo4jcQ&oe=675C37CD",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/451197692_2023041158145761_7023336586557596227_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHci063sG_Uxf6FO80I7YYHVfmY45V-uoBV-ZjjlX66gLyrnuiXz2QFwyo32p_UtBdatFaluWFm1kbHD03kdoai&_nc_ohc=X87P1Y6l38kQ7kNvgFayz5J&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AEuqmerJbxiWlQbwK_-6xko&oh=00_AYD2Lh_qOSEeM8KoXGravpL9rG77qkewK3DrC7q7maHJTA&oe=675C4D1D",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469364389_2046795722448423_4062624762062608833_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFRtUEwSHVcEiQyyGJaOSFzbWDTpE4LUORtYNOkTgtQ5Kq424BmwgnnuxrYmgcrPm1iUDu7M7diWFq-nCrpwlzC&_nc_ohc=8L8qDFuG_gQQ7kNvgFtTLl-&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A1Csr8Ev9tPXhdOApSu81JK&oh=00_AYA2J3mD8DYDDRR3YGS3_6tiU88pgwcoeqofZDXTsG0CaQ&oe=675C502D",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469709029_2046795725781756_7116283683557200289_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHYJdoUOpmRNwbazfhbcliI6w4Dli49qyLrDgOWLj2rIttE7V3iovnIM9HxPWnKJMm35C8WsLwrqkS0ZSoxqZld&_nc_ohc=pe9Rpd16-sIQ7kNvgF1Nj69&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AfcFOyZqOyYbi7gxXbHlXwZ&oh=00_AYDVyZ2kSACZp2I6OOBRQrWeGhutH3KXgp-Zqf_HcgRQ3A&oe=675C39DF",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469325874_2046795752448420_3043612557940457615_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEf0HKN-_plH7J1xB6Eh1nvncuC_QwOXSOdy4L9DA5dI3g0ilNu1o4ScWhPXvyTjjt6zalO0QHYwg8Q3A4b0A66&_nc_ohc=DP968kthyAMQ7kNvgGhdrBz&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A0ZCj315veh3SOktYCOhwFY&oh=00_AYBkCpiy_XSZaCWQQrpzoY4nFV4DSUDAxDy5-b0t34RDlA&oe=675C40A9",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469483131_2046795812448414_3724576024480483323_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHbusmlskEMS2fAEZ8cine-1l5YphaueK_WXlimFq54r1MyfruJTFiTepU_DJ52dfRpr6jX__9q6O88w0Ttsjwi&_nc_ohc=12BbA1wrFYsQ7kNvgGGEAao&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A6duwHvqsJIGdlR94t-AXKF&oh=00_AYBDryi0BomldSbrrkN57V0eapRPHFpXVwzkvVkGEAv-5A&oe=675C600D",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469403966_2046795839115078_6248700052032473092_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFtGkdZd2Wnn-3pOTN0uRFRy91qOWqMyqjL3Wo5aozKqNq3EdGL4MZl7gPVT3CcydpypIQxdvDbh4qCzPJfDo3j&_nc_ohc=fbuMG_nUxw0Q7kNvgFFVexb&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AtEtQDzu-EG0pW_AQyGRylO&oh=00_AYCBNaFnsUuqiy0MSDf5mvwM2H8bqyo2mHbp1KjkNb9UzQ&oe=675C5B6C",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/451711422_2023041268145750_7370944444068324651_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4Fi3PD-g1wGj82Ai_ck3_HPfLnyaUSycc98ufJpRLJ3gSSOrgIS9-zq2ptIiinVVteHv9JUzF_uJXEE9nXKLu&_nc_ohc=1PJBRw73JvQQ7kNvgEUMeKf&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=Awj8hs1O_AQEPdAW6mXhGxB&oh=00_AYD9dbeREPBEx3K7Tt5m1i5bkE0ubnAOLWqMbAapVGohjQ&oe=675C6A3E",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/460056510_3888928998096900_8748269986682218256_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE7cPCRhftqukpe-jArrNMclTbGUKg_lFaVNsZQqD-UVj9W0J9d0VQh9a8n3hLj6KUdkEoEF0_-iZCpOqUR8uHT&_nc_ohc=PBP5rUjEjZIQ7kNvgErLCJV&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AexItuvr4Z53WEcGlH2TwIA&oh=00_AYBTFzWg7aTNG6tcfEzegtk4UxXp_arXU5Or2-IgfwhBJA&oe=675C6981",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469551637_2046829479111714_1636662733676408443_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHcmIpppLK7Mbh4iIqdSFdtDNqDmnIC5BUM2oOacgLkFb_WV3zer5NoHbLFaOfyAXA-2gAsoO-zqWVtMLiGOTiX&_nc_ohc=WJyvNQXxwZUQ7kNvgFLHgkH&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AGVoMYQjtR5BU2Dr96alITY&oh=00_AYAZr5K5jnrwG3xHwv1wsD58wZdBR7ozNXniTcW-Cs4Ezw&oe=675C6264",

    ];

    const images2 = [
        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469809811_2046795819115080_2680135542453737040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEKsqn2O99si6yJSOLAKHOef4JG0fVGEKV_gkbR9UYQpdMvb8wyJkJ2MLAjC18TS_5USbUacXfY3UtSLsriXj66&_nc_ohc=JnSqJQUAIw8Q7kNvgGpaZzd&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AtMb0pCLWAJzyqyw2umdgqV&oh=00_AYD54rcJbnA1DjIuZLfSXR5y1MYGPUUxAJvAGTXVEmFdSA&oe=675C64C0",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/468949395_2046795239115138_8432847218022795141_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHQhzlI8PG9Kyj2memXAj9pYFYRp_ssJWJgVhGn-ywlYo8wza2mSG1TMJ3wLihyo9AQS7y951kPkQpIKdnVHeDb&_nc_ohc=qiSTXC-rIr8Q7kNvgG5ugP-&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AtpBym4PJBYerVLr9gouGzf&oh=00_AYBFg5CYjgUiNyztdhm1buGmMRfOLz3aJnJRL6z9eN-U0Q&oe=675C58AD",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469531597_2046795425781786_8388686427948800860_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGu864DRfenkbK1a6BmckzOGTNQ9r9b9R0ZM1D2v1v1HdK3dExRCoUdUqihTxH1iFEqBvsvFu1gzFDIPRQJjeQ2&_nc_ohc=nHepMjzroq4Q7kNvgH3FZi5&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AkF-PK9bFRlEVAhxgElOyLr&oh=00_AYC9rvcDjdbQlc_lQf8wmPB425pDw8gLZkyJdUmu2JXWMg&oe=675C391A",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469595131_2046795549115107_2460293679794467399_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqmloKceXpgwdTz3TmJH55WjFFcBOTzclaMUVwE5PNycHdSEgemDL_wchvxDYesHf2yOX-l71-hQVsg-Y_qNfL&_nc_ohc=pflLagFp4WIQ7kNvgH5pTD1&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AuMVm4lJPLL0Qw3eG84zMbI&oh=00_AYCT_OM34K4LcmMR1ecHhQ3Sn6u5PdOJ871_Ih_KB3gbFw&oe=675C5C1C",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469483196_2046795619115100_6533782156547365150_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEaEirFKhxnXEYij8E_fVoqGR7gqBiPZeQZHuCoGI9l5GsD2aeb5I7dbvONEACR4RY42cdipvilG09Aom-0jNDo&_nc_ohc=LcuhrszwdXUQ7kNvgEk5-jl&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AGDZobK7cxP8a1nP9wJdoW8&oh=00_AYCHUe36Me-PC-J6VF0mZx4QrZacSroBAtGd44S38GhH3g&oe=675C30C0",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469750303_2046795155781813_1735715104036837964_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGlRSlGTEuZhqlSUD6gCaGABCpzym89d8QEKnPKbz13xD82j1DXFL1hSCVBHgzUsmOp-dW5U22yUvGBZLEsk8eI&_nc_ohc=VirZbHF-GOQQ7kNvgGYUMwR&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=APMFvRat06BFO4MvLjZPyWb&oh=00_AYB0G1wDNMb0OkpLlSZefE-wPd3L4bYJpFlhJJtbr911ig&oe=675C7307",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469403318_2046795925781736_7230047828446447030_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFmlGUM45LpsPAdkq5JYi92Rgxk-7zLI7lGDGT7vMsjuSZNls9nfn9RoFUKdb3bspXinylzQfQ7kJPeq7wjNvmd&_nc_ohc=b74gkI1s76EQ7kNvgENpJcU&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A9oQ5Y19ty_JIrTkOq9kQar&oh=00_AYCKttiHIphQ0vNaPy0fLQWrLAlAQNY-k-YGWvYTGBPcrQ&oe=675C6A2C",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469495433_2046795915781737_2110556081821458442_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMVHQQ0dmcuQzqVPTT3l8Py9zdWuLE__rL3N1a4sT_-qEVE_qYNJLkd56RcXePeftl2rrTJ2QuKDLvyWeeq0dL&_nc_ohc=zinlyFOQmMIQ7kNvgF6B6Nc&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=ArHTZsnZQypFQiovA3QSTWm&oh=00_AYCIJf5a3IkrsNHBTA-ZjJjh7Od5WOAd9dfh_taHTyJ76w&oe=675C567C",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469611649_2046795932448402_284904069391803143_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFgm3LqSYeXZgvKdZ0yMwVobL7f7GYpKPhsvt_sZiko-DmaAUs-zY4W1gDbHytVnkke0HhIEq0zGzwhkWvTZuvu&_nc_ohc=3BuB-upNhWMQ7kNvgEii4Ux&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=ABq10UOEVYnxTVB-AfRWqpk&oh=00_AYC8cpBOae6tbaSsmjI4VwHlXGETL9CFR7PF0r8gc7Kv8Q&oe=675C398E",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/449705143_2012077509242126_4795855822604198561_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEOHEq3KPZqQJ7cRlKcqBAa8b3Sal-uApjxvdJqX64CmPPp04HHdsQkX4avrOFKkokwpAObAtKz1Dg7yNBVwVkS&_nc_ohc=4ydrgaXI4-4Q7kNvgG0jWxv&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AL5Qd_b7ajVLb_F9wqjOHC3&oh=00_AYCb_b7gj-Js6BdsxOBRlX31MXD8nyvKBNTbQ16VV2ASRQ&oe=675C474F",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/455182173_2043756879407522_6765904185268511285_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHKPMIZCxDQuze4Nzz-wdsdf0lTUdPhKzN_SVNR0-ErMz9KWRz0HrW3paTemwnnDJeTWrvd85GVJ2w1HP8ZRhQi&_nc_ohc=crFGm5kzlyAQ7kNvgEpivT9&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AkhhbnIl-Iv7kyHNmX-fcX4&oh=00_AYA18HBq40V3S1-RaQabSy961bDofkTEE1FrtQ1G0UmqTA&oe=675C7295",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/451620141_2023041261479084_3212057147180726899_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGckU8HD1ODvHMB1O6AXCMZj5N03SCHY7GPk3TdIIdjsYKriNI7H5H5gPSURCiCMKuSvcM7AA9ZihkA2Cp7u11K&_nc_ohc=YTxSpBEyZtMQ7kNvgE8uK1K&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AObK6CTzlSRtx9L4qTO7P2D&oh=00_AYBzFe2CFvLe96PYFtAa0qOwQTI654fjdUGlpR08583FeQ&oe=675C5AB6",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/451452589_2023041258145751_4456293554177784116_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEX7N8Bs6zprlRVclX9KQNWYGeZhDgrQgBgZ5mEOCtCAMQWswQo1K2LyXEPMPvbBgdy8hEtjvc9madOUmnMya0P&_nc_ohc=jLJqDK7hV3UQ7kNvgGFdmM4&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AN--qmumE3xuAeLmx4AI2Xq&oh=00_AYA0bIEsV5eECIMgu2foRmX3XdFMrKtOJwocQTEpTxcf4w&oe=675C7427",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/451664703_2023041154812428_2574067664496678091_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEW_8s8NLT2z45hYgc0YfbM40o_DcmzL1fjSj8NybMvV6rK9lyiSx3Gaj79pmu3TMOE7tazKOj_hmV4_gyywQ8O&_nc_ohc=ywRWwsI8RY0Q7kNvgEtExT2&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=ADpOyYs9k56mdXYQwt1V80o&oh=00_AYBdFfetn6MUFiUbWXzLAzdUnjoG5SaNocrSQqayoGrucQ&oe=675C45A5",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/469483058_2046796012448394_6780449325276699027_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFu7VqwiFaHIZlgw_go7zClaPTBS_VOKeVo9MFL9U4p_Mn4eP81p988k7QeSl5sDShsL1q6XXv4SAgMt597E1-&_nc_ohc=KApjSZsMj4EQ7kNvgGWjw9a&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AqDuw1PoYPLKgA9iYuhg-KA&oh=00_AYDKKsBe4a0oDR1_UEUmiUG2_4AbqQp7UJH9Xc-Tjg19mg&oe=675C52A3",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.6435-9/51805300_289098148414267_1127423202893496320_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE4uyMs2FWQFzyQfMQVCZ39s0y0k0Tp7QOzTLSTROntA1Sa-Ti0mql1oOeFH_-PBnzF_gr7y7zZrEnO4oYV4_8H&_nc_ohc=3nWxCKsipswQ7kNvgG4D5mE&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A2MIAf5jsVUjzQ-CkhgAiu4&oh=00_AYBuKnM9y0nDFA7aJG2tAxGhS5l0LMVuBL8aVpy0iHHSmQ&oe=677E11B8",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/462626539_8437373636338751_5138573400433128281_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeHTZFY5x1yn6vQG8P2vP3jCiVE0B6o0OZyJUTQHqjQ5nCfvYqAQCIMyptgq-ZPt3QiPjG4GGDUae0fbW9UeuWxw&_nc_ohc=N-6aFOTC_9AQ7kNvgH8rNd6&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=A-e9Zh0yfnfVI4T7sFUrqRF&oh=00_AYAqixjq0Rhl--31oqc8mdIpYmi_Tuv9Ziob4LZfl1oClA&oe=675C740E",

        "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/461560974_8324522497623866_7622669151985102044_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHUHKaJSoBBauaIY48G8QOdijfGujNwQxWKN8a6M3BDFQP-8Ml4ySD8OAM4ED-MD4FggwnmpMe0a69I3Q5UDxEk&_nc_ohc=2XlUSrj_XyoQ7kNvgEtGxyZ&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AuA5EVQDd1mwBs90Hnrs6Wx&oh=00_AYD3MRvh5bs-5epCDs6XlEBRppZzzfB2hZk0n8RJptMT2A&oe=675C71BF",


    ];

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleOutsideClick = (e) => {
        // Cierra el modal si se hace clic fuera de la imagen
        if (e.target.id === "modal") {
            closeModal();
        }
    };

    return (
        <div>
            <div className="bg-cover bg-gray-300 bg-blend-multiply sm:px-12 sm:py-24 py-8">
                <div className="text-center">
                    <h1 data-aos="zoom-in-down" className="sm:text-8xl text-4xl font-bold pb-4">-- Memorias --</h1>
                    <h2 data-aos="zoom-in-up" className="sm:text-3xl text-xl font-bold">Recuerdos de la familia</h2>
                </div>

                {/* Galería 1 */}
                <div data-aos="fade-right" className="grid grid-cols-3 md:grid-cols-3 sm:gap-4 gap-1 mt-8 sm:px-32 px-10">
                    {images1.map((src, index) => (
                        <div key={index}>
                            <img
                                className="h-auto max-w-full rounded-lg cursor-pointer border-2 border-black"
                                src={src}
                                alt={`Image ${index + 1}`}
                                onClick={() => handleImageClick(src)}
                            />
                        </div>
                    ))}
                </div>

                {/* Galería 2 */}
                <div data-aos="fade-right" className="grid grid-cols-3 md:grid-cols-3 sm:gap-4 gap-1 sm:mt-4 mt-1 sm:px-32 px-10">
                    {images2.map((src, index) => (
                        <div key={index}>
                            <img
                                className="h-auto max-w-full rounded-lg cursor-pointer border-2 border-black"
                                src={src}
                                alt={`Image ${index + 1}`}
                                onClick={() => handleImageClick(src)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal para mostrar la imagen seleccionada */}
            {selectedImage && (
                <div
                    id="modal"
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={handleOutsideClick} // Cierra el modal si se hace clic fuera de la imagen
                >
                    <div className="relative max-w-full max-h-full p-4">
                        {/* Botón de "volver" */}
                        <button
                            className="absolute top-6 left-6 text-white bg-black text-2xl px-2 rounded-lg md:text-4xl"
                            onClick={closeModal}
                        >
                            &#8592; {/* Flecha hacia la izquierda */}
                        </button>

                        {/* Imagen seleccionada */}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Memories;
