import { TabContent } from "@/components/app";
import { AplicationCard, PostulacionCard, PostulationDetailCard, ProgramDetailCard } from "@/modules/admision";
import { PlanSection } from "@/modules/admision/components/cards/plant-section";
import { promises as fs } from 'fs';

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log('id', id);
    const file = await fs.readFile(process.cwd() + '/public/api/plans.json', 'utf8');
    const data = JSON.parse(file);

    return (
        <>
            <section className='h-[70vh] flex justify-start items-center bg-primary-900'>
                <div className='container mx-auto'>
                    <ProgramDetailCard />
                </div>
            </section>
            <section className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 py-6 lg:py-12">
                    <section className="flex-1 bg-white shadow-lg p-6">
                        <TabContent
                            titleRight="Información general"
                            right={
                                <PostulationDetailCard />
                            }
                            titleLeft="Plan de estudios"
                            left={
                                <PlanSection data={data.data} />
                            }
                        />

                    </section>
                    <section className="w-full lg:w-96 space-y-6">
                        <PostulacionCard />
                        <AplicationCard />
                    </section>
                </div>
            </section>
        </>
    )
}



