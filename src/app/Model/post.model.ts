export interface Post {
    imageUrl: string[];
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  export interface Comment  {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  export interface PhotoList {
    postId: number;
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  export interface Album {
    userId: number;
    id: number;
    title: string;
  }

  export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: false;
  }

  export interface User {
    userId: number;
    id: number;
    title: string;
    completed: false;
  }