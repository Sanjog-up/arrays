type IImage= {
    _id: string;
    path: string;
    public_id: string

}

export type TCategory = {
    name: string;
    category: string;
    description?: string;
    image: IImage
}


