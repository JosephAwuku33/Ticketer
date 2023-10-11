import IEvents from "../types/Event"

export const events: IEvents[] = [
    {
        id: 1,
        title: "Rapperholic Concert",
        imgUrl:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        location: "Independence Square",
        headline_artist: "Sarkodie",
        payment: {
            Regular: 200,
            VIP:400,
            VVIP:500,
        },
        date:"28th December 2023",
        details:"Rapperholic 2022 ( Rapperholic X) is the 10th Edition of Sarkodie's Annual Music Concert. Sarkodie brings together his friends from all over the world to party in Ghana on Christmas Day every year as they jam to some of their great hits and join him on stage to perform some of his biggest tracks on his albums. This year marks 10 years of the Rapperholic Concert and promises to be the biggest ever.        "
    },

    {
        id: 2,
        title: "Ashiaman to the World",
        location: "Ashiaman Park",
        imgUrl:"https://images.unsplash.com/photo-1501527459-2d5409f8cf9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        headline_artist: "Stonebwoy",
        payment: {
            Regular: 50,
            VIP:100,
            VVIP:150,
        },
        date:"25th December 2023",
        details:"After rocking major stages in different cities this summer, Stonebwoy has returned home to host his annual “Ashaiman to the World” concert.On September 3, 2022, Ashaiman will witness greatness as their beloved son, Stonebwoy takes the stage to do what he does best.This years’ event promises to be exhilarating as the BHIM President has announced a series of activities ahead of the festival."
    },

    {
        id: 3,
        title: "Reign Concert",
        imgUrl:"https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        location: "Accra Sports Stadium",
        headline_artist: "Shatta Wale",
        payment: {
            Regular: 200,
            VIP:600,
            VVIP:800,
        },
        date:"10th October 2023",
        details:"Shatta Wale's Reign Concert is a highly anticipated event in the Ghanaian music calendar. The concert is organized to celebrate the release of Shatta Wale's album titled Reign. The Reign album was a significant milestone for Shatta Wale and received attention not only in Ghana but also in other parts of Africa.The concert was characterized by electrifying performances, often featuring guest appearances from other prominent artists. It was an event that drew thousands of fans and created a memorable experience for those in attendance"
    },

    {
        id: 4,
        title: "High Grade Concert",
        location: "National Theater",
        imgUrl:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        headline_artist: "Samini",
        payment: {
            Regular: 10,
            VIP:20,
            VVIP:50,
        },
        date:"12th November 2023",
        details:"The High Grade Concert is a concert held to commerate the milestones and achievements of the self acclaimed Dancehall Grandfather of the country Samin with many other hit artists from his record label movement HIGH GRADE"
    },
];