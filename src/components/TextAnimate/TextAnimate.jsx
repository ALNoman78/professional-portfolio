import ScrollBaseAnimation from '../core/scroll-text-marque'

const Index = () => {
    return (
        <div className="h-[500px] grid place-content-center">
            <ScrollBaseAnimation
                delay={500}
                baseVelocity={-3}
                className="font-bold tracking-[-0.07em] leading-[90%] text-xl"
            >
                HTML , CSS , JavaScript , REACT  JS , TailwindCSS , daisyUi , Firebase
            </ScrollBaseAnimation>
            <ScrollBaseAnimation
                delay={500}
                baseVelocity={3}
                className="font-bold tracking-[-0.07em] leading-[90%] text-xl mt-4"
            >
                Share it if you like it
            </ScrollBaseAnimation>
        </div>
    );
};

export default Index;
