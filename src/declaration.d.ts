declare module '*.mp3'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.svg'
declare module '*.module.*'
declare module '*.css'
declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module '*.scss' {
    const scss: string;
    export default scss
}
