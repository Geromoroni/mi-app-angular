export interface Disk {
  title: string;
  artist: string;
  year: number; 
  description: string;  
  image: string;
  like?: boolean; // Propiedad opcional para indicar si le gusta
}