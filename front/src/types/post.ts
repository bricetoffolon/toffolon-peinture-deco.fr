interface Image {
    id: number;
    url: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    image: Image[];
}

interface SuccessResponse {
    data: {
        posts: Post[];
    };
}

interface ErrorResponse {
    data: {
        error: string;
    };
}

type PostsApiResponse = SuccessResponse | ErrorResponse | null;
