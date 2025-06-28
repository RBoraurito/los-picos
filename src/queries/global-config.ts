import groq from "groq";

export const globalConfigQuery = groq`*[_type == 'globalConfig' && active == true][0]`;
