import type { Page } from "./sanity";

export type SectionType<T extends string> = Extract<NonNullable<Page["sections"]>[number], { _type: T }>;

export type AllSectionTypes = NonNullable<Page["sections"]>[number];

export type SectionTypeNames = AllSectionTypes["_type"];

export function isSectionType<T extends SectionTypeNames>(section: AllSectionTypes, type: T): section is Extract<AllSectionTypes, { _type: T }> {
  return section._type === type;
}
