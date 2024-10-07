export interface Images {
    src: string,
    label: string
}

export const ImageOptions = (): Images[] =>{
    return [
        {src: "src/assets/default.svg", label: "Default"},
        {src: "src/assets/figure-1.jpeg", label: "Girl-1"},
        {src: "src/assets/figure-2.jpeg", label: "Girl-2"},
        {src: "src/assets/figure-3.jpeg", label: "Girl-3"},
        {src: "src/assets/figure-4.jpeg", label: "Boy-1"},
        {src: "src/assets/figure-5.jpeg", label: "Boy-2"},
        {src: "src/assets/figure-6.jpeg", label: "Boy-3"},
       
    ]
}