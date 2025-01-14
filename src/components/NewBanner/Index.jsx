import { Sparkles } from './Sparkles';

const Index = () => {
    return (
        <>
            <div className="md:py-12 overflow-hidden bg-black">
                <div className="relative h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
                    <Sparkles
                        density={400}
                        size={1.4}
                        direction="top"
                        className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                    />
                </div>
                <div className="mx-auto -mt-52 w-screen max-w-2xl relative z-10">

                    <div className="bg-white backdrop-blur-lg border border-gray-800 p-4 w-28 h-28 mx-auto grid place-content-center rounded-full">
                        <div className="w-12 h-12 translate-x-1 translate-y-1 mx-auto bg-black rounded-lg before:absolute relative before:w-full before:h-full before:bg-black/50 before:rounded-lg before:-top-2 before:-left-2">
                            <img className='h-12 w-full rounded-lg bg-white' src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/450471296_1779014549258789_671374007755444183_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF68LcwRvpWBLyH20NdSCBo9xu2EKlZZ5D3G7YQqVlnkAWjiGdxVvr1Pn8j0nYWv8imlcehedpheTGqBg_HcnZx&_nc_ohc=9ylcGra0GzEQ7kNvgHrdkuB&_nc_oc=Adgh2KK6NIge7jkk4D5ZIYNT-iYLWAD-A1L3G5f4UAjmT7u1eCjwK-gJblCaEP2LLNE&_nc_zt=23&_nc_ht=scontent.fdac7-1.fna&_nc_gid=AlSVZGK1Ns2Nmdf5y-0b0Ub&oh=00_AYA89tapiud-X86CeuNuVuErlIpHE32ach00mVKz57J45A&oe=678C4C17" alt="" /></div>
                    </div>

                </div>
                <article className="text-white pt-2 w-2/3 mx-auto block text-center z-10 relative">
                    <h1 className="text-center text-2xl md:text-5xl text-white font-medium py-3">
                        Abdullah AL Noman
                    </h1>
                    <p className='text-sm md:text-xl font-medium'>
                    It is a modern and minimalist UI component library designed to
                    simplify the process of building responsive and visually appealing web
                    interfaces.
                    </p>
                </article>
            </div>
        </>
    );
};

export default Index;
