'use client';

import Image from "next/image";

const team = [
    {
        name: "Yerson Martinez",
        role: "Desarrollador Frontend",
        description: "Apasionado por crear experiencias web únicas.",
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    },
    {
        name: "Jane Doe",
        role: "Diseñadora Gráfica",
        description: "Creativa y amante del diseño visual.",
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    },
    {
        name: "John Smith",
        role: "Gerente de Proyectos",
        description: "Organizado y enfocado en resultados.",
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    },
    {
        name: "Alice Johnson",
        role: "Especialista en Marketing Digital",
        description: "Estratega digital con un enfoque en resultados.",
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    },
    {
        name: "Bob Brown",
        role: "Fotógrafo",
        description: "Capturando momentos únicos con su lente.",
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    },
    {
        name: "Charlie Green",
        role: "Editor de Video",
        description: "Transformando grabaciones en historias visuales.",
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    },
    {
        name: "Diana White",
        role: "Desarrolladora Backend",
        description: "Construyendo la lógica detrás de las aplicaciones.",
        image: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'
    }
];

export default function Team() {
    return (
        <section className="flex flex-col h-full items-center justify-center">
            <h1 className="text-4xl font-bold mb-4 text-[var(--accent)]">Nuestro Equipo</h1>
            <p className="text-lg mb-8">Somos un grupo de individuos apasionados dedicados a hacer la diferencia.</p>

            <div
              id="scrollable"
              className="overflow-section grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8 max-w-6xl w-full overflow-y-auto h-[70vh]">

                {team.map((member, index) => (
                    <div key={index} className="bg-background rounded-lg shadow-lg p-6 flex flex-col items-center">
                        <Image
                            src={member.image}
                            alt={`${member.name}'s picture`}
                            width={100}
                            height={100}
                            className="rounded-full mb-4"
                        />
                        <h2 className="text-xl font-semibold text-[var(--accent)]">{member.name}</h2>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <p className="text-center mt-2">{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}