export interface ContentProps {
  formData: Record<string, any>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface Chapter {
  id: number;
  title: string;
  shortTitle: string;
  content: (props: ContentProps) => JSX.Element;
}