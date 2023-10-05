import React, { useCallback } from "react";
import "../styles/Timeline.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import timelineParticlesConfig from "../ts-particles-config-files/timeline-particles-config";

function Timeline() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        // <section id="timeline">
        //     <Particles
        //         id="timeline-ts-particles"
        //         init={particlesInit}
        //         options={timelineParticlesConfig}
        //     ></Particles>
        //     <div className="single-timeline">
        //         <h1 className="inshaallaah">Inshaallaah ...</h1>

        //         <div
        //             className="wrapper"
        //             data-aos="fade-up"
        //             data-aos-delay="100"
        //         >
        //             <div className="content">
        //                 <h1>Engagement Ceremony</h1>
        //                 <p>
        //                     On Thursday, 13<sup>th</sup> October, 2023,
        //                     <br />
        //                     24<sup>th</sup> Zil-Hajjah, 1445 Hijri,
        //                     <br />
        //                     After Namaaz -e- Zohar,
        //                     <br />
        //                     Time: 02:00 PM.
        //                 </p>
        //                 <h2>Venue:</h2>
        //                 <p>
        //                     International Function Hall,
        //                     <br /> 3<sup>rd</sup> road, SKD Colony,
        //                     <br /> Adoni.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section id="timeline">
            <Particles
                id="timeline-ts-particles"
                init={particlesInit}
                options={timelineParticlesConfig}
            ></Particles>
            <div className="multi-timeline">
                <h1 className="inshaallaah">Inshaallaah ...</h1>
                <div className="wrapper">
                    {/* shukrana included */}
                    {/* <>
                        <div className="row">
                            <div className="col-lg-6 left" data-aos="fade-down">
                                <h1>Shukrana</h1>
                                <p>
                                    On Thurday, 20<sup>th</sup> October, 2023.
                                    <br />
                                    01<sup>st</sup> Rabi-us-Sani, 1445
                                    Hijri,
                                    <br />
                                    Time: 08:30 PM.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right"
                                data-aos="fade-down"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Friday, 21<sup>st</sup> October, 2023,
                                    <br />
                                    02<sup>nd</sup> Rabi-us-Sani, 1445
                                    Hijri,
                                    <br />
                                    After Namaz -e- Jumaah,
                                    <br /> Time: 01:30 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    MAsjid -e- Shekhan,
                                    <br /> Near Yemmiganur By-pass Road,
                                    <br /> Tirumala Nagar,
                                    <br /> Adoni.
                                </p>

                                <h2>Lunch Follows:</h2>
                                <p>
                                    Roshan Garden,
                                    <br /> Near Art's College,
                                    <br /> Yemmiganur Road,
                                    <br /> Tirumala Nagar,
                                    <br /> Adoni.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>

                                <p>
                                    On Sunday, 23<sup>rd</sup> October, 2023,
                                    <br />
                                    04<sup>th</sup> Rabi-us-Sani, 1445
                                    Hijri,
                                    <br />
                                    Time: 02:00 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    Imperial Garden Convention Hall,
                                    <br /> Sunkesula Road,
                                    <br /> Kurnool.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                        </div>
                    </> */}
                    {/* shukrana excluded */}
                    <>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Wednesday, 18<sup>th</sup> October, 2023,
                                    <br />
                                    02<sup>nd</sup> Rabi-us-Sani, 1445 Hijri,
                                    <br />
                                    Time: 12:30 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    Roshan Garden,
                                    <br /> Arts College Road,
                                    <br /> Adoni.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>
                                <p>
                                    On Thurday, 19<sup>th</sup> October, 2023,
                                    <br />
                                    03<sup>rd</sup> Rabi-us-Sani, 1445 Hijri,
                                    <br />
                                    Time: 02:00 PM.
                                </p>
                                <h2>Venue:</h2>
                                <p>
                                    Urdu Ghar, Ganjalla Road,
                                    <br /> Near Aksa Masjid,
                                    <br /> Yemmiganur.
                                </p>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
