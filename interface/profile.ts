
type workTypeID = number;

export interface work {
  id: number;
  type_id: workTypeID[];
  name: string;
  url: string;
  img: string;
}

export interface experience {
  id: number;
  name: string;
  url: string;
  time: string;
  img: string;
  jobdesk: string;
}

export interface skill {
  icon: string;
  name: string;
  value: number;
}

export interface profile {
  name: string;
  profession: string;
  works: work[];
  experiences: experience[];
  skills: skill[];
}
