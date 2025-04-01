export const inlineMarkup = Object.entries({
  p: ["text-dark-600", "mb-4"],
  a: ["text-primary-600", "underline", "no-underline-hover"],
  h1: ["text-pretty", "text-4xl", "font-semibold", "text-dark-600"],
  h2: ["text-pretty", "text-3xl", "font-semibold", "text-dark-600"],
  h3: ["text-pretty", "text-2xl", "font-semibold", "text-primary-600"],
  h4: ["text-pretty", "text-xl", "font-semibold", "text-primary-600"],
  h5: ["text-pretty", "text-lg", "font-semibold", "text-primary-600"],
  h6: ["text-pretty", "text-base", "font-semibold", "text-primary-600"],
}).reduce((acc, [tag, classes]) => {
  const formattedClasses = classes.map((c) => `[&_${tag}]:${c}`);
  return acc + formattedClasses.join(" ") + " ";
}, "");

export const inlineMarkupBgSecondary = Object.entries({
  p: ["text-neutral-50", "mb-4"],
  a: ["text-primary-600", "underline", "no-underline-hover"],
  h1: ["text-pretty", "text-4xl", "font-semibold", "text-dark-600"],
  h2: ["text-pretty", "text-3xl", "font-semibold", "text-dark-600"],
  h3: ["text-pretty", "text-2xl", "font-semibold", "text-primary-600"],
  h4: ["text-pretty", "text-xl", "font-semibold", "text-primary-600"],
  h5: ["text-pretty", "text-lg", "font-semibold", "text-primary-600"],
  h6: ["text-pretty", "text-base", "font-semibold", "text-primary-600"],
}).reduce((acc, [tag, classes]) => {
  const formattedClasses = classes.map((c) => `[&_${tag}]:${c}`);
  return acc + formattedClasses.join(" ") + " ";
}, "");
