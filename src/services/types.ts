export interface Board {
    id: number;
    title: string;
    content: string;
    writer: string;
    createdAt: string;
    updatedAt: string;
  }
export interface BoardForm {
    title: string;
    content: string;
    writer: string;
  }

export interface Comment {
    id: number;
    content: string;
    writer: string;
    createdAt: string;
    updatedAt: string;
}
export interface BoardDetailType extends Board {
    comments: Comment[];
}

export interface BoardType {
    id: number;
    name: string;
    description: string;
  }
export type BoardListType = BoardType[];

export interface PostType {
    id: number;
    title: string;
    content: string;
    // author: string;
    // createdAt: string;
    // updatedAt: string;
  }
