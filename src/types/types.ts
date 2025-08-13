export type ThemeContextType = {
  theme: "dark" | "light"
  toggleTheme: () => void
}

export type Tools = {
  id: number
  name: string
  description: string
  icon: string
  tag: string
}

export type Features = {
  id: number
  title1: string
  description1: string
  title2: string
  description2: string
  buttonText: string
  reverse: boolean
  imageDark: string
  imageLight: string
}

export type Brands = {
  id: number
  name: string
  icon: string
}

export type Testimonials = {
  id: number
  avatar: string
  name: string
  designation: string
  companyLogo: string
  message: string
}
