export interface Movie {
  id: number;
  title: string;
  year: number;
  isTrending: boolean;
  isBookmarked: boolean;
  category: 'Movie' | 'TV Series';
  rating: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
}