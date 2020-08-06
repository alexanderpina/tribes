export type TopicsRemovePayload = {
  id: number
}

export type TopicsData = {
  categories: [Categories];
  articles: [Articles];
}

export type Categories = {
  id: number
  name: string
}

export type Articles = {
  id: number
  category_id: number
  title: string
  description: string
}