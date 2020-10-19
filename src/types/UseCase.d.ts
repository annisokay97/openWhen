export interface UseCase{
    "id": string,
    "name": string,
    "image": string,
    "content": Content
}

type ContentType = "link" | "text";

type Content = {
    type: ContentType,
    title: string,
    link?: string
};