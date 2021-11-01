export interface ShadowOptions {
    color: string
    offsetX: number
    offsetY: number
    blur: number,
    spread: number,
    position: string|null,
}

export interface boxShadow{
    shadowOptionsList: Array<ShadowOptions>

}
