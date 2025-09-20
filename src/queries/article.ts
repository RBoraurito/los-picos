import groq from "groq";

export const getArticleQuery = groq`*[_type == "article" && slug == $slug][0]{
  _id,
  title,
  description,
  image,
  tags[],
  publishedAt,
  slug,
  content[]
}`;

export const getAllArticlesQuery = groq`*[_type == "article"]{
  _id,
  slug,
}`;
