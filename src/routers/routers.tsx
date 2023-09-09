import { ArticleDetails } from "@/pages/article-details/article-details"
import { Home } from "@/pages/home"
import { Routes, Route } from "react-router-dom"

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ArticleDetails />} />
      <Route />
    </Routes>
  )
}