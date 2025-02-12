export interface IEpisode {
    episode: {
        episode_number: number;
        video_url: string;
        series: string;
        _id: string;
        title?: string;
        description?: string;
        duration?: number;
        keywords?: string[];
        createdAt: Date,
        updatedAt: Date,
        __v: number;
    },
    series: {
        _id: string;
        image: {
            url: string;
            cloudId: string;
        };
        title: string;
        description: string;
        keywords?: string[];
        category: string;
        type: 'series' | 'movie',
        video_url?: string;
        country?: string;
        language?: string;
        year?: number;
        genre?: string[];
        age_limit?: number;
        createdAt: Date,
        updatedAt: Date,
        __v: number;
    },
    total_episode: number;
}