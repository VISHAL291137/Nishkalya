export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
  techStack?: string[];
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export type GalleryCategory = 'All' | 'Icons' | 'Products' | 'Projects';

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: GalleryCategory | string;
}

export enum SectionType {
  ABOUT = 'ABOUT',
  HIGHLIGHTS = 'HIGHLIGHTS',
  GALLERY = 'GALLERY',
  PROJECTS = 'PROJECTS'
}