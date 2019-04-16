import axios from 'axios';

export function getAllPlans() {
    return axios.get("/api/plans")
}

export function addPlan(plan) {
    return axios.post("/api/plans", plan)
}

export function deletePlanByID(id) {
    return axios.delete(`/api/plans/${id}`)
}