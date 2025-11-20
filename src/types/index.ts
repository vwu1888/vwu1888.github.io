export interface Project {
  id: string
  featured: boolean
  tag?: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  note?: string
  imageSrc?: string
  subsections?: ProjectSubsection[]
  imagePosition?: 'left' | 'right'
}

export interface ProjectSubsection {
  title: string
  description: string
  imageSrc?: string
  imagePosition?: 'top' | 'bottom'
}

export interface ExperienceItem {
  title: string
  company: string
  companyUrl?: string  // Add this optional field
  date: string
  responsibilities: string[]
}
