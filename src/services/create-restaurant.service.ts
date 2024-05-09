import { CreateRestaurantRepo } from "../repositories/create-restaurant.repo"

export class CreateRestaurantService {
    private createRestaurantRepository: CreateRestaurantRepo 
    constructor() {
        this.createRestaurantRepository = new CreateRestaurantRepo()
    }

    public handle(payload: any) {
        
        const result = this.createRestaurantRepository.create(payload)
    }
}