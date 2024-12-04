import { ProgramDetailCard } from "@/modules/admision";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log('id', id);

    return (
        <>
            <section className='h-[60vh] flex justify-start items-center bg-primary-900'>
                <div className='container mx-auto'>
                    <ProgramDetailCard />
                </div>
            </section>
        </>
    )
}



