export interface IBallot {
    title: string,
    photoUrL: string,
    id: string
}

export interface ICategory {
    id: string,
    title: string,
    items: IBallot[],
}