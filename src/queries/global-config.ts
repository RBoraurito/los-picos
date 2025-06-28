import groq from "groq";

export const globalConfigQuery = groq`*[_type == 'globalConfig'][0]`;
