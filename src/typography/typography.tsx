import { FC, HTMLAttributes, ReactChild } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  variant?: string;
}

// const variantMap = {
//   h1: ({ children }) => (
//     <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-default-text">
//       {children}
//     </h1>
//   ),
//   h2: ({ children }) => (
//     <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-default-text">
//       {children}
//     </h2>
//   ),
//   h3: ({ children }) => (
//     <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-default-text">
//       {children}
//     </h3>
//   ),
//   h4: ({ children }) => (
//     <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-default-text">
//       {children}
//     </h4>
//   ),
//   h5: ({ children }) => (
//     <h5 className="text-2xl font-normal leading-normal mt-0 mb-2 text-default-text">
//       {children}
//     </h5>
//   ),
//   h6: ({ children }) => (
//     <h6 className="text-1xl font-normal leading-normal mt-0 mb-2 text-default-text">
//       {children}
//     </h6>
//   ),
//   body: ({ children }) => (
//     <p className="text-base font-light leading-relaxed mt-0 mb-4 text-default-text">
//       {children}
//     </p>
//   ),
// };

// export const Typography: FC = ({ children, variant = 'body1' }) => {
// const Variant = variantMap[variant as string];

// return <Variant>{children}</Variant>;
// };
export const Typography: FC<Props> = ({ children, variant = 'body1' }) => {
  console.log(children, variant);
  return null;
};
