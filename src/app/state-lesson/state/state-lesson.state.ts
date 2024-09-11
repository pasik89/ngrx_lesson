export interface LessonState {
  menu: {
    name: string;
    url: string;
  } | null;
  isParagraphRed: boolean;
}

export const initState: LessonState = {
  menu: null,
  isParagraphRed: false,
}
