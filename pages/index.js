import { HeadInfo } from '../cmps/HeadInfo';
import { IntroSection } from '../cmps/IntroSection';
import { WhatIDo } from '../cmps/WhatIDo';
import { MyProjects } from '../cmps/MyProjects';
import { TechUse } from '../cmps/TechUse';

export default function Home() {
    return (
        <>
            <HeadInfo
                title={'Home Page'}
                des={'this is the main home page'}
                icon={'/favicon-32x32.png'}
            />
            <IntroSection />
            <WhatIDo />
            <TechUse />
            <MyProjects />
        </>
    )
}
