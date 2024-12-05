import { TabContent } from "@/components/app";
import { AplicationCard, PostulacionCard, PostulationDetailCard, ProgramDetailCard } from "@/modules/admision";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log('id', id);

    return (
        <>
            <section className='h-[70vh] flex justify-start items-center bg-primary-900'>
                <div className='container mx-auto'>
                    <ProgramDetailCard />
                </div>
            </section>
            <section className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 py-6 lg:py-12">
                    {/* Panel principal */}
                    <section className="flex-1 bg-white shadow-lg p-6">
                        {/* Tabs */}
                        <TabContent
                            titleRight="Información general"
                            right={
                                < PostulationDetailCard />
                            }
                            titleLeft="Plan de estudios"
                            left="sad"
                        />

                    </section>

                    {/* Panel lateral */}
                    <section className="w-full lg:w-96 space-y-6">
                        <PostulacionCard />

                        <AplicationCard />
                    </section>
                </div>
            </section>
        </>
    )
}



