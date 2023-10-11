interface IEvents {
    id: number;
    imgUrl: string;
    title: string;
    location: string;
    headline_artist: string;
    payment: {
        Regular: number;
        VVIP: number;
        VIP: number;
    };
    details: string;
    date: string;
}

export default IEvents;