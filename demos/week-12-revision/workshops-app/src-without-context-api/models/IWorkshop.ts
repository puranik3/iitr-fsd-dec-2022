interface IWorkshop {
    name: string,
    category: "frontend" | "backend" | "database" | "language" | "devops" | "mobile",
    id: number,
    description: string,
    startDate: string,
    endDate: string,
    time: string,
    location: {
        address: string,
        city: string,
        state: string
    },
    modes: {
        inPerson: boolean,
        online: boolean
    },
    imageUrl: string
}

export default IWorkshop;