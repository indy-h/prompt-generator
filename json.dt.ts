// declare module "*.json" {
//   const file: any;
//   export default file;
// }

declare module "*.json" {
  const dictionary: { key: string };
  export default dictionary;
}