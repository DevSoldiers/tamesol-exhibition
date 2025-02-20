export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  price: string;
  description: string[];
  descriptionTitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  width?: number;
  height?: number;
}
