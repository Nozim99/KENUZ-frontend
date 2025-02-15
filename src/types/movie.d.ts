export interface IMovieData {
    title: string;
    _id: string;
    description: string;
    keywords?: string[];
    category: string;
    type: string;
    video_url?: string;
    episodes?: string[];
    country?: string;
    language?: string;
    year?: number;
    genre?: string[];
    age_limit?: number;
    views?: number;
    createdAt: Date;
    updateAt: Date;
    image: {
        url: string;
        cloudId: string;
    },
    __v: number;
}