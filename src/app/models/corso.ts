export interface Corso {
    id: number;
    titolo: string;
    durata: number;
    costo: number;
    docente: string;
    data_partenza: string;
    n_partecipanti?: number;
}

export const corsi: Corso[] = [
    {
        id: 1,
        titolo: "Corso Front End Development",
        durata: 450,
        costo: 3400,
        docente: "Mario Rossi",
        data_partenza: "17 aprile 2023",
        n_partecipanti: 17,
    },
    {
        id: 2,
        titolo: "Corso Full Stack Development",
        durata: 600,
        costo: 4400,
        docente: "Luigi Bianchi",
        data_partenza: "17 aprile 2023",
        n_partecipanti: 20,
    },
    {
        id: 3,
        titolo: "Corso Java Web Developmer",
        durata: 350,
        costo: 2600,
        docente: "Giuseppe Verdi",
        data_partenza: "17 aprile 2023",
        n_partecipanti: 15,
    },
    {
        id: 4,
        titolo: "Coding Days",
        durata: 6,
        costo: 0,
        docente: "Francesco Galli",
        data_partenza: "9 maggio 2023",
        n_partecipanti: 25,
    },
    {
        id: 5,
        titolo: "Corso HTML5 e CSS3",
        durata: 50,
        costo: 520,
        docente: "Silvano Azzurro",
        data_partenza: "17 aprile 2023",
        n_partecipanti: 11,
    },
    {
        id: 6,
        titolo: "Corso NodeJS + Express + MongoDB",
        durata: 50,
        costo: 650,
        docente: "Marco Neri",
        data_partenza: "26 aprile 2023",
        n_partecipanti: 9,
    },
    {
        id: 7,
        titolo: "Corso Java",
        durata: 42,
        costo: 520,
        docente: "Simone Turchese",
        data_partenza: "27 aprile 2023",
    },
    {
        id: 8,
        titolo: "Corso Javascript",
        durata: 50,
        costo: 650,
        docente: "Enrico Grigi",
        data_partenza: "18 maggio 2023",
        n_partecipanti: 15,
    },
    {
        id: 9,
        titolo: "Corso Java Backend",
        durata: 56,
        costo: 650,
        docente: "Edoardo Rosa",
        data_partenza: "22 maggio 2023",
    },
    {
        id: 10,
        titolo: "Corso Spring Framework",
        durata: 42,
        costo: 520,
        docente: "Marco Neri",
        data_partenza: "19 giugno 2023",
        n_partecipanti: 7,
    },
]