export interface Lessons {
  title: string
  views: number
  tags: string[]
}

const lessons: Lessons[] = [
  {
    title: "Javascript Arrays in Depth - join",
    views: 960,
    tags: ["array", "join"],
  },
  {
    title: "Javascript Arrays in Depth - concat",
    views: 1050,
    tags: ["array", "concat"],
  },
  {
    title: "Javascript Arrays in Depth - slice",
    views: 2503,
    tags: ["array", "slice"],
  },
  {
    title: "Javascript Functions in Depth - bind",
    views: 2500,
    tags: ["functions", "bind"],
  },
]

const minViews = 1000
const searchTerm = "array"

const filterLessons = lessons.filter(
  lesson => lesson.views >= minViews && lesson.tags.indexOf(searchTerm) > -1,
)

export { lessons, minViews, searchTerm, filterLessons }
