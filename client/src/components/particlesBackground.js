import React, { useEffect, useState } from 'react';
import particlesConfig from '../config/particlesConfig';
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles id="tsparticles" options={particlesConfig} className=" -z-10"/>
    );
};

export default ParticlesBackground;