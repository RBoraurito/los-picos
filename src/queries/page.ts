import groq from "groq";

export const getAllPagesQuery = groq`*[_type == "page"]{
  _id,
  slug,
}`;

export const getPageQuery = groq`*[_type == "page" && slug == $slug][0]{
  _id,
  title,
  slug,
  sections[]{
    _id,
    title,
    slug,
    ...,
    "id": _key
  }
}`;
